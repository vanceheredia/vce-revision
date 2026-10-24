// Content validator. Usage: node tools/validate.js .   (from the vce-revision folder)
const fs = require('fs'), vm = require('vm'), path = require('path');
const root = process.argv[2];
const ctx = { console };
ctx.window = ctx; vm.createContext(ctx);
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const scripts = [...html.matchAll(/<script src="([^"]+)"/g)].map((m) => m[1].split("?")[0]).filter((s) => !s.endsWith('app.js'));
for (const s of scripts) vm.runInContext(fs.readFileSync(path.join(root, s), 'utf8'), ctx, { filename: s });
ctx.VCE.finalize();
const errs = [];
for (const s of Object.values(ctx.VCE.subjects)) {
  if (!s.ready) continue;
  const kk = new Set(s.topics.flatMap((t) => (t.kk || []).map((k) => k.id)));
  const topics = new Set(s.topics.map((t) => t.id));
  for (const q of Object.values(s.questions)) {
    const e = (m) => errs.push(`${q.id}: ${m}`);
    if (!topics.has(q.topic)) e('unknown topic ' + q.topic);
    for (const k of q.kk || []) if (!kk.has(k)) e('unknown kk ' + k);
    if (!(q.kk || []).length) e('no kk');
    if (q.stimulus && !s.stimuli[q.stimulus]) e('missing stimulus ' + q.stimulus);
    if (!q.stem) e('no stem');
    if (!q.hint) e('no hint');
    if (!q.pool) e('no pool');
    if (q.type === 'mc') {
      if (q.options.length !== 4) e('options != 4');
      if (!(q.answer >= 0 && q.answer < q.options.length)) e('bad answer');
      if (!q.why || q.why.length !== q.options.length || q.why.some((w) => !w)) e('why incomplete');
      if (q.header && q.options.some((o) => !Array.isArray(o) || o.length !== q.header.length)) e('table options mismatch');
      if (q.marks !== 1) e('mc marks != 1');
    } else {
      const sum = (q.criteria || []).reduce((a, c) => a + (typeof c === 'string' ? 1 : c.m), 0);
      if (sum !== q.marks) e(`criteria sum ${sum} != marks ${q.marks}`);
      if (!q.model) e('no model');
    }
  }
  for (const p of s.papers) {
    let marks = 0;
    for (const sec of p.sections) for (const id of sec.qids) { if (!s.questions[id]) errs.push(`paper ${p.id}: missing ${id}`); else marks += s.questions[id].marks; }
    console.log(`paper ${p.id}: ${p.sections.map((x) => x.qids.length).join('+')} questions, ${marks} marks`);
    const inPaper = new Set(p.sections.flatMap((x) => x.qids));
    for (const q of Object.values(s.questions)) if (q.pool === p.id && !inPaper.has(q.id)) errs.push(`${q.id} in pool ${p.id} but not in paper`);
  }
  const bal = {};
  for (const q of Object.values(s.questions)) if (q.type === 'mc') { bal[q.pool] = bal[q.pool] || [0, 0, 0, 0]; bal[q.pool][q.answer]++; }
  console.log(s.id, 'questions:', Object.keys(s.questions).length, '| MC answer balance A-D:', JSON.stringify(bal));
  const byTopic = {};
  for (const q of Object.values(s.questions)) if (q.pool === 'practice') byTopic[q.topic] = (byTopic[q.topic] || 0) + 1;
  console.log('practice per topic:', JSON.stringify(byTopic));
}
console.log(errs.length ? 'ERRORS:\n' + errs.join('\n') : 'No errors');
