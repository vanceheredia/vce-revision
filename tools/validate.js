// Content validator. Usage: node tools/validate.js .   (from the vce-revision folder)
// If the katex npm package can be found (or KATEX=/path/to/katex is set), every $...$ formula is also test-typeset.
const fs = require('fs'), vm = require('vm'), path = require('path');
const root = process.argv[2];
let katex = null;
try { katex = require(process.env.KATEX || 'katex'); } catch (e) { console.log('(katex not found: formulas not test-typeset)'); }
const ctx = { console };
ctx.window = ctx; vm.createContext(ctx);
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const scripts = [...html.matchAll(/<script src="([^"]+)"/g)].map((m) => m[1].split('?')[0]).filter((s) => !/^https?:/.test(s) && !s.endsWith('app.js'));
const missing = scripts.filter((s) => !fs.existsSync(path.join(root, s)));
for (const s of scripts) if (!missing.includes(s)) vm.runInContext(fs.readFileSync(path.join(root, s), 'utf8'), ctx, { filename: s });
ctx.VCE.finalize();
const errs = [];

// Every $...$ / $$...$$ in a string must pair up and typeset. Dollar amounts go in <span class="nomath">.
function checkMath(where, str) {
  if (typeof str !== 'string') return;
  const s = str.replace(/<span class="nomath">[^<]*<\/span>/g, '').replace(/<svg[\s\S]*?<\/svg>/g, '');
  const re = /\$\$([\s\S]+?)\$\$|\$([^$]+?)\$/g;
  let m, rest = s;
  while ((m = re.exec(s))) {
    const tex = m[1] || m[2];
    if (tex.includes('<')) errs.push(`${where}: "<" inside a formula breaks the HTML; use \\lt`);
    if (katex) { try { katex.renderToString(tex, { displayMode: !!m[1], throwOnError: true, macros: Object.assign({}, ctx.VCE.texMacros) }); } catch (e) { errs.push(`${where}: bad TeX "${tex}": ${e.message.split('\n')[0]}`); } }
    rest = rest.replace(m[0], '');
  }
  if (rest.includes('$')) errs.push(`${where}: unpaired $`);
}
function walkMath(where, v) {
  if (typeof v === 'string') checkMath(where, v);
  else if (Array.isArray(v)) v.forEach((x, i) => walkMath(`${where}[${i}]`, x));
  else if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) if (k !== 'f') walkMath(`${where}.${k}`, x);
}

for (const s of Object.values(ctx.VCE.subjects)) {
  if (!s.ready) continue;
  const kk = new Set(s.topics.flatMap((t) => (t.kk || []).map((k) => k.id)));
  const topics = new Set(s.topics.map((t) => t.id));
  if (s.math) {
    for (const t of s.topics) walkMath(`${s.id} topic ${t.id}`, t);
    for (const [k, st] of Object.entries(s.stimuli)) walkMath(`${s.id} stimulus ${k}`, st);
  }
  for (const q of Object.values(s.questions)) {
    const e = (m) => errs.push(`${q.id}: ${m}`);
    if (!topics.has(q.topic)) e('unknown topic ' + q.topic);
    for (const k of q.kk || []) if (!kk.has(k)) e('unknown kk ' + k);
    if (!(q.kk || []).length) e('no kk');
    if (q.stimulus && !s.stimuli[q.stimulus]) e('missing stimulus ' + q.stimulus);
    if (!q.stem) e('no stem');
    if (!q.hint) e('no hint');
    if (!q.pool) e('no pool');
    if (s.math) {
      if (q.tech !== 'free' && q.tech !== 'cas') e('maths question needs tech: free | cas');
      walkMath(q.id, q);
    }
    if (q.type === 'mc') {
      if (q.options.length !== 4) e('options != 4');
      if (!(q.answer >= 0 && q.answer < q.options.length)) e('bad answer');
      if (!q.why || q.why.length !== q.options.length || q.why.some((w) => !w)) e('why incomplete');
      if (q.header && q.options.some((o) => !Array.isArray(o) || o.length !== q.header.length)) e('table options mismatch');
      if (q.marks !== 1) e('mc marks != 1');
      if (new Set(q.options.map(String)).size !== q.options.length) e('duplicate options');
    } else if (q.type === 'num') {
      const want = [].concat(q.answer);
      if (!want.length || want.some((v) => typeof v !== 'number' || !isFinite(v))) e('num answer not finite numbers');
      if (!q.show) e('num needs show');
      if (!q.solution) e('num needs solution');
      // The displayed answer must itself be accepted, and each diagnosed wrong value must be marked wrong.
      const typed = want.map((v) => String(+v.toPrecision(12))).join(', ');
      if (!ctx.VCE.checkNum(q, typed)) e(`num: own answer "${typed}" not accepted`);
      for (const w of q.wrong || []) if (ctx.VCE.checkNum(q, [].concat(w.v).join(', '))) e(`num: wrong value ${w.v} is accepted as correct`);
    } else {
      const sum = (q.criteria || []).reduce((a, c) => a + (typeof c === 'string' ? 1 : c.m), 0);
      if (sum !== q.marks) e(`criteria sum ${sum} != marks ${q.marks}`);
      if (!q.model) e('no model');
    }
  }
  for (const p of s.papers) {
    let marks = 0; const tech = new Set();
    for (const sec of p.sections) for (const id of sec.qids) { if (!s.questions[id]) errs.push(`paper ${p.id}: missing ${id}`); else { marks += s.questions[id].marks; tech.add(s.questions[id].tech); } }
    if (s.math && p.tech && (tech.size !== 1 || !tech.has(p.tech))) errs.push(`paper ${p.id}: tech ${p.tech} but questions are ${[...tech]}`);
    if (p.marks && p.marks !== marks) errs.push(`paper ${p.id}: says ${p.marks} marks, has ${marks}`);
    console.log(`paper ${p.id}: ${p.sections.map((x) => x.qids.length).join('+')} questions, ${marks} marks`);
    const inPaper = new Set(p.sections.flatMap((x) => x.qids));
    for (const q of Object.values(s.questions)) if (q.pool === p.id && !inPaper.has(q.id)) errs.push(`${q.id} in pool ${p.id} but not in paper`);
  }
  const bal = {};
  for (const q of Object.values(s.questions)) if (q.type === 'mc') { bal[q.pool] = bal[q.pool] || [0, 0, 0, 0]; bal[q.pool][q.answer]++; }
  console.log(s.id, 'questions:', Object.keys(s.questions).length, '| MC answer balance A-D:', JSON.stringify(bal));
  const byTopic = {}, byKk = {};
  for (const q of Object.values(s.questions)) {
    if (q.pool === 'practice') byTopic[q.topic] = (byTopic[q.topic] || 0) + 1;
    for (const k of q.kk || []) byKk[k] = (byKk[k] || 0) + 1;
  }
  console.log('practice per topic:', JSON.stringify(byTopic));
  const thin = [...kk].filter((k) => (byKk[k] || 0) < 3);
  if (thin.length) console.log('dot points with < 3 questions:', thin.map((k) => `${k}(${byKk[k] || 0})`).join(' '));
}
for (const m of missing) errs.push('missing script ' + m);
console.log(errs.length ? 'ERRORS:\n' + errs.join('\n') : 'No errors');
