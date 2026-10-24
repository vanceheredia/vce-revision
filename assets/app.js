/* VCE Revision – static single-page app. All progress lives in this browser's localStorage. */
(() => {
  'use strict';

  const STORE_KEY = 'vce-revision:v1';
  const DAY = 86400000;
  const REVIEW_STEPS = [1, 3, 7]; // days until a missed question comes back, per correct retry
  const LETTERS = ['A', 'B', 'C', 'D', 'E'];
  const app = document.getElementById('app');

  // ---------------------------------------------------------------- storage

  const Store = {
    state: null,
    ok: true,
    load() {
      let s = null;
      try { s = JSON.parse(localStorage.getItem(STORE_KEY)); } catch (e) { this.ok = false; }
      this.state = s && s.version === 1 ? s : { version: 1, sessions: {}, qstats: {}, flags: {} };
    },
    save() {
      try { localStorage.setItem(STORE_KEY, JSON.stringify(this.state)); this.ok = true; }
      catch (e) { this.ok = false; }
      document.body.classList.toggle('store-failed', !this.ok);
    },
  };

  // ---------------------------------------------------------------- helpers

  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const subj = (id) => VCE.subjects[id];
  const q = (s, id) => s.questions[id];
  const topicOf = (s, tid) => s.topics.find((t) => t.id === tid);
  const kkOf = (s, kid) => { for (const t of s.topics) { const k = (t.kk || []).find((x) => x.id === kid); if (k) return { topic: t, kk: k }; } return null; };
  const pct = (x) => Math.round(x * 100);
  const plural = (n, w) => `${n} ${w}${n === 1 ? '' : 's'}`;
  const fmtTime = (ms) => { const neg = ms < 0; ms = Math.abs(ms); const t = Math.floor(ms / 1000); const h = Math.floor(t / 3600); const m = Math.floor((t % 3600) / 60); const sec = t % 60; return (neg ? '+' : '') + (h ? h + ':' + String(m).padStart(2, '0') : m) + ':' + String(sec).padStart(2, '0'); };
  const fmtDate = (t) => new Date(t).toLocaleDateString(undefined, { day: 'numeric', month: 'short', hour: 'numeric', minute: '2-digit' });
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const newId = (p) => p + '-' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);

  // Multiple choice and numeric answers are marked by the app; everything else is self-marked against a guide.
  const auto = (question) => question.type === 'mc' || question.type === 'num';
  const typeRank = (question) => (question.type === 'mc' ? 0 : question.type === 'num' ? 1 : 2);

  function criteriaOf(question) {
    return (question.criteria || []).map((c) => (typeof c === 'string' ? { m: 1, t: c } : c));
  }

  // ------------------------------------------------------------ scoring/stats

  function answerScore(question, ans) {
    if (!ans) return null;
    if (question.type === 'mc') return ans.choice == null ? null : (ans.choice === question.answer ? 1 : 0);
    if (question.type === 'num') return hasText(ans) ? (VCE.checkNum(question, ans.text) ? 1 : 0) : null;
    if (!ans.scored) return null;
    return Math.min(ans.score, question.marks) / question.marks;
  }

  // Score as a fraction within a session: null = not yet marked. After an exam is submitted,
  // anything left blank scores 0; written answers stay null until self-marked. Maths written answers are often
  // done on paper, so ticking "answered on paper" counts as an attempt.
  const hasText = (ans) => !!(ans && (ans.text || '').trim());
  const attempted = (ans) => hasText(ans) || !!(ans && ans.paper);
  function scoreIn(sess, question) {
    const ans = sess.answers[question.id];
    const sc = answerScore(question, ans);
    if (sc != null) return sc;
    if (!sess.submitted) return null;
    return !auto(question) && attempted(ans) ? null : 0;
  }
  function isPending(sess, question) {
    const ans = sess.answers[question.id];
    return !auto(question) && attempted(ans) && !ans.scored && (sess.submitted || ans.checked);
  }

  function recordResult(qid, frac, conf) {
    const st = Store.state.qstats[qid] || { n: 0, box: 0 };
    st.n += 1; st.last = frac; st.at = Date.now(); st.conf = conf || null;
    const good = frac >= 1 && conf !== 'guess' && conf !== 'unsure';
    if (!good) { st.review = true; st.box = 0; st.due = Date.now() + REVIEW_STEPS[0] * DAY; }
    else if (st.review) {
      st.box += 1;
      if (st.box >= REVIEW_STEPS.length) { st.review = false; delete st.due; }
      else st.due = Date.now() + REVIEW_STEPS[st.box] * DAY;
    }
    Store.state.qstats[qid] = st;
  }

  function topicMastery(s, tid) {
    const ids = Object.values(s.questions).filter((x) => x.topic === tid).map((x) => x.id);
    const seen = ids.map((id) => Store.state.qstats[id]).filter(Boolean);
    return { total: ids.length, seen: seen.length, avg: seen.length ? seen.reduce((a, b) => a + b.last, 0) / seen.length : null };
  }

  // Per key-knowledge dot point: how many of its questions have been tried and the mean latest score.
  function kkStats(s) {
    const out = {};
    for (const t of s.topics) for (const k of t.kk || []) out[k.id] = { topic: t, kk: k, total: 0, tried: 0, sum: 0 };
    for (const question of Object.values(s.questions)) {
      const st = Store.state.qstats[question.id];
      for (const kid of question.kk || []) {
        const o = out[kid]; if (!o) continue;
        o.total += 1;
        if (st) { o.tried += 1; o.sum += st.last; }
      }
    }
    for (const o of Object.values(out)) o.avg = o.tried ? o.sum / o.tried : null;
    return out;
  }

  const statusOf = (avg) => avg == null ? ['Not started', ''] : avg >= 0.8 ? ['Strong', 'good'] : avg >= 0.5 ? ['Developing', 'mid'] : ['Focus here', 'low'];

  function reviewQueue(s, dueOnly) {
    const now = Date.now();
    return Object.keys(s.questions).filter((id) => { const st = Store.state.qstats[id]; return st && st.review && (!dueOnly || st.due <= now); });
  }

  // ------------------------------------------------------------ sessions

  function createSession(opts) {
    const sess = Object.assign({ id: newId(opts.kind), createdAt: Date.now(), updatedAt: Date.now(), answers: {}, idx: 0, submitted: false }, opts);
    if (sess.mode === 'exam' && sess.timing) {
      sess.timer = { phase: sess.timing.reading ? 'reading' : 'writing', readingLeft: sess.timing.reading * 60000, writingLeft: sess.timing.writing * 60000, paused: false };
    }
    Store.state.sessions[sess.id] = sess;
    Store.save();
    return sess;
  }

  function paperSession(s, paper, mode) {
    const qids = []; const sections = [];
    for (const sec of paper.sections) { sections.push({ title: sec.title, start: qids.length, count: sec.qids.length }); qids.push(...sec.qids); }
    return createSession({ subject: s.id, kind: 'paper', refId: paper.id, title: paper.title, mode, qids, sections, timing: mode === 'exam' ? { reading: paper.reading, writing: paper.writing } : null });
  }

  function sessionsFor(subjectId, kind, refId) {
    return Object.values(Store.state.sessions)
      .filter((x) => x.subject === subjectId && (!kind || x.kind === kind) && (!refId || x.refId === refId))
      .sort((a, b) => b.updatedAt - a.updatedAt);
  }

  function sessionSummary(s, sess) {
    let got = 0, possible = 0, answered = 0, pending = 0;
    for (const id of sess.qids) {
      const question = q(s, id); const ans = sess.answers[id];
      possible += question.marks;
      if (ans && (ans.choice != null || attempted(ans))) answered++;
      if (isPending(sess, question)) pending++;
      const sc = scoreIn(sess, question);
      if (sc != null) got += sc * question.marks;
    }
    return { got: Math.round(got * 10) / 10, possible, answered, pending, count: sess.qids.length };
  }

  function questionLabel(sess, i) {
    const s = subj(sess.subject); const question = q(s, sess.qids[i]);
    if (sess.sections) {
      const sec = sess.sections.find((x) => i >= x.start && i < x.start + x.count);
      if (question.label) return `${sec ? sec.title.split('–')[0].trim() + ' · ' : ''}Question ${question.label}`;
      return `${sec ? sec.title.split('–')[0].trim() + ' · ' : ''}Question ${i - (sec ? sec.start : 0) + 1}`;
    }
    return `Question ${i + 1} of ${sess.qids.length}`;
  }

  // ------------------------------------------------------------ charts (SVG)

  function chart(spec) {
    const W = 560, H = 300, L = 60, R = 16, T = 20, B = 58;
    const pw = W - L - R, ph = H - T - B;
    const yMax = spec.yMax ?? Math.max(...spec.series.flatMap((x) => x.values)) * 1.1;
    const yStep = spec.yStep ?? yMax / 5;
    const yToPx = (v) => T + ph - (v / yMax) * ph;
    let g = '';
    for (let v = 0; v <= yMax + 1e-9; v += yStep) {
      g += `<line x1="${L}" x2="${W - R}" y1="${yToPx(v)}" y2="${yToPx(v)}" class="cgrid"/><text x="${L - 8}" y="${yToPx(v) + 4}" text-anchor="end" class="tick">${+v.toFixed(2)}</text>`;
    }
    const n = spec.categories.length; const band = pw / n;
    spec.categories.forEach((c, i) => { g += `<text x="${L + band * (i + 0.5)}" y="${T + ph + 18}" text-anchor="middle" class="tick">${esc(c)}</text>`; });
    if (spec.type === 'line') {
      spec.series.forEach((ser, si) => {
        const pts = ser.values.map((v, i) => [L + band * (i + 0.5), yToPx(v)]);
        g += `<polyline points="${pts.map((p) => p.join(',')).join(' ')}" class="line s${si}"/>` + pts.map((p) => `<circle cx="${p[0]}" cy="${p[1]}" r="4" class="dot s${si}"/>`).join('');
      });
    } else {
      const k = spec.series.length; const bw = (band * 0.7) / k;
      spec.series.forEach((ser, si) => ser.values.forEach((v, i) => {
        const x = L + band * i + band * 0.15 + si * bw;
        g += `<rect x="${x}" y="${yToPx(v)}" width="${bw - 2}" height="${T + ph - yToPx(v)}" rx="2" class="cbar s${si}"/>`;
      }));
    }
    g += `<line x1="${L}" x2="${L}" y1="${T}" y2="${T + ph}" class="axis"/><line x1="${L}" x2="${W - R}" y1="${T + ph}" y2="${T + ph}" class="axis"/>`;
    g += `<text x="${L + pw / 2}" y="${H - 8}" text-anchor="middle" class="label">${esc(spec.xLabel || '')}</text>`;
    g += `<text transform="translate(16 ${T + ph / 2}) rotate(-90)" text-anchor="middle" class="label">${esc(spec.yLabel || '')}</text>`;
    const legend = spec.series.length > 1 ? `<div class="legend">${spec.series.map((x, i) => `<span><i class="sw s${i}"></i>${esc(x.name)}</span>`).join('')}</div>` : '';
    return `<figure class="chart">${spec.title ? `<figcaption>${esc(spec.title)}</figcaption>` : ''}<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(spec.title || 'chart')}">${g}</svg>${legend}</figure>`;
  }

  // ------------------------------------------------------------ question rendering

  function stimulusHtml(s, question) {
    if (!question.stimulus) return '';
    const st = s.stimuli[question.stimulus];
    if (!st) return '';
    return `<section class="stimulus">${st.html || ''}${(st.charts || (st.chart ? [st.chart] : [])).map(chart).join('')}${st.source ? `<p class="source">${st.source}</p>` : ''}</section>`;
  }

  function reviseLinks(s, question) {
    const links = (question.kk || []).map((kid) => {
      const f = kkOf(s, kid); if (!f) return '';
      return `<a href="#/s/${s.id}/topic/${f.topic.id}?kk=${kid}">${esc(f.kk.short || f.topic.title)}</a>`;
    }).filter(Boolean);
    return links.length ? `<p class="revise">📖 Revise: ${links.join(' · ')}</p>` : '';
  }

  function optionsHtml(question, ans, locked, reveal) {
    const name = 'opt-' + question.id;
    const cls = (i) => {
      if (!reveal) return ans && ans.choice === i ? 'chosen' : '';
      if (i === question.answer) return 'correct';
      if (ans && ans.choice === i) return 'wrong';
      return '';
    };
    const input = (i) => `<input type="radio" name="${name}" value="${i}" data-act="choose" ${ans && ans.choice === i ? 'checked' : ''} ${locked ? 'disabled' : ''}>`;
    if (question.header) {
      return `<table class="opt-table"><thead><tr><th></th>${question.header.map((h) => `<th>${h}</th>`).join('')}</tr></thead><tbody>${question.options.map((o, i) =>
        `<tr class="${cls(i)}"><td><label class="opt-l">${input(i)}<b>${LETTERS[i]}.</b></label></td>${o.map((c) => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
    }
    return `<div class="options${question.graphs ? ' graphs' : ''}">${question.options.map((o, i) => `<label class="opt ${cls(i)}">${input(i)}<b>${LETTERS[i]}.</b><span>${o}</span></label>`).join('')}</div>`;
  }

  function mcFeedback(s, question, ans) {
    const ok = ans.choice === question.answer;
    const why = question.why || [];
    let h = `<div class="fb ${ok ? 'fb-ok' : ans.revealed && ans.choice == null ? 'fb-info' : 'fb-bad'}"><h4>${ok ? '✓ Correct' : ans.choice != null ? '✗ Not quite' : ans.revealed ? '🧮 Here’s how to solve it' : 'Not answered'}</h4>`;
    if (!ok && ans.choice != null) h += `<p><strong>You chose ${LETTERS[ans.choice]}.</strong> ${why[ans.choice] || ''}</p>`;
    h += `<p><strong>${ok ? 'Why' : 'The correct answer is'} ${LETTERS[question.answer]}${ok ? ' is correct' : ''}:</strong> ${why[question.answer] || ''}</p>`;
    const others = question.options.map((_, i) => i).filter((i) => i !== question.answer && i !== ans.choice && why[i]);
    if (question.working) h += `<details ${ok ? '' : 'open'}><summary>Worked solution, step by step</summary><div class="model">${question.working}</div></details>`;
    if (others.length) h += `<details><summary>Why the other options are wrong</summary>${others.map((i) => `<p><strong>${LETTERS[i]}.</strong> ${why[i]}</p>`).join('')}</details>`;
    return h + reviseLinks(s, question) + '</div>';
  }

  function numFeedback(s, question, ans) {
    const ok = hasText(ans) && VCE.checkNum(question, ans.text);
    const read = hasText(ans) ? VCE.readNumbers(ans.text, question.ordered) : null;
    let h = `<div class="fb ${ok ? 'fb-ok' : ans.revealed && !hasText(ans) ? 'fb-info' : 'fb-bad'}"><h4>${ok ? '✓ Correct' : hasText(ans) ? '✗ Not quite' : ans.revealed ? '🧮 Here’s how to solve it' : 'Not answered'}</h4>`;
    if (hasText(ans) && !read) h += `<p>I couldn't read “${esc(ans.text)}” as a number. Use forms like <code>3/4</code>, <code>-2.5</code>, <code>2sqrt(3)</code>, <code>5pi/6</code>, <code>e^2</code>, and separate several answers with commas.</p>`;
    else if (!ok && read) {
      const diag = (question.wrong || []).find((w) => VCE.checkNum(Object.assign({}, question, { answer: w.v }), ans.text));
      h += `<p><strong>You entered ${esc(ans.text.trim())}.</strong> ${diag ? diag.msg : ''}</p>`;
    }
    h += `<p><strong>${ok ? 'Answer' : 'The correct answer is'}:</strong> ${question.show}</p>`;
    if (ok && question.exact) h += `<p class="muted small">In an exam, give this in exact form as shown.</p>`;
    if (question.solution) h += `<details ${ok ? '' : 'open'}><summary>Worked solution, step by step</summary><div class="model">${question.solution}</div></details>`;
    return h + reviseLinks(s, question) + '</div>';
  }

  // Extended responses with a rubric are marked holistically, like VCAA: a level per criterion.
  // Each criterion is worth up to 2.5 of the 10 marks; levels Low/Medium/High/Very high give 0.5/1.25/2/2.5.
  const RUBRIC_LEVELS = ['Not shown', 'Low', 'Medium', 'High', 'Very high'];
  const RUBRIC_POINTS = [0, 0.5, 1.25, 2, 2.5];
  const rubricScore = (question, levels) => Math.min(question.marks, Math.round((levels || []).reduce((a, l) => a + (RUBRIC_POINTS[l] || 0), 0)));

  function rubricFeedback(s, question, ans, editable) {
    const lv = ans.levels || [];
    let h = `<div class="fb fb-guide"><h4>Marking guide · ${plural(question.marks, 'mark')} · marked holistically</h4>`;
    h += `<p class="muted">VCAA marks this question as a whole against four criteria. For each criterion, pick the level that best matches what you actually wrote, not what you meant.</p>`;
    question.rubric.forEach((levels, i) => {
      h += `<fieldset class="rubric"><legend>${i + 1}. ${s.erCriteria ? s.erCriteria[i] : ''}</legend>`;
      h += [0, 1, 2, 3, 4].map((l) => `<label class="rlevel ${lv[i] === l ? 'on' : ''}"><input type="radio" name="rub-${question.id}-${i}" data-act="rubric" data-i="${i}" data-l="${l}" ${lv[i] === l ? 'checked' : ''} ${editable ? '' : 'disabled'}><strong>${RUBRIC_LEVELS[l]}</strong>${l ? `<span>${levels[l - 1]}</span>` : ''}</label>`).join('');
      h += `</fieldset>`;
    });
    h += `<p class="selfscore">Your mark: <strong>${lv.filter((x) => x != null).length ? rubricScore(question, lv) : 0} / ${question.marks}</strong>${ans.scored ? ' <span class="saved">saved</span>' : ''}</p>`;
    if (editable) h += `<button class="btn" data-act="savemark">${ans.scored ? 'Update my mark' : 'Save my mark'}</button>`;
    h += `<p class="muted small">Approximate: VCAA assessors judge the response as a whole. In 2025 the state average for this question was 4.8 / 10.</p>`;
    const crit = criteriaOf(question);
    if (crit.length) h += `<details><summary>What a very high response would include</summary><ul>${crit.map((c) => `<li>${c.t}</li>`).join('')}</ul></details>`;
    if (question.model) h += `<details><summary>Model answer</summary><div class="model">${question.model}</div></details>`;
    if (question.pitfalls && question.pitfalls.length) h += `<details><summary>Common mistakes that lose marks</summary><ul>${question.pitfalls.map((p) => `<li>${p}</li>`).join('')}</ul></details>`;
    return h + reviseLinks(s, question) + '</div>';
  }

  function writtenFeedback(s, question, ans, editable) {
    if (question.rubric) return rubricFeedback(s, question, ans, editable);
    const crit = criteriaOf(question);
    const marks = ans.marks || [];
    const total = crit.reduce((a, c, i) => a + (marks[i] ? c.m : 0), 0);
    let h = `<div class="fb fb-guide"><h4>Marking guide · ${plural(question.marks, 'mark')}</h4>`;
    h += `<p class="muted">Tick each point your answer clearly covers. Be strict, as an examiner would: it has to be in what you wrote, not just in your head.${s.math ? ' VCAA awards method marks for correct key steps and an answer mark for the final result; equivalent forms are fine.' : ''}</p>`;
    if (question.type === 'er' && s.erCriteria) h += `<details><summary>VCAA criteria for the extended response</summary><ol>${s.erCriteria.map((c) => `<li>${c}</li>`).join('')}</ol></details>`;
    h += `<ul class="checklist">${crit.map((c, i) => `<li><label><input type="checkbox" data-act="selfmark" data-i="${i}" ${marks[i] ? 'checked' : ''} ${editable ? '' : 'disabled'}><span class="m">+${c.m}</span><span>${c.t}</span></label></li>`).join('')}</ul>`;
    h += `<p class="selfscore">Your mark: <strong>${Math.min(total, question.marks)} / ${question.marks}</strong>${ans.scored ? ' <span class="saved">saved</span>' : ''}</p>`;
    if (editable) h += `<button class="btn" data-act="savemark">${ans.scored ? 'Update my mark' : 'Save my mark'}</button>`;
    if (question.model) h += `<details open><summary>${s.math ? 'Worked solution, step by step' : 'Model answer'}</summary><div class="model">${question.model}</div></details>`;
    if (question.pitfalls && question.pitfalls.length) h += `<details><summary>Common mistakes that lose marks</summary><ul>${question.pitfalls.map((p) => `<li>${p}</li>`).join('')}</ul></details>`;
    return h + reviseLinks(s, question) + '</div>';
  }

  function flagHtml(question) {
    const f = Store.state.flags[question.id];
    return `<details class="flag"><summary>${f ? '🚩 Reported' : 'Report a problem with this question'}</summary>
      <textarea data-flagnote rows="2" placeholder="What's wrong? e.g. answer seems incorrect, unclear wording">${esc(f ? f.note : '')}</textarea>
      <button class="btn small" data-act="flag">${f ? 'Update report' : 'Save report'}</button></details>`;
  }

  function numPreview(question, text) {
    if (!(text || '').trim()) return question.format || '';
    const v = VCE.readNumbers(text, question.ordered);
    return v ? `Read as: ${v.map((x) => +x.toPrecision(10)).join(', ')}` : 'Not readable yet: check brackets and symbols';
  }

  function questionCard(s, sess, i) {
    const question = q(s, sess.qids[i]);
    const ans = sess.answers[question.id] || {};
    const exam = sess.mode === 'exam';
    const reading = exam && sess.timer && sess.timer.phase === 'reading';
    const locked = (exam && (sess.submitted || reading)) || (!exam && ans.checked);
    const reveal = (exam && sess.submitted) || (!exam && ans.checked);
    const t = topicOf(s, question.topic);
    let h = `<article class="qcard" data-qid="${question.id}">`;
    const tech = question.tech === 'free' ? '<span class="chip nocalc">No calculator</span>' : question.tech === 'cas' ? '<span class="chip">CAS allowed</span>' : question.tech === 'sci' ? '<span class="chip">Scientific calculator</span>' : '';
    h += `<header class="qhead"><span>${questionLabel(sess, i)}</span><span class="chip">${plural(question.marks, 'mark')}</span>${tech}${t ? `<span class="chip topic">${esc(t.title)}</span>` : ''}</header>`;
    h += stimulusHtml(s, question);
    h += `<div class="stem">${question.stem}</div>`;
    if (question.type === 'mc') h += optionsHtml(question, ans, locked, reveal);
    else if (question.type === 'num') {
      h += `<div class="numrow"><label>${question.prompt || 'Answer'}: <input class="numans" data-act="text" autocomplete="off" spellcheck="false" value="${esc(ans.text || '')}" ${locked ? 'disabled' : ''} placeholder="${reading ? 'Reading time' : 'e.g. 3/4, 2sqrt(3), 5pi/6'}"></label>${question.unit ? ` <span>${question.unit}</span>` : ''}</div>`;
      h += `<p class="muted small numprev">${numPreview(question, ans.text)}</p>`;
    } else if (s.math) {
      h += `<textarea class="answer" data-act="text" rows="${Math.max(3, question.marks + 2)}" ${locked ? 'disabled' : ''} placeholder="${reading ? 'Reading time: you can read but not write yet' : 'Work it out on paper. You can type your final answer or key steps here (optional).'}">${esc(ans.text || '')}</textarea>`;
      if (exam && !sess.submitted && !reading) h += `<label class="cb paper"><input type="checkbox" data-act="paper" ${ans.paper ? 'checked' : ''}> ✍️ I answered this on paper</label>`;
    } else {
      const words = (ans.text || '').trim() ? ans.text.trim().split(/\s+/).length : 0;
      h += `<textarea class="answer" data-act="text" rows="${question.type === 'er' ? 14 : Math.max(4, question.marks * 2 + 1)}" ${locked ? 'disabled' : ''} placeholder="${reading ? 'Reading time: you can read but not write yet' : 'Write your answer here…'}">${esc(ans.text || '')}</textarea>`;
      h += `<p class="muted small wc">${words} words${question.type === 'er' ? ' · aim to address all four criteria in a structured response' : ''}</p>`;
    }
    if (!exam) {
      if (!ans.checked) {
        h += `<div class="controls">`;
        if (question.hint) h += ans.hint ? `<div class="hint">💡 ${question.hint}</div>` : `<button class="btn ghost" data-act="hint">💡 Show hint</button>`;
        h += `<div class="conf"><span class="muted small">How sure are you?</span>${['sure', 'unsure', 'guess'].map((c) => `<button class="pill ${ans.conf === c ? 'on' : ''}" data-act="conf" data-v="${c}">${{ sure: 'Sure', unsure: 'Unsure', guess: 'Guessing' }[c]}</button>`).join('')}</div>`;
        h += `<div class="actions"><button class="btn primary" data-act="check">${auto(question) ? 'Check answer' : 'Show marking guide'}</button>`;
        if (auto(question) && !(ans.choice != null || hasText(ans))) h += `<button class="btn" data-act="reveal">🧮 Show me how to solve it</button>`;
        if (ans.choice != null || attempted(ans)) h += `<button class="btn ghost small" data-act="clearq">↺ Clear answer</button>`;
        h += `</div></div>`;
      } else {
        if (ans.hint && question.hint) h += `<div class="hint used">💡 Hint used: ${question.hint}</div>`;
        h += question.type === 'mc' ? mcFeedback(s, question, ans) : question.type === 'num' ? numFeedback(s, question, ans) : writtenFeedback(s, question, ans, true);
        h += `<button class="btn ghost small" data-act="clearq">↺ Reset this question</button>`;
      }
    } else if (!sess.submitted) {
      if (!reading && (ans.choice != null || attempted(ans))) h += `<div class="actions"><button class="btn ghost small" data-act="clearq">↺ Clear answer</button></div>`;
    } else if (sess.submitted) {
      h += question.type === 'mc' ? mcFeedback(s, question, ans)
        : question.type === 'num' ? numFeedback(s, question, ans) : writtenFeedback(s, question, ans, true);
    }
    h += flagHtml(question);
    return h + '</article>';
  }

  function navigator(s, sess) {
    return `<nav class="qnav" aria-label="Questions">${sess.qids.map((id, i) => {
      const question = q(s, id); const ans = sess.answers[id]; const reveal = sess.submitted || (ans && ans.checked);
      let c = '';
      if (ans && (ans.choice != null || attempted(ans))) c = 'answered';
      if (reveal) { const sc = scoreIn(sess, question); c = sc == null ? (isPending(sess, question) ? 'pending' : c) : sc >= 1 ? 'right' : sc > 0 ? 'part' : 'wrong'; }
      const lab = question.label || (sess.sections ? (i - (sess.sections.find((x) => i >= x.start && i < x.start + x.count) || { start: 0 }).start + 1) : i + 1);
      const sec = sess.sections && sess.sections.find((x) => x.start === i);
      return `${sec && sess.sections.length > 1 ? `<span class="navsec">${esc(sec.title.split('–')[0])}</span>` : ''}<button class="nb ${c} ${i === sess.idx ? 'cur' : ''}" data-act="goto" data-i="${i}" title="${esc(questionLabel(sess, i))}">${lab}</button>`;
    }).join('')}</nav>`;
  }

  // ------------------------------------------------------------ views

  function viewHome() {
    const list = Object.values(VCE.subjects).sort((a, b) => a.order - b.order);
    return `<section class="hero"><h1>VCE Revision</h1><p>Pick a subject. Your progress is saved in this browser. Use <a href="#/data">Backup &amp; settings</a> to keep a copy.</p></section>
      <div class="grid">${list.map((s) => s.ready
        ? `<a class="card subj" href="#/s/${s.id}"><h2>${esc(s.name)}</h2><p>${esc(s.units)}</p><p class="muted small">${Object.keys(s.questions).length} questions · ${plural(s.papers.filter((p) => !p.kind).length, s.math ? 'exam paper' : 'full exam')} · ${plural(s.papers.filter((p) => p.kind).length, s.math ? 'test' : 'unit test')}</p></a>`
        : `<div class="card subj off"><h2>${esc(s.name)}</h2><p>${esc(s.units)}</p><p class="muted small">Coming soon</p></div>`).join('')}</div>`;
  }

  function viewSubject(s) {
    const due = reviewQueue(s, true).length, flagged = reviewQueue(s, false).length;
    let h = `<p class="crumbs"><a href="#/">Home</a></p><h1>${esc(s.name)} <span class="muted">${esc(s.units)}</span></h1>`;
    if (s.intro) h += `<p>${s.intro}</p>`;
    h += `<div class="actions"><a class="btn primary" href="#/s/${s.id}/progress">📈 My progress</a><a class="btn" href="#/s/${s.id}/review">🔁 Review mistakes${flagged ? ` <span class="badge">${due}/${flagged}</span>` : ''}</a><a class="btn" href="#/s/${s.id}/custom">🎯 Build a quiz</a><a class="btn" href="#/s/${s.id}/topics">📖 Revision notes</a>${s.technique ? `<a class="btn" href="#/s/${s.id}/technique">✍️ Exam technique</a>` : ''}</div>`;

    const paperCard = (p) => {
      const sessions = sessionsFor(s.id, 'paper', p.id);
      const open = sessions.find((x) => !x.submitted && x.mode === 'exam');
      const openP = sessions.find((x) => x.mode === 'practice');
      const done = sessions.filter((x) => x.submitted);
      let c = `<div class="card"><h3>${esc(p.title)}</h3><p class="muted small">${esc(p.description || '')}</p><div class="actions">`;
      c += openP ? `<a class="btn" href="#/session/${openP.id}">Continue practice</a>` : `<button class="btn" data-act="startpaper" data-paper="${p.id}" data-mode="practice">Practice mode</button>`;
      c += open ? `<a class="btn primary" href="#/session/${open.id}">Resume timed attempt</a>` : `<button class="btn primary" data-act="startpaper" data-paper="${p.id}" data-mode="exam">Exam mode (timed)</button>`;
      c += `</div>`;
      if (done.length) c += `<p class="small">Past attempts: ${done.slice(0, 3).map((x) => { const sm = sessionSummary(s, x); return `<a href="#/results/${x.id}">${pct(sm.got / sm.possible)}%${sm.pending ? '*' : ''} (${fmtDate(x.submittedAt || x.updatedAt)})</a>`; }).join(' · ')}</p>`;
      return c + `</div>`;
    };
    const exams = s.papers.filter((p) => !p.kind), tests = s.papers.filter((p) => p.kind === 'test'), options = s.papers.filter((p) => p.kind === 'option');
    h += `<h2>Full exams</h2><p class="muted">Practice mode gives hints and checks each answer. Exam mode is timed like the real VCAA exam, with no hints, and is marked at the end. Use ↺ Reset inside a test to start it again.</p><div class="grid">${exams.map(paperCard).join('')}</div>`;
    if (tests.length) h += `<h2>${s.testsTitle || 'Unit tests'}</h2><p class="muted">${s.testsNote || 'Shorter papers (about 50 minutes) on one unit, which suit a weeknight.'}</p><div class="grid">${tests.map(paperCard).join('')}</div>`;
    if (options.length) h += `<h2>${s.optionsTitle || 'Options'}</h2><p class="muted">${s.optionsNote || ''}</p><details class="optlist"><summary>Show all ${options.length} option tests</summary><div class="grid">${options.map(paperCard).join('')}</div></details>`;

    h += `<h2>Practise by topic</h2><div class="topics">`;
    let lastGroup = '';
    for (const t of s.topics) {
      const g = t.group || '';
      if (g !== lastGroup) { h += `<h3 class="tgroup">${esc(g)}</h3>`; lastGroup = g; }
      const m = topicMastery(s, t.id);
      const bar = m.avg == null ? '' : `<div class="bar"><i style="width:${pct(m.avg)}%" class="${m.avg >= 0.8 ? 'good' : m.avg >= 0.5 ? 'mid' : 'low'}"></i></div>`;
      h += `<div class="topic"><div><strong>${esc(t.title)}</strong><div class="muted small">${m.seen}/${m.total} questions tried${m.avg == null ? '' : ` · ${pct(m.avg)}% on latest attempts`}</div>${bar}</div><div class="actions"><button class="btn small primary" data-act="starttopic" data-topic="${t.id}">Practise</button><a class="btn small" href="#/s/${s.id}/topic/${t.id}">Notes</a></div></div>`;
    }
    h += `</div>`;

    const recent = sessionsFor(s.id).filter((x) => x.kind !== 'paper').slice(0, 6);
    if (recent.length) h += `<h2>Recent practice</h2><ul class="recent">${recent.map((x) => { const sm = sessionSummary(s, x); return `<li><a href="#/session/${x.id}">${esc(x.title)}</a> <span class="muted small">${sm.answered}/${sm.count} answered · ${sm.got}/${sm.possible} marks · ${fmtDate(x.updatedAt)}</span></li>`; }).join('')}</ul>`;
    return h;
  }

  function viewTopics(s) {
    let h = `<p class="crumbs"><a href="#/">Home</a> › <a href="#/s/${s.id}">${esc(s.name)}</a></p><h1>Revision notes</h1><p class="muted">Each topic lists the study design's key knowledge word for word, then a short revision note.</p><ul class="toc">`;
    let lastGroup = '';
    for (const t of s.topics) {
      if ((t.group || '') !== lastGroup) { h += `</ul><h3>${esc(t.group)}</h3><ul class="toc">`; lastGroup = t.group || ''; }
      h += `<li><a href="#/s/${s.id}/topic/${t.id}">${esc(t.title)}</a></li>`;
    }
    return h + `</ul>`;
  }

  function viewTopic(s, t, focusKk) {
    let h = `<p class="crumbs"><a href="#/">Home</a> › <a href="#/s/${s.id}">${esc(s.name)}</a> › <a href="#/s/${s.id}/topics">Notes</a></p>`;
    h += `<h1>${esc(t.title)}</h1><p class="muted">${esc(t.group || '')}</p><div class="actions"><button class="btn primary" data-act="starttopic" data-topic="${t.id}">Practise this topic</button></div>`;
    if (t.book) h += `<p class="muted small">📘 ${t.book}</p>`;
    for (const k of t.kk || []) {
      h += `<section class="kk ${k.id === focusKk ? 'focus' : ''}" id="kk-${k.id}"><h2>${esc(k.short)}</h2>${k.text ? `<blockquote><span class="muted small">Study design key knowledge</span><br>${esc(k.text)}</blockquote>` : ''}<div class="note">${k.note || ''}</div></section>`;
    }
    if (t.links && t.links.length) h += `<h2>Further reading</h2><ul>${t.links.map((l) => `<li><a href="${l.url}" target="_blank" rel="noopener">${esc(l.title)}</a></li>`).join('')}</ul>`;
    return h;
  }

  function viewCustom(s) {
    const pool = Object.values(s.questions).filter((x) => x.pool === 'practice');
    return `<p class="crumbs"><a href="#/">Home</a> › <a href="#/s/${s.id}">${esc(s.name)}</a></p><h1>Build a quiz</h1>
      <form class="custom" data-form="custom">
      <fieldset><legend>Topics</legend><p><button type="button" class="link" data-act="alltopics">Select all</button></p>${s.topics.map((t) => `<label class="cb"><input type="checkbox" name="topic" value="${t.id}"> ${esc(t.title)} <span class="muted small">(${pool.filter((x) => x.topic === t.id).length})</span></label>`).join('')}</fieldset>
      <fieldset><legend>Question types</legend>${[['mixed', 'Mixed'], ['mc', 'Multiple choice only'], ['written', 'Short answer only']].map(([v, l], i) => `<label class="cb"><input type="radio" name="type" value="${v}" ${i ? '' : 'checked'}> ${l}</label>`).join('')}</fieldset>
      ${s.math && !s.calc ? `<fieldset><legend>Calculator</legend>${[['any', 'Either'], ['free', 'No calculator (Exam 1 style)'], ['cas', 'CAS allowed (Exam 2 style)']].map(([v, l], i) => `<label class="cb"><input type="radio" name="tech" value="${v}" ${i ? '' : 'checked'}> ${l}</label>`).join('')}</fieldset>` : ''}
      <fieldset><legend>How many</legend>${[10, 20, 30].map((n, i) => `<label class="cb"><input type="radio" name="count" value="${n}" ${i ? '' : 'checked'}> ${n}</label>`).join('')}</fieldset>
      <fieldset><legend>Priority</legend><label class="cb"><input type="checkbox" name="weak" checked> Prefer questions I haven't tried or got wrong</label></fieldset>
      <button class="btn primary" type="submit">Start quiz</button> <span class="muted small" data-msg></span></form>`;
  }

  function viewReview(s) {
    const due = reviewQueue(s, true), all = reviewQueue(s, false);
    let h = `<p class="crumbs"><a href="#/">Home</a> › <a href="#/s/${s.id}">${esc(s.name)}</a></p><h1>Review mistakes</h1>`;
    h += `<p>Questions you got wrong, part-marks on, or guessed come back 1, 3 and 7 days later. Get one right with confidence each time and it leaves the list.</p>`;
    h += `<p><strong>${due.length}</strong> due now · <strong>${all.length}</strong> in the review list altogether.</p><div class="actions">`;
    h += due.length ? `<button class="btn primary" data-act="startreview" data-due="1">Review ${plural(due.length, 'due question')}</button>` : '';
    h += all.length ? `<button class="btn" data-act="startreview" data-due="0">Review all ${all.length} now</button>` : '<p class="muted">Nothing to review yet. Mistakes from practice and exams will appear here.</p>';
    return h + `</div>`;
  }

  function viewTechnique(s) {
    return `<p class="crumbs"><a href="#/">Home</a> › <a href="#/s/${s.id}">${esc(s.name)}</a></p>${s.technique}`;
  }

  function viewSession(sess) {
    const s = subj(sess.subject);
    if (!s) return `<p>Subject not found.</p>`;
    sess.idx = Math.min(Math.max(0, sess.idx || 0), sess.qids.length - 1);
    const exam = sess.mode === 'exam';
    const sm = sessionSummary(s, sess);
    let h = `<p class="crumbs"><a href="#/">Home</a> › <a href="#/s/${s.id}">${esc(s.name)}</a></p>`;
    h += `<div class="sesshead"><div><h1>${esc(sess.title)}</h1><p class="muted small">${exam ? 'Exam mode' : 'Practice mode'} · ${sm.answered}/${sm.count} answered${(sess.submitted || !exam) ? ` · ${sm.got}/${sm.possible} marks${sm.pending ? ` (${sm.pending} written answer${sm.pending === 1 ? '' : 's'} still to self-mark)` : ''}` : ''}</p></div>`;
    if (exam && !sess.submitted) {
      const tm = sess.timer;
      h += `<div class="timer ${tm.phase}"><span id="timer-label">${tm.phase === 'reading' ? 'Reading time' : 'Writing time'}</span> <strong id="timer">${fmtTime(tm.phase === 'reading' ? tm.readingLeft : tm.writingLeft)}</strong>
        <button class="btn small" data-act="pause">${tm.paused ? '▶ Resume' : '⏸ Pause'}</button>${tm.phase === 'reading' ? '<button class="btn small" data-act="skipreading">Start writing</button>' : ''}</div>`;
    }
    h += `</div>`;
    h += `<div class="actions"><button class="btn small ghost" data-act="resetsess">↺ Reset test</button></div>
      <div class="confirm hidden" data-confirm="resetsess"><p>${sess.submitted ? 'Start a fresh attempt of this test? This attempt stays in your progress history.' : 'Clear every answer in this test and start again from Question 1?'} Your overall progress and review list are kept.</p><button class="btn danger" data-act="resetsess-yes">Yes, reset</button> <button class="btn" data-act="resetsess-no">Cancel</button></div>`;
    if (exam && !sess.submitted && sess.timer.paused) h += `<div class="banner">Paused. The clock stops while paused, but the real exam has no pause button.</div>`;
    h += navigator(s, sess);
    h += questionCard(s, sess, sess.idx);
    h += `<div class="pager"><button class="btn" data-act="prev" ${sess.idx === 0 ? 'disabled' : ''}>← Previous</button>`;
    if (exam && !sess.submitted) h += `<button class="btn danger" data-act="submit">Finish &amp; mark exam</button>`;
    else if (sess.submitted || !exam) h += `<a class="btn" href="#/results/${sess.id}">Results summary</a>`;
    h += `<button class="btn" data-act="next" ${sess.idx === sess.qids.length - 1 ? 'disabled' : ''}>Next →</button></div>`;
    if (exam && !sess.submitted) h += `<div class="confirm hidden" data-confirm="submit"><p>Finish now? Multiple-choice answers are marked automatically; you'll then self-mark your written answers with the marking guides.${sm.answered < sm.count ? ` <strong>${sm.count - sm.answered} questions are unanswered.</strong>` : ''}</p><button class="btn danger" data-act="submit-yes">Yes, finish</button> <button class="btn" data-act="submit-no">Keep going</button></div>`;
    return h;
  }

  function viewResults(sess) {
    const s = subj(sess.subject);
    const sm = sessionSummary(s, sess);
    const byTopic = {};
    for (const id of sess.qids) {
      const question = q(s, id); const sc = scoreIn(sess, question);
      const b = byTopic[question.topic] || (byTopic[question.topic] = { got: 0, possible: 0, pending: 0 });
      b.possible += question.marks; if (isPending(sess, question)) b.pending += 1; if (sc != null) b.got += sc * question.marks;
    }
    const wrong = sess.qids.filter((id) => { const sc = scoreIn(sess, q(s, id)); return sc != null && sc < 1; });
    const unmarked = sess.qids.filter((id) => isPending(sess, q(s, id)) || (sess.submitted && !auto(q(s, id)) && attempted(sess.answers[id]) && !sess.answers[id].scored));
    let h = `<p class="crumbs"><a href="#/">Home</a> › <a href="#/s/${s.id}">${esc(s.name)}</a> › <a href="#/session/${sess.id}">${esc(sess.title)}</a></p><h1>Results</h1>`;
    h += `<div class="scorebox"><div class="big">${sm.got}<span>/${sm.possible}</span></div><div>${pct(sm.got / sm.possible)}% of marks${sm.pending ? `<br><span class="warn">${sm.pending} written answer${sm.pending === 1 ? '' : 's'} not self-marked yet, so this total is provisional</span>` : ''}</div></div>`;
    if (sess.sections) {
      h += `<table class="tbl"><tr><th>Section</th><th>Marks</th></tr>${sess.sections.map((sec) => { let g = 0, p = 0; for (let i = sec.start; i < sec.start + sec.count; i++) { const question = q(s, sess.qids[i]); p += question.marks; const sc = scoreIn(sess, question); if (sc != null) g += sc * question.marks; } return `<tr><td>${esc(sec.title)}</td><td>${Math.round(g * 10) / 10} / ${p}</td></tr>`; }).join('')}</table>`;
    }
    h += `<h2>By topic</h2><table class="tbl"><tr><th>Topic</th><th>Marks</th><th></th></tr>${Object.entries(byTopic).map(([tid, b]) => { const t = topicOf(s, tid); const p = b.possible ? b.got / b.possible : 0; return `<tr><td>${t ? `<a href="#/s/${s.id}/topic/${tid}">${esc(t.title)}</a>` : tid}</td><td>${Math.round(b.got * 10) / 10} / ${b.possible}${b.pending ? ' *' : ''}</td><td><div class="bar"><i style="width:${pct(p)}%" class="${p >= 0.8 ? 'good' : p >= 0.5 ? 'mid' : 'low'}"></i></div></td></tr>`; }).join('')}</table>`;
    // Dot points this test exposed as weakest (marked questions only).
    const byKk = {};
    for (const id of sess.qids) {
      const question = q(s, id); const sc = scoreIn(sess, question); if (sc == null) continue;
      for (const kid of question.kk || []) { const b = byKk[kid] || (byKk[kid] = { got: 0, possible: 0 }); b.got += sc * question.marks; b.possible += question.marks; }
    }
    const weakest = Object.entries(byKk).map(([kid, b]) => ({ kid, p: b.got / b.possible, b })).filter((x) => x.p < 0.7).sort((a, b) => a.p - b.p).slice(0, 4);
    if (weakest.length) h += `<h2>Focus next</h2><p class="muted">The study design dot points where this test cost you the most marks.</p>${focusList(s, weakest.map((x) => ({ kid: x.kid, detail: `${Math.round(x.b.got * 10) / 10}/${x.b.possible} marks in this test` })))}`;
    h += `<div class="actions">`;
    if (unmarked.length) h += `<button class="btn primary" data-act="goto-q" data-q="${unmarked[0]}">Self-mark written answers (${unmarked.length})</button>`;
    if (wrong.length) h += `<button class="btn" data-act="retrywrong">Retry the ${plural(wrong.length, 'question')} I lost marks on</button>`;
    h += `<a class="btn" href="#/session/${sess.id}">Go through the questions</a><a class="btn" href="#/s/${s.id}/progress">📈 Overall progress</a></div>`;
    return h;
  }

  function focusList(s, items) {
    return `<ul class="focus">${items.map(({ kid, detail }) => {
      const f = kkOf(s, kid);
      return `<li><div><strong>${esc(f.kk.short)}</strong><div class="muted small">${esc(f.topic.title)} · ${detail}</div></div><div class="actions"><button class="btn small primary" data-act="startkk" data-kk="${kid}">Practise this</button><a class="btn small" href="#/s/${s.id}/topic/${f.topic.id}?kk=${kid}">Revise</a></div></li>`;
    }).join('')}</ul>`;
  }

  function viewProgress(s) {
    const stats = kkStats(s);
    const all = Object.values(stats);
    const triedQs = Object.keys(s.questions).filter((id) => Store.state.qstats[id]);
    const avgAll = triedQs.length ? triedQs.reduce((a, id) => a + Store.state.qstats[id].last, 0) / triedQs.length : null;
    const papers = sessionsFor(s.id, 'paper').filter((x) => sessionSummary(s, x).answered > 0).sort((a, b) => (a.submittedAt || a.updatedAt) - (b.submittedAt || b.updatedAt));
    const submitted = papers.filter((x) => x.submitted);
    let h = `<p class="crumbs"><a href="#/">Home</a> › <a href="#/s/${s.id}">${esc(s.name)}</a></p><h1>My progress</h1>`;
    if (!triedQs.length) return h + `<p>No questions attempted yet. Do a test or some topic practice and your progress will appear here.</p>`;

    h += `<div class="tiles">
      <div class="tile"><div class="big">${triedQs.length}<span>/${Object.keys(s.questions).length}</span></div><div class="muted small">questions attempted</div></div>
      <div class="tile"><div class="big">${pct(avgAll)}<span>%</span></div><div class="muted small">average on latest attempts</div></div>
      <div class="tile"><div class="big">${submitted.length}</div><div class="muted small">timed tests finished</div></div>
      <div class="tile"><div class="big">${reviewQueue(s, false).length}</div><div class="muted small">in the review list (${reviewQueue(s, true).length} due today)</div></div></div>`;

    // Focus areas: weakest tried dot points first, then ones not yet practised.
    const weak = all.filter((o) => o.avg != null && o.avg < 0.75).sort((a, b) => a.avg - b.avg).slice(0, 5);
    const untried = all.filter((o) => o.tried === 0);
    h += `<h2>Focus areas</h2>`;
    h += weak.length ? focusList(s, weak.map((o) => ({ kid: o.kk.id, detail: `${pct(o.avg)}% on ${plural(o.tried, 'question')} tried` })))
      : `<p class="muted">Nothing below 75% so far. Keep going${untried.length ? ' and try the areas below' : ''}.</p>`;
    if (untried.length) h += `<h3>Not practised yet</h3>${focusList(s, untried.slice(0, 6).map((o) => ({ kid: o.kk.id, detail: `${plural(o.total, 'question')} available` })))}${untried.length > 6 ? `<p class="muted small">…and ${untried.length - 6} more (see the full table below).</p>` : ''}`;

    const strong = all.filter((o) => o.avg != null && o.avg >= 0.8 && o.tried >= 2).sort((a, b) => b.avg - a.avg);
    if (strong.length) h += `<h2>Strengths</h2><p>${strong.slice(0, 8).map((o) => `<span class="chip good">${esc(o.kk.short)} · ${pct(o.avg)}%</span>`).join(' ')}</p>`;

    // Test history
    if (papers.length) {
      h += `<h2>Test history</h2><table class="tbl"><tr><th>Test</th><th>Mode</th><th>Date</th><th>Score</th></tr>${papers.slice().reverse().map((x) => {
        const sm = sessionSummary(x.subject ? s : s, x);
        const marked = x.qids.reduce((a, id) => a + (scoreIn(x, q(s, id)) != null ? q(s, id).marks : 0), 0);
        const score = x.submitted ? `${sm.got}/${sm.possible} (${pct(sm.got / sm.possible)}%)${sm.pending ? ' *' : ''}` : `${sm.got}/${marked} on ${sm.answered}/${sm.count} done`;
        return `<tr><td><a href="#/${x.submitted ? 'results' : 'session'}/${x.id}">${esc(x.title)}</a></td><td>${x.mode === 'exam' ? 'Timed' : 'Practice'}</td><td>${fmtDate(x.submittedAt || x.updatedAt)}</td><td>${score}</td></tr>`;
      }).join('')}</table>${submitted.some((x) => sessionSummary(s, x).pending) ? '<p class="muted small">* includes written answers not yet self-marked.</p>' : ''}`;
      if (submitted.length >= 2) h += chart({ type: 'line', title: 'Timed test scores over time (%)', xLabel: 'Attempt', yLabel: '% of marks', yMax: 100, yStep: 20, categories: submitted.map((x, i) => `${i + 1}`), series: [{ name: 'Score', values: submitted.map((x) => { const sm = sessionSummary(s, x); return Math.round((sm.got / sm.possible) * 100); }) }] });
    }

    // Confidence calibration
    const conf = { sure: [0, 0], unsure: [0, 0], guess: [0, 0] };
    for (const id of triedQs) { const st = Store.state.qstats[id]; if (st.conf && conf[st.conf]) { conf[st.conf][0] += 1; conf[st.conf][1] += st.last; } }
    const confRows = Object.entries(conf).filter(([, v]) => v[0]);
    if (confRows.length) {
      const sure = conf.sure[0] ? conf.sure[1] / conf.sure[0] : null;
      h += `<h2>How well do you know what you know?</h2><table class="tbl"><tr><th>When you said…</th><th>Questions</th><th>Average score</th></tr>${confRows.map(([k, v]) => `<tr><td>${{ sure: 'Sure', unsure: 'Unsure', guess: 'Guessing' }[k]}</td><td>${v[0]}</td><td>${pct(v[1] / v[0])}%</td></tr>`).join('')}</table>`;
      if (sure != null && conf.sure[0] >= 5) h += `<p>${sure >= 0.85 ? '✅ When you feel sure, you are usually right. Good self-awareness.' : `⚠️ When you feel sure you score only ${pct(sure)}%. Some "confident" answers are wrong, so re-read the question and check both parts of two-column options before committing.`}</p>`;
    }

    // Full breakdown
    h += `<h2>Every dot point</h2><p class="muted">Based on your latest attempt at each question.</p>`;
    let lastTopic = null;
    h += `<table class="tbl kktbl"><tr><th>Key knowledge</th><th>Tried</th><th>Score</th><th></th></tr>`;
    for (const o of all) {
      if (o.topic !== lastTopic) { h += `<tr class="trow"><td colspan="4"><strong>${esc(o.topic.title)}</strong></td></tr>`; lastTopic = o.topic; }
      const [label, cls] = statusOf(o.avg);
      h += `<tr><td><a href="#/s/${s.id}/topic/${o.topic.id}?kk=${o.kk.id}">${esc(o.kk.short)}</a></td><td>${o.tried}/${o.total}</td><td>${o.avg == null ? '–' : `<div class="bar"><i style="width:${pct(o.avg)}%" class="${cls}"></i></div>`}</td><td><span class="status ${cls}">${label}</span></td></tr>`;
    }
    return h + `</table>`;
  }

  function viewData() {
    const flags = Object.entries(Store.state.flags);
    const n = Object.keys(Store.state.sessions).length;
    return `<p class="crumbs"><a href="#/">Home</a></p><h1>Backup &amp; settings</h1>
      <h2>Back up your progress</h2><p>Progress is stored in this browser only. Clearing browsing data, using private mode or switching device will lose it. Download a backup now and then.</p>
      <div class="actions"><button class="btn primary" data-act="export">⬇ Download backup</button><label class="btn">⬆ Restore from backup<input type="file" accept="application/json,.json" data-act="import" hidden></label></div><p class="small" data-msg></p>
      <p class="muted small">${plural(n, 'saved session')} · ${plural(Object.keys(Store.state.qstats).length, 'question')} attempted.</p>
      <h2>Reported problems (${flags.length})</h2>${flags.length ? `<ul>${flags.map(([id, f]) => `<li><code>${esc(id)}</code>: ${esc(f.note || '(no note)')} <span class="muted small">${fmtDate(f.at)}</span></li>`).join('')}</ul><button class="btn" data-act="copyflags">Copy list to clipboard</button>` : '<p class="muted">None yet. Use “Report a problem” under any question.</p>'}
      <h2>Start over</h2><p>Deletes all saved progress in this browser.</p><button class="btn danger" data-act="reset">Delete all progress</button>
      <div class="confirm hidden" data-confirm="reset"><p>This cannot be undone (unless you have a backup).</p><button class="btn danger" data-act="reset-yes">Yes, delete everything</button> <button class="btn" data-act="reset-no">Cancel</button></div>`;
  }

  // ------------------------------------------------------------ router

  let current = { name: 'home' };

  function parseRoute() {
    const raw = location.hash.replace(/^#/, '') || '/';
    const [path, query] = raw.split('?');
    const params = new URLSearchParams(query || '');
    const p = path.split('/').filter(Boolean);
    if (p[0] === 's' && subj(p[1]) && subj(p[1]).ready) {
      const s = subj(p[1]);
      if (!p[2]) return { name: 'subject', s };
      if (p[2] === 'topics') return { name: 'topics', s };
      if (p[2] === 'topic' && topicOf(s, p[3])) return { name: 'topic', s, t: topicOf(s, p[3]), kk: params.get('kk') };
      if (p[2] === 'custom') return { name: 'custom', s };
      if (p[2] === 'review') return { name: 'review', s };
      if (p[2] === 'technique') return { name: 'technique', s };
      if (p[2] === 'progress') return { name: 'progress', s };
    }
    if (p[0] === 'session' && Store.state.sessions[p[1]]) return { name: 'session', sess: Store.state.sessions[p[1]] };
    if (p[0] === 'results' && Store.state.sessions[p[1]]) return { name: 'results', sess: Store.state.sessions[p[1]] };
    if (p[0] === 'data') return { name: 'data' };
    return { name: 'home' };
  }

  function render(keepScroll) {
    const y = window.scrollY;
    current = parseRoute();
    const r = current;
    const html = {
      home: () => viewHome(), subject: () => viewSubject(r.s), topics: () => viewTopics(r.s), topic: () => viewTopic(r.s, r.t, r.kk),
      custom: () => viewCustom(r.s), review: () => viewReview(r.s), technique: () => viewTechnique(r.s), progress: () => viewProgress(r.s),
      session: () => viewSession(r.sess), results: () => viewResults(r.sess), data: () => viewData(),
    }[r.name]();
    app.innerHTML = html;
    typeset(r.s || (r.sess && subj(r.sess.subject)));
    document.title = (r.s ? r.s.name + ' · ' : r.sess ? r.sess.title + ' · ' : '') + 'VCE Revision';
    if (keepScroll) window.scrollTo(0, y);
    else if (r.name === 'topic' && r.kk) { const el = document.getElementById('kk-' + r.kk); if (el) el.scrollIntoView(); }
    else window.scrollTo(0, 0);
    syncTimer();
  }

  // Maths subjects write formulas as $...$ (inline) or $$...$$ (display), typeset by KaTeX when it has loaded.
  function typeset(s) {
    if (!s || !s.math || !window.renderMathInElement) return;
    // Wrap a literal dollar amount in <span class="nomath"> so it isn't read as maths.
    window.renderMathInElement(app, { delimiters: [{ left: '$$', right: '$$', display: true }, { left: '$', right: '$', display: false }], ignoredClasses: ['nomath'], macros: VCE.texMacros, throwOnError: false });
  }

  function go(hash) { if (location.hash === hash) render(); else location.hash = hash; }

  // ------------------------------------------------------------ timer

  let tick = null, lastTick = 0;
  function syncTimer() {
    clearInterval(tick); tick = null;
    const sess = current.sess;
    if (current.name !== 'session' || !sess || sess.mode !== 'exam' || sess.submitted || sess.timer.paused) return;
    lastTick = Date.now();
    tick = setInterval(() => {
      const now = Date.now(), dt = now - lastTick; lastTick = now;
      const tm = sess.timer;
      if (tm.phase === 'reading') {
        tm.readingLeft -= dt;
        if (tm.readingLeft <= 0) { tm.phase = 'writing'; tm.readingLeft = 0; Store.save(); render(true); return; }
      } else tm.writingLeft -= dt;
      const el = document.getElementById('timer');
      if (el) {
        el.textContent = fmtTime(tm.phase === 'reading' ? tm.readingLeft : tm.writingLeft);
        el.parentElement.classList.toggle('over', tm.phase === 'writing' && tm.writingLeft < 0);
        if (tm.phase === 'writing' && tm.writingLeft < 0) document.getElementById('timer-label').textContent = "Time's up · overtime";
      }
      if (Math.floor(now / 5000) !== Math.floor((now - dt) / 5000)) Store.save();
    }, 1000);
  }

  // ------------------------------------------------------------ actions

  function currentQuestion() {
    const sess = current.sess; if (!sess) return {};
    const s = subj(sess.subject); const question = q(s, sess.qids[sess.idx]);
    const ans = sess.answers[question.id] || (sess.answers[question.id] = {});
    return { sess, s, question, ans };
  }

  function touch(sess) { sess.updatedAt = Date.now(); Store.save(); }

  function startTopic(s, tid) {
    const t = topicOf(s, tid);
    const ids = Object.values(s.questions).filter((x) => x.topic === tid && x.pool === 'practice');
    ids.sort((a, b) => typeRank(a) - typeRank(b));
    const sess = createSession({ subject: s.id, kind: 'topic', refId: tid, title: `Topic practice: ${t.title}`, mode: 'practice', qids: ids.map((x) => x.id) });
    go('#/session/' + sess.id);
  }

  // Practice on one dot point: practice-pool questions first (unseen/wrong first); if there are few,
  // add exam questions already attempted (so no unseen exam question is spoiled).
  function startKk(s, kid) {
    const f = kkOf(s, kid);
    const rank = (x) => { const st = Store.state.qstats[x.id]; return !st ? 0 : st.last < 1 ? 1 : 2; };
    let ids = shuffle(Object.values(s.questions).filter((x) => x.pool === 'practice' && (x.kk || []).includes(kid))).sort((a, b) => rank(a) - rank(b));
    if (ids.length < 5) ids = ids.concat(Object.values(s.questions).filter((x) => x.pool !== 'practice' && (x.kk || []).includes(kid) && Store.state.qstats[x.id]));
    if (!ids.length) return go(`#/s/${s.id}/topic/${f.topic.id}?kk=${kid}`);
    const sess = createSession({ subject: s.id, kind: 'focus', refId: kid, title: `Focus practice: ${f.kk.short}`, mode: 'practice', qids: ids.slice(0, 12).map((x) => x.id) });
    go('#/session/' + sess.id);
  }

  function pickQuestions(s, opts) {
    let pool = Object.values(s.questions).filter((x) => x.pool === 'practice' && opts.topics.includes(x.topic));
    if (opts.type === 'mc') pool = pool.filter((x) => x.type === 'mc');
    if (opts.type === 'written') pool = pool.filter((x) => x.type !== 'mc');
    if (opts.tech && opts.tech !== 'any') pool = pool.filter((x) => x.tech === opts.tech);
    pool = shuffle(pool);
    if (opts.weak) {
      const rank = (x) => { const st = Store.state.qstats[x.id]; return !st ? 0 : st.last < 1 ? 1 : 2; };
      pool.sort((a, b) => rank(a) - rank(b));
    }
    return pool.slice(0, opts.count).map((x) => x.id);
  }

  app.addEventListener('click', (e) => {
    const el = e.target.closest('[data-act]');
    if (!el || el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') return;
    const act = el.dataset.act;
    const r = current;
    if (act === 'startpaper') {
      const paper = r.s.papers.find((p) => p.id === el.dataset.paper);
      const sess = paperSession(r.s, paper, el.dataset.mode);
      return go('#/session/' + sess.id);
    }
    if (act === 'starttopic') return startTopic(r.s, el.dataset.topic);
    if (act === 'startkk') return startKk(r.s || subj(r.sess.subject), el.dataset.kk);
    if (act === 'alltopics') { app.querySelectorAll('input[name=topic]').forEach((c) => { c.checked = true; }); return; }
    if (act === 'startreview') {
      const ids = shuffle(reviewQueue(r.s, el.dataset.due === '1'));
      const sess = createSession({ subject: r.s.id, kind: 'review', title: 'Review mistakes', mode: 'practice', qids: ids });
      return go('#/session/' + sess.id);
    }
    if (act === 'export') {
      const blob = new Blob([JSON.stringify(Store.state, null, 1)], { type: 'application/json' });
      const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `vce-revision-backup-${new Date().toISOString().slice(0, 10)}.json`; a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 1000); return;
    }
    if (act === 'copyflags') {
      const txt = Object.entries(Store.state.flags).map(([id, f]) => `${id}: ${f.note}`).join('\n');
      navigator.clipboard && navigator.clipboard.writeText(txt).then(() => { el.textContent = 'Copied ✓'; }); return;
    }
    if (act === 'reset') { app.querySelector('[data-confirm=reset]').classList.remove('hidden'); return; }
    if (act === 'reset-no') { app.querySelector('[data-confirm=reset]').classList.add('hidden'); return; }
    if (act === 'reset-yes') { Store.state = { version: 1, sessions: {}, qstats: {}, flags: {} }; Store.save(); return go('#/'); }

    // ---- session actions
    if (!r.sess) return;
    const { sess, s, question, ans } = currentQuestion();
    if (act === 'goto') { sess.idx = +el.dataset.i; touch(sess); return render(); }
    if (act === 'prev') { sess.idx -= 1; touch(sess); return render(); }
    if (act === 'next') { sess.idx += 1; touch(sess); return render(); }
    if (act === 'goto-q') { sess.idx = sess.qids.indexOf(el.dataset.q); touch(sess); return go('#/session/' + sess.id); }
    if (act === 'hint') { ans.hint = true; touch(sess); return render(true); }
    if (act === 'conf') { ans.conf = el.dataset.v; touch(sess); return render(true); }
    if (act === 'check') {
      if (question.type === 'mc' && ans.choice == null) { el.textContent = 'Choose an option first'; return; }
      if (question.type === 'num' && !hasText(ans)) { el.textContent = 'Type an answer first'; return; }
      ans.checked = true;
      if (!auto(question) && !hasText(ans)) ans.paper = true;
      if (auto(question)) recordResult(question.id, answerScore(question, ans), ans.conf);
      touch(sess); return render(true);
    }
    // Reveal the worked solution without answering: counts as not yet known, so it goes to the review list.
    if (act === 'reveal') { ans.checked = true; ans.revealed = true; recordResult(question.id, 0, 'guess'); touch(sess); return render(true); }
    if (act === 'clearq') { sess.answers[question.id] = {}; touch(sess); return render(true); }
    if (act === 'resetsess') { app.querySelector('[data-confirm=resetsess]').classList.remove('hidden'); return; }
    if (act === 'resetsess-no') { app.querySelector('[data-confirm=resetsess]').classList.add('hidden'); return; }
    if (act === 'resetsess-yes') {
      if (sess.submitted) {
        const { subject, kind, refId, title, mode, qids, sections, timing } = sess;
        const n = createSession({ subject, kind, refId, title, mode, qids, sections, timing });
        return go('#/session/' + n.id);
      }
      sess.answers = {}; sess.idx = 0;
      if (sess.timer) sess.timer = { phase: sess.timing.reading ? 'reading' : 'writing', readingLeft: sess.timing.reading * 60000, writingLeft: sess.timing.writing * 60000, paused: false };
      touch(sess); return render();
    }
    if (act === 'savemark') {
      const crit = criteriaOf(question);
      ans.score = question.rubric ? rubricScore(question, ans.levels) : Math.min(question.marks, crit.reduce((a, c, i) => a + ((ans.marks || [])[i] ? c.m : 0), 0));
      ans.scored = true;
      recordResult(question.id, ans.score / question.marks, ans.conf);
      touch(sess); return render(true);
    }
    if (act === 'flag') {
      const note = el.parentElement.querySelector('[data-flagnote]').value.trim();
      Store.state.flags[question.id] = { note, at: Date.now(), session: sess.id };
      touch(sess); return render(true);
    }
    if (act === 'pause') { sess.timer.paused = !sess.timer.paused; touch(sess); return render(true); }
    if (act === 'skipreading') { sess.timer.phase = 'writing'; sess.timer.readingLeft = 0; touch(sess); return render(true); }
    if (act === 'submit') { app.querySelector('[data-confirm=submit]').classList.remove('hidden'); app.querySelector('[data-confirm=submit]').scrollIntoView({ block: 'center' }); return; }
    if (act === 'submit-no') { app.querySelector('[data-confirm=submit]').classList.add('hidden'); return; }
    if (act === 'submit-yes') {
      sess.submitted = true; sess.submittedAt = Date.now(); sess.timer.phase = 'done';
      // Only answered questions feed the review queue; blanks (e.g. ran out of time) still score 0 in the results.
      for (const id of sess.qids) { const qq = q(s, id); const sc = auto(qq) ? answerScore(qq, sess.answers[id]) : null; if (sc != null) recordResult(id, sc, null); }
      touch(sess); return go('#/results/' + sess.id);
    }
    if (act === 'retrywrong') {
      const ids = sess.qids.filter((id) => { const sc = scoreIn(sess, q(s, id)); return sc != null && sc < 1; });
      const n = createSession({ subject: s.id, kind: 'retry', title: `Retry: ${sess.title}`, mode: 'practice', qids: ids });
      return go('#/session/' + n.id);
    }
  });

  app.addEventListener('change', (e) => {
    const el = e.target;
    if (el.dataset.act === 'import' && el.files[0]) {
      const msg = app.querySelector('[data-msg]');
      el.files[0].text().then((txt) => {
        const data = JSON.parse(txt);
        if (!data || data.version !== 1 || !data.sessions) throw new Error('Not a VCE Revision backup file');
        Store.state = data; Store.save(); msg.textContent = 'Progress restored ✓'; setTimeout(render, 800);
      }).catch((err) => { msg.textContent = 'Could not restore: ' + err.message; });
      return;
    }
    if (!current.sess) return;
    const { sess, question, ans } = currentQuestion();
    if (el.dataset.act === 'choose') { ans.choice = +el.value; touch(sess); render(true); }
    if (el.dataset.act === 'paper') { ans.paper = el.checked; touch(sess); render(true); }
    if (el.dataset.act === 'rubric') {
      ans.levels = ans.levels || question.rubric.map(() => null);
      ans.levels[+el.dataset.i] = +el.dataset.l;
      touch(sess); render(true); return;
    }
    if (el.dataset.act === 'selfmark') {
      const crit = criteriaOf(question);
      ans.marks = ans.marks || crit.map(() => false);
      ans.marks[+el.dataset.i] = el.checked;
      touch(sess);
      const total = crit.reduce((a, c, i) => a + (ans.marks[i] ? c.m : 0), 0);
      const out = el.closest('.fb').querySelector('.selfscore strong'); if (out) out.textContent = `${Math.min(total, question.marks)} / ${question.marks}`;
    }
  });

  let typing = null;
  app.addEventListener('input', (e) => {
    const el = e.target;
    if (el.dataset.act !== 'text' || !current.sess) return;
    const { sess, question, ans } = currentQuestion();
    ans.text = el.value;
    if (question.type === 'num') { const p = el.closest('.qcard').querySelector('.numprev'); if (p) p.textContent = numPreview(question, el.value); }
    const wc = el.parentElement.querySelector('.wc');
    if (wc) wc.textContent = wc.textContent.replace(/^\d+ words/, `${el.value.trim() ? el.value.trim().split(/\s+/).length : 0} words`);
    clearTimeout(typing); typing = setTimeout(() => touch(sess), 400);
  });

  // Enter in a numeric answer box checks it (practice mode).
  app.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' || !e.target.classList.contains('numans')) return;
    const btn = app.querySelector('[data-act=check]'); if (btn) { e.preventDefault(); btn.click(); }
  });

  app.addEventListener('submit', (e) => {
    const form = e.target;
    if (form.dataset.form !== 'custom') return;
    e.preventDefault();
    const fd = new FormData(form);
    const opts = { topics: fd.getAll('topic'), type: fd.get('type'), tech: fd.get('tech'), count: +fd.get('count'), weak: !!fd.get('weak') };
    const msg = form.querySelector('[data-msg]');
    if (!opts.topics.length) { msg.textContent = 'Pick at least one topic.'; return; }
    const ids = pickQuestions(current.s, opts);
    if (!ids.length) { msg.textContent = 'No questions match those choices.'; return; }
    const sess = createSession({ subject: current.s.id, kind: 'custom', title: `Custom quiz (${ids.length} questions)`, mode: 'practice', qids: ids });
    go('#/session/' + sess.id);
  });

  window.addEventListener('hashchange', () => render());
  window.addEventListener('beforeunload', () => Store.save());

  // Saved sessions can point at questions that a later update renamed or removed: drop those so old progress can't break a page.
  function pruneSessions() {
    let changed = false;
    for (const sess of Object.values(Store.state.sessions)) {
      const s = subj(sess.subject);
      const keep = s ? sess.qids.map((id) => !!s.questions[id]) : [];
      if (keep.every(Boolean) && s) continue;
      changed = true;
      if (!keep.some(Boolean)) { delete Store.state.sessions[sess.id]; continue; }
      if (sess.sections) {
        let start = 0;
        sess.sections = sess.sections.map((x) => { const count = keep.slice(x.start, x.start + x.count).filter(Boolean).length; const y = Object.assign({}, x, { start, count }); start += count; return y; }).filter((x) => x.count);
      }
      sess.qids = sess.qids.filter((id, i) => keep[i]);
      sess.idx = Math.min(sess.idx || 0, sess.qids.length - 1);
    }
    if (changed) Store.save();
  }

  VCE.finalize();
  Store.load();
  pruneSessions();
  render();
})();
