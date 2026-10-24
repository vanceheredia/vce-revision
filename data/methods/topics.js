// VCE Mathematical Methods Units 1 & 2 – topics, study design dot points and revision notes.
// Dot point text is from the VCE Mathematics Study Design (from 2023, v1.1), Units 1 and 2 Mathematical Methods,
// with its formulas re-typeset. Notes stay inside Units 1–2 scope: no chain/product rules, no derivatives of
// exponential or circular functions, no definite integrals (those are Units 3–4).
(() => {
  const R = String.raw;
  const P = VCE.plot;

  VCE.subject('methods', {
    intro: R`Every question here is new, written against the <strong>VCE Mathematics Study Design (from 2023)</strong>, Mathematical Methods Units 1 and 2. Units 1–2 exams are set by the school, so the practice exams copy the VCAA Units 3–4 format he will meet next year: <strong>Exam 1 with no calculator</strong> (short answer, 40 marks, 1 hour) and <strong>Exam 2 with a CAS calculator</strong> (20 multiple choice + extended response, 60 marks, 1½ hours; the VCAA Units 3–4 version is 80 marks in 2 hours). Each question shows whether it is <em>No calculator</em> or <em>CAS allowed</em>, and <em>Build a quiz</em> can filter by either.`,
    technique: R`<h1>Exam technique: Maths Methods</h1>
<h2>Two exams, two mindsets</h2>
<ul>
<li><strong>Exam 1 (no calculator)</strong> rewards clean algebra. Give <em>exact</em> answers ($\frac{\sqrt{3}}{2}$, $\log_2 5$, $\frac{\pi}{6}$) unless told otherwise, and show every step: a correct answer with no working can lose marks when more than 1 mark is available.</li>
<li><strong>Exam 2 (CAS)</strong> rewards setting the problem up correctly. Write the equation you are solving (e.g. "solve $f'(x)=0$ for $x$") before you use the CAS, then state the answer to the accuracy asked. Never round in the middle of a calculation.</li>
</ul>
<h2>Words that tell you what to do</h2>
<ul>
<li><strong>"Show that"</strong>: the answer is given, so the marks are for the working. Every step must be visible and the last line must match exactly.</li>
<li><strong>"Hence"</strong>: you must use the previous part. "Hence or otherwise" lets you use any method.</li>
<li><strong>"Exact value"</strong>: no decimals. <strong>"Correct to two decimal places"</strong>: round only at the end.</li>
<li><strong>"Sketch"</strong>: shape, intercepts, turning points and asymptotes labelled with coordinates; endpoints shown as closed (included) or open (excluded) circles.</li>
<li><strong>"State"</strong> or <strong>"write down"</strong>: no working needed, so don't spend long on it.</li>
</ul>
<h2>Common ways to lose marks</h2>
<ul>
<li>Leaving out the domain: "$f:[0,4]\to R$" matters, and so does checking that solutions lie in the given domain.</li>
<li>Giving only one solution of a circular-function equation when the domain contains several.</li>
<li>Writing $x$-coordinates only when a question asks for coordinates of a point.</li>
<li>Answering in the wrong units, or forgetting units in a worded problem.</li>
<li>Forgetting $+c$ in an anti-derivative, or not using the boundary condition to find $c$.</li>
<li>Rounding early in Exam 2 and drifting away from the correct answer.</li>
</ul>
<h2>How VCAA marks maths</h2>
<ul>
<li>Marks are <strong>M</strong> (method: a correct key step, e.g. "sets the derivative to 0 and attempts to solve") or <strong>A</strong> (answer: the correct final result). The marking guides in this app follow the same idea: each tick is a step an assessor looks for.</li>
<li>"In questions where more than one mark is available, appropriate working must be shown." A bare answer to a 2- or 3-mark question earns at most the A mark, often nothing.</li>
<li>Equivalent correct forms are accepted, but <strong>contradictory answers can't get full marks</strong>: cross out the attempts you don't want marked.</li>
<li>If asked for one answer and you give more, only the first is marked. There are no half marks. A later part can still earn marks if it follows correctly from your earlier wrong answer (a consequential error).</li>
</ul>
<h2>What the VCAA examiners' reports say (2023–2025)</h2>
<ul>
<li><strong>Exact answers</strong> unless a number of decimal places is asked for, and round only at the end (set your CAS float correctly).</li>
<li><strong>Answer in the form asked:</strong> an "equation" needs a full equation ($y=2x-8$), not just values; "coordinates" need both values in round brackets $(3,-11)$; equations of asymptotes are written as separate equations.</li>
<li><strong>Use the function names in the question.</strong> If it defines $f$, write $f'(x)$, not $y'$ or $\frac{dy}{dx}$ of something else. Logarithms: $\log_e(x)$ with the base as a subscript.</li>
<li><strong>Brackets matter:</strong> intervals in the correct order with the correct bracket types (square = included); strictly increasing/decreasing intervals use square brackets at stationary points; close every bracket; vinculums (fraction bars) and radical signs must cover everything they apply to.</li>
<li><strong>Graphs:</strong> use the grid; show asymptotic behaviour (approaching, never touching); keep symmetry (truncus, cosine); label intercepts, stationary points and endpoints with coordinates; respect the domain (closed or open endpoints); draw dashed asymptotes dark enough to see.</li>
<li><strong>Derivative graphs</strong> must match the original: zeros of $f'$ at the turning points of $f$, and extreme values of $f'$ where $f$ is steepest.</li>
<li><strong>"Show that", "verify", "hence":</strong> "show that" needs logical steps ending in the given result; "verify" means substitute and check; "hence" means use the previous part.</li>
<li><strong>Transformations:</strong> use the study design's wording, e.g. "dilation by a factor of 2 from the $x$-axis" (or "parallel to the $y$-axis"), "reflection in the $y$-axis", "translation 3 units in the positive direction of the $x$-axis".</li>
<li><strong>CAS syntax is not working.</strong> Write the equation or expression you solved in normal mathematical notation; calculator commands such as “solve(…)” don't count.</li>
<li><strong>Read the question again when finished.</strong> Common slips: giving the $x$-value when the point was asked for; finding the gradient when the tangent equation was asked for; average <em>value</em> instead of average <em>rate of change</em>.</li>
</ul>
<h2>Multiple choice (Exam 2)</h2>
<ul>
<li>About 1.5 minutes per question. Use the CAS to check options: substitute values, graph the options, or test a point.</li>
<li>Never leave one blank. There is no penalty for a wrong answer.</li>
</ul>
<h2>Reading time (15 minutes)</h2>
<ul><li>Read every extended question and plan your order. In Exam 2 you can't write, but you can think about which CAS commands you'll use.</li></ul>`,
    topics: [
      // ============================================================ UNIT 1
      {
        id: 'fn', group: 'Unit 1', title: 'Functions, relations and inverses',
        book: 'Cambridge Methods 1&2: look for the chapter on functions and relations.',
        kk: [
          {
            id: 'fn-def', short: 'Functions, domain and range',
            text: 'functions and function notation, domain, co-domain and range, representation of a function by rule, graph and table',
            note: R`<ul>
<li>A <strong>relation</strong> is any set of ordered pairs. A <strong>function</strong> is a relation where each $x$ value has exactly one $y$ value. <strong>Vertical line test</strong>: if any vertical line meets the graph more than once, it is not a function (e.g. the circle $x^2+y^2=9$ is not a function).</li>
<li>Notation: $f: [0, 5) \to R,\ f(x) = x^2$ gives the <strong>domain</strong> $[0,5)$, the <strong>co-domain</strong> $R$ and the <strong>rule</strong>. The <strong>range</strong> is the set of values actually produced, here $[0, 25)$.</li>
<li>Interval notation: square bracket = included, round bracket = excluded. $(-\infty, 3]$ means $x \le 3$. $R \setminus \{2\}$ means all reals except 2. $R^+$ means $(0, \infty)$.</li>
<li><strong>Maximal (implied) domain</strong>: the largest set of $x$ values the rule allows. Two things to watch at this level:
  <ul><li>Square roots need a non-negative inside: $y=\sqrt{4-2x}$ needs $4-2x\ge0$, so $x\le2$; the domain is $(-\infty, 2]$.</li>
  <li>Denominators can't be zero: $y=\frac{1}{x+3}$ has domain $R\setminus\{-3\}$.</li></ul></li>
<li>To find a range, sketch the graph over the domain and read off the lowest and highest $y$ values. Check the endpoints <em>and</em> any turning point in between.</li>
<li>A function is <strong>one-to-one</strong> if each $y$ value comes from exactly one $x$ value (passes the horizontal line test too). $y=x^3$ is one-to-one; $y=x^2$ on $R$ is many-to-one.</li></ul>`,
          },
          {
            id: 'fn-inv', short: 'Inverse functions',
            text: 'inverse functions and their graphs; the relation between the graph of a one-to-one function, its inverse function and reflection in the line y = x',
            note: R`<ul>
<li>Only <strong>one-to-one</strong> functions have an inverse function. If $f$ isn't one-to-one, restrict its domain (e.g. $f(x)=(x-1)^2$ with domain $[1,\infty)$).</li>
<li>Find the rule: swap $x$ and $y$, then make $y$ the subject. Example: $y=2x+6 \Rightarrow x=2y+6 \Rightarrow f^{-1}(x)=\frac{x-6}{2}$.</li>
<li><strong>Domain of $f^{-1}$ = range of $f$</strong>, and range of $f^{-1}$ = domain of $f$. Always state the domain of the inverse.</li>
<li>The graph of $y=f^{-1}(x)$ is the reflection of $y=f(x)$ in the line $y=x$. Any point $(a,b)$ on $f$ becomes $(b,a)$ on $f^{-1}$, and the two graphs can only meet on $y=x$ when $f$ is increasing.</li>
<li>Example: $f:[0,\infty)\to R,\ f(x)=x^2+1$ has range $[1,\infty)$, so $f^{-1}:[1,\infty)\to R,\ f^{-1}(x)=\sqrt{x-1}$ (positive root, because the range of $f^{-1}$ must be $[0,\infty)$).</li></ul>`,
          },
        ],
      },
      {
        id: 'lq', group: 'Unit 1', title: 'Linear and quadratic functions',
        book: 'Cambridge Methods 1&2: see the chapters on linear relations and on quadratics.',
        kk: [
          {
            id: 'lq-lin', short: 'Lines and simultaneous equations',
            text: 'solution of a set of simultaneous linear equations (geometric interpretation only required for two variables) and equations of the form f(x) = g(x) numerically, graphically and algebraically',
            note: R`<ul>
<li>Gradient $m=\frac{y_2-y_1}{x_2-x_1}$; line through $(x_1,y_1)$: $y-y_1=m(x-x_1)$. Parallel lines have equal gradients; perpendicular gradients satisfy $m_1m_2=-1$. Midpoint $\left(\frac{x_1+x_2}{2},\frac{y_1+y_2}{2}\right)$; distance $\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$.</li>
<li>Two equations in two unknowns: solve by substitution or elimination. Geometrically, each equation is a line:
<ul><li>lines cross once → a <strong>unique solution</strong>;</li><li>parallel and distinct → <strong>no solution</strong>;</li><li>the same line → <strong>infinitely many solutions</strong>.</li></ul></li>
<li>With a parameter, e.g. $mx+2y=4$ and $3x+y=k$: the lines are parallel when the gradients match ($-\frac{m}{2}=-3$, so $m=6$). Then there is no solution if $k\ne2$, and infinitely many if $k=2$ (the second equation is half the first).</li>
<li>Three or four unknowns: use the CAS (solve with a list of equations). By hand, eliminate one variable at a time.</li>
<li>$f(x)=g(x)$: the solutions are the $x$-coordinates where the graphs meet. Graphically, read the intersections; algebraically, rearrange to $f(x)-g(x)=0$.</li></ul>`,
          },
          {
            id: 'lq-quad', short: 'Quadratics: factorising, completing the square, discriminant',
            text: 'factorisation patterns, the quadratic formula and discriminant, and the null factor law; express $ax^2+bx+c$ in completed square form',
            note: R`<ul>
<li><strong>Factorising</strong>: common factor first; then $a^2-b^2=(a-b)(a+b)$, perfect squares $a^2\pm2ab+b^2=(a\pm b)^2$, or find two numbers multiplying to $ac$ and adding to $b$. <strong>Null factor law</strong>: if $AB=0$ then $A=0$ or $B=0$.</li>
<li><strong>Completing the square</strong>: $x^2+bx+c=\left(x+\frac{b}{2}\right)^2+c-\frac{b^2}{4}$. Example: $x^2-6x+11=(x-3)^2+2$, turning point $(3,2)$.<br>With $a\ne1$, factor $a$ out first: $2x^2+8x+5=2(x^2+4x)+5=2(x+2)^2-3$.</li>
<li>Turning point form $y=a(x-h)^2+k$: vertex $(h,k)$; axis of symmetry $x=h$; a minimum if $a>0$, a maximum if $a\lt 0$.</li>
<li><strong>Quadratic formula</strong>: $x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}$. The axis of symmetry is $x=-\frac{b}{2a}$.</li>
<li><strong>Discriminant</strong> $\Delta=b^2-4ac$:
<ul><li>$\Delta>0$: two solutions (two $x$-intercepts), which are rational if $\Delta$ is a perfect square;</li><li>$\Delta=0$: one solution (the graph touches the axis);</li><li>$\Delta\lt 0$: no real solutions.</li></ul></li>
<li>Typical question: "For what values of $k$ does $x^2+kx+9=0$ have two solutions?" Solve $k^2-36>0$, giving $k\lt -6$ or $k>6$.</li>
<li>Line and parabola: substitute to get a quadratic; $\Delta=0$ means the line is a tangent.</li></ul>`,
          },
        ],
      },
      {
        id: 'poly', group: 'Unit 1', title: 'Cubic and quartic polynomials',
        book: 'Cambridge Methods 1&2: see the chapter on polynomial functions.',
        kk: [
          {
            id: 'po-thm', short: 'Remainder, factor and rational root theorems',
            text: 'the connection between the roots of a polynomial function, its factors and the horizontal axis intercepts of its graph, including the remainder, factor and rational root theorems',
            note: R`<ul>
<li><strong>Remainder theorem</strong>: when $P(x)$ is divided by $(x-a)$, the remainder is $P(a)$. For $(\alpha x-\beta)$ the remainder is $P\!\left(\frac{\beta}{\alpha}\right)$.</li>
<li><strong>Factor theorem</strong>: $(x-a)$ is a factor of $P(x)$ exactly when $P(a)=0$.</li>
<li><strong>Rational root theorem</strong>: if $P(x)=a_nx^n+\dots+a_0$ has integer coefficients, any rational root $\frac{p}{q}$ in lowest terms has $p$ dividing $a_0$ and $q$ dividing $a_n$. That gives a short list of values to test.</li>
<li><strong>Solving a cubic by hand</strong>: (1) test $\pm1,\pm2,\dots$ until $P(a)=0$; (2) divide by $(x-a)$ (long division or equating coefficients) to get a quadratic; (3) factorise or use the quadratic formula.<br>Example: $x^3-2x^2-5x+6$: $P(1)=0$, and $x^3-2x^2-5x+6=(x-1)(x^2-x-6)=(x-1)(x-3)(x+2)$.</li>
<li>Patterns: sum and difference of cubes $a^3\pm b^3=(a\pm b)(a^2\mp ab+b^2)$; grouping, e.g. $x^3+2x^2-9x-18=x^2(x+2)-9(x+2)=(x+2)(x-3)(x+3)$.</li>
<li><strong>Express a cubic as $a(x-h)^3+k$</strong> (key skill): expand and compare. Example: $2x^3-12x^2+24x-13=2(x^3-6x^2+12x-8)+16-13=2(x-2)^3+3$.</li>
<li><strong>Bisection method</strong> (see the Numerical methods topic) finds roots that can't be found exactly.</li></ul>`,
          },
          {
            id: 'po-graph', short: 'Graphs of cubics and quartics',
            text: 'graphs of polynomial functions of low degree, and interpretation of key features of these graphs; sketch by hand graphs of linear, quadratic and cubic polynomial functions, and quartic polynomial functions in factored form, including cases where an x-axis intercept is a touch point or a stationary point of inflection',
            note: R`<ul>
<li><strong>End behaviour</strong> comes from the leading term. Positive cubic: bottom-left to top-right. Negative cubic: top-left to bottom-right. Positive quartic: both ends up.</li>
<li><strong>Repeated factors</strong>:
<ul><li>single factor $(x-a)$: the graph <em>crosses</em> the axis at $x=a$;</li><li>squared $(x-a)^2$: it <em>touches</em> (a turning point on the axis);</li><li>cubed $(x-a)^3$: it crosses with a <em>stationary point of inflection</em>.</li></ul></li>
<li>$y=a(x-h)^3+k$ has a stationary point of inflection at $(h,k)$. $y=a(x-h)^4+k$ has a turning point at $(h,k)$ (a flattened "U").</li>
<li>To sketch $y=(x+1)(x-2)^2$: $y$-intercept $(0,4)$; crosses at $x=-1$; touches at $x=2$; positive cubic. Before calculus, give approximate turning-point locations only; in Unit 2, find them exactly with $f'(x)=0$.</li>
<li><strong>Finding a rule from a graph</strong>: read the intercepts to write $y=a(x-p)(x-q)(x-r)$, then substitute another known point (often the $y$-intercept) to find $a$.</li>
<li>Inequalities such as $P(x)>0$: sketch, then read the $x$ values where the graph is above the axis.</li></ul>`,
          },
        ],
      },
      {
        id: 'pow', group: 'Unit 1', title: 'Power functions and transformations',
        book: 'Cambridge Methods 1&2: see the chapters on graphs (power functions) and on transformations.',
        kk: [
          {
            id: 'pw-graph', short: 'Power functions and their graphs',
            text: R`graphs of power functions $f(x)=x^n$ for $n\in\{-2,-1,\frac{1}{3},\frac{1}{2},1,2,3,4\}$, and transformations of these graphs to the form $y=a(x+b)^n+c$ where $a,b,c\in R$ and $a\ne0$`,
            note: R`<ul>
<li>$y=\frac{1}{x}$ (hyperbola): asymptotes $x=0$ and $y=0$; domain and range $R\setminus\{0\}$; branches in the 1st and 3rd quadrants.</li>
<li>$y=\frac{1}{x^2}$ (truncus): asymptotes $x=0$ and $y=0$; range $(0,\infty)$; both branches above the $x$-axis.</li>
<li>$y=\sqrt{x}=x^{1/2}$: domain $[0,\infty)$, starting at the origin. $y=\sqrt[3]{x}=x^{1/3}$: domain $R$, with a vertical tangent at the origin.</li>
<li>$y=x^2, x^4$ are even: symmetric about the $y$-axis. $y=x^3$ is odd: rotational symmetry about the origin.</li>
<li>For $y=a(x+b)^n+c$, the "centre" moves to $(-b, c)$.
<ul><li>Hyperbola $y=\frac{a}{x+b}+c$: asymptotes $x=-b$ and $y=c$.</li><li>Square root $y=a\sqrt{x+b}+c$: starting point $(-b,c)$.</li></ul></li>
<li>Example: $y=\frac{2}{x-1}+3$ has asymptotes $x=1$ and $y=3$, domain $R\setminus\{1\}$ and range $R\setminus\{3\}$. The $x$-intercept is where $\frac{2}{x-1}=-3$, giving $x=\frac{1}{3}$; the $y$-intercept is $(0,1)$.</li>
<li>Sketch: draw the asymptotes as dashed lines and label them with their equations; label all intercepts.</li></ul>`,
          },
          {
            id: 'tr-map', short: 'Transformations of the plane',
            text: 'transformations of the plane and application to basic functions and relations by simple combinations of dilations (students should be familiar with both ‘parallel to an axis’ and ‘from an axis’ descriptions), reflections in an axis and translations',
            note: R`<ul>
<li>Work with the <strong>mapping</strong> $(x,y)\to(x',y')$ and then substitute. This is reliable for any order of transformations.</li>
<li>Dictionary:
<table><tr><th>Transformation</th><th>Mapping</th><th>Effect on $y=f(x)$</th></tr>
<tr><td>Dilation by factor $k$ from the $x$-axis (parallel to the $y$-axis)</td><td>$(x,y)\to(x,ky)$</td><td>$y=kf(x)$</td></tr>
<tr><td>Dilation by factor $k$ from the $y$-axis (parallel to the $x$-axis)</td><td>$(x,y)\to(kx,y)$</td><td>$y=f\!\left(\frac{x}{k}\right)$</td></tr>
<tr><td>Reflection in the $x$-axis</td><td>$(x,y)\to(x,-y)$</td><td>$y=-f(x)$</td></tr>
<tr><td>Reflection in the $y$-axis</td><td>$(x,y)\to(-x,y)$</td><td>$y=f(-x)$</td></tr>
<tr><td>Translation $h$ right and $k$ up</td><td>$(x,y)\to(x+h,y+k)$</td><td>$y=f(x-h)+k$</td></tr></table></li>
<li>Method: write $x'=\dots$, $y'=\dots$, make $x$ and $y$ the subjects, then substitute into the original rule. Example: $y=x^2$ dilated by factor 3 from the $y$-axis, then translated 2 units down: $x'=3x$, $y'=y-2$, so $x=\frac{x'}{3}$, $y=y'+2$, giving $y'+2=\left(\frac{x'}{3}\right)^2$ and $y=\frac{x^2}{9}-2$.</li>
<li>Order matters: dilating then translating is not always the same as translating then dilating.</li>
<li>Reading a transformed rule: $y=-2(x-1)^3+4$ is $y=x^3$ dilated by factor 2 from the $x$-axis, reflected in the $x$-axis, then translated 1 right and 4 up.</li></ul>`,
          },
        ],
      },
      {
        id: 'rate', group: 'Unit 1', title: 'Rates of change',
        book: 'Cambridge Methods 1&2: see the chapter on rates of change.',
        kk: [
          {
            id: 'rc-avg', short: 'Average rate of change and graphs of data',
            text: 'average and instantaneous rates of change in a variety of practical contexts; interpretation of graphs of empirical data with respect to rate of change such as temperature or pollution levels over time, motion graphs and the height of water in containers of different shapes that are being filled at a constant rate',
            note: R`<ul>
<li><strong>Average rate of change</strong> of $f$ from $x=a$ to $x=b$ is $\frac{f(b)-f(a)}{b-a}$: the gradient of the <strong>secant</strong> (chord) joining the two points. Units: (units of $y$) per (unit of $x$), e.g. °C per hour.</li>
<li>A <strong>constant</strong> rate of change means a straight-line graph. The steeper the graph, the faster the change; a horizontal section means no change.</li>
<li><strong>Containers filled at a constant rate</strong>: where the container is narrow, the height rises quickly (steep); where it is wide, slowly (gentle). A cylinder gives a straight line. A cone with its point at the bottom rises fast at first, then slows, giving a curve that is concave down.</li>
<li><strong>Motion graphs</strong>: on a position–time graph, the gradient is the velocity. A horizontal section means stationary; a negative gradient means moving back towards the start. Average velocity = change in position ÷ change in time (not the same as average speed when the direction changes).</li>
<li>Example: $f(x)=x^2-3x$ from $x=1$ to $x=4$: $\frac{f(4)-f(1)}{3}=\frac{4-(-2)}{3}=2$.</li></ul>`,
          },
          {
            id: 'rc-inst', short: 'Instantaneous rate and gradient of a tangent',
            text: 'use of gradient of a tangent at a point on the graph of a function to describe and measure instantaneous rate of change of the function, including consideration of where the rate of change is positive, negative or zero, and the relationship of the gradient function to features of the graph of the original function',
            note: R`<ul>
<li>The <strong>instantaneous rate of change</strong> at $x=a$ is the gradient of the <strong>tangent</strong> at that point. Estimate it by drawing the tangent and finding its gradient from two points on it, or by calculating secant gradients over smaller and smaller intervals around $a$ (the limit idea).</li>
<li>Example: for $f(x)=x^2$ at $x=3$, secants from 3 to $3+h$ have gradient $6+h$. As $h\to0$, the gradient approaches 6.</li>
<li>The <strong>gradient function</strong> $f'(x)$ shows the gradient at every point:
<ul><li>where $f$ is increasing, $f'(x)>0$ (above the axis);</li><li>where $f$ is decreasing, $f'(x)\lt 0$;</li><li>at turning points, $f'(x)=0$ (the gradient graph crosses or touches the axis);</li><li>the steepest point of $f$ is a turning point of $f'$.</li></ul></li>
<li>Sketching $f'$ from $f$: mark the $x$ values of the turning points of $f$ as the zeros of $f'$, then decide the sign in each interval. A cubic $f$ gives a quadratic-shaped $f'$; a quadratic $f$ gives a straight-line $f'$.</li>
<li>Informal ideas: a graph must be <strong>smooth</strong> (no sharp corner) and <strong>continuous</strong> (no break) for the gradient to exist there.</li></ul>`,
          },
        ],
      },
      {
        id: 'count', group: 'Unit 1', title: 'Counting and probability',
        book: 'Cambridge Methods 1&2: see the chapters on probability and counting methods.',
        kk: [
          {
            id: 'pr-space', short: 'Sample spaces, events and simulation',
            text: 'random experiments, sample spaces, outcomes, elementary and compound events, random variables and the distribution of results of experiments; simulation using simple random generators such as coins, dice, spinners and pseudo-random generators using technology',
            note: R`<ul>
<li>The <strong>sample space</strong> $\varepsilon$ is the set of all outcomes; an <strong>event</strong> is a subset of it. For equally likely outcomes, $\Pr(A)=\frac{n(A)}{n(\varepsilon)}$.</li>
<li>Probabilities satisfy $0\le\Pr(A)\le1$, and the probabilities of all outcomes sum to 1. Complement: $\Pr(A')=1-\Pr(A)$.</li>
<li>Represent two-step experiments with a <strong>grid</strong> (e.g. two dice: 36 equally likely outcomes) or a <strong>tree diagram</strong>. Two dice: $\Pr(\text{sum}=7)=\frac{6}{36}=\frac{1}{6}$.</li>
<li>A <strong>random variable</strong> assigns a number to each outcome (e.g. $X$ = number of heads in 3 tosses, which takes values 0, 1, 2, 3 with probabilities $\frac18,\frac38,\frac38,\frac18$).</li>
<li><strong>Simulation</strong>: repeat a random experiment many times (coins, dice, or a random number generator). The <strong>relative frequency</strong> $\frac{\text{number of times } A \text{ occurs}}{\text{number of trials}}$ estimates $\Pr(A)$. More trials give a more reliable estimate, but results vary from one simulation to the next.</li>
<li>Expected number of times: number of trials × probability (e.g. 600 rolls × $\frac16$ = 100 sixes expected).</li></ul>`,
          },
          {
            id: 'pr-count', short: 'Counting: arrangements and combinations',
            text: R`addition and multiplication principles for counting; combinations including the concept of a selection and computation of $^{n}C_{r}$ and the application of counting techniques to probability`,
            note: R`<ul>
<li><strong>Multiplication principle</strong>: if one choice can be made $m$ ways and then another $n$ ways, together there are $mn$ ways. <strong>Addition principle</strong>: for mutually exclusive alternatives (this OR that), add.</li>
<li><strong>Arrangements (order matters)</strong>: $n$ different objects in a row: $n!$ ways. Choosing and arranging $r$ from $n$: $^{n}P_{r}=\frac{n!}{(n-r)!}$.</li>
<li><strong>Selections (order doesn't matter)</strong>: $^{n}C_{r}=\binom{n}{r}=\frac{n!}{r!(n-r)!}$. Example: a committee of 3 from 8 people is $\binom{8}{3}=56$.</li>
<li>Useful facts: $\binom{n}{0}=\binom{n}{n}=1$, $\binom{n}{1}=n$, and $\binom{n}{r}=\binom{n}{n-r}$.</li>
<li>Restrictions: deal with them first. "A committee of 2 boys and 3 girls from 6 boys and 7 girls" is $\binom{6}{2}\binom{7}{3}=15\times35=525$. "At least one…": use $1-\Pr(\text{none})$.</li>
<li>Probability by counting: $\Pr=\frac{\text{number of favourable selections}}{\text{total number of selections}}$. Example: 2 cards from 5 red and 3 black, $\Pr(\text{both red})=\frac{\binom52}{\binom82}=\frac{10}{28}=\frac{5}{14}$.</li></ul>`,
          },
        ],
      },
      {
        id: 'numer', group: 'Unit 1 & 2', title: 'Numerical methods and algorithms',
        book: 'Cambridge Methods 1&2: see the sections on the bisection method and on Newton’s method (algorithms and pseudocode).',
        kk: [
          {
            id: 'nm-bis', short: 'Bisection method and pseudocode',
            text: 'solution of polynomial equations of low degree, numerically, graphically and algebraically, including numerical approximation of roots of simple polynomial functions using the bisection method algorithm; key elements of algorithm design: sequencing, decision-making, repetition and representation including the use of pseudocode',
            note: R`<ul>
<li>Idea: if $f$ is continuous and $f(a)$ and $f(b)$ have <strong>opposite signs</strong>, there is a root between $a$ and $b$.</li>
<li>Each step: find the midpoint $m=\frac{a+b}{2}$ and evaluate $f(m)$. Keep the half where the sign changes:
<ul><li>if $f(a)f(m)\lt 0$, set $b=m$;</li><li>otherwise set $a=m$.</li></ul>Every step halves the interval, so after $n$ steps the width is $\frac{b-a}{2^n}$.</li>
<li>Example: $f(x)=x^3-x-3$ on $[1,2]$: $f(1)=-3$ and $f(2)=3$. Midpoint 1.5: $f(1.5)=-1.125$, so the root is in $[1.5,2]$. Midpoint 1.75: $f(1.75)\approx0.609$, so the root is in $[1.5,1.75]$, and so on.</li>
<li>Pseudocode reads like this:
<div class="pseudo">define bisect(f, a, b, tol)
  while (b − a) > tol
    m ← (a + b) / 2
    if f(a) × f(m) < 0 then
      b ← m
    else
      a ← m
    end if
  end while
  return (a + b) / 2</div>
The <strong>sequence</strong> is the steps in order; <strong>decision</strong> is the if…else; <strong>repetition</strong> is the while loop.</li>
<li>Limitation: bisection can't find a touch point (no sign change), and it is slow (about 3.3 steps per extra decimal place).</li></ul>`,
          },
          {
            id: 'nm-newton', short: 'Newton’s method',
            text: 'numerical approximation of roots of cubic polynomial functions using the Newton’s method algorithm',
            note: R`<ul>
<li>Start with a guess $x_0$ near the root. Follow the tangent at $(x_0,f(x_0))$ down to the $x$-axis. Where it lands is the next estimate:
$$x_{n+1}=x_n-\frac{f(x_n)}{f'(x_n)}$$</li>
<li>Example: $f(x)=x^3-2x-5$, so $f'(x)=3x^2-2$. With $x_0=2$: $x_1=2-\frac{-1}{10}=2.1$. Then $x_2=2.1-\frac{0.061}{11.23}\approx2.0946$ (the root is 2.0946 to 4 d.p.).</li>
<li>Newton's method usually converges much faster than bisection: the number of correct decimal places roughly doubles each step.</li>
<li>When it fails:
<ul><li>if $f'(x_n)=0$ (a stationary point), the tangent is horizontal and you can't divide by zero;</li><li>a starting value near a turning point can send the estimate far away, or to a different root;</li><li>it can cycle between values.</li></ul></li>
<li>Stopping rule in pseudocode: repeat until $|x_{n+1}-x_n|$ is less than a tolerance, or after a maximum number of steps.</li></ul>`,
          },
        ],
      },
      // ============================================================ UNIT 2
      {
        id: 'circ', group: 'Unit 2', title: 'Circular (trigonometric) functions',
        book: 'Cambridge Methods 1&2: see the chapter(s) on circular functions.',
        kk: [
          {
            id: 'ci-unit', short: 'Radians, unit circle and exact values',
            text: R`the unit circle, radians, arc length and sine, cosine and tangent as functions of a real variable; the relationships $\sin(x)\approx x$ for small values of $x$, $\sin^2(x)+\cos^2(x)=1$ and $\tan(x)=\frac{\sin(x)}{\cos(x)}$; exact values for sine, cosine and tangent of $\frac{n\pi}{6}$ and $\frac{n\pi}{4}$, $n\in Z$; symmetry properties, complementary relations and periodicity properties`,
            note: R`<ul>
<li>$\pi$ radians $=180^\circ$. To convert, multiply by $\frac{\pi}{180}$ (degrees → radians) or $\frac{180}{\pi}$. Arc length $l=r\theta$ ($\theta$ in radians).</li>
<li>On the unit circle, the point at angle $\theta$ is $(\cos\theta,\sin\theta)$, and $\tan\theta=\frac{\sin\theta}{\cos\theta}$ is the gradient of the radius.</li>
<li>Exact values:
<table><tr><th>$\theta$</th><th>$0$</th><th>$\frac{\pi}{6}$</th><th>$\frac{\pi}{4}$</th><th>$\frac{\pi}{3}$</th><th>$\frac{\pi}{2}$</th></tr>
<tr><td>$\sin$</td><td>0</td><td>$\frac12$</td><td>$\frac{\sqrt2}{2}$</td><td>$\frac{\sqrt3}{2}$</td><td>1</td></tr>
<tr><td>$\cos$</td><td>1</td><td>$\frac{\sqrt3}{2}$</td><td>$\frac{\sqrt2}{2}$</td><td>$\frac12$</td><td>0</td></tr>
<tr><td>$\tan$</td><td>0</td><td>$\frac{\sqrt3}{3}$</td><td>1</td><td>$\sqrt3$</td><td>undefined</td></tr></table></li>
<li><strong>Quadrant signs</strong> (CAST, starting from the fourth quadrant going anticlockwise): Q1 all positive; Q2 sin positive; Q3 tan positive; Q4 cos positive.</li>
<li>Symmetry: $\sin(\pi-\theta)=\sin\theta$, $\cos(\pi-\theta)=-\cos\theta$, $\sin(\pi+\theta)=-\sin\theta$, $\cos(-\theta)=\cos\theta$, $\sin(-\theta)=-\sin\theta$. Example: $\cos\frac{5\pi}{6}=-\cos\frac{\pi}{6}=-\frac{\sqrt3}{2}$.</li>
<li>Complementary: $\sin\!\left(\frac{\pi}{2}-\theta\right)=\cos\theta$ and $\cos\!\left(\frac{\pi}{2}-\theta\right)=\sin\theta$.</li>
<li>Periodicity: $\sin(\theta+2\pi)=\sin\theta$ and $\tan(\theta+\pi)=\tan\theta$.</li>
<li>Pythagorean identity: if $\sin\theta=\frac35$ and $\theta$ is in Q2, then $\cos\theta=-\frac45$ and $\tan\theta=-\frac34$.</li>
<li>Small angles: $\sin x\approx x$ when $x$ (in radians) is close to 0, e.g. $\sin(0.05)\approx0.05$.</li></ul>`,
          },
          {
            id: 'ci-graph', short: 'Graphs of y = A f(nx) + c',
            text: R`circular functions of the form $y=Af(nx)+c$ and their graphs, where $f$ is the sine, cosine or tangent function, and $A,n,c\in R$ with $A,n\ne0$; simple applications of sine and cosine functions of the above form, with examples from various modelling contexts, the interpretation of period, amplitude and mean value in these contexts and their relationship to the parameters $A$, $n$ and $c$`,
            note: R`<ul>
<li>For $y=A\sin(nx)+c$ or $y=A\cos(nx)+c$:
<ul><li><strong>amplitude</strong> $|A|$;</li><li><strong>period</strong> $\frac{2\pi}{|n|}$;</li><li><strong>mean (centre) line</strong> $y=c$;</li><li><strong>range</strong> $[c-|A|,\ c+|A|]$.</li></ul>If $A\lt 0$, the graph is reflected in its mean line.</li>
<li>For $y=A\tan(nx)+c$: period $\frac{\pi}{|n|}$; vertical asymptotes where $nx=\frac{\pi}{2}+k\pi$; range $R$.</li>
<li>Sketching $y=2\cos(3x)+1$ for $x\in[0,\frac{2\pi}{3}]$: period $\frac{2\pi}{3}$, so one full cycle. Maximum 3 at $x=0$; minimum $-1$ at $x=\frac{\pi}{3}$; $x$-intercepts where $\cos 3x=-\frac12$. Label the endpoints.</li>
<li><strong>Modelling</strong>: the depth of water $d(t)=1.5\sin\!\left(\frac{\pi t}{6}\right)+4$ (with $t$ in hours) has mean depth 4 m, amplitude 1.5 m (from 2.5 m to 5.5 m) and period 12 hours. To find $A,n,c$ from data: $c$ = (max + min)/2; $|A|$ = (max − min)/2; $n=\frac{2\pi}{\text{period}}$.</li>
<li>Check your calculator is in <strong>radian</strong> mode for all of this.</li></ul>`,
          },
          {
            id: 'ci-eq', short: 'Solving circular-function equations',
            text: R`use of inverse functions and transformations to solve equations of the form $Af(nx)+c=k$, where $A,n,c,k\in R$ for $A,n\ne0$, and $f$ is sine, cosine, tangent or $a^x$, using exact or approximate values on a given domain`,
            note: R`<ul>
<li>Method for $\sin(nx)=k$ on a domain:
<ol><li>Isolate the function: $2\sin(2x)+1=0 \Rightarrow \sin(2x)=-\frac12$.</li>
<li>Adjust the domain: if $x\in[0,2\pi]$, then $2x\in[0,4\pi]$.</li>
<li>Find the basic angle: $\sin^{-1}\frac12=\frac{\pi}{6}$.</li>
<li>Choose the quadrants from the sign: sin is negative in Q3 and Q4, so $2x=\pi+\frac{\pi}{6}, 2\pi-\frac{\pi}{6}$, then add $2\pi$ to each: $2x=\frac{7\pi}{6},\frac{11\pi}{6},\frac{19\pi}{6},\frac{23\pi}{6}$.</li>
<li>Divide by 2: $x=\frac{7\pi}{12},\frac{11\pi}{12},\frac{19\pi}{12},\frac{23\pi}{12}$.</li></ol></li>
<li>Tangent repeats every $\pi$: $\tan x=\sqrt3$ on $[0,2\pi]$ gives $x=\frac{\pi}{3},\frac{4\pi}{3}$.</li>
<li>$\sin x=\cos x$ is the same as $\tan x=1$ (divide by $\cos x$).</li>
<li>Count the solutions you expect: $\sin(nx)=k$ (with $|k|\lt 1$) has 2 solutions per period. Larger $n$ → more periods in the domain → more solutions.</li>
<li>With the CAS: solve with the domain restriction, and check the number of solutions against a graph. In your written answer, write the equation in normal notation (“solving $2\sin(2x)+1=0$ for $x\in[0,2\pi]$”). VCAA does not accept calculator syntax as working.</li>
<li>Exponential versions: $3\times2^x-1=11\Rightarrow2^x=4\Rightarrow x=2$, or with logs if needed (see the exponential topic).</li></ul>`,
          },
        ],
      },
      {
        id: 'expo', group: 'Unit 2', title: 'Exponential and logarithmic functions',
        book: 'Cambridge Methods 1&2: see the chapter on exponential functions and logarithms.',
        kk: [
          {
            id: 'ex-laws', short: 'Index and logarithm laws, exponential equations',
            text: 'exponent laws and logarithm laws, including their application to the solution of simple exponential equations',
            note: R`<ul>
<li>Index laws: $a^m a^n=a^{m+n}$, $\frac{a^m}{a^n}=a^{m-n}$, $(a^m)^n=a^{mn}$, $(ab)^n=a^nb^n$, $a^0=1$, $a^{-n}=\frac{1}{a^n}$, $a^{\frac{m}{n}}=\left(\sqrt[n]{a}\right)^m$.</li>
<li>Definition: $\log_a y = x \iff a^x=y$ (for $a>0$, $a\ne1$, $y>0$). So $\log_2 8=3$, $\log_{10}0.01=-2$ and $\log_a 1=0$.</li>
<li>Log laws: $\log_a(mn)=\log_a m+\log_a n$; $\log_a\frac{m}{n}=\log_a m-\log_a n$; $\log_a(m^p)=p\log_a m$; $\log_a a=1$; $a^{\log_a x}=x$; $\log_a(a^x)=x$.</li>
<li><strong>Solving</strong>:
<ul><li>same base: $9^{x}=27^{x-1}\Rightarrow3^{2x}=3^{3x-3}\Rightarrow x=3$;</li>
<li>different base: $5^x=12\Rightarrow x=\log_5 12=\frac{\log_{10}12}{\log_{10}5}\approx1.544$;</li>
<li>quadratic in disguise: $4^x-6\times2^x+8=0$; let $u=2^x$: $u^2-6u+8=0$, so $u=2$ or $4$, and $x=1$ or $2$ (reject any $u\le0$, since $2^x>0$).</li></ul></li>
<li>Log equations: combine into a single log first, then convert. $\log_2 x+\log_2(x-2)=3\Rightarrow x(x-2)=8\Rightarrow x=4$ (reject $x=-2$: you can't take the log of a negative).</li>
<li>Euler's number $e\approx2.718$ is a base like any other. VCAA writes $\log_e(x)$, with the base as a subscript; calculators label it “ln”. Use $\log_e$ in written answers.</li></ul>`,
          },
          {
            id: 'ex-graph', short: 'Exponential and logarithmic graphs',
            text: R`exponential functions of the form $f:R\to R,\ f(x)=Aa^{kx}+c$ and their graphs, where $a\in R^+$, $A,k,c\in R$, $A\ne0$; logarithmic functions of the form $f:R^+\to R,\ f(x)=\log_a(x)$, where $a>1$, and their graphs, and as the inverse function of $y=a^x$, including the relationships $a^{\log_a(x)}=x$ and $\log_a(a^x)=x$`,
            note: R`<ul>
<li>$y=a^x$ ($a>1$): passes through $(0,1)$ and $(1,a)$; horizontal asymptote $y=0$; range $(0,\infty)$; increasing. $y=a^{-x}$ is its reflection in the $y$-axis (decreasing).</li>
<li>$y=Aa^{kx}+c$: asymptote $y=c$; $y$-intercept $(0,A+c)$; range $(c,\infty)$ if $A>0$, or $(-\infty,c)$ if $A\lt 0$. The $x$-intercept (if any) comes from solving $Aa^{kx}+c=0$.</li>
<li>Example: $y=-2\times3^{x}+6$: asymptote $y=6$; $y$-intercept $(0,4)$; $x$-intercept where $3^x=3$, so $(1,0)$; range $(-\infty,6)$.</li>
<li>$y=\log_a x$ ($a>1$) is the inverse of $y=a^x$: the reflection in $y=x$. It passes through $(1,0)$ and $(a,1)$; vertical asymptote $x=0$; domain $(0,\infty)$; range $R$.</li>
<li>Bigger base → steeper exponential, and flatter log graph for $x>1$.</li></ul>`,
          },
          {
            id: 'ex-model', short: 'Exponential growth and decay models',
            text: 'simple applications of exponential functions of the above form, with examples from various modelling contexts, and the interpretation of initial value, rate of growth or decay, half-life, doubling time and long run value in these contexts and their relationship to the parameters A, k and c',
            note: R`<ul>
<li>$N(t)=N_0a^{kt}+c$: with $c=0$, the initial value is $N(0)=N_0$. Growth if $a^k>1$; decay if $0\lt a^k\lt 1$.</li>
<li><strong>Doubling time</strong>: solve $N_0a^{kt}=2N_0$. <strong>Half-life</strong>: solve $N_0a^{kt}=\frac12N_0$. Example: $M(t)=80\times2^{-t/5}$ (grams, $t$ in years) has half-life 5 years; after 15 years, $80\times2^{-3}=10$ g remain.</li>
<li><strong>Long-run value</strong>: the asymptote $c$. Cooling: $T(t)=70\times(0.9)^{t}+22$ (°C, minutes) starts at 92 °C and approaches room temperature 22 °C.</li>
<li>Finding the parameters from data: substitute two points and solve simultaneously (a CAS question). E.g. $P(0)=500$ and $P(3)=1500$ in $P=Aa^t$ give $A=500$, $a^3=3$, $a=\sqrt[3]{3}$.</li>
<li>Percentage change: "grows by 4% per year" means multiply by 1.04 each year: $P=P_0(1.04)^t$.</li>
<li>Data that rise or fall by a constant <em>ratio</em> per step suggest an exponential model; data that repeat periodically suggest a sine or cosine model.</li></ul>`,
          },
        ],
      },
      {
        id: 'diff', group: 'Unit 2', title: 'Differentiation',
        book: 'Cambridge Methods 1&2: see the chapters on differentiation and its applications.',
        kk: [
          {
            id: 'df-lim', short: 'Limit definition and first principles',
            text: R`informal treatment of the gradient of the tangent to a curve at a point as a limit, and the limit definition of the derivative of a function $f'(x)=\lim_{h\to0}\frac{f(x)-f(x-h)}{h}=\lim_{h\to0}\frac{f(x+h)-f(x)}{h}$; the central difference approximation $f'(x)\approx\frac{f(x+h)-f(x-h)}{2h}$ and its graphical interpretation; informal concepts of limit, continuity and differentiability`,
            note: R`<ul>
<li><strong>First principles</strong>: $f'(x)=\lim_{h\to0}\frac{f(x+h)-f(x)}{h}$. Expand, simplify, cancel the $h$, then let $h\to0$.<br>Example: $f(x)=x^2-3x$:
$\frac{(x+h)^2-3(x+h)-(x^2-3x)}{h}=\frac{2xh+h^2-3h}{h}=2x+h-3\to2x-3$.</li>
<li>Show every step in a first-principles question: the expansion, the cancelling, and the limit with "$\lim_{h\to0}$" written until the last line.</li>
<li><strong>Central difference</strong>: $f'(x)\approx\frac{f(x+h)-f(x-h)}{2h}$ is the gradient of the secant through points $h$ either side of $x$. It is usually more accurate than the forward difference for the same $h$; for a quadratic it is exact.<br>Example: $f(x)=x^3$, $x=2$, $h=0.1$: $\frac{2.1^3-1.9^3}{0.2}=\frac{9.261-6.859}{0.2}=12.01$ (the true value is 12).</li>
<li>Limits: $\lim_{x\to a}f(x)$ is the value $f(x)$ approaches. For $\frac{x^2-9}{x-3}$, factorise to get $x+3$, so the limit as $x\to3$ is 6, even though $f(3)$ is undefined.</li>
<li>A function is not differentiable at a sharp corner (e.g. where two pieces of a hybrid function meet at an angle), at a break (discontinuity), or where the tangent is vertical.</li></ul>`,
          },
          {
            id: 'df-rule', short: 'Differentiating polynomials by rule',
            text: 'the derivative as the gradient of the graph of a function at a point and its representation by a gradient function, and as a rate of change; differentiation of polynomial functions by rule',
            note: R`<ul>
<li>Rules: $\frac{d}{dx}(x^n)=nx^{n-1}$; $\frac{d}{dx}(k)=0$; $\frac{d}{dx}(kf(x))=kf'(x)$; differentiate a sum term by term.</li>
<li>Expand brackets first (no product or chain rule in Units 1–2): $\frac{d}{dx}\big((2x-1)(x+3)\big)=\frac{d}{dx}(2x^2+5x-3)=4x+5$.</li>
<li>Notation: $f'(x)$, $\frac{dy}{dx}$ and $\frac{d}{dx}(\ldots)$ all mean the derivative. $f'(2)$ is the gradient at $x=2$.</li>
<li>Gradient at a point: substitute the $x$ value into the derivative. Point with a given gradient: solve $f'(x)=m$, then find $y$ from the original $f$.</li>
<li><strong>Tangent line</strong> at $x=a$: gradient $m=f'(a)$, through $(a,f(a))$: $y-f(a)=m(x-a)$.</li>
<li>Rate of change in context: if $V(t)$ is volume in litres and $t$ is in minutes, $V'(t)$ is in litres per minute.</li></ul>`,
          },
          {
            id: 'df-app', short: 'Stationary points and curve sketching',
            text: 'applications of differentiation, including finding instantaneous rates of change, stationary values of functions, local maxima or minima, points of inflection, analysing graphs of functions including motion graphs',
            note: R`<ul>
<li><strong>Stationary points</strong>: solve $f'(x)=0$. Determine the nature with a sign table of $f'(x)$ either side:
<ul><li>$+\ 0\ -$: local maximum;</li><li>$-\ 0\ +$: local minimum;</li><li>$+\ 0\ +$ or $-\ 0\ -$: stationary point of inflection.</li></ul></li>
<li>Example: $f(x)=x^3-3x^2-9x+5$: $f'(x)=3x^2-6x-9=3(x-3)(x+1)$. Local max at $(-1,10)$; local min at $(3,-22)$.</li>
<li>$f$ is strictly increasing where $f'(x)>0$ and decreasing where $f'(x)\lt 0$. In VCE, an interval of increase includes its endpoints, e.g. "$f$ is strictly decreasing on $[-1,3]$".</li>
<li>Sketching with calculus: intercepts + stationary points (with coordinates and nature) + end behaviour.</li>
<li><strong>Motion</strong>: if $x(t)$ is position, then velocity $v(t)=x'(t)$. The particle is at rest when $v=0$, moves right/forward when $v>0$ and changes direction where $v$ changes sign. Distance travelled ≠ displacement when the particle turns around: add up the separate legs.</li></ul>`,
          },
          {
            id: 'df-opt', short: 'Maximum and minimum problems',
            text: 'solving maximum and minimum problems with consideration of modelling domain and local and global maxima and minima',
            note: R`<ul>
<li>Recipe:
<ol><li>Draw a diagram and name the variables.</li><li>Write the quantity to optimise in terms of one variable, using any constraint to eliminate the other.</li><li>State the <strong>modelling domain</strong> (lengths positive, etc.).</li><li>Solve $\frac{dA}{dx}=0$.</li><li>Check it is a max or min (sign test), <strong>and compare with the endpoints</strong>.</li><li>Answer the question asked, with units.</li></ol></li>
<li>Classic: an open box from a 30 cm × 30 cm sheet, cutting squares of side $x$ from each corner: $V=x(30-2x)^2$, $0\lt x\lt 15$. Then $V'=(30-2x)(30-6x)=0$ gives $x=5$, so $V_{\max}=5\times20^2=2000\text{ cm}^3$.</li>
<li><strong>Global vs local</strong>: on a closed interval, the greatest value can be at an endpoint rather than at a local maximum. Example: $f(x)=x^3-3x$ on $[-2,3]$ has a local max $f(-1)=2$, but the global max is $f(3)=18$.</li></ul>`,
          },
        ],
      },
      {
        id: 'anti', group: 'Unit 2', title: 'Anti-differentiation',
        book: 'Cambridge Methods 1&2: see the chapter section on antidifferentiation of polynomials.',
        kk: [
          {
            id: 'ad-rule', short: 'Anti-derivatives and boundary conditions',
            text: 'anti-differentiation as the inverse process of differentiation and identification of families of curves with the same gradient function, and the use of a boundary condition to determine a specific anti-derivative of a given function',
            note: R`<ul>
<li>Rule: $\int x^n\,dx=\frac{x^{n+1}}{n+1}+c$ (for $n\ne-1$); anti-differentiate a sum term by term; $\int k\,dx=kx+c$.</li>
<li>The $+c$ matters: all anti-derivatives of $f$ differ by a constant. The graphs form a <strong>family of curves</strong>, vertical translations of each other, all with the same gradient at each $x$ value.</li>
<li>Expand first: $\int(x+2)^2dx=\int(x^2+4x+4)dx=\frac{x^3}{3}+2x^2+4x+c$.</li>
<li><strong>Boundary condition</strong>: if $f'(x)=6x^2-4x$ and $f(1)=5$, then $f(x)=2x^3-2x^2+c$ and $5=2-2+c$, so $c=5$ and $f(x)=2x^3-2x^2+5$.</li>
<li>Motion: position is an anti-derivative of velocity. If $v(t)=3t^2-4$ and $x(0)=2$, then $x(t)=t^3-4t+2$.</li>
<li>Check by differentiating your answer: you should get back the original function.</li></ul>`,
          },
        ],
      },
      {
        id: 'prob', group: 'Unit 2', title: 'Probability rules, conditional probability and independence',
        book: 'Cambridge Methods 1&2: see the probability chapter (addition rule, conditional probability, independence).',
        kk: [
          {
            id: 'pb-rules', short: 'Addition rule, Venn diagrams and tables',
            text: R`probability of elementary and compound events and their representation as lists, grids, Venn diagrams, tables and tree diagrams; the addition rule for probabilities, $\Pr(A\cup B)=\Pr(A)+\Pr(B)-\Pr(A\cap B)$, and the relation that for mutually exclusive events $\Pr(A\cap B)=0$, hence $\Pr(A\cup B)=\Pr(A)+\Pr(B)$`,
            note: R`<ul>
<li>$A\cup B$: $A$ or $B$ (or both). $A\cap B$: both. $A'$: not $A$.</li>
<li>Addition rule: $\Pr(A\cup B)=\Pr(A)+\Pr(B)-\Pr(A\cap B)$. <strong>Mutually exclusive</strong> means they can't both happen: $\Pr(A\cap B)=0$.</li>
<li><strong>Probability table (Karnaugh map)</strong>: rows $A$ and $A'$, columns $B$ and $B'$, totals on the edges. Every row and column must add up. It is the fastest way to fill in missing values.
<table><tr><th></th><th>$B$</th><th>$B'$</th><th></th></tr><tr><td>$A$</td><td>$\Pr(A\cap B)$</td><td>$\Pr(A\cap B')$</td><td>$\Pr(A)$</td></tr><tr><td>$A'$</td><td>$\Pr(A'\cap B)$</td><td>$\Pr(A'\cap B')$</td><td>$\Pr(A')$</td></tr><tr><td></td><td>$\Pr(B)$</td><td>$\Pr(B')$</td><td>1</td></tr></table></li>
<li>Example: $\Pr(A)=0.5$, $\Pr(B)=0.4$ and $\Pr(A\cup B)=0.7$ give $\Pr(A\cap B)=0.2$ and $\Pr(A'\cap B')=0.3$.</li>
<li>"Exactly one of $A$, $B$" is $\Pr(A\cap B')+\Pr(A'\cap B)$.</li></ul>`,
          },
          {
            id: 'pb-cond', short: 'Conditional probability, trees and total probability',
            text: R`conditional probability in terms of reduced sample space, the relations $\Pr(A|B)=\frac{\Pr(A\cap B)}{\Pr(B)}$ and $\Pr(A\cap B)=\Pr(A|B)\times\Pr(B)$; the law of total probability for two events $\Pr(A)=\Pr(A|B)\Pr(B)+\Pr(A|B')\Pr(B')$; simulation to estimate probabilities involving selection with and without replacement`,
            note: R`<ul>
<li>$\Pr(A|B)$ is "the probability of $A$ <em>given</em> $B$": restrict the sample space to $B$. $\Pr(A|B)=\frac{\Pr(A\cap B)}{\Pr(B)}$.</li>
<li><strong>Tree diagrams</strong>: the second-stage branches are conditional probabilities. Multiply along a path ($\Pr(A\cap B)=\Pr(B)\Pr(A|B)$); add the paths that give the event you want.</li>
<li><strong>Law of total probability</strong>: $\Pr(A)=\Pr(A|B)\Pr(B)+\Pr(A|B')\Pr(B')$.<br>Example: 30% of days are rainy. Sam is late on 40% of rainy days and 10% of dry days. $\Pr(\text{late})=0.4\times0.3+0.1\times0.7=0.19$.</li>
<li>Reverse ("given he was late, what is the chance it rained?"): $\Pr(R|L)=\frac{\Pr(R\cap L)}{\Pr(L)}=\frac{0.12}{0.19}=\frac{12}{19}$.</li>
<li><strong>Without replacement</strong>: the second-stage probabilities change. From 4 red and 6 blue: $\Pr(RR)=\frac{4}{10}\times\frac{3}{9}=\frac{2}{15}$. With replacement: $\left(\frac{4}{10}\right)^2=\frac{4}{25}$.</li>
<li>Simulation: repeat the selection many times (e.g. with a random number generator), record the outcomes, and use the relative frequency as an estimate.</li></ul>`,
          },
          {
            id: 'pb-ind', short: 'Independent events',
            text: R`the relations for pairwise independent events $A$ and $B$: $\Pr(A|B)=\Pr(A)$, $\Pr(B|A)=\Pr(B)$ and $\Pr(A\cap B)=\Pr(A)\times\Pr(B)$`,
            note: R`<ul>
<li><strong>Independent</strong>: knowing one happened doesn't change the probability of the other. <strong>Test</strong>: is $\Pr(A\cap B)=\Pr(A)\Pr(B)$? (Equivalently, $\Pr(A|B)=\Pr(A)$.)</li>
<li>Show the test with numbers: "$\Pr(A)\Pr(B)=0.5\times0.4=0.2=\Pr(A\cap B)$, therefore independent."</li>
<li>Independent ≠ mutually exclusive. If $\Pr(A),\Pr(B)>0$, mutually exclusive events are <em>never</em> independent: if one happens, the other definitely can't.</li>
<li>If $A$ and $B$ are independent, so are $A$ and $B'$, $A'$ and $B$, and $A'$ and $B'$.</li>
<li>Repeated independent trials: $\Pr(\text{at least one six in 4 rolls})=1-\left(\frac56\right)^4\approx0.518$.</li>
<li>Finding an unknown: if $\Pr(A)=0.3$, $\Pr(A\cup B)=0.65$ and $A$, $B$ are independent, let $\Pr(B)=p$: $0.3+p-0.3p=0.65$, so $p=0.5$.</li></ul>`,
          },
        ],
      },
    ],
  });
})();
