# VCE Revision

A static revision site for VCE students: full-length practice exams, topic quizzes and revision notes, with hints, answer checking and self-marking guides. There's no server or database; progress is saved in the browser (`localStorage`), with a download/restore backup on the **Backup & settings** page.

| Subject | Status |
|---|---|
| Psychology Units 3 & 4 | ✅ 3 full exams (120 marks each), Unit 3 and Unit 4 tests (40 marks each), a "where students lose marks" test drawn from the 2023–2025 examiners' reports, topic practice, revision notes. Extended responses are marked with VCAA's holistic four-criterion rubric |
| Mathematical Methods Units 1 & 2 | ✅ 2 practice exam sets (Exam 1 no calculator, 40 marks; Exam 2 CAS, 60 marks), Unit 1 and Unit 2 tests, a "where students lose marks" drill, topic practice, revision notes |
| Specialist Mathematics Units 1 & 2 | ✅ 2 practice exam sets (Exam 1 no calculator; Exam 2 CAS), Unit 1 and Unit 2 tests, a "where students lose marks" drill, topic practice, revision notes. Tailored to the school course: no matrices or transformations; extra kinematics, vectors, complex numbers and trig, many set around graphs |
| Physical Education Units 1 & 2 | ✅ Practice exam (80 marks), Unit 1 and Unit 2 tests, topic practice, revision notes (2025 study design) |
| Year 10 Methods (Level 10 & 10A) | ✅ Practice exam (no-calculator and calculator sections, 75 marks), two topic tests, topic practice, revision notes (Victorian Curriculum 2.0) |
| Physics Units 1 & 2 | ✅ Unit 1 and Unit 2 practice exams (80 marks each), six topic tests, a test for **each of the 18 Unit 2 options**, topic practice, revision notes |

Every maths and physics question has a step-by-step worked solution (a numbered list), shown after checking or straight away with **🧮 Show me how to solve it**.

## Run it locally

Open `index.html` directly in a browser, or serve the folder:

```sh
python3 -m http.server 8765
# then open http://127.0.0.1:8765
```

## Publish on GitHub Pages

1. Create a new GitHub repository (e.g. `vce-revision`) and push **this folder's contents** to the `main` branch.
2. In the repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, branch `main`, folder `/ (root)`.
3. The site appears at `https://<your-username>.github.io/vce-revision/` after a minute or two.

Only push this folder. The VCAA source documents in the parent folder are VCAA copyright and shouldn't be published.

## How it works

- `index.html` loads `assets/registry.js`, then each subject's data files, then `assets/app.js`.
- **Practice mode:** hint button, a "how sure are you?" rating, and **Check answer**. Multiple choice shows right/wrong, why the chosen option is wrong, why the correct one is right, and why the others are wrong. Written answers show a marking checklist to tick (self-marking), a model answer and common mistakes. Every question links to its study design dot point in the revision notes.
- **Exam mode:** VCAA timing (reading time with inputs locked, then writing time), no hints, marked at the end, with results by section and topic.
- **Review mistakes:** anything wrong, part-marked or answered as "Guessing"/"Unsure" comes back 1, 3 and 7 days later until answered correctly with confidence.
- **Build a quiz:** pick topics, question type and length; it prefers questions not yet tried or got wrong.
- **Progress page:** scores over time, strength per study-design dot point, top focus areas with one-click practice, and confidence calibration. Each results page also lists the dot points to focus on next.
- **Reset:** clear a single answer, reset a question after checking it, or reset a whole test (a finished timed test restarts as a new attempt; history and the review list are kept).
- **Report a problem:** a flag under every question; the list can be copied from Backup & settings.
- **Maths and physics:** formulas are typeset with KaTeX (loaded from jsDelivr). Numeric answers are typed and marked automatically (including scientific notation such as `3.0 x 10^8`, and answers rounded to the significant figures asked for), with a "read as" preview and targeted feedback for common wrong answers. Working-out questions are done on paper and self-marked against a worked solution. Maths questions are labelled *No calculator* or *CAS allowed*, and quizzes can be filtered by either; physics questions allow a scientific calculator.

When you publish changes, bump the `?v=` number on the script and stylesheet links in `index.html` so browsers fetch the new files.

Multiple-choice answer positions are set at load (`VCE.finalize()` in `assets/registry.js`) from each question's id, so the key has no A/B/C/D pattern and adding new questions never moves existing ones. Don't change the salt in `finalize()`, and avoid editing the options of a question the student has already answered.

See [`docs/AUTHORING.md`](docs/AUTHORING.md) for the content format and the scope rules used when writing questions.
