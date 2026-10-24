# VCE Revision

A static revision site for VCE students: full-length practice exams, topic quizzes and revision notes, with hints, answer checking and self-marking guides. There's no server or database; progress is saved in the browser (`localStorage`), with a download/restore backup on the **Backup & settings** page.

| Subject | Status |
|---|---|
| Psychology Units 3 & 4 | ✅ 3 full exams (120 marks each), Unit 3 and Unit 4 tests (40 marks each), 72 topic practice questions, revision notes, progress tracking |
| Mathematical Methods Units 1 & 2 | Coming soon |
| Specialist Mathematics Units 1 & 2 | Coming soon |
| Physics Units 1 & 2 | Coming soon |

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

When you publish changes, bump the `?v=` number on the script and stylesheet links in `index.html` so browsers fetch the new files.

Multiple-choice answer positions are set at load (`VCE.finalize()` in `assets/registry.js`) from each question's id, so the key has no A/B/C/D pattern and adding new questions never moves existing ones. Don't change the salt in `finalize()`, and avoid editing the options of a question the student has already answered.

See [`docs/AUTHORING.md`](docs/AUTHORING.md) for the content format and the scope rules used when writing questions.
