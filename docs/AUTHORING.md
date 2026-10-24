# Authoring content

Each subject lives in `data/<subject>/` as plain JavaScript files listed in `index.html`. The subject is declared in `assets/registry.js` (set `ready: true` to show it).

## Files

- `topics.js`: `VCE.subject(id, { intro, erCriteria, technique, topics: [...] })`. Each topic has `kk` entries with `id`, `short` (a link label), `text` (the key knowledge **verbatim** from the study design) and `note` (a revision note in HTML).
- `examN.js`: stimuli, questions with `pool: 'examN'`, and `VCE.papers(...)` defining the sections and timing.
- `practice.js`: stimuli and questions with `pool: 'practice'` (topic practice and custom quizzes draw only from this pool, so they never spoil the full exams).
- `working.js` (maths): `VCE.working(subject, { id: '<ol>…</ol>' })`. For multiple choice this adds the step-by-step working; for other questions it replaces the shorter `solution`/`model`.

Papers: `{ id, kind?, marks, title, reading, writing, description, sections: [{ title, qids }] }`. No `kind` = a full exam; `kind: 'test'` = a shorter test; `kind: 'option'` = an option test (Physics Unit 2), listed in a collapsible group. Subject options in `registry.js`: `math` (KaTeX and numeric answers), `steps` (every question must have a step-by-step solution), `calc: 'sci'` (one calculator type for every question), `mcSalt`, `testsTitle`/`optionsTitle` and notes.

## Question format

```js
// Multiple choice (1 mark). Write the options in any order; positions are rebalanced at load.
{ id, pool, type: 'mc', marks: 1, topic, kk: ['kk-id', ...], stimulus?: 'stim-id',
  stem: '<p>…</p>', options: ['…', '…', '…', '…'],      // or header: ['Col 1', 'Col 2'] + options as arrays
  answer: <index>, why: ['why A is right/wrong', …],    // one rationale per option
  hint: '…', fixedOrder?: true }                         // fixedOrder keeps naturally ordered options (numbers, W–Z)

// Short answer / extended response
{ id, pool, label?: '3b', type: 'sa' | 'er', marks, topic, kk, stimulus?,
  stem, hint,
  criteria: ['1-mark point', …] or [{ m: 2, t: '2-mark point' }, …],  // must sum to marks
  model: '<p>model answer</p>', pitfalls: ['common mistake', …] }
```

```js
// Numeric answer (maths): marked automatically. The student types e.g. 3/4, 2sqrt(3), 5pi/6, e^2, "x = 1 or x = -3".
{ id, pool, type: 'num', marks, topic, kk, tech: 'free' | 'cas', stem, hint,
  answer: 0.75 | [1, -3],          // several values: any order, unless ordered: true (coordinates, "max, min")
  dp?: 2, tol?: 0.01, sf?: 3,      // accept answers rounded to dp places, within tol, or to sf significant figures (2 s.f. also accepted); default almost exact
  show: '$\\frac34$',               // the answer as displayed in the feedback
  solution: '<p>worked solution</p>',
  wrong?: [{ v: 0.5, msg: 'why this common wrong answer is wrong' }],
  prompt?: 'x =', unit?: 'cm', format?: 'placeholder hint', exact?: true }
```

### Maths subjects

- Every maths question has `tech: 'free'` (Exam 1 style, no calculator) or `tech: 'cas'` (Physics: `tech: 'sci'`). A paper with `tech` set must contain only that kind.
- **Step-by-step solutions are required** (`steps: true`): numeric solutions and worked solutions are numbered lists (`<ol><li>…</li></ol>`), and every multiple-choice question has a `working`. Older one-line chains (`A = B = C = D`) are split into steps automatically by `VCE.toSteps`, but write new ones as lists. The validator enforces this.
- Psychology extended responses can carry `rubric: [[low, medium, high, very high] × 4 criteria]`, matching VCAA's holistic marking.
- Write formulas in LaTeX between `$…$` (inline) or `$$…$$` (display); KaTeX typesets them. Wrap a literal dollar amount in `<span class="nomath">$20 000</span>`.
- Write content in `String.raw` templates (`R\`…\``) so backslashes survive. **Never put `$` directly before `${…}`**: `${` starts a JavaScript interpolation and swallows the dollar sign. For vectors use the macro `\\tv{a}` (defined in `VCE.texMacros`) instead of interpolating.
- Graphs: `VCE.plot({ x: [xmin, xmax], y: [ymin, ymax], fns: [{ f: (x) => … }], pts, lines, … })` returns an SVG string to drop into a stem, option or model answer (see `assets/plot.js`).
- Multiple-choice answer positions use a per-subject salt (`mcSalt` in `registry.js`), chosen once for an even spread. Never change it after release.
- The validator test-typesets every formula if the `katex` npm package is available (`KATEX=/path/to/node_modules/katex node tools/validate.js .`).

Stimuli: `VCE.stimuli(subject, { id: { html, chart?, charts?, source? } })`. A chart is `{ type: 'bar' | 'line', title, xLabel, yLabel, categories, yMax, yStep, series: [{ name, values }] }`.

## Checks before publishing

Run `node tools/validate.js .` (it checks answer keys, rationales, stimulus references, topic/key-knowledge links, that marking criteria sum to the marks, and the A–D balance) and load every page once in a browser.

## Writing rules

1. **New questions only.** Use VCAA papers for format, command words, difficulty and marking style, never for the scenarios or wording.
2. **Every question maps to a study design dot point** (`kk`). If you can't map it, it's out of scope.
3. **Units 1 & 2 subjects:** VCAA exams are Units 3 & 4. Use them for style only and check content against `SCOPE-Units-1-2.txt` in the source library.
4. **Maths and physics:** verify every numerical answer computationally before publishing. Physics: show formula → substitution → answer with unit in every worked solution; use $g=9.8$; convert units first.
5. **Maths:** Units 1–2 Methods excludes the chain/product rules, derivatives of exponential and circular functions, and definite integrals; Units 1–2 Methods circular functions are of the form $y=Af(nx)+c$ (no horizontal translation).

### Psychology scope guardrails (from the VCAA 2023–2027 FAQs)

These are **not** examinable, so don't test them: operationalising variables; naming errors such as "placebo effect" or "order effect" (classify them as random/systematic or as extraneous/confounding instead); convenience sampling; matched-participants design; the term "reliable" (use repeatability/reproducibility); calculating standard deviation; action potentials, ion channels, the lock-and-key model; the role of the HPA axis; specific gut bacteria or GBA studies; emotion-focused/problem-focused coping and reappraisal; stimulus generalisation, discrimination, extinction, spontaneous recovery; researcher names (Pavlov, Bandura…); recall/recognition/relearning; maintenance vs elaborative rehearsal; context- and state-dependent cues; retrograde/anterograde amnesia; identifying brain-scan types; induced altered states; alpha/beta/theta/delta wave names; NREM "Stage 4"; CBT for sleep disorders; "tonic immobility"; specific SEWB risk/protective factors.
