// Content registry. Data files (data/<subject>/*.js) call these functions; app.js reads VCE.subjects.
window.VCE = (() => {
  const subjects = {};

  function subject(id, meta) {
    subjects[id] = Object.assign(subjects[id] || { questions: {}, stimuli: {}, papers: [], topics: [] }, meta, { id });
    return subjects[id];
  }

  function questions(subjectId, list) {
    const s = subject(subjectId, {});
    for (const q of list) {
      if (s.questions[q.id]) console.warn('Duplicate question id', q.id);
      s.questions[q.id] = q;
    }
  }

  function stimuli(subjectId, map) {
    Object.assign(subject(subjectId, {}).stimuli, map);
  }

  function papers(subjectId, list) {
    subject(subjectId, {}).papers.push(...list);
  }

  // Multiple-choice options are authored with the correct answer wherever it was easiest to write.
  // finalize() moves each correct answer to a position derived only from the question's id, so the key has
  // no pattern and adding new questions never moves existing ones (saved answers stay valid).
  // Questions whose options have a natural order set `fixedOrder: true`.
  // Step-by-step worked solutions kept in data/<subject>/working.js: for multiple choice they are added; for other
  // questions they replace the shorter solution or model answer.
  const workingMaps = [];
  function working(subjectId, map) { workingMaps.push([subjectId, map]); }

  function finalize() {
    for (const [sid, map] of workingMaps.splice(0)) for (const [id, html] of Object.entries(map)) { const q = subject(sid, {}).questions[id]; if (q) { if (q.type === 'num') q.solution = html; else if (q.type === 'mc') q.working = html; else q.model = html; } else console.warn('working for unknown question', id); }
    for (const s of Object.values(subjects)) {
      for (const q of Object.values(s.questions)) {
        if (s.steps && !q._stepped) { q.solution = toSteps(q.solution); q.model = toSteps(q.model); q._stepped = true; }
        if (q.type !== 'mc' || q.fixedOrder || q._balanced) continue;
        // Salts were chosen once per subject for an even A–D spread; never change one after release, or saved answers would be remapped.
        const target = hash((s.mcSalt || '7340') + ':' + q.id) % q.options.length;
        const order = q.options.map((_, i) => i).filter((i) => i !== q.answer);
        order.splice(target, 0, q.answer);
        q.options = order.map((i) => q.options[i]);
        q.why = order.map((i) => q.why[i]);
        q.answer = target;
        q._balanced = true;
      }
    }
  }

  // ---- step-by-step layout for maths worked solutions
  // Turns a one-line chain such as "A = B = C ⇒ D. So E" into numbered steps. Solutions that are already lists, or that
  // contain diagrams or tables, are left alone.
  function toSteps(html) {
    if (!html || /<(ol|ul|li|svg|table|div|h\d)\b/i.test(html) || /\\begin/.test(html)) return html;
    const src = html.replace(/<\/p>\s*<p>/g, '\n').replace(/^\s*<p>|<\/p>\s*$/g, '');
    const parts = src.split(/(\$\$[\s\S]+?\$\$|\$[^$]+\$)/);
    const steps = [''];
    const add = (t) => { steps[steps.length - 1] += t; };
    const next = (t) => { if (steps[steps.length - 1].trim()) steps.push(''); add(t); };
    for (const part of parts) {
      if (!part) continue;
      if (part[0] !== '$') {
        // Text: new step after a full stop, semicolon or paragraph break.
        part.split(/\n|(?<=[.;])\s+(?=[A-Z$(])/).forEach((t, i) => (i ? next(t) : add(t)));
        continue;
      }
      const d = part.startsWith('$$') ? '$$' : '$';
      const body = part.slice(d.length, -d.length);
      // Split the formula at top-level ⇒ (not inside braces), then break any long = / ≈ chain within each clause.
      const split = (str, re) => { const out = []; let depth = 0, last = 0;
        for (let i = 0; i < str.length; i++) {
          const c = str[i];
          if (c === '{') depth++; else if (c === '}') depth--;
          else if (depth === 0) { const m = str.slice(i).match(re); if (m) { out.push(str.slice(last, i), m[0]); last = i + m[0].length; i = last - 1; } }
        }
        out.push(str.slice(last)); return out; };
      const clauses = split(body, /^\\Rightarrow(?![a-z])/);
      if (clauses.length === 1 && split(body, /^(=|\\approx(?![a-z]))/).length < 7) { add(part); continue; }
      for (let c = 0; c < clauses.length; c += 2) {
        const clause = (c ? clauses[c - 1] + ' ' : '') + clauses[c].trim();
        const eq = split(clause, /^(=|\\approx(?![a-z]))/);
        if (c) steps.push('');
        if (eq.length < 7) { add(d + clause + d); continue; }
        add(d + eq[0] + eq[1] + eq[2] + d);
        for (let k = 3; k < eq.length; k += 2) { steps.push(''); add(d + eq[k] + eq[k + 1] + d); }
      }
    }
    const out = steps.map((t) => t.trim()).filter((t) => t && !/^[.,;]$/.test(t));
    return out.length < 2 ? html : '<ol class="steps">' + out.map((t) => `<li>${t}</li>`).join('') + '</ol>';
  }

  function hash(str) {
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
    h ^= h >>> 13; h = Math.imul(h, 2246822507); h ^= h >>> 16;
    return h >>> 0;
  }

  // ---- numeric answers ('num' questions)
  // Reads typed answers such as "3/4", "-2", "2sqrt(3)", "5pi/6", "e^2", "ln(3)", "x = 1.5", "2√3", "3e8" or "3.0 x 10^8".
  // Several answers can be separated by commas, semicolons, "or" or "and". Returns an array of numbers, or null if unreadable.
  const NAMES = ['sqrt', 'ln', 'log', 'sin', 'cos', 'tan', 'abs', 'exp', 'pi', 'π', '√', 'e'];
  const FN = { sqrt: Math.sqrt, '√': Math.sqrt, ln: Math.log, log: Math.log10, sin: Math.sin, cos: Math.cos, tan: Math.tan, abs: Math.abs, exp: Math.exp };

  function tokenize(src) {
    const s = src.replace(/(\d)\s*[xX]\s*10\s*\^/g, '$1*10^').replace(/\s+/g, '').replace(/[−–]/g, '-').replace(/[×·]/g, '*').replace(/÷/g, '/').toLowerCase();
    const out = [];
    for (let i = 0; i < s.length;) {
      const m = /^((?:\d+\.?\d*|\.\d+)(?:e[+-]?\d+(?!\d*[a-z(]))?)/.exec(s.slice(i));
      if (m) { out.push({ n: parseFloat(m[1]) }); i += m[1].length; continue; }
      if ('+-*/^()'.includes(s[i])) { out.push({ op: s[i] }); i++; continue; }
      const name = NAMES.find((n) => s.startsWith(n, i));
      if (!name) return null;
      out.push({ id: name }); i += name.length;
    }
    return out;
  }

  function evalExpr(src) {
    const t = tokenize(src); if (!t || !t.length) return null;
    let i = 0;
    const peek = () => t[i], isOp = (o) => t[i] && t[i].op === o;
    const startsAtom = () => t[i] && (t[i].n != null || t[i].id || t[i].op === '(');
    function expr() { let v = term(); while (isOp('+') || isOp('-')) { const o = t[i++].op; const r = term(); v = o === '+' ? v + r : v - r; } return v; }
    function term() {
      let v = unary();
      for (;;) {
        if (isOp('*')) { i++; v *= unary(); } else if (isOp('/')) { i++; v /= unary(); } else if (startsAtom()) v *= power(); else return v;
      }
    }
    function unary() { if (isOp('-')) { i++; return -unary(); } if (isOp('+')) { i++; return unary(); } return power(); }
    function power() { const b = atom(); if (isOp('^')) { i++; return Math.pow(b, unary()); } return b; }
    function atom() {
      const k = peek(); if (!k) throw 0;
      if (k.n != null) { i++; return k.n; }
      if (k.op === '(') { i++; const v = expr(); if (!isOp(')')) throw 0; i++; return v; }
      if (k.id) {
        i++;
        if (k.id === 'pi' || k.id === 'π') return Math.PI;
        if (k.id === 'e') return Math.E;
        return FN[k.id](power());
      }
      throw 0;
    }
    try { const v = expr(); return i === t.length && isFinite(v) ? v : null; } catch (e) { return null; }
  }

  function readNumbers(text, ordered) {
    let s = String(text || '').trim();
    if (ordered) s = s.replace(/^\(\s*/, '').replace(/\s*\)$/, '');
    const parts = s.split(/,|;|\bor\b|\band\b/i).map((p) => p.trim()).filter(Boolean);
    if (!parts.length) return null;
    const out = [];
    for (const p of parts) { const v = evalExpr(p.replace(/^[a-zA-Z]\w*\s*=\s*/, '')); if (v == null) return null; out.push(v); }
    return out;
  }

  // true / false, or null when the text can't be read as numbers.
  function checkNum(question, text) {
    const got = readNumbers(text, question.ordered);
    if (!got) return null;
    const want = [].concat(question.answer);
    if (got.length !== want.length) return false;
    // sf: answers given to that many significant figures are accepted (one unit in the last place, to allow for rounding
    // along the way), and so is the answer rounded to 2 significant figures.
    const unit = (w, k) => Math.pow(10, Math.floor(Math.log10(Math.abs(w) || 1)) - k + 1);
    const tol = (w) => question.dp != null ? 0.5 * Math.pow(10, -question.dp) + 1e-9
      : question.sf != null ? Math.max(unit(w, question.sf), 0.5 * unit(w, 2)) * 1.0001
      : question.tol != null ? question.tol : 1e-6 * Math.max(1, Math.abs(w));
    if (question.ordered) return want.every((w, k) => Math.abs(got[k] - w) <= tol(w));
    const left = got.slice();
    return want.every((w) => { const k = left.findIndex((g) => Math.abs(g - w) <= tol(w)); if (k < 0) return false; left.splice(k, 1); return true; });
  }

  // KaTeX macros available in all maths content. \tv{a} is a vector with the handwritten tilde used in VCE.
  const texMacros = { '\\tv': '\\underset{\\sim}{#1}' };

  return { subjects, subject, questions, stimuli, papers, working, finalize, toSteps, readNumbers, checkNum, texMacros };
})();

// Subjects shown on the home page. `ready: false` shows a "coming soon" card.
VCE.subject('psychology', { name: 'Psychology', units: 'Units 3 & 4', ready: true, order: 1 });
VCE.subject('methods', { name: 'Mathematical Methods', units: 'Units 1 & 2', ready: true, math: true, steps: true, mcSalt: '614', order: 2 });
VCE.subject('specialist', { name: 'Specialist Mathematics', units: 'Units 1 & 2', ready: true, math: true, steps: true, mcSalt: '15196', order: 3 });
VCE.subject('pe', { name: 'Physical Education', units: 'Units 1 & 2', ready: true, mcSalt: '10691', order: 4 });
VCE.subject('y10methods', { name: 'Year 10 Methods', units: 'Level 10 & 10A', ready: true, math: true, steps: true, mcSalt: '1538', order: 5 });
VCE.subject('physics', { name: 'Physics', units: 'Units 1 & 2', ready: true, math: true, steps: true, calc: 'sci', mcSalt: '76', order: 6 });
