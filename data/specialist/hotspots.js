// Specialist – "Where students lose marks": a drill built from the VCAA Specialist Mathematics external assessment
// reports (2023–2025), restricted to Units 1–2 content covered in this course. All questions are original.
(() => {
  const R = String.raw;
  const S = 'specialist';
  const H = 'hotspots';
  VCE.questions(S, [
    { id: 'sh-01', pool: H, type: 'mc', tech: 'free', marks: 1, topic: 'proof', kk: ['pf-meth'],
      stem: R`<p>The contrapositive of “if $n^2$ is even, then $n$ is even” is</p>`,
      options: [R`if $n$ is odd, then $n^2$ is odd`, R`if $n$ is even, then $n^2$ is even`, R`if $n^2$ is odd, then $n$ is odd`, R`$n^2$ is even and $n$ is odd`], answer: 0,
      hint: 'Swap the hypothesis and the conclusion AND negate both.',
      why: ['Swapped and negated: “if not Q, then not P”.', 'That is the converse.', 'That is the inverse (negated but not swapped).', 'That is the negation of the statement.'] },
    { id: 'sh-02', pool: H, type: 'mc', tech: 'free', marks: 1, topic: 'kin', kk: ['km-vec'],
      stem: R`<p>Particles have positions $\tv{r}_A(t)=(1+t)\tv{i}+2t\,\tv{j}$ and $\tv{r}_B(t)=(3-t)\tv{i}+(t+1)\tv{j}$, $t\ge0$. Which statement is true?</p>`,
      options: ['They collide at t = 1, at the point (2, 2).', 'They never meet.', 'They collide at t = 2.', 'Their paths are parallel.'], answer: 0,
      hint: 'Equate the i components and the j components using the SAME t.',
      why: [R`$1+t=3-t$ gives $t=1$, and $2t=t+1$ gives $t=1$: same time, so they collide at $(2,2)$.`, 'Both components agree at t = 1.', 'At t = 2 they are at (3, 4) and (1, 3).', 'The velocities i + 2j and −i + j are not parallel.'] },
    { id: 'sh-03', pool: H, type: 'sa', tech: 'cas', marks: 3, topic: 'kin', kk: ['km-vec'],
      stem: R`<p>Object $A$ moves along $\tv{r}_A=2s\,\tv{i}+(s+1)\tv{j}$ and object $B$ along $\tv{r}_B=(u+3)\tv{i}+2u\,\tv{j}$, where $s$ and $u$ are times in seconds. Show that their <em>paths</em> cross, but the objects never meet.</p>`,
      hint: 'Use different parameters to find where the paths cross, then compare the times.',
      criteria: [{ m: 1, t: R`M: different parameters: $2s=u+3$ and $s+1=2u$` }, { m: 1, t: R`A: $u=\frac53$, $s=\frac73$; paths cross at $\left(\frac{14}{3},\frac{10}{3}\right)$` }, { m: 1, t: R`Conclusion: they reach that point at different times ($\frac73\ne\frac53$), so they never meet` }],
      model: R`<p>Paths cross where $2s=u+3$ and $s+1=2u$. From the second equation, $s=2u-1$, so $4u-2=u+3$, giving $u=\frac53$ and $s=\frac73$. The crossing point is $\left(\frac{14}3,\frac{10}3\right)$.</p><p>$A$ is there at $t=\frac73$ s and $B$ at $t=\frac53$ s, so the objects pass the same point at different times and never meet.</p>`,
      pitfalls: ['Using the same parameter for both paths when looking for where the paths cross. The 2025 report noted this.'] },
    { id: 'sh-04', pool: H, type: 'num', tech: 'free', marks: 1, topic: 'cplx', kk: ['cx-polar'], answer: -2 * Math.PI / 3, exact: true,
      stem: R`<p>Find $\text{Arg}\left(-1-\sqrt3\,i\right)$.</p>`, hint: 'Principal argument lies in (−π, π].',
      show: R`$-\frac{2\pi}{3}$`, wrong: [{ v: 4 * Math.PI / 3, msg: R`$\frac{4\pi}3$ is outside $(-\pi,\pi]$. Subtract $2\pi$.` }, { v: Math.PI / 3, msg: 'That is only the basic angle; the point is in the third quadrant.' }],
      solution: R`<p>Third quadrant, basic angle $\frac\pi3$: $\text{Arg}=-\pi+\frac\pi3=-\frac{2\pi}3$.</p>` },
    { id: 'sh-05', pool: H, type: 'mc', tech: 'free', marks: 1, topic: 'cplx', kk: ['cx-cart'],
      stem: R`<p>A question asks for $|3-i|$. Which answer would receive the mark?</p>`, options: [R`$\sqrt{10}$`, R`$3.16$`, R`$\sqrt{8}$`, R`$10$`], answer: 0,
      hint: 'Exact values unless told otherwise.',
      why: ['Exact form, as VCAA requires unless told otherwise.', 'A rounded value is not exact.', R`$\sqrt{9+1}$, not $\sqrt{9-1}$.`, 'That is the squared modulus.'] },
    { id: 'sh-06', pool: H, type: 'num', tech: 'free', marks: 2, topic: 'kin', kk: ['km-line'], answer: 4, unit: 's',
      stem: R`<p>A ball is thrown straight up at 19.6 m/s from ground level. Taking up as positive and $g=9.8$ m/s², find the time when it returns to the ground.</p>`,
      hint: 's = ut + ½at² with s = 0, u = 19.6, a = −9.8.', show: R`$t=4$ s`,
      wrong: [{ v: 2, msg: 'That is the time to the top. It takes as long again to come back down.' }],
      solution: R`<p>$0=19.6t-4.9t^2=t(19.6-4.9t)$, so $t=4$ (ignoring $t=0$).</p>` },
  ]);
  VCE.papers(S, [{
    id: 'hotspots', kind: 'test', marks: 9, title: 'Where students lose marks', reading: 0, writing: 15,
    description: 'Built from the VCAA examiners’ reports (2023–2025): contrapositives, meeting vs crossing paths, principal arguments, exact values and sign conventions in kinematics. 9 marks, about 15 minutes.',
    sections: [{ title: 'Presentation and convention drill', qids: ['sh-01', 'sh-02', 'sh-03', 'sh-04', 'sh-05', 'sh-06'] }],
  }]);
})();
