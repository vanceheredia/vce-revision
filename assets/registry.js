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
        // Fixed salt chosen once for an even A–D spread; never change it, or saved answers would be remapped.
        const target = hash('7340:' + q.id) % q.options.length;
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

  return { subjects, subject, questions, stimuli, papers, finalize };
})();

// Subjects shown on the home page. `ready: false` shows a "coming soon" card.
VCE.subject('psychology', { name: 'Psychology', units: 'Units 3 & 4', ready: true, order: 1 });
VCE.subject('methods', { name: 'Mathematical Methods', units: 'Units 1 & 2', ready: false, order: 2 });
VCE.subject('specialist', { name: 'Specialist Mathematics', units: 'Units 1 & 2', ready: false, order: 3 });
VCE.subject('physics', { name: 'Physics', units: 'Units 1 & 2', ready: false, order: 4 });
