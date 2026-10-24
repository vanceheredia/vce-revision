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
  function finalize() {
    for (const s of Object.values(subjects)) {
      for (const q of Object.values(s.questions)) {
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

  function hash(str) {
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
    h ^= h >>> 13; h = Math.imul(h, 2246822507); h ^= h >>> 16;
    return h >>> 0;
  }

  // ---- numeric answers ('num' questions)
  // Reads typed answers such as "3/4", "-2", "2sqrt(3)", "5pi/6", "e^2", "ln(3)", "x = 1.5" or "2√3".
  // Several answers can be separated by commas, semicolons, "or" or "and". Returns an array of numbers, or null if unreadable.
  const NAMES = ['sqrt', 'ln', 'log', 'sin', 'cos', 'tan', 'abs', 'exp', 'pi', 'π', '√', 'e'];
  const FN = { sqrt: Math.sqrt, '√': Math.sqrt, ln: Math.log, log: Math.log10, sin: Math.sin, cos: Math.cos, tan: Math.tan, abs: Math.abs, exp: Math.exp };

  function tokenize(src) {
    const s = src.replace(/\s+/g, '').replace(/[−–]/g, '-').replace(/[×·]/g, '*').replace(/÷/g, '/').toLowerCase();
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
    const tol = (w) => question.dp != null ? 0.5 * Math.pow(10, -question.dp) + 1e-9 : question.tol != null ? question.tol : 1e-6 * Math.max(1, Math.abs(w));
    if (question.ordered) return want.every((w, k) => Math.abs(got[k] - w) <= tol(w));
    const left = got.slice();
    return want.every((w) => { const k = left.findIndex((g) => Math.abs(g - w) <= tol(w)); if (k < 0) return false; left.splice(k, 1); return true; });
  }

  // KaTeX macros available in all maths content. \tv{a} is a vector with the handwritten tilde used in VCE.
  const texMacros = { '\\tv': '\\underset{\\sim}{#1}' };

  return { subjects, subject, questions, stimuli, papers, finalize, readNumbers, checkNum, texMacros };
})();

// Subjects shown on the home page. `ready: false` shows a "coming soon" card.
VCE.subject('psychology', { name: 'Psychology', units: 'Units 3 & 4', ready: true, order: 1 });
VCE.subject('methods', { name: 'Mathematical Methods', units: 'Units 1 & 2', ready: true, math: true, mcSalt: '614', order: 2 });
VCE.subject('specialist', { name: 'Specialist Mathematics', units: 'Units 1 & 2', ready: true, math: true, mcSalt: '15196', order: 3 });
VCE.subject('physics', { name: 'Physics', units: 'Units 1 & 2', ready: false, order: 4 });
