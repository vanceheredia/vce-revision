// Year 10 Methods – step-by-step worked solutions for the practice exam's multiple-choice questions.
(() => {
  const R = String.raw;
  const ol = (...steps) => `<ol>${steps.map((x) => `<li>${x}</li>`).join('')}</ol>`;
  VCE.working('y10methods', {
    'y1-b01': ol('A rational number can be written as a fraction of two integers.', R`$\sqrt{49}=7=\frac71$, $0.\overline3=\frac13$ and $\frac{22}{7}$ are all fractions.`, R`$\sqrt2$ cannot be written as a fraction, so it is irrational.`),
    'y1-b02': ol(R`Start: $v=u+at$.`, R`Subtract $u$: $v-u=at$.`, R`Divide by $a$: $t=\frac{v-u}{a}$.`),
    'y1-b03': ol(R`Rearrange to $y=mx+c$: $2y=-3x+6$.`, R`$y=-\frac32x+3$, so $m=-\frac32$.`, 'Parallel lines have equal gradients: −3/2.'),
    'y1-b04': ol(R`$\Delta=b^2-4ac$ with $a=2$, $b=3$, $c=5$.`, R`$\Delta=9-40=-31$.`, R`$\Delta\lt 0$, so there are no real solutions.`),
    'y1-b05': ol(R`Group: $(x^2-6x)+(y^2+8y)=0$.`, R`Complete squares: $(x-3)^2-9+(y+4)^2-16=0$.`, R`$(x-3)^2+(y+4)^2=25$: centre $(3,-4)$, radius $\sqrt{25}=5$.`),
    'y1-b06': ol(R`Vertical asymptote where the denominator is 0: $x-1=0$, so $x=1$.`, R`As $x$ gets large, $\frac{2}{x-1}\to0$, so $y\to3$: horizontal asymptote $y=3$.`),
    'y1-b07': ol(R`Compound interest: $A=P(1+r)^n$.`, R`$A=5000\times1.04^3=5000\times1.124864$.`, R`$=5624.32$ dollars.`),
    'y1-b08': ol('The Richter scale is logarithmic: each increase of 1 multiplies the amplitude by 10.', R`From 5 to 7 is 2 steps: $10\times10=100$.`),
    'y1-b09': ol(R`$V=\frac13\pi r^2h$.`, R`$=\frac13\pi\times3^2\times4=\frac13\pi\times36=12\pi$.`, R`$\approx37.70$ cm³.`),
    'y1-b10': ol(R`$SA=4\pi r^2$.`, R`$=4\pi\times2^2=16\pi$.`, R`$\approx50.27$ m².`),
    'y1-b11': ol('Draw the right triangle: opposite = 40 (tower), adjacent = 60 (ground).', R`$\tan\theta=\frac{40}{60}$.`, R`$\theta=\tan^{-1}\left(\frac23\right)\approx33.7^\circ$.`),
    'y1-b12': ol(R`Two sides and the included angle → cosine rule: $c^2=a^2+b^2-2ab\cos C$.`, R`$c^2=25+49-2(5)(7)\cos60^\circ=74-35=39$.`, R`$c=\sqrt{39}\approx6.24$.`),
    'y1-b13': ol(R`IQR $=Q_3-Q_1=20-12=8$.`, R`Upper fence $=Q_3+1.5\times\text{IQR}=20+12=32$. Lower fence $=12-12=0$.`, R`Only 33 is outside the fences ($33>32$), so it is the outlier.`),
    'y1-b14': ol('Direction: scores decrease as gaming increases → negative.', 'Form: points follow a straight line → linear.', 'Strength: points are close to the line → strong.'),
    'y1-b15': ol(R`Test independence: $\Pr(A)\times\Pr(B)=0.4\times0.5=0.2$.`, R`This equals $\Pr(A\cap B)=0.2$, so $A$ and $B$ are independent.`, R`$\Pr(A\cap B)\ne0$, so they are not mutually exclusive.`),
  });
})();

// Step-by-step versions of the practice exam's short solutions (these replace the one-line solutions).
(() => {
  const R = String.raw;
  const ol = (...steps) => `<ol>${steps.map((x) => `<li>${x}</li>`).join('')}</ol>`;
  VCE.working('y10methods', {
    'y1-1a': ol(R`$\sqrt{48}=\sqrt{16\times3}=4\sqrt3$.`, R`$\sqrt{27}=\sqrt{9\times3}=3\sqrt3$.`, R`Like surds add: $4\sqrt3+3\sqrt3=7\sqrt3$.`),
    'y1-1b': ol(R`Multiply top and bottom by $\sqrt3$: $\frac{6}{\sqrt3}\times\frac{\sqrt3}{\sqrt3}$.`, R`$=\frac{6\sqrt3}{3}$.`, R`$=2\sqrt3$.`),
    'y1-1c': ol(R`$8^{\frac23}=\left(8^{\frac13}\right)^2$: the denominator 3 means cube root.`, R`$\sqrt[3]8=2$.`, R`$2^2=4$.`),
    'y1-2a': ol(R`Multiply every term in the first bracket by every term in the second: $2x\cdot x+2x\cdot4-3\cdot x-3\cdot4$.`, R`$=2x^2+8x-3x-12$.`, R`Collect like terms: $2x^2+5x-12$.`),
    'y1-2b': ol(R`$ac=3\times(-8)=-24$. Two numbers with product $-24$ and sum $-10$: $-12$ and $2$.`, R`Split the middle term: $3x^2-12x+2x-8$.`, R`Group: $3x(x-4)+2(x-4)$.`, R`$=(3x+2)(x-4)$.`),
    'y1-2c': ol(R`Common denominator 12: $\frac{4(x+1)}{12}+\frac{3(x-2)}{12}$.`, R`Expand the numerators: $\frac{4x+4+3x-6}{12}$.`, R`$=\frac{7x-2}{12}$.`),
    'y1-4b': ol(R`Add the equations to eliminate $y$: $(2x+y)+(x-y)=5+1$, so $3x=6$.`, R`$x=2$.`, R`Substitute into $x-y=1$: $2-y=1$, so $y=1$.`),
    'y1-5a': ol(R`Two numbers with product $-15$ and sum $-2$: $-5$ and $3$.`, R`$(x-5)(x+3)=0$.`, R`Null factor law: $x=5$ or $x=-3$.`),
    'y1-5b': ol(R`Halve the $x$-coefficient and square it: $\left(\frac{-2}{2}\right)^2=1$.`, R`Add and subtract it: $x^2-2x+1-1-15$.`, R`$=(x-1)^2-16$.`, R`Turning point $(1,-16)$.`),
    'y1-6a': ol(R`Remainder theorem: the remainder when dividing by $(x-1)$ is $P(1)$.`, R`$P(1)=1^3+2(1)^2-5(1)-6$.`, R`$=1+2-5-6=-8$.`),
    'y1-7b': ol(R`$\log_381$ asks: 3 to what power gives 81?`, R`$3^4=3\times3\times3\times3=81$.`, R`So $\log_381=4$.`),
    'y1-7c': ol(R`Quotient law: $\log_2a-\log_2b=\log_2\frac ab$.`, R`$\log_2\frac{40}{5}=\log_28$.`, R`$2^3=8$, so the answer is 3.`),
    'y1-8a': ol('The side opposite 30° and the hypotenuse: use sine.', R`$\sin30^\circ=\frac{\text{opp}}{10}$, so $\text{opp}=10\sin30^\circ$.`, R`$=10\times\frac12=5$ cm.`),
    'y1-8b': ol(R`Basic angle: $\sin30^\circ=\frac12$, so $30^\circ$.`, 'Sine is positive in quadrants 1 and 2.', R`$x=30$ and $x=180-30=150$.`),
    'y1-8c': ol(R`Use the 30–60–90 triangle with sides $1$, $\sqrt3$ and $2$ (hypotenuse).`, R`The side adjacent to $30^\circ$ is $\sqrt3$.`, R`$\cos30^\circ=\frac{\text{adj}}{\text{hyp}}=\frac{\sqrt3}{2}$.`),
    'y1-9a': ol(R`First red: $\frac35$.`, R`Second red (2 red left of 4): $\frac24$.`, R`$\frac35\times\frac24=\frac{6}{20}=\frac{3}{10}$.`),
    'y1-9b': ol('5 choices for the first letter, then 4, 3, 2, 1.', R`$5!=5\times4\times3\times2\times1$.`, R`$=120$.`),
    'y1-10a': ol('Circle theorem: the angle at the centre is twice the angle at the circumference (standing on the same arc).', R`$2\times35^\circ$.`, R`$=70^\circ$.`),
    'y1-10b': ol(R`$AB$ is a diameter, so $\angle ACB=90^\circ$ (angle in a semicircle).`, R`Angles in triangle $ABC$ add to $180^\circ$.`, R`$\angle CBA=180^\circ-90^\circ-38^\circ=52^\circ$.`),
    'y1-b1a': ol(R`2025 is $t=0$.`, R`$P(0)=2000\times1.05^0=2000\times1$.`, R`$=2000$.`),
    'y1-b1b': ol(R`Substitute $t=10$: $P=2000\times1.05^{10}$.`, R`$1.05^{10}\approx1.62889$, so $P\approx3257.8$.`, 'To the nearest whole number: 3258.'),
    'y1-b1d': ol(R`$P$-intercept: $P(0)=2000$, the point $(0,2000)$.`, R`End point: $P(20)=2000\times1.05^{20}\approx5306.6$, the point $(20,\ 5307)$.`, 'Draw an increasing curve that gets steeper, joining these points, and label both.'),
    'y1-b2a': ol('Take the right triangle inside the tent: vertical height 2 m, half the base edge 1.5 m, and the slant height as hypotenuse.', R`$s^2=2^2+1.5^2=4+2.25=6.25$.`, R`$s=\sqrt{6.25}=2.5$ m.`),
    'y1-b2c': ol(R`Pyramid volume $=\frac13\times\text{base area}\times\text{height}$.`, R`Base area $=3^2=9$ m².`, R`$V=\frac13\times9\times2=6$ m³.`),
    'y1-b2d': ol(R`Each triangular face: base 3 m, height = slant height 2.5 m.`, R`Area of one face $=\frac12\times3\times2.5=3.75$ m².`, R`Four faces: $4\times3.75=15$ m².`),
    'y1-b2e': ol(R`Base diagonal $=\sqrt{3^2+3^2}=3\sqrt2\approx4.243$, so half of it is $\approx2.121$ m.`, 'The edge is the hypotenuse of a right triangle with the vertical height (2 m) and half the diagonal.', R`$\sqrt{2^2+2.121^2}=\sqrt{4+4.5}=\sqrt{8.5}\approx2.92$ m.`),
  });
})();
