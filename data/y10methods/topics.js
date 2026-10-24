// Year 10 Methods – topics, curriculum content descriptions and revision notes.
// Content descriptions are quoted from the Victorian Curriculum F–10 Version 2.0, Mathematics (VCAA), Level 10 and the
// optional Level 10A extension, with their codes. Year 10 assessment is set by the school.
(() => {
  const R = String.raw;
  VCE.subject('y10methods', {
    intro: R`Year 10 Methods prepares for VCE Mathematical Methods. Every question here is new, written against the <strong>Victorian Curriculum F–10 Version 2.0 Mathematics, Level 10 and the optional Level 10A extension</strong> (the curriculum code is shown with each dot point). Year 10 has no VCAA exam, so the practice exam follows a typical semester-exam format: <strong>Section A with no calculator</strong> and <strong>Section B with a calculator</strong>. Check with the school which 10A topics are taught.`,
    technique: R`<h1>Exam technique: Year 10 Methods</h1>
<ul>
<li><strong>Show working</strong> for anything worth more than one mark; the method earns marks even if the final answer slips.</li>
<li><strong>Exact answers</strong> (surds, fractions, $\pi$) in the no-calculator section unless told otherwise; round only at the end in the calculator section.</li>
<li><strong>Check inequalities</strong>: multiplying or dividing by a negative number flips the sign.</li>
<li><strong>Sketches</strong>: label intercepts, turning points and asymptotes with coordinates or equations.</li>
<li><strong>Trigonometry</strong>: check your calculator is in <em>degrees</em> unless the question uses radians.</li>
<li><strong>Statistics</strong>: "compare" means comment on <em>centre</em> and <em>spread</em> (and shape and outliers), quoting the numbers for both groups.</li>
<li><strong>These habits carry into VCE Methods</strong>: use the notation in the question, give coordinates in brackets, and write a full equation when one is asked for.</li>
</ul>`,
    topics: [
      { id: 'num', group: 'Number and algebra', title: 'Surds, indices and real numbers', kk: [
        { id: 'n-surd', short: 'Surds and fractional indices',
          text: 'VC2M10AN01 define rational and irrational numbers and perform operations with surds and fractional indices; VC2M10AN02 perform operations on numbers involving fractional exponents and surds; VC2M10N01 recognise the effect of using approximations of real numbers in repeated calculations and compare the results when using exact representations',
          note: R`<ul>
<li><strong>Rational</strong> numbers can be written as $\frac ab$ with integers $a,b$ ($b\ne0$): terminating or recurring decimals. <strong>Irrational</strong> numbers can't (e.g. $\sqrt2$, $\pi$).</li>
<li><strong>Simplifying surds</strong>: take out the largest square factor, e.g. $\sqrt{48}=\sqrt{16\times3}=4\sqrt3$.</li>
<li>Like surds add: $4\sqrt3+3\sqrt3=7\sqrt3$. Also $\sqrt a\times\sqrt b=\sqrt{ab}$.</li>
<li><strong>Rationalise the denominator</strong>: $\frac{6}{\sqrt3}=\frac{6\sqrt3}{3}=2\sqrt3$. For a binomial denominator, multiply by the conjugate: $\frac{1}{\sqrt5-2}=\frac{\sqrt5+2}{5-4}=\sqrt5+2$.</li>
<li><strong>Fractional indices</strong>: $a^{\frac1n}=\sqrt[n]a$ and $a^{\frac mn}=\left(\sqrt[n]a\right)^m$. So $8^{\frac23}=2^2=4$ and $27^{-\frac13}=\frac13$.</li>
<li><strong>Exact vs approximate</strong>: rounding early in repeated calculations compounds errors, so keep exact values (or full calculator precision) until the end.</li></ul>` },
      ] },
      { id: 'alg', group: 'Number and algebra', title: 'Algebra: expanding, factorising, fractions and equations', kk: [
        { id: 'a-fact', short: 'Expanding and factorising',
          text: 'VC2M10A01 factorise algebraic expressions by taking out a common algebraic factor; VC2M10A04 expand binomial products and factorise monic quadratic expressions using a variety of strategies; VC2M10AA07 factorise monic and non-monic quadratic expressions and solve a wide range of quadratic equations derived from a variety of contexts',
          note: R`<ul>
<li><strong>Common factor first</strong>: $6x^2-9x=3x(2x-3)$.</li>
<li>Expanding: $(2x-3)(x+4)=2x^2+8x-3x-12=2x^2+5x-12$. Perfect square $(a+b)^2=a^2+2ab+b^2$; difference of squares $(a-b)(a+b)=a^2-b^2$.</li>
<li><strong>Monic</strong> $x^2+bx+c$: find two numbers that multiply to $c$ and add to $b$: $x^2-2x-15=(x-5)(x+3)$.</li>
<li><strong>Non-monic</strong> $ax^2+bx+c$: find two numbers that multiply to $ac$ and add to $b$, split the middle term, then group: $3x^2-10x-8$, where $ac=-24$ gives $-12$ and $2$: $3x^2-12x+2x-8=3x(x-4)+2(x-4)=(3x+2)(x-4)$.</li>
<li>Check by expanding your answer.</li></ul>` },
        { id: 'a-frac', short: 'Index laws and algebraic fractions',
          text: 'VC2M10A02 simplify algebraic products and quotients using exponent laws; VC2M10A03 apply the 4 operations to simple algebraic fractions with numerical or single variable denominators; VC2M10A12 solve linear equations involving simple algebraic fractions; VC2M10AA03 simplify combinations of linear expressions with rational coefficients and the solution of related equations',
          note: R`<ul>
<li>Index laws: $a^m\times a^n=a^{m+n}$, $a^m\div a^n=a^{m-n}$, $(a^m)^n=a^{mn}$, $a^0=1$, $a^{-n}=\frac1{a^n}$. Example: $\frac{(2x^3)^2\times x}{4x^5}=\frac{4x^7}{4x^5}=x^2$.</li>
<li><strong>Adding fractions</strong>: use a common denominator. $\frac{x+1}{3}+\frac{x-2}{4}=\frac{4(x+1)+3(x-2)}{12}=\frac{7x-2}{12}$. Bracket the numerators so negative signs are handled correctly.</li>
<li><strong>Solving</strong>: multiply every term by the lowest common denominator. $\frac{x}{2}+\frac{x-1}{3}=4 \Rightarrow 3x+2(x-1)=24 \Rightarrow x=\frac{26}{5}$.</li>
<li>Multiplying and dividing: factorise first, then cancel common factors (not terms!).</li></ul>` },
        { id: 'a-eq', short: 'Formulas, linear equations and inequalities',
          text: 'VC2M10A05 substitute values into formulas to determine an unknown and rearrange formulas to solve for a particular term; VC2M10A07 solve problems involving linear equations, including those derived from formulas; VC2M10A08 solve linear inequalities and graph their solutions on a number line',
          note: R`<ul>
<li><strong>Rearranging</strong>: do the same to both sides to isolate the subject. $v=u+at \Rightarrow t=\frac{v-u}{a}$. $A=\pi r^2 \Rightarrow r=\sqrt{\frac{A}{\pi}}$ (with $r>0$).</li>
<li><strong>Inequalities</strong>: solve like equations, but <em>multiplying or dividing by a negative reverses the sign</em>. $3-2x>7 \Rightarrow -2x>4 \Rightarrow x\lt -2$.</li>
<li>Number line: an open circle for $\lt$ or $>$ (not included); a closed circle for $\le$ or $\ge$.</li>
<li>Worded problems: define the variable, write the equation, solve, and answer in words with units.</li></ul>` },
      ] },
      { id: 'lin', group: 'Number and algebra', title: 'Linear relations and simultaneous equations', kk: [
        { id: 'l-grad', short: 'Gradients, parallel and perpendicular lines',
          text: 'VC2M10A10 solve problems involving gradients of parallel and perpendicular lines',
          note: R`<ul>
<li>$m=\frac{y_2-y_1}{x_2-x_1}$; $y=mx+c$; line through $(x_1,y_1)$: $y-y_1=m(x-x_1)$.</li>
<li><strong>Parallel</strong> lines have equal gradients. <strong>Perpendicular</strong> lines: $m_1\times m_2=-1$, so $m_2=-\frac{1}{m_1}$.</li>
<li>Find the gradient of $3x+2y=6$ by rearranging: $y=-\frac32x+3$, so $m=-\frac32$.</li>
<li>Example: the line through $(1,4)$ perpendicular to $y=2x-1$ has $m=-\frac12$: $y-4=-\frac12(x-1)$, i.e. $y=-\frac12x+\frac92$.</li></ul>` },
        { id: 'l-sim', short: 'Simultaneous equations',
          text: 'VC2M10A09 solve simultaneous linear equations, using algebraic and graphical techniques including using digital tools; VC2M10AA09 solve linear and non-linear simultaneous equations using graphing or systematic guess-check-and-refine with digital tools',
          note: R`<ul>
<li><strong>Elimination</strong>: $2x+y=5$ and $x-y=1$; add them: $3x=6$, so $x=2$, $y=1$.</li>
<li><strong>Substitution</strong>: useful when one variable is already the subject, and for line–curve intersections: $y=x+1$ and $y=x^2-1$ give $x^2-x-2=0$, so $x=2$ or $-1$, giving points $(2,3)$ and $(-1,0)$.</li>
<li>Graphically, the solution is the point(s) of intersection. Parallel lines give no solution; the same line gives infinitely many.</li></ul>` },
      ] },
      { id: 'quad', group: 'Functions and graphs', title: 'Quadratics', kk: [
        { id: 'q-solve', short: 'Solving quadratic equations',
          text: 'VC2M10A13 solve simple quadratic equations using a range of strategies, including null factor law; VC2M10AA07 factorise monic and non-monic quadratic expressions and solve a wide range of quadratic equations derived from a variety of contexts',
          note: R`<ul>
<li><strong>Null factor law</strong>: if $ab=0$ then $a=0$ or $b=0$. Always rearrange to $=0$ first.</li>
<li><strong>Completing the square</strong>: $x^2-2x-15=(x-1)^2-16=0 \Rightarrow x-1=\pm4 \Rightarrow x=5$ or $-3$.</li>
<li><strong>Quadratic formula</strong>: $x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}$.</li>
<li><strong>Discriminant</strong> $\Delta=b^2-4ac$:
<ul><li>$\Delta>0$: two solutions;</li><li>$\Delta=0$: one solution;</li><li>$\Delta\lt 0$: no real solutions.</li></ul></li>
<li>Context problems: reject solutions that don't make sense (e.g. a negative length).</li></ul>` },
        { id: 'q-graph', short: 'Graphs of parabolas',
          text: 'VC2M10A11 explore the connection between algebraic and graphical representations of relations such as simple quadratic, reciprocal, circle and exponential, using digital tools as appropriate; VC2M10AA05 describe, interpret, and sketch parabolas, hyperbolas, circles and exponential functions and their transformations',
          note: R`<ul>
<li>$y=a(x-h)^2+k$: turning point $(h,k)$; axis of symmetry $x=h$; opens up if $a>0$, down if $a\lt 0$; $|a|>1$ is narrower.</li>
<li>Sketch $y=x^2-2x-15$:
<ul><li>$y$-intercept $(0,-15)$;</li><li>$x$-intercepts from $(x-5)(x+3)$: $(5,0)$ and $(-3,0)$;</li><li>turning point at $x=\frac{5+(-3)}{2}=1$: $(1,-16)$.</li></ul></li>
<li>Transformations of $y=x^2$: $y=(x-3)^2$ shifts it right 3; $y=x^2+2$ shifts it up 2; $y=-x^2$ reflects it in the $x$-axis; $y=2x^2$ dilates it (narrower).</li></ul>` },
      ] },
      { id: 'poly', group: 'Functions and graphs', title: 'Polynomials', kk: [
        { id: 'p-thm', short: 'Factor and remainder theorems',
          text: 'VC2M10AA01 investigate the concept of a polynomial and apply the factor and remainder theorems to solve problems',
          note: R`<ul>
<li>A polynomial has whole-number powers: $P(x)=x^3+2x^2-5x-6$ (degree 3, leading coefficient 1, constant term $-6$).</li>
<li><strong>Remainder theorem</strong>: the remainder when $P(x)$ is divided by $(x-a)$ is $P(a)$. <strong>Factor theorem</strong>: $(x-a)$ is a factor exactly when $P(a)=0$.</li>
<li>Factorising a cubic: test factors of the constant term: $P(2)=8+8-10-6=0$, so $(x-2)$ is a factor; divide to get $x^2+4x+3=(x+1)(x+3)$; so $P(x)=(x-2)(x+1)(x+3)$.</li></ul>` },
        { id: 'p-graph', short: 'Sketching polynomial curves',
          text: 'VC2M10AA06 apply understanding of polynomials to sketch a range of curves and describe the features of these curves from their equation',
          note: R`<ul>
<li>From factored form: the $x$-intercepts are the zeros, the $y$-intercept is $P(0)$, and the leading term gives the end behaviour (a positive cubic rises to the right).</li>
<li>A squared factor $(x-a)^2$ gives a touch point; a cubed factor $(x-a)^3$ gives a stationary point of inflection.</li>
<li>$y=(x-2)(x+1)(x+3)$: crosses at $-3$, $-1$ and $2$; $y$-intercept $-6$; a positive cubic.</li></ul>` },
      ] },
      { id: 'expo', group: 'Functions and graphs', title: 'Exponentials and logarithms', kk: [
        { id: 'e-log', short: 'Exponential equations and logarithm laws',
          text: 'VC2M10A14 solve simple exponential equations; VC2M10AN03 use the definition of a logarithm to establish and apply the laws of logarithms and investigate logarithmic scales in measurement; VC2M10AA04 explore the inverse relationship between exponential functions and logarithmic functions and the solution of related equations',
          note: R`<ul>
<li>Same base: $2^{x+1}=16=2^4 \Rightarrow x=3$; $25^x=5^{x+3} \Rightarrow 5^{2x}=5^{x+3} \Rightarrow x=3$.</li>
<li><strong>Definition</strong>: $\log_a y=x \iff a^x=y$. So $\log_3 81=4$ and $\log_{10}0.001=-3$.</li>
<li><strong>Laws</strong>: $\log_a(mn)=\log_a m+\log_a n$; $\log_a\frac mn=\log_a m-\log_a n$; $\log_a m^p=p\log_a m$; $\log_a a=1$; $\log_a1=0$. Example: $\log_2 40-\log_2 5=\log_2 8=3$.</li>
<li>When the bases can't be matched: $3^x=20 \Rightarrow x=\log_3 20=\frac{\log 20}{\log 3}\approx2.727$.</li>
<li>Logarithms undo exponentials: $\log_a(a^x)=x$.</li></ul>` },
        { id: 'e-model', short: 'Growth, decay, compound interest and log scales',
          text: 'VC2M10A15 use mathematical modelling to solve applied problems involving inverse proportion, growth and decay, including in financial contexts to establish the compound interest formula as repeated applications of simple interest; VC2M10M02 interpret and use logarithmic scales in applied contexts involving small and large quantities and change',
          note: R`<ul>
<li><strong>Compound interest</strong>: $A=P(1+r)^n$, i.e. simple interest applied repeatedly. 5000 dollars at 4% p.a. for 3 years gives $5000\times1.04^3=5624.32$ dollars.</li>
<li><strong>Growth and decay</strong>: $N=N_0(1+r)^t$ for growth and $N=N_0(1-r)^t$ for decay (e.g. depreciation).</li>
<li><strong>Inverse proportion</strong>: $y=\frac kx$ (e.g. time taken versus speed for a fixed distance).</li>
<li><strong>Logarithmic scales</strong>: each step up of 1 means ×10 (Richter magnitude, decibels in steps of 10 dB, pH). A magnitude 7 earthquake has 100 times the wave amplitude of a magnitude 5.</li>
<li>Exponential vs linear models: linear growth adds a constant amount; exponential growth multiplies by a constant factor and eventually overtakes linear growth.</li></ul>` },
      ] },
      { id: 'func', group: 'Functions and graphs', title: 'Functions, relations and rates of change', kk: [
        { id: 'f-rel', short: 'Function notation, hyperbolas, circles and transformations',
          text: 'VC2M10AA08 use function notation to describe the relationship between dependent and independent variables in modelling contexts; VC2M10AA05 describe, interpret, and sketch parabolas, hyperbolas, circles and exponential functions and their transformations',
          note: R`<ul>
<li>$f(x)=3x-2$: $f(4)=10$. The input $x$ is the independent variable; the output $f(x)$ is the dependent variable.</li>
<li><strong>Hyperbola</strong> $y=\frac{a}{x-h}+k$: asymptotes $x=h$ and $y=k$.</li>
<li><strong>Circle</strong> $(x-h)^2+(y-k)^2=r^2$: centre $(h,k)$, radius $r$. Complete the square to find them: $x^2+y^2-6x+8y=0 \Rightarrow (x-3)^2+(y+4)^2=25$, centre $(3,-4)$, radius 5.</li>
<li><strong>Exponential</strong> $y=a^x+k$: asymptote $y=k$, $y$-intercept $(0,1+k)$.</li></ul>` },
        { id: 'f-rate', short: 'Average rate of change and limiting values',
          text: 'VC2M10AM02 explore the effect of increasingly small changes in the value of variables on the average rate of change and in relation to limiting values',
          note: R`<ul>
<li>Average rate of change from $x=a$ to $x=b$: $\frac{f(b)-f(a)}{b-a}$, the gradient of the chord.</li>
<li>As the interval shrinks, the average rate approaches the gradient at a point (the start of calculus in VCE Methods). For $f(x)=x^2$ at $x=3$: intervals $[3,3.1]$ give 6.1, $[3,3.01]$ give 6.01, approaching 6.</li></ul>` },
      ] },
      { id: 'geom', group: 'Measurement and space', title: 'Measurement and circle geometry', kk: [
        { id: 'g-meas', short: 'Surface area and volume',
          text: 'VC2M10M01 solve problems involving the surface area and volume of composite objects using appropriate units; VC2M10AM01 solve problems involving surface area and volume of right pyramids, right cones, spheres and related composite solids',
          note: R`<ul>
<li>Prism or cylinder: $V=Ah$. Cylinder surface area $2\pi r^2+2\pi rh$.</li>
<li>Pyramid or cone: $V=\frac13Ah$; cone $V=\frac13\pi r^2h$, with curved surface $\pi rs$ (where $s$ is the slant height).</li>
<li>Sphere: $V=\frac43\pi r^3$; $SA=4\pi r^2$.</li>
<li>Composite solids: add or subtract the parts, and don't count hidden faces in surface area.</li>
<li>Units: cm² for area and cm³ for volume; 1 L = 1000 cm³.</li></ul>` },
        { id: 'g-circle', short: 'Circle theorems and geometric proof',
          text: 'VC2M10ASP01 prove and apply relationships between angles and various lines associated with circles (radii, diameters, chords, tangents); VC2M10SP01 apply deductive reasoning to formulate proofs involving shapes in the plane and use theorems to solve spatial problems',
          note: R`<ul>
<li>The angle at the centre is twice the angle at the circumference subtended by the same arc.</li>
<li>The angle in a semicircle is $90^\circ$.</li>
<li>Angles at the circumference subtended by the same arc are equal.</li>
<li>Opposite angles of a cyclic quadrilateral sum to $180^\circ$.</li>
<li>A tangent is perpendicular to the radius at the point of contact; tangents from an external point are equal in length.</li>
<li>A perpendicular from the centre bisects a chord.</li>
<li>In proofs, give a reason for every step (e.g. "base angles of an isosceles triangle", "angles in a triangle sum to 180°").</li></ul>` },
      ] },
      { id: 'trig', group: 'Measurement and space', title: 'Trigonometry', kk: [
        { id: 't-right', short: 'Right-angled triangles, elevation, bearings and 3D',
          text: 'VC2M10M03 solve practical problems by applying Pythagoras’ theorem and trigonometry to right-angled triangles, including problems involving direction and angles of elevation and depression; VC2M10ASP05 apply Pythagoras’ theorem and trigonometry to solving three-dimensional problems in right-angled triangles',
          note: R`<ul>
<li>SOH CAH TOA. Exact values: $\sin30^\circ=\frac12$, $\cos60^\circ=\frac12$, $\sin60^\circ=\frac{\sqrt3}{2}$, $\tan45^\circ=1$.</li>
<li><strong>Elevation</strong> is the angle measured up from the horizontal; <strong>depression</strong> is measured down from the horizontal. They are equal (alternate angles).</li>
<li><strong>True bearings</strong> are measured clockwise from north as three digits (e.g. 060°T).</li>
<li><strong>3D</strong>: find a right-angled triangle in the solid, often in two steps (e.g. first the base diagonal, then the height).</li></ul>` },
        { id: 't-rules', short: 'Sine rule, cosine rule and area rule',
          text: 'VC2M10ASP02 establish the sine, cosine and area rules for any triangle and solve related problems',
          note: R`<ul>
<li><strong>Sine rule</strong>: $\frac{a}{\sin A}=\frac{b}{\sin B}$. Use it with a side and its opposite angle. Watch for the ambiguous case when finding an angle.</li>
<li><strong>Cosine rule</strong>: $c^2=a^2+b^2-2ab\cos C$. Use it with two sides and the included angle, or with three sides.</li>
<li><strong>Area</strong> $=\frac12ab\sin C$.</li>
<li>Example: $a=5$, $b=7$, $C=60^\circ$ gives $c^2=25+49-35=39$, so $c=\sqrt{39}\approx6.24$.</li></ul>` },
        { id: 't-unit', short: 'Unit circle, trig graphs and equations',
          text: 'VC2M10ASP03 use the unit circle to define the simple trigonometric functions of y = sin(x), y = cos(x) and y = tan(x) as functions of a real variable, and graph them with and without the use of digital tools; VC2M10ASP04 solve simple trigonometric equations',
          note: R`<ul>
<li>On the unit circle, the point at angle $\theta$ is $(\cos\theta,\sin\theta)$.</li>
<li>Quadrant signs: all positive in Q1; sin positive in Q2; tan positive in Q3; cos positive in Q4.</li>
<li>$y=\sin x$ and $y=\cos x$ have period $360^\circ$ and range $[-1,1]$; $y=\tan x$ has period $180^\circ$ and asymptotes at $90^\circ$, $270^\circ$, …</li>
<li>Solving: $\sin x=\frac12$ for $0^\circ\le x\le360^\circ$ gives $x=30^\circ, 150^\circ$ (quadrants 1 and 2).</li></ul>` },
      ] },
      { id: 'stats', group: 'Statistics and probability', title: 'Statistics', kk: [
        { id: 's-dist', short: 'Box plots, IQR, outliers and standard deviation',
          text: 'VC2M10ST01 compare data distributions for continuous numerical variables using quartiles and interquartile range and appropriate data displays including boxplots, histograms and dot plots; discuss the shapes of these distributions in terms of centre, spread, shape and outliers in the context of the data; VC2M10AST01 calculate and interpret the mean and standard deviation of data and use these to compare data sets; investigate the effect of individual data values, including outliers, on the standard deviation',
          note: R`<ul>
<li><strong>Five-number summary</strong>: min, $Q_1$, median, $Q_3$, max. IQR $=Q_3-Q_1$.</li>
<li><strong>Outliers</strong>: below $Q_1-1.5\times\text{IQR}$ or above $Q_3+1.5\times\text{IQR}$.</li>
<li><strong>Standard deviation</strong> measures the typical distance of values from the mean (use the calculator). An outlier increases it a lot; the IQR is resistant to outliers.</li>
<li>Shape: symmetric, positively skewed (tail to the right) or negatively skewed.</li>
<li><strong>Compare</strong>: centre (median or mean) and spread (IQR or SD), with numbers for both groups, then outliers and shape, in context.</li></ul>` },
        { id: 's-biv', short: 'Scatterplots, two-way tables and statistical claims',
          text: 'VC2M10ST02 construct scatterplots and consider a line of good fit; comment on the association between the 2 numerical variables in terms of strength, direction and linearity; VC2M10AST03 use digital tools to investigate bivariate numerical data sets; where appropriate use a straight line to describe the relationship allowing for variation, make predictions based on this straight line and discuss limitations; VC2M10ST03 construct two-way tables and discuss possible relationship between categorical variables; VC2M10ST04 analyse claims, inferences and conclusions of statistical reports in the media and other places, by linking claims to displays, statistics and representative data, including ethical considerations and identification of potential sources of bias',
          note: R`<ul>
<li>Describe an association by its <strong>direction</strong> (positive or negative), <strong>form</strong> (linear or non-linear) and <strong>strength</strong> (strong, moderate or weak).</li>
<li>A line of good fit allows predictions. <em>Interpolation</em> (within the data) is more reliable than <em>extrapolation</em> (outside it). Association is not causation.</li>
<li><strong>Two-way tables</strong>: compare row (or column) percentages to see whether categorical variables are related.</li>
<li><strong>Claims</strong>: check the sample (size, representativeness), who funded the study, misleading graphs (truncated axes) and whether the conclusion matches the data.</li></ul>` },
      ] },
      { id: 'prob', group: 'Statistics and probability', title: 'Probability and counting', kk: [
        { id: 'pr-cond', short: 'Multi-step experiments, conditional probability and independence',
          text: 'VC2M10P01 use the language of ‘if … then …’, ‘given’, ‘of’ and ‘knowing that’ to investigate conditional statements and identify common mistakes in interpreting such language, and describe and interpret situations involving conditional probability; design and conduct simulations using digital tools to model conditional probability and interpret results; VC2M10P02 describe the results of two- and three-step chance experiments, both with and without replacements, assign probabilities to outcomes and determine probabilities of events; investigate the concept of independence',
          note: R`<ul>
<li>Tree diagrams: multiply along the branches, add the paths. <strong>Without replacement</strong>, the second-stage probabilities change: from 3 red and 2 blue, $\Pr(RR)=\frac35\times\frac24=\frac3{10}$.</li>
<li><strong>Conditional</strong>: $\Pr(A|B)=\frac{\Pr(A\cap B)}{\Pr(B)}$, so restrict to the "given" group. "The probability of being left-handed <em>given</em> that the person plays tennis" differs from "the probability of playing tennis given left-handed".</li>
<li><strong>Independent</strong> if $\Pr(A\cap B)=\Pr(A)\times\Pr(B)$ (e.g. separate coin tosses).</li>
<li>Venn diagrams and two-way tables organise "and", "or" and "not".</li></ul>` },
        { id: 'pr-count', short: 'Counting principles and factorials',
          text: 'VC2M10AP01 explore counting principles, and factorial notation as a representation that provides efficient counting in multiplicative contexts, including calculations of probabilities',
          note: R`<ul>
<li><strong>Multiplication principle</strong>: if one choice has $m$ options and another $n$, together there are $mn$.</li>
<li>$n!=n\times(n-1)\times\dots\times1$; $0!=1$. Arrangements of 5 different letters: $5!=120$.</li>
<li>Restricted arrangements: fill the restricted positions first.</li>
<li>Probability $=\frac{\text{favourable arrangements}}{\text{total arrangements}}$.</li></ul>` },
      ] },
    ],
  });
})();
