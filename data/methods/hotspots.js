// Methods – "Where students lose marks": a drill built from the VCAA Mathematical Methods external assessment
// reports (2023–2025). Each item targets a presentation or convention error the examiners keep reporting.
// All questions are original and within Units 1–2 content.
(() => {
  const R = String.raw;
  const P = VCE.plot;
  const S = 'methods';
  const H = 'hotspots';
  VCE.questions(S, [
    { id: 'mh-01', pool: H, type: 'mc', tech: 'free', marks: 1, topic: 'diff', kk: ['df-app'],
      stem: R`<p>$f(x)=x^3-3x^2-9x$ has stationary points at $x=-1$ and $x=3$. The interval over which $f$ is strictly decreasing is best written as</p>`,
      options: [R`$[-1,3]$`, R`$[3,-1]$`, R`$-1\le f(x)\le3$`, R`$(-1,3]$`], answer: 0,
      hint: 'Smaller endpoint first; strictly increasing/decreasing intervals include the stationary points.',
      why: [R`VCAA uses square brackets at the stationary points, with the smaller value first.`, 'Interval endpoints must be in increasing order. The reports note students writing them in reverse.', R`The condition is on $x$, not on $f(x)$.`, 'Mixed brackets with no reason. Both endpoints are included.'] },
    { id: 'mh-02', pool: H, type: 'sa', tech: 'free', marks: 2, topic: 'diff', kk: ['df-rule'],
      stem: R`<p>Find the <strong>equation</strong> of the tangent to $y=x^3-2x$ at the point where $x=1$.</p>`,
      hint: 'An equation is required, not just the gradient.',
      criteria: [{ m: 1, t: R`M: gradient $3(1)^2-2=1$ and point $(1,-1)$` }, { m: 1, t: R`A: $y=x-2$ written as an equation` }],
      model: R`<p>$\frac{dy}{dx}=3x^2-2=1$ at $x=1$; $y(1)=-1$. $y+1=1(x-1)$, so $y=x-2$.</p>`,
      pitfalls: ['Stopping at the gradient (“1”). The reports note many students did this when an equation was asked for.'] },
    { id: 'mh-03', pool: H, type: 'mc', tech: 'free', marks: 1, topic: 'pow', kk: ['tr-map'],
      stem: R`<p>The graph of $y=\left(\frac x3\right)^2$ is obtained from $y=x^2$ by</p>`,
      options: [R`a dilation by a factor of 3 from the $y$-axis`, R`a dilation by a factor of $\frac13$ from the $y$-axis`, R`a dilation by a factor of 3 from the $x$-axis`, R`a horizontal stretch by 3`], answer: 0,
      hint: 'x′ = 3x. Use the study design wording.',
      why: [R`Replacing $x$ with $\frac{x}{3}$ moves every point 3 times as far from the $y$-axis.`, 'The factor is 3, not 1/3.', R`That would change the $y$-values: $y=3x^2$.`, 'Not the VCAA wording. Describe dilations “from an axis” or “parallel to an axis”.'] },
    { id: 'mh-04', pool: H, type: 'num', tech: 'free', marks: 1, topic: 'rate', kk: ['rc-avg'], answer: 4,
      stem: R`<p>Find the average rate of change of $f(x)=x^2$ over the interval $[1,3]$.</p>`, hint: 'Gradient of the chord from x = 1 to x = 3.',
      show: R`$4$`, wrong: [{ v: 6, msg: R`That is the instantaneous rate at $x=3$ ($f'(3)$), not the average rate.` }, { v: 8, msg: 'Divide by the interval width (2).' }],
      solution: R`<p>$\frac{f(3)-f(1)}{3-1}=\frac{9-1}{2}=4$</p>` },
    { id: 'mh-05', pool: H, type: 'sa', tech: 'free', marks: 2, topic: 'lq', kk: ['lq-quad'],
      stem: R`<p>State the coordinates of the turning point of $y=x^2-6x+5$.</p>`, hint: 'Both coordinates, in round brackets.',
      criteria: [{ m: 1, t: R`M: $x=3$ (completing the square or $-\frac{b}{2a}$)` }, { m: 1, t: R`A: $(3,-4)$ written as a coordinate pair` }],
      model: R`<p>$y=(x-3)^2-4$, so the turning point is $(3,-4)$.</p>`,
      pitfalls: ['Giving only x = 3.', 'Writing 3, −4 without brackets, or with a missing closing bracket. The 2024 report highlighted this.'] },
    { id: 'mh-06', pool: H, type: 'mc', tech: 'free', marks: 1, topic: 'expo', kk: ['ex-laws'],
      stem: R`<p>The exact solution of $2^x=7$ is</p>`, options: [R`$x=\log_2 7$`, R`$x\approx2.807$`, R`$x=3.5$`, R`$x=\log_7 2$`], answer: 0,
      hint: 'Exact means no decimals.',
      why: ['Exact form, with the base as a subscript.', 'A decimal approximation is not exact. VCAA requires exact values unless told otherwise.', R`$2^{3.5}\ne7$.`, 'Base and argument are swapped.'] },
    { id: 'mh-07', pool: H, type: 'sa', tech: 'free', marks: 3, topic: 'pow', kk: ['pw-graph'],
      stem: R`<p>Sketch $y=\frac{1}{(x-2)^2}+1$ on paper, labelling asymptotes with their equations and the $y$-intercept with its coordinates.</p>`,
      hint: 'Truncus: both branches above the horizontal asymptote, symmetric about the vertical one.',
      criteria: [{ m: 1, t: R`Asymptotes labelled as equations $x=2$ and $y=1$` }, { m: 1, t: R`$y$-intercept $\left(0,\frac54\right)$` }, { m: 1, t: 'Correct truncus shape: symmetric about x = 2, approaching (never touching) both asymptotes' }],
      model: R`${P({ x: [-2, 6], y: [-0.5, 5], fns: [{ f: (x) => 1 / (x - 2) ** 2 + 1 }], lines: [{ x: 2 }, { y: 1 }], pts: [{ x: 0, y: 1.25, l: '(0, 5/4)', pos: 'w' }], text: [{ x: 2.2, y: 4.6, t: 'x = 2', anchor: 'start' }, { x: 5.2, y: 0.7, t: 'y = 1' }] })}`,
      pitfalls: ['Graph crossing or curling away from an asymptote.', 'Branches not symmetric about x = 2. The 2024 report noted this for a truncus.', 'Labelling asymptotes with numbers rather than equations.'] },
    { id: 'mh-08', pool: H, type: 'sa', tech: 'free', marks: 2, topic: 'poly', kk: ['po-thm'],
      stem: R`<p>Let $P(x)=x^3-7x+6$. Given that $P(1)=0$, <strong>hence</strong> factorise $P(x)$ fully.</p>`,
      hint: '“Hence” means use P(1) = 0: (x − 1) is a factor.',
      criteria: [{ m: 1, t: R`M: uses $(x-1)$ as a factor and divides/equates coefficients: $x^2+x-6$` }, { m: 1, t: R`A: $(x-1)(x-2)(x+3)$` }],
      model: R`<p>Since $P(1)=0$, $(x-1)$ is a factor: $x^3-7x+6=(x-1)(x^2+x-6)=(x-1)(x-2)(x+3)$.</p>`,
      pitfalls: ['Ignoring “hence” and guessing other factors without using P(1) = 0.'] },
    { id: 'mh-09', pool: H, type: 'mc', tech: 'free', marks: 1, topic: 'diff', kk: ['df-rule'],
      stem: R`<p>A question defines $f(x)=x^2-6x$ and asks for the derivative. Which answer uses the expected notation?</p>`,
      options: [R`$f'(x)=2x-6$`, R`$y'=2x-6$`, R`$f(x)'=2x-6$`, R`$\frac{dy}{dx}=2x-6$, where $y$ was never defined`], answer: 0,
      hint: 'Use the name of the function given in the question.',
      why: ['The reports stress using the function names given in the question.', R`$y$ wasn't defined in the question.`, 'Not standard notation.', 'Introducing an undefined variable is not acceptable.'] },
    { id: 'mh-10', pool: H, type: 'sa', tech: 'free', marks: 1, topic: 'poly', kk: ['po-thm'],
      stem: R`<p><strong>Show that</strong> $x=2$ is a solution of $x^3-3x-2=0$.</p>`, hint: 'Substitute, simplify to 0, and finish with a concluding statement.',
      criteria: [{ m: 1, t: R`Substitution shown: $2^3-3(2)-2=8-6-2=0$, with a conclusion` }],
      model: R`<p>$2^3-3(2)-2=8-6-2=0$, so $x=2$ is a solution.</p>`,
      pitfalls: ['Writing just “= 0” without showing the substitution. A “show that” needs every step.'] },
  ]);
  VCE.papers(S, [{
    id: 'hotspots', kind: 'test', marks: 15, title: 'Where students lose marks', reading: 0, writing: 25,
    description: 'Built from the VCAA examiners’ reports (2023–2025): interval notation, “equation” vs “gradient”, coordinates, exact values, transformation wording, function notation, “hence” and “show that”, and sketch conventions. No calculator, 15 marks, about 25 minutes.',
    sections: [{ title: 'Presentation and convention drill', qids: Array.from({ length: 10 }, (_, i) => `mh-${String(i + 1).padStart(2, '0')}`) }],
  }]);
})();
