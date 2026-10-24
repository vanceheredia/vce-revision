// VCE Specialist Mathematics Units 1 & 2 – topics, study design dot points and revision notes.
// Dot point text is from the VCE Mathematics Study Design (from 2023, v1.1), Units 1 and 2 Specialist Mathematics,
// with formulas re-typeset. Notes stay inside Units 1–2 scope.
(() => {
  const R = String.raw;

  VCE.subject('specialist', {
    intro: R`Every question here is new, written against the <strong>VCE Mathematics Study Design (from 2023)</strong>, Specialist Mathematics Units 1 and 2. Units 1–2 exams are set by the school, so the practice exams copy the VCAA Units 3–4 format: <strong>Exam 1 with no calculator</strong> (short answer, 40 marks, 1 hour) and <strong>Exam 2 with a CAS calculator</strong> (20 multiple choice + extended response, 60 marks, 1½ hours; the Units 3–4 version is 80 marks in 2 hours). Each question shows whether it is <em>No calculator</em> or <em>CAS allowed</em>.<br><br>Tailored to his school's course: <strong>matrices and transformations of the plane are left out</strong>, and there is extra practice on <strong>kinematics, vectors, complex numbers and trigonometry</strong>, with many questions set around a graph or diagram.`,
    technique: R`<h1>Exam technique: Specialist Maths</h1>
<h2>Proof questions</h2>
<ul>
<li>State the method in the first line: "Proof by contradiction: assume that $\sqrt2$ is rational, so…", or "Proof by induction on $n$".</li>
<li><strong>Induction</strong> has four parts, and each one earns marks: (1) base case checked; (2) "assume true for $n=k$"; (3) show true for $n=k+1$, <em>using</em> the assumption; (4) the conclusion sentence.</li>
<li>A <strong>counter-example</strong> must be a specific value, with the check shown.</li>
<li>Finish with a clear concluding statement (e.g. "Hence $n^2$ even implies $n$ even").</li>
</ul>
<h2>Exam 1 (no calculator)</h2>
<ul>
<li>Exact values: surds, $\pi$, fractions. Know the exact values of sin, cos and tan at multiples of $\frac\pi6$ and $\frac\pi4$, and the compound-angle formulas.</li>
<li>Complex arithmetic by hand: realise denominators with the conjugate, and convert to polar form with exact arguments.</li>
</ul>
<h2>Exam 2 (CAS)</h2>
<ul>
<li>Write down the set-up (the equation, matrix product or sum you are evaluating) before the answer.</li>
<li>Use the CAS for complex arithmetic, recurrence relations (sequence/table), solving triangles, finding when moving objects meet, and simulations, but give answers to the accuracy asked.</li>
<li>Combinatorics: write the expression (e.g. $\binom{7}{3}\times4!$) as well as the number.</li>
</ul>
<h2>Questions built around a graph or diagram</h2>
<ul>
<li>Read the scales on both axes before anything else, and note the units (seconds or minutes? metres or kilometres?).</li>
<li><strong>Velocity–time graphs</strong>: gradient = acceleration; signed area = displacement; total area (all positive) = distance travelled. Split the area into triangles and rectangles.</li>
<li><strong>Vectors on a grid</strong>: read a vector as "across, then up" from its tail to its head, e.g. $3\tv{i}-2\tv{j}$.</li>
<li><strong>Argand diagrams</strong>: solid boundary = included ($\le$), dashed = excluded ($\lt$); open circle = point excluded (e.g. the start of a ray).</li>
<li>When asked to sketch, label intercepts, asymptotes, endpoints and key points with coordinates.</li>
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
<li><strong>Proof:</strong> a contrapositive swaps the hypothesis and the conclusion <em>and</em> negates both. Show every algebraic step in a direct proof and finish with a concluding statement.</li>
<li><strong>Objects moving along lines:</strong> give each object its own parameter when finding where <em>paths</em> cross; use the <em>same</em> time $t$ only when testing whether the objects meet.</li>
<li><strong>Constant acceleration:</strong> choose a positive direction (e.g. up) and keep the signs consistent, so $a=-9.8$ for gravity.</li>
<li><strong>CAS syntax is not working.</strong> Write the equation or expression you solved in normal mathematical notation; calculator commands don't count.</li>
<li><strong>Read the question again when finished.</strong> Common slips: giving the $x$-value when the point was asked for; finding the gradient when the tangent equation was asked for; average <em>value</em> instead of average <em>rate of change</em>.</li>
</ul>
<h2>Notation that loses marks</h2>
<ul>
<li>Vectors need a tilde or arrow when handwritten ($\underset{\sim}{a}$, $\overrightarrow{AB}$).</li>
<li>$\text{Arg}(z)$ is the principal argument, in $(-\pi,\pi]$.</li>
<li>Sets: use correct notation such as $\in$, $\subseteq$, $\cup$, $\cap$, $A'$ and $\emptyset$.</li>
</ul>`,
    topics: [
      // ============================================================ UNIT 1
      {
        id: 'proof', group: 'Unit 1', title: 'Proof and number',
        book: 'Cambridge Specialist 1&2: see the chapters on number systems and sets, and on proof (including induction).',
        kk: [
          {
            id: 'pf-num', short: 'Number systems, sets and primes',
            text: 'number systems for the natural numbers, N, integers, Z, rational numbers, Q, real numbers, R, and complex numbers, C, and their fundamental properties and structure; set notation and operations including element, intersection, union, complement, sub-set and power set; prime numbers, the fundamental theorem of arithmetic, and proof that there are infinitely many prime numbers; conversion between fraction and decimal forms of rational numbers',
            note: R`<ul>
<li>$N\subset Z\subset Q\subset R\subset C$. $N=\{1,2,3,\dots\}$; $Q$ = numbers $\frac pq$ with $p,q\in Z$, $q\ne0$. Irrationals (e.g. $\sqrt2$, $\pi$) are in $R$ but not $Q$.</li>
<li>Sets: $x\in A$ (element), $A\cup B$ (union), $A\cap B$ (intersection), $A'$ (complement), $A\subseteq B$ (subset), $\emptyset$ (empty set). The <strong>power set</strong> $\mathcal P(A)$ is the set of all subsets; if $|A|=n$, then $|\mathcal P(A)|=2^n$.</li>
<li><strong>Fundamental theorem of arithmetic</strong>: every integer $n\ge2$ is a product of primes in exactly one way (apart from order). Example: $360=2^3\times3^2\times5$.</li>
<li><strong>Infinitely many primes</strong> (contradiction): suppose $p_1,\dots,p_k$ are all the primes. Then $N=p_1p_2\cdots p_k+1$ leaves remainder 1 when divided by every $p_i$, so its prime factors are not on the list. Contradiction.</li>
<li><strong>Recurring decimal to fraction</strong>: $x=0.\overline{27}$ gives $100x=27.\overline{27}$; subtract: $99x=27$, so $x=\frac{27}{99}=\frac3{11}$. A fraction in lowest terms has a terminating decimal exactly when its denominator has no prime factors other than 2 and 5.</li></ul>`,
          },
          {
            id: 'pf-meth', short: 'Proof techniques',
            text: 'introduction to principles of proof including propositions and quantifiers, examples and counter-examples, direct proof, proof by contradiction, and proof using the contrapositive; simple proofs involving, for example, divisibility, sequences and series, inequalities and irrationality',
            note: R`<ul>
<li><strong>Quantifiers</strong>: $\forall$ "for all", $\exists$ "there exists". The negation of "$\forall x,\ P(x)$" is "$\exists x$ such that not $P(x)$", which is why <strong>one counter-example disproves a "for all" statement</strong>. Example: "$n^2+n+41$ is prime for all $n\in N$" is false: $n=40$ gives $41^2$.</li>
<li><strong>Direct proof</strong>: start from what is given and reason to the result. E.g. the sum of two odd numbers is even: $(2a+1)+(2b+1)=2(a+b+1)$.</li>
<li><strong>Contrapositive</strong>: "if $P$ then $Q$" is equivalent to "if not $Q$ then not $P$". To prove "if $n^2$ is even then $n$ is even", prove instead "if $n$ is odd then $n^2$ is odd": $(2k+1)^2=2(2k^2+2k)+1$.</li>
<li>The <strong>converse</strong> ("if $Q$ then $P$") is a different statement and may be false.</li>
<li><strong>Contradiction</strong>: assume the statement is false and derive something impossible. Classic: $\sqrt2$ irrational. Suppose $\sqrt2=\frac pq$ in lowest terms. Then $p^2=2q^2$, so $p$ is even; write $p=2m$. Then $q^2=2m^2$, so $q$ is even, contradicting lowest terms.</li>
<li>Divisibility: "$a\mid b$" means $b=ka$ for some integer $k$. Inequalities: AM–GM, $\frac{a+b}{2}\ge\sqrt{ab}$ for $a,b\ge0$, follows from $(\sqrt a-\sqrt b)^2\ge0$.</li></ul>`,
          },
          {
            id: 'pf-ind', short: 'Mathematical induction',
            text: 'the method of proof by mathematical induction; apply deductive reasoning, including mathematical induction, and use appropriate language, in the construction of mathematical arguments and proofs',
            note: R`<ol>
<li><strong>Base case</strong>: show the statement $P(1)$ is true (or $P(n_0)$ for the first value).</li>
<li><strong>Inductive hypothesis</strong>: assume $P(k)$ is true for some $k\in N$.</li>
<li><strong>Inductive step</strong>: using that assumption, prove $P(k+1)$.</li>
<li><strong>Conclusion</strong>: since $P(1)$ is true and $P(k)\Rightarrow P(k+1)$, $P(n)$ is true for all $n\in N$.</li></ol>
<p>Example (sum): $1+3+5+\dots+(2n-1)=n^2$. Base: $1=1^2$. Assume $1+\dots+(2k-1)=k^2$. Then $1+\dots+(2k-1)+(2k+1)=k^2+2k+1=(k+1)^2$. ✓</p>
<p>Example (divisibility): $5^n-1$ is divisible by 4. Base: $5-1=4$. Assume $5^k-1=4m$. Then $5^{k+1}-1=5\cdot5^k-1=5(4m+1)-1=20m+4=4(5m+1)$. ✓</p>
<ul><li>The key move is to rewrite the $(k+1)$ case so that the $k$ case appears inside it, then substitute the assumption.</li></ul>`,
          },
        ],
      },
      {
        id: 'graph', group: 'Unit 1', title: 'Graph theory',
        book: 'Cambridge Specialist 1&2: see the graph theory chapter.',
        kk: [
          {
            id: 'gt-basic', short: 'Graphs, degree and types of graph',
            text: 'vertices and edges for undirected graphs, including multiple edges and loops, and their representation using lists, diagrams and adjacency matrices; the degree of a vertex and the result that the sum of all the vertex degrees is equal to twice the number of edges (the handshaking lemma); simple graphs, isomorphism, subgraphs, connectedness, complete graphs and the complement of a graph; bi-partite graphs, trees, and regular graphs (including the Platonic graphs)',
            note: R`<ul>
<li>A <strong>simple graph</strong> has no loops and no multiple edges. The <strong>degree</strong> of a vertex is the number of edge-ends there (a loop adds 2).</li>
<li><strong>Handshaking lemma</strong>: $\sum\deg(v)=2e$. Consequence: the number of odd-degree vertices is always even.</li>
<li><strong>Adjacency matrix</strong>: the entry $(i,j)$ is the number of edges between $v_i$ and $v_j$. It is symmetric for undirected graphs; a loop is usually entered as 1 on the diagonal (check the convention used). Row sums give degrees in a simple graph.</li>
<li><strong>Complete graph</strong> $K_n$: every pair joined, with $\frac{n(n-1)}{2}$ edges. <strong>$r$-regular</strong>: every vertex has degree $r$, so $e=\frac{nr}{2}$.</li>
<li><strong>Complement</strong> $\bar G$: same vertices; edges exactly where $G$ has none. $e(G)+e(\bar G)=\frac{n(n-1)}{2}$.</li>
<li><strong>Bipartite</strong>: vertices split into two sets with every edge going between the sets. $K_{m,n}$ has $mn$ edges. A graph is bipartite exactly when it has no odd-length cycle.</li>
<li><strong>Isomorphic</strong> graphs are the same graph drawn differently: there is a relabelling that preserves edges. Check the number of vertices, edges and the degree sequence first: if any differ, they are not isomorphic.</li>
<li>Platonic graphs: tetrahedron $K_4$ (3-regular), cube (3-regular, 8 vertices), octahedron (4-regular, 6 vertices), dodecahedron, icosahedron.</li></ul>`,
          },
          {
            id: 'gt-planar', short: 'Planar graphs, Euler’s formula and trees',
            text: R`planar graphs and related proofs and applications such as Euler’s formula $v+f-e=2$ for simple connected planar graphs, the complete graph $K_n$ on $n$ vertices has $\frac{n(n-1)}{2}$ edges, a regular graph with $n$ vertices each of degree $r$ has $\frac{nr}{2}$ edges, the planarity of various types of graphs, including all trees, complete graph on $n$ vertices if $n\le4$, and $K_{m,n}$ if $m\le2$ or $n\le2$; equivalent conditions for a simple graph with $n$ vertices to be a tree`,
            note: R`<ul>
<li>A graph is <strong>planar</strong> if it can be drawn with no edges crossing. Then the plane is split into <strong>faces</strong> (count the outside face too).</li>
<li><strong>Euler's formula</strong> (connected planar): $v-e+f=2$. Example: the cube graph has $8-12+6=2$.</li>
<li>Planar: all trees; $K_n$ for $n\le4$; $K_{m,n}$ if $m\le2$ or $n\le2$. Not planar: $K_5$ and $K_{3,3}$.</li>
<li>Useful bound: a simple connected planar graph with $v\ge3$ has $e\le3v-6$ (each face has at least 3 edges and each edge borders at most 2 faces, so $3f\le2e$). $K_5$ has $e=10>3(5)-6=9$, so it is not planar.</li>
<li><strong>Trees</strong>: connected with no cycles. For a simple graph with $n$ vertices, these are equivalent:
<ul><li>it is a tree;</li><li>it is connected with $n-1$ edges;</li><li>it has no cycles and $n-1$ edges;</li><li>there is exactly one path between any two vertices.</li></ul>A tree has $f=1$.</li></ul>`,
          },
          {
            id: 'gt-walk', short: 'Euler and Hamiltonian paths and circuits',
            text: 'trails and circuits, Euler circuits and Euler trails, Hamiltonian cycles and paths, and the Konigsberg bridge problem',
            note: R`<ul>
<li>A <strong>walk</strong> is any sequence of edges. A <strong>trail</strong> repeats no edge; a <strong>path</strong> repeats no vertex. A <strong>circuit</strong> is a closed trail; a <strong>cycle</strong> is a closed path.</li>
<li><strong>Euler trail</strong>: uses every edge exactly once. <strong>Euler circuit</strong>: an Euler trail that returns to its start.</li>
<li>For a connected graph:
<ul><li>an Euler circuit exists if and only if <em>every</em> vertex has even degree;</li><li>an Euler trail (not a circuit) exists if and only if <em>exactly two</em> vertices are odd, and it must start at one odd vertex and finish at the other.</li></ul></li>
<li><strong>Königsberg</strong>: 4 land masses with degrees 5, 3, 3, 3 (four odd vertices), so no walk crosses each of the 7 bridges exactly once.</li>
<li><strong>Hamiltonian path</strong>: visits every <em>vertex</em> exactly once. <strong>Hamiltonian cycle</strong>: does so and returns to the start. There is no simple degree test; show one by listing it, or argue why it is impossible (e.g. a vertex of degree 1 means there is no Hamiltonian cycle).</li>
<li>$K_n$ ($n\ge3$) always has a Hamiltonian cycle; $K_{m,n}$ has one only when $m=n\ge2$.</li></ul>`,
          },
        ],
      },
      {
        id: 'logic', group: 'Unit 1', title: 'Logic, Boolean algebra and algorithms',
        book: 'Cambridge Specialist 1&2: see the chapters on logic and on algorithms.',
        kk: [
          {
            id: 'lg-prop', short: 'Propositions, truth tables and validity',
            text: 'propositions, connectives, truth values, truth tables and Karnaugh maps; tautologies, validity and proof patterns and the application of these to proofs in natural language',
            note: R`<ul>
<li>A <strong>proposition</strong> is a statement that is either true or false. Connectives: $\neg p$ (not), $p\wedge q$ (and), $p\vee q$ (or, inclusive), $p\Rightarrow q$ (if… then), $p\Leftrightarrow q$ (if and only if).</li>
<li>$p\Rightarrow q$ is false <em>only</em> when $p$ is true and $q$ is false.</li>
<li>A <strong>tautology</strong> is always true (e.g. $p\vee\neg p$); a <strong>contradiction</strong> is always false. Two statements are logically equivalent if their truth-table columns match, e.g. $p\Rightarrow q\equiv\neg q\Rightarrow\neg p\equiv\neg p\vee q$.</li>
<li>De Morgan: $\neg(p\wedge q)\equiv\neg p\vee\neg q$ and $\neg(p\vee q)\equiv\neg p\wedge\neg q$.</li>
<li>An <strong>argument is valid</strong> if, whenever all premises are true, the conclusion must be true (check every truth-table row where the premises are true). Valid patterns: <em>modus ponens</em> ($p\Rightarrow q,\ p$, so $q$) and <em>modus tollens</em> ($p\Rightarrow q,\ \neg q$, so $\neg p$). Invalid: "affirming the consequent" ($p\Rightarrow q,\ q$, so $p$).</li>
<li>A truth table with $n$ variables has $2^n$ rows.</li></ul>`,
          },
          {
            id: 'lg-bool', short: 'Boolean algebra, logic gates and binary',
            text: 'Boolean algebras; binary number systems; laws and properties of Boolean algebra, the algebra of sets and propositions; logic gates and circuits, and simplification of circuits',
            note: R`<ul>
<li>Boolean notation: $A\cdot B$ (AND), $A+B$ (OR), $\bar A$ (NOT). Laws: commutative, associative, distributive (both ways: $A+BC=(A+B)(A+C)$), identity ($A+0=A$, $A\cdot1=A$), complement ($A+\bar A=1$, $A\bar A=0$), idempotent ($A+A=A$), absorption ($A+AB=A$), De Morgan ($\overline{A+B}=\bar A\bar B$).</li>
<li>Simplify: $AB+A\bar B=A(B+\bar B)=A$. And $A+\bar AB=A+B$.</li>
<li>Gates: AND, OR, NOT, NAND ($\overline{AB}$), NOR ($\overline{A+B}$). Read a circuit from its inputs to its output, writing the expression at each gate.</li>
<li><strong>Karnaugh maps</strong> (2 or 3 variables): place 1s for the true rows, with the columns in Gray-code order (00, 01, 11, 10). Circle rectangular groups of size 1, 2, 4, … (wrapping around the edges is allowed). Each group gives a product term; the variables that change within a group drop out.</li>
<li><strong>Binary</strong>: base 2. $1011_2=8+2+1=11$. To convert 13 to binary, use powers of 2: $13=8+4+1=1101_2$.</li></ul>`,
          },
          {
            id: 'lg-algo', short: 'Algorithms and pseudocode',
            text: 'definition of an algorithm and the fundamental constructs needed to describe algorithms: sequence, decision (selection, choice, if … then … blocks) and repetition (iteration and loops); construction and implementation of basic algorithms incorporating the fundamental constructs using pseudocode',
            note: R`<ul>
<li>An <strong>algorithm</strong> is a finite, precise sequence of steps that solves a problem.</li>
<li>Constructs: <strong>sequence</strong> (steps in order), <strong>selection</strong> (if… then… else), <strong>repetition</strong> (for loops a fixed number of times; while loops until a condition fails).</li>
<li><strong>Tracing</strong> pseudocode: make a table with one column per variable and one row per pass of the loop. This is the most reliable way to answer "what is printed?".</li>
<li>Example: Euclid's algorithm for gcd:
<div class="pseudo">define gcd(a, b)
  while b ≠ 0
    r ← a mod b
    a ← b
    b ← r
  end while
  return a</div>
gcd(84, 36): (84, 36) → (36, 12) → (12, 0) → 12.</li>
<li>Check the loop bounds carefully. "for i from 1 to n" runs $n$ times, and an off-by-one error is the most common mistake.</li></ul>`,
          },
        ],
      },
      {
        id: 'seq', group: 'Unit 1', title: 'Sequences, series and recurrence relations',
        book: 'Cambridge Specialist 1&2: see the chapter on sequences and series.',
        kk: [
          {
            id: 'sq-ag', short: 'Arithmetic and geometric sequences and series',
            text: R`definitions of sequences and series, arithmetic and geometric sequences and their partial sums; the limiting behaviour as $n\to\infty$ of the terms $t_n$ in a geometric sequence and dependence on the value of the common ratio`,
            note: R`<ul>
<li><strong>Arithmetic</strong>: $t_n=a+(n-1)d$, and $S_n=\frac n2\big(2a+(n-1)d\big)=\frac n2(a+l)$, where $l$ is the last term.</li>
<li><strong>Geometric</strong>: $t_n=ar^{n-1}$, and $S_n=\frac{a(r^n-1)}{r-1}$ (for $r\ne1$).</li>
<li>Three terms $x, y, z$: arithmetic if $y-x=z-y$; geometric if $\frac yx=\frac zy$.</li>
<li><strong>Limiting behaviour of $t_n=ar^{n-1}$</strong>:
<ul><li>$|r|\lt 1$: $t_n\to0$;</li><li>$r=1$: constant;</li><li>$r=-1$: alternates between $a$ and $-a$;</li><li>$|r|>1$: $|t_n|\to\infty$ (oscillating in sign if $r\lt -1$).</li></ul></li>
<li>Example: $5, 15, 45, \dots$ has $t_8=5\times3^7=10935$ and $S_8=\frac{5(3^8-1)}{2}=16400$.</li>
<li>"Smallest $n$ such that $S_n>1000$": solve the inequality on the CAS, then round <em>up</em>.</li></ul>`,
          },
          {
            id: 'sq-rec', short: 'Recurrence relations and applications',
            text: R`sequences generated by recursion; solution of first order linear recurrence relations of the form $t_{n+1}=at_n+b,\ a\ne0$, with constant coefficients and their application to financial problems and population modelling`,
            note: R`<ul>
<li>$t_{n+1}=t_n+d$ is arithmetic; $t_{n+1}=rt_n$ is geometric.</li>
<li><strong>General first-order</strong>: $t_{n+1}=at_n+b$ with $a\ne1$, starting from $t_0$:
$$t_n=a^nt_0+b\,\frac{a^n-1}{a-1}$$
Equivalently, $t_n=a^n(t_0-L)+L$ where $L=\frac{b}{1-a}$ is the <strong>fixed point</strong> (steady state).</li>
<li>If $|a|\lt 1$, $t_n\to L$; if $|a|>1$, the sequence moves away from $L$ (unless it starts there).</li>
<li><strong>Loan</strong>: borrow $P$ at monthly rate $i$ and repay $R$ per month: $B_{n+1}=(1+i)B_n-R$, $B_0=P$. <strong>Savings</strong>: $A_{n+1}=(1+i)A_n+D$.</li>
<li><strong>Population</strong> with harvesting: $P_{n+1}=1.2P_n-500$ (grows 20% a year, 500 removed each year). Fixed point $L=\frac{-500}{1-1.2}=2500$: start above 2500 and it grows; start below and it dies out.</li>
<li>Indexing: check whether the first term is $t_0$ or $t_1$, and adjust the powers to match.</li></ul>`,
          },
        ],
      },
      {
        id: 'comb', group: 'Unit 1', title: 'Combinatorics',
        book: 'Cambridge Specialist 1&2: see the combinatorics chapter.',
        kk: [
          {
            id: 'cb-perm', short: 'Permutations and combinations',
            text: 'permutations and combinations and their use in solving problems involving arrangements and selections with or without repeated elements',
            note: R`<ul>
<li>Arrangements of $n$ distinct objects: $n!$. Of $r$ from $n$: $^{n}P_r=\frac{n!}{(n-r)!}$. Selections: $\binom nr=\frac{n!}{r!(n-r)!}$.</li>
<li><strong>Repeated (identical) objects</strong>: arrangements of MISSISSIPPI $=\frac{11!}{1!\,4!\,4!\,2!}=34650$.</li>
<li><strong>Repetition allowed</strong>: $n^r$ ordered choices (e.g. 4-digit PINs: $10^4$).</li>
<li><strong>Together</strong>: treat the group as one block, then multiply by the arrangements inside the block. <strong>Apart</strong>: total minus together, or place the others first and slot the separated items into the gaps.</li>
<li><strong>Circular arrangements</strong> of $n$ people: $(n-1)!$, since rotations are the same.</li>
<li>"At least": often easiest as total minus "none". Selections with conditions: split into cases and add.</li>
<li>Combination problems with categories: "3 boys and 2 girls from 7 boys and 5 girls" $=\binom73\binom52=350$.</li></ul>`,
          },
          {
            id: 'cb-pig', short: 'Pigeon-hole principle',
            text: 'the pigeon-hole principle and its use in solving problems and proving results',
            note: R`<ul>
<li>If $n+1$ objects are put into $n$ boxes, at least one box contains at least 2 objects.</li>
<li><strong>Generalised</strong>: if $N$ objects go into $n$ boxes, some box contains at least $\left\lceil\frac Nn\right\rceil$ objects.</li>
<li>The skill is choosing the "boxes". Examples:
<ul><li>Among 13 people, two share a birth month (12 boxes).</li>
<li>Any 5 points in a $2\times2$ square: split it into four $1\times1$ squares; two points share a small square, so they are at most $\sqrt2$ apart.</li>
<li>Any set of 6 integers contains two with the same remainder on division by 5, so their difference is divisible by 5.</li></ul></li>
<li>"Minimum number to guarantee": consider the worst case (fill every box to just below the target), then add one. Socks: 3 colours, to guarantee a matching pair you need $3+1=4$ socks.</li></ul>`,
          },
          {
            id: 'cb-ie', short: 'Inclusion–exclusion principle',
            text: 'the inclusion-exclusion principle for the union of two sets and the union of three sets',
            note: R`<ul>
<li>Two sets: $|A\cup B|=|A|+|B|-|A\cap B|$.</li>
<li>Three sets: $|A\cup B\cup C|=|A|+|B|+|C|-|A\cap B|-|A\cap C|-|B\cap C|+|A\cap B\cap C|$.</li>
<li>Example: integers 1 to 100 divisible by 2, 3 or 5: $50+33+20-16-10-6+3=74$.</li>
<li>"Neither / none": total minus the union. "Exactly one": fill a Venn diagram from the centre outwards.</li>
<li>Arrangements: "letters of SPECIAL where S isn't first and L isn't last": $7!-6!-6!+5!=5040-1440+120=3720$.</li></ul>`,
          },
          {
            id: 'cb-id', short: 'Pascal’s triangle and combinatorial identities',
            text: 'derivation and application of simple combinatorial identities; use deductive reasoning to solve problems involving counting techniques, the pigeon-hole principle and Pascal’s triangle',
            note: R`<ul>
<li>Symmetry: $\binom nr=\binom n{n-r}$ (choosing who's in = choosing who's out).</li>
<li><strong>Pascal's identity</strong>: $\binom nr=\binom{n-1}{r-1}+\binom{n-1}{r}$. Counting proof: fix one person; the selections either include them ($\binom{n-1}{r-1}$) or don't ($\binom{n-1}{r}$).</li>
<li>Row sums: $\binom n0+\binom n1+\dots+\binom nn=2^n$ (each element is in or out of a subset), which is also why a set of size $n$ has $2^n$ subsets.</li>
<li>Pascal's triangle: row $n$ lists $\binom n0,\dots,\binom nn$, and each entry is the sum of the two above it. Row 5: 1 5 10 10 5 1.</li>
<li>Binomial expansion: $(a+b)^n=\sum\binom nr a^{n-r}b^r$, e.g. $(x+2)^4=x^4+8x^3+24x^2+32x+16$.</li>
<li>Algebraic proofs: write each term as factorials, find a common denominator and simplify.</li></ul>`,
          },
        ],
      },
      // ============================================================ UNIT 2
      {
        id: 'samp', group: 'Unit 2', title: 'Random variables and sampling',
        book: 'Cambridge Specialist 1&2: see the chapters on discrete random variables and on sampling and simulation.',
        kk: [
          {
            id: 'sr-rv', short: 'Mean, variance and sums of random variables',
            text: 'the mean, variance and standard deviation of a discrete random variable X; the distribution of the sum of n identically distributed independent discrete random variables; comparison of the distribution of 2X, where X is a discrete random variable and the sum of 2 independent discrete random variables that are each identically distributed as X',
            note: R`<ul>
<li>$E(X)=\mu=\sum x\Pr(X=x)$. $\text{Var}(X)=E(X^2)-\mu^2$, where $E(X^2)=\sum x^2\Pr(X=x)$. $\text{sd}(X)=\sqrt{\text{Var}(X)}$.</li>
<li>Linear change: $E(aX+b)=aE(X)+b$ and $\text{Var}(aX+b)=a^2\text{Var}(X)$.</li>
<li><strong>Sums of independent random variables</strong>: $E(X_1+X_2)=E(X_1)+E(X_2)$ and $\text{Var}(X_1+X_2)=\text{Var}(X_1)+\text{Var}(X_2)$.</li>
<li>For $n$ independent copies of $X$: $E=n\mu$ and $\text{Var}=n\sigma^2$.</li>
<li><strong>$2X$ vs $X_1+X_2$</strong>: both have mean $2\mu$, but
<ul><li>$\text{Var}(2X)=4\sigma^2$;</li><li>$\text{Var}(X_1+X_2)=2\sigma^2$.</li></ul>Doubling one outcome is riskier than adding two independent outcomes, which partly cancel out. Their distributions also differ: for one die, $2X$ takes only even values 2 to 12, while the sum of two dice takes every value from 2 to 12.</li>
<li>Find the distribution of a sum with a grid of outcomes, e.g. two spinners.</li></ul>`,
          },
          {
            id: 'sr-mean', short: 'Simulation and sample means',
            text: R`random experiments, events and event spaces; use of simulation to generate a random sample; the distinction between a population parameter and a sample statistic and the use of a sample statistic (sample mean $\bar x$) as an estimate of the associated population parameter (mean $\mu$); the concept of a sampling distribution; the distribution of sample means considered empirically including comparing the distributions of different size samples from the same population in terms of centre and spread; consideration of the mean and standard deviation of the distribution of sample means and the effect of taking larger samples`,
            note: R`<ul>
<li>A <strong>parameter</strong> describes a population (e.g. $\mu$, which is fixed but usually unknown). A <strong>statistic</strong> is calculated from a sample (e.g. $\bar x$, which varies from sample to sample).</li>
<li>The <strong>sampling distribution of $\bar X$</strong> is the distribution of sample means over all possible samples of size $n$. Simulate it by taking many samples, recording each $\bar x$, and graphing them (dot plot or histogram).</li>
<li><strong>Centre</strong>: $E(\bar X)=\mu$, so the sample mean is an unbiased estimate. <strong>Spread</strong>: $\text{sd}(\bar X)=\frac{\sigma}{\sqrt n}$, so larger samples give less variable means. Quadrupling $n$ halves the spread.</li>
<li>As $n$ grows, the distribution of $\bar X$ becomes more symmetric and bell-shaped, even if the population is skewed.</li>
<li>Example: a die has $\mu=3.5$ and $\sigma\approx1.708$. Means of samples of 25 rolls have mean 3.5 and sd $\approx\frac{1.708}{5}\approx0.342$.</li></ul>`,
          },
        ],
      },
      {
        id: 'trig', group: 'Unit 2', title: 'Trigonometry',
        book: 'Cambridge Specialist 1&2: see the chapters on trigonometric ratios and applications, and on trigonometric identities.',
        kk: [
          {
            id: 'tg-tri', short: 'Sine and cosine rules, sectors and segments',
            text: 'radian measure, arc length, sectors and segments; the sine rule and cosine rule applied to two and three-dimensional situations, including problems involving angles between planes',
            note: R`<ul>
<li><strong>Sine rule</strong>: $\frac{a}{\sin A}=\frac{b}{\sin B}=\frac{c}{\sin C}$. Use it with a side and its opposite angle. <strong>Ambiguous case</strong>: given two sides and a non-included angle, there may be two triangles ($B$ and $180^\circ-B$).</li>
<li><strong>Cosine rule</strong>: $c^2=a^2+b^2-2ab\cos C$, or $\cos C=\frac{a^2+b^2-c^2}{2ab}$. Use it with SAS or SSS.</li>
<li>Area of a triangle $=\frac12ab\sin C$.</li>
<li>Radians: arc $l=r\theta$; sector area $\frac12r^2\theta$; <strong>segment</strong> area $\frac12r^2(\theta-\sin\theta)$.</li>
<li><strong>3D</strong>: draw the right-angled triangles separately. The <strong>angle between a line and a plane</strong> is the angle between the line and its projection on the plane. The <strong>angle between two planes</strong> is the angle between two lines, one in each plane, both perpendicular to the common edge at the same point.</li>
<li>Bearings: measured clockwise from north as three-figure bearings (e.g. 060°T). Draw a north line at each point.</li></ul>`,
          },
          {
            id: 'tg-id', short: 'Trigonometric identities',
            text: R`compound and double angle formulas for sine, cosine and tangent and the identities $\sec^2(x)=1+\tan^2(x)$ and $\text{cosec}^2(x)=1+\cot^2(x)$; proof and application of identities between $a\sin(x)+b\cos(x)$ and $r\sin(x\pm\alpha)$ or $r\cos(x\pm\alpha)$ where $\alpha$ is in the first quadrant, the identities for products of sines and cosines expressed as sums and differences, and the identities for addition and differences of sines and cosines expressed as products`,
            note: R`<ul>
<li>$\sin(A\pm B)=\sin A\cos B\pm\cos A\sin B$; $\cos(A\pm B)=\cos A\cos B\mp\sin A\sin B$; $\tan(A\pm B)=\frac{\tan A\pm\tan B}{1\mp\tan A\tan B}$.</li>
<li>Double angle: $\sin2A=2\sin A\cos A$; $\cos2A=\cos^2A-\sin^2A=2\cos^2A-1=1-2\sin^2A$; $\tan2A=\frac{2\tan A}{1-\tan^2A}$.</li>
<li>Exact values from compound angles: $\sin\frac{\pi}{12}=\sin\left(\frac\pi3-\frac\pi4\right)=\frac{\sqrt6-\sqrt2}{4}$.</li>
<li>$\sec^2x=1+\tan^2x$ and $\text{cosec}^2x=1+\cot^2x$ (divide $\sin^2+\cos^2=1$ by $\cos^2$ or $\sin^2$).</li>
<li><strong>$a\sin x+b\cos x=r\sin(x+\alpha)$</strong>, where $r=\sqrt{a^2+b^2}$, $\cos\alpha=\frac ar$ and $\sin\alpha=\frac br$. Example: $\sin x+\sqrt3\cos x=2\sin\left(x+\frac\pi3\right)$, so its maximum is 2.</li>
<li>Products to sums: $2\sin A\cos B=\sin(A+B)+\sin(A-B)$; $2\cos A\cos B=\cos(A-B)+\cos(A+B)$; $2\sin A\sin B=\cos(A-B)-\cos(A+B)$.</li>
<li>Sums to products: $\sin A+\sin B=2\sin\frac{A+B}{2}\cos\frac{A-B}{2}$; $\cos A+\cos B=2\cos\frac{A+B}{2}\cos\frac{A-B}{2}$; $\cos A-\cos B=-2\sin\frac{A+B}2\sin\frac{A-B}2$.</li>
<li>Proving an identity: work on one side only (usually the more complicated one) until it equals the other.</li></ul>`,
          },
        ],
      },
      {
        id: 'vec', group: 'Unit 2', title: 'Vectors in the plane',
        book: 'Cambridge Specialist 1&2: see the chapter on vectors in the plane.',
        kk: [
          {
            id: 'vc-ops', short: 'Vector representation and algebra',
            text: R`the representation of plane vectors as directed line segments, magnitude and direction of a plane vector, and unit vectors; geometric representation of addition, subtraction (triangle and/or parallelogram rules), scalar multiple of a vector and linear combination of plane vectors; the representation of a plane vector as an ordered pair $(a,b)$ in the form $a\underset{\sim}{i}+b\underset{\sim}{j}$; simple vector algebra`,
            note: R`<ul>
<li>$\underset{\sim}{a}=x\underset{\sim}{i}+y\underset{\sim}{j}$. Magnitude: $|\underset{\sim}{a}|=\sqrt{x^2+y^2}$. Direction: the angle with the positive $x$-axis, $\tan\theta=\frac yx$ (check the quadrant).</li>
<li>Unit vector: $\hat{\underset{\sim}{a}}=\frac{\underset{\sim}{a}}{|\underset{\sim}{a}|}$. For $3\underset{\sim}{i}-4\underset{\sim}{j}$: $\frac15(3\underset{\sim}{i}-4\underset{\sim}{j})$.</li>
<li>$\overrightarrow{AB}=\overrightarrow{OB}-\overrightarrow{OA}$ ("end minus start"). Midpoint $M$ of $AB$: $\overrightarrow{OM}=\frac12(\overrightarrow{OA}+\overrightarrow{OB})$.</li>
<li>Triangle rule: $\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}$.</li>
<li>Parallel vectors: $\underset{\sim}{a}=k\underset{\sim}{b}$. Collinear points $A,B,C$: $\overrightarrow{AB}=k\overrightarrow{AC}$.</li>
<li>Equal vectors have the same magnitude and direction (position doesn't matter). If $\underset{\sim}{a}$ and $\underset{\sim}{b}$ are not parallel and $m\underset{\sim}{a}+n\underset{\sim}{b}=p\underset{\sim}{a}+q\underset{\sim}{b}$, then $m=p$ and $n=q$.</li></ul>`,
          },
          {
            id: 'vc-dot', short: 'Scalar product, angles and projections',
            text: 'scalar (dot) product of two plane vectors, perpendicular and parallel vectors, projection of one vector onto another vector, and angle between two vectors',
            note: R`<ul>
<li>$\underset{\sim}{a}\cdot\underset{\sim}{b}=a_1b_1+a_2b_2=|\underset{\sim}{a}||\underset{\sim}{b}|\cos\theta$. Also $\underset{\sim}{a}\cdot\underset{\sim}{a}=|\underset{\sim}{a}|^2$.</li>
<li><strong>Perpendicular</strong> exactly when $\underset{\sim}{a}\cdot\underset{\sim}{b}=0$ (non-zero vectors).</li>
<li>Angle: $\cos\theta=\frac{\underset{\sim}{a}\cdot\underset{\sim}{b}}{|\underset{\sim}{a}||\underset{\sim}{b}|}$. Example: $\underset{\sim}{i}+\underset{\sim}{j}$ and $\underset{\sim}{i}$: $\cos\theta=\frac{1}{\sqrt2}$, so $\theta=45^\circ$.</li>
<li><strong>Scalar resolute</strong> (projection length) of $\underset{\sim}{a}$ on $\underset{\sim}{b}$: $\underset{\sim}{a}\cdot\hat{\underset{\sim}{b}}$. <strong>Vector resolute</strong>: $(\underset{\sim}{a}\cdot\hat{\underset{\sim}{b}})\hat{\underset{\sim}{b}}=\frac{\underset{\sim}{a}\cdot\underset{\sim}{b}}{\underset{\sim}{b}\cdot\underset{\sim}{b}}\underset{\sim}{b}$. The perpendicular component is $\underset{\sim}{a}$ minus the vector resolute.</li>
<li>Example: $\underset{\sim}{a}=3\underset{\sim}{i}+4\underset{\sim}{j}$ onto $\underset{\sim}{b}=\underset{\sim}{i}$: scalar resolute 3, vector resolute $3\underset{\sim}{i}$, perpendicular part $4\underset{\sim}{j}$.</li></ul>`,
          },
          {
            id: 'vc-app', short: 'Geometric proofs and applications',
            text: 'geometric proofs with vectors; application of vectors to displacement, velocity, resultant velocity, relative velocity, statics and motion under a constant force',
            note: R`<ul>
<li><strong>Geometric proofs</strong>: express everything in terms of two base vectors (e.g. $\overrightarrow{OA}=\underset{\sim}{a}$ and $\overrightarrow{OB}=\underset{\sim}{b}$), then use dot products for perpendicularity or scalar multiples for parallelism. Example: the diagonals of a rhombus are perpendicular, because $(\underset{\sim}{a}+\underset{\sim}{b})\cdot(\underset{\sim}{b}-\underset{\sim}{a})=|\underset{\sim}{b}|^2-|\underset{\sim}{a}|^2=0$.</li>
<li><strong>Resultant velocity</strong>: add the velocity vectors. A boat heading across a river at $4$ m/s in a current of $3$ m/s moves at $5$ m/s, at an angle of $\tan^{-1}\frac34$ downstream from straight across.</li>
<li><strong>Relative velocity</strong>: the velocity of $A$ relative to $B$ is $\underset{\sim}{v}_A-\underset{\sim}{v}_B$.</li>
<li><strong>Statics</strong> (equilibrium): the vector sum of all forces is $\underset{\sim}{0}$. Resolve into $\underset{\sim}{i}$ and $\underset{\sim}{j}$ components and set each sum to zero.</li>
<li>Motion under a constant force: the resultant force $\underset{\sim}{F}$ gives acceleration $\underset{\sim}{a}=\frac{\underset{\sim}{F}}{m}$, and displacement $\underset{\sim}{s}=\underset{\sim}{u}t+\frac12\underset{\sim}{a}t^2$, applied to each component.</li></ul>`,
          },
        ],
      },
      {
        id: 'kin', group: 'Unit 2', title: 'Kinematics',
        book: 'Cambridge Specialist 1&2: see the kinematics material and the chapter on vectors in the plane (motion and velocity).',
        kk: [
          {
            id: 'km-line', short: 'Straight-line motion and motion graphs',
            text: 'application of vectors to displacement, velocity, resultant velocity, relative velocity, statics and motion under a constant force',
            note: R`<ul>
<li><strong>Position</strong> $x$ is measured from a fixed origin; <strong>displacement</strong> is the change in position (it has a sign); <strong>distance</strong> is the total path length (never negative). <strong>Velocity</strong> has a sign (direction); <strong>speed</strong> = |velocity|.</li>
<li><strong>Position–time graph</strong>: gradient = velocity. A horizontal section means at rest; a steeper line means faster.</li>
<li><strong>Velocity–time graph</strong>: gradient = acceleration; <strong>signed area</strong> between the graph and the $t$-axis = displacement; <strong>total area</strong> (counting regions below the axis as positive) = distance travelled. The object changes direction where the graph crosses the $t$-axis.</li>
<li><strong>Constant acceleration</strong> $a$ (initial velocity $u$, final velocity $v$, displacement $s$, time $t$):
$$v=u+at\qquad s=ut+\tfrac12at^2\qquad v^2=u^2+2as\qquad s=\tfrac12(u+v)t$$
Choose the formula that leaves out the quantity you don't know and don't need.</li>
<li>Example: a car at 20 m/s brakes at 4 m/s² ($a=-4$). Stopping distance: $0=400-8s$, so $s=50$ m. Stopping time: $0=20-4t$, so $t=5$ s.</li>
<li>Vertical motion: take up as positive, so $a=-9.8$ m/s². At the maximum height, $v=0$.</li>
<li>Average velocity = displacement ÷ time; average speed = distance ÷ time.</li></ul>`,
          },
          {
            id: 'km-vec', short: 'Motion in the plane with vectors',
            text: 'application of vectors to displacement, velocity, resultant velocity, relative velocity, statics and motion under a constant force; use vectors to solve problems involving position, displacement, velocity and force',
            note: R`<ul>
<li>A <strong>position vector</strong> $\tv{r}(t)=x(t)\tv{i}+y(t)\tv{j}$ gives the location at time $t$. With constant velocity $\tv{v}$ from $\tv{r}_0$: $\tv{r}(t)=\tv{r}_0+t\,\tv{v}$. Speed = $|\tv{v}|$.</li>
<li>Example: $\tv{r}(t)=(2+3t)\tv{i}+(1+t)\tv{j}$ starts at $(2,1)$ and moves with velocity $3\tv{i}+\tv{j}$ (speed $\sqrt{10}$).</li>
<li><strong>Path (Cartesian equation)</strong>: eliminate $t$. From $x=2+3t$, $t=\frac{x-2}{3}$, so $y=1+\frac{x-2}{3}$. Plot it, marking where the object is at particular times.</li>
<li><strong>Do two objects meet?</strong> They collide only if they are at the same place <em>at the same time</em>: solve $\tv{r}_A(t)=\tv{r}_B(t)$ by equating the $\tv{i}$ and the $\tv{j}$ components, and check that both give the same $t$. Paths that cross at different times don't collide.</li>
<li><strong>Relative velocity</strong> of $B$ as seen from $A$: $\tv{v}_B-\tv{v}_A$. <strong>Resultant velocity</strong>: add the velocities (e.g. boat + current, plane + wind).</li>
<li>Constant acceleration in the plane: $\tv{r}(t)=\tv{r}_0+\tv{u}t+\frac12\tv{a}t^2$, applied to each component, where $\tv{a}=\frac{\tv{F}}{m}$ for a constant resultant force $\tv{F}$.</li>
<li>Distance between objects at time $t$: $|\tv{r}_B(t)-\tv{r}_A(t)|$. The closest approach can be found on the CAS by minimising this.</li></ul>`,
          },
        ],
      },
      {
        id: 'cplx', group: 'Unit 2', title: 'Complex numbers',
        book: 'Cambridge Specialist 1&2: see the complex numbers chapter.',
        kk: [
          {
            id: 'cx-cart', short: 'Complex arithmetic and quadratics',
            text: 'definition and properties of the complex numbers, C, arithmetic, modulus of a complex number, and the representation of complex numbers on an Argand diagram; general solution of quadratic equations (with real coefficients) of a single variable over C, and conjugate roots',
            note: R`<ul>
<li>$i^2=-1$. $z=a+bi$ with $\text{Re}(z)=a$ and $\text{Im}(z)=b$ (a real number). Powers of $i$ cycle: $i, -1, -i, 1$.</li>
<li>Conjugate $\bar z=a-bi$; $z\bar z=a^2+b^2=|z|^2$; modulus $|z|=\sqrt{a^2+b^2}$.</li>
<li>Division: multiply the top and bottom by the conjugate of the denominator. $\frac{3+i}{1-2i}=\frac{(3+i)(1+2i)}{5}=\frac{1+7i}{5}$.</li>
<li>Equal complex numbers: equate the real parts and the imaginary parts.</li>
<li><strong>Quadratics with real coefficients</strong>: if $\Delta\lt 0$, the roots are a <strong>conjugate pair</strong> $\frac{-b\pm i\sqrt{-\Delta}}{2a}$. $z^2-4z+13=0$ gives $z=2\pm3i$. Completing the square: $(z-2)^2+9=(z-2-3i)(z-2+3i)$.</li>
<li>Sum of two squares: $z^2+9=(z+3i)(z-3i)$.</li>
<li>On an Argand diagram, $z$ is the point $(a,b)$. Multiplying by $i$ rotates it $90^\circ$ anticlockwise about the origin. $\bar z$ is the reflection in the real axis.</li></ul>`,
          },
          {
            id: 'cx-polar', short: 'Polar form, multiplication and powers',
            text: 'conversion between Cartesian and polar form of complex numbers; multiplication, division, and powers of complex numbers in polar form and their geometric interpretation; use of the modulus of a complex number and the argument of a non-zero complex number to prove basic identities',
            note: R`<ul>
<li>$z=r\,\text{cis}\,\theta=r(\cos\theta+i\sin\theta)$, where $r=|z|$ and $\theta=\arg z$. The <strong>principal argument</strong> $\text{Arg}(z)\in(-\pi,\pi]$.</li>
<li>Convert: $-1+i\sqrt3$ has $r=2$ and is in the second quadrant with basic angle $\frac\pi3$, so $\text{Arg}=\frac{2\pi}{3}$: $2\,\text{cis}\frac{2\pi}{3}$.</li>
<li><strong>Multiply</strong>: multiply the moduli and add the arguments. <strong>Divide</strong>: divide the moduli and subtract the arguments. Geometrically, multiplying by $r\,\text{cis}\,\theta$ is a dilation by $r$ and a rotation by $\theta$.</li>
<li><strong>Powers</strong> (De Moivre): $(r\,\text{cis}\,\theta)^n=r^n\,\text{cis}(n\theta)$. Example: $(1+i)^8=\left(\sqrt2\,\text{cis}\frac\pi4\right)^8=16\,\text{cis}\,2\pi=16$.</li>
<li>Bring arguments back into $(-\pi,\pi]$ by adding or subtracting multiples of $2\pi$.</li>
<li>Identities: $|z_1z_2|=|z_1||z_2|$, $\left|\frac{z_1}{z_2}\right|=\frac{|z_1|}{|z_2|}$, $\arg(z_1z_2)=\arg z_1+\arg z_2$ (up to $2\pi$), $\arg\bar z=-\arg z$.</li></ul>`,
          },
          {
            id: 'cx-reg', short: 'Lines, circles, ellipses and regions in C',
            text: 'lines, rays, circles and ellipses; regions defined in the complex plane using combinations of the above',
            note: R`<ul>
<li>$|z-z_1|=r$: <strong>circle</strong> with centre $z_1$ and radius $r$. $|z-z_1|\lt r$: the inside (dashed boundary); $\le$ includes the boundary (solid).</li>
<li>$|z-z_1|=|z-z_2|$: the <strong>perpendicular bisector</strong> of $z_1$ and $z_2$, a line. E.g. $|z-2|=|z-4i|$: $x^2-4x+4+y^2=x^2+y^2-8y+16$, so $y=\frac{x}{2}+\frac32$.</li>
<li>$\text{Arg}(z-z_1)=\theta$: a <strong>ray</strong> from $z_1$ (not including $z_1$) at angle $\theta$.</li>
<li>$|z-z_1|+|z-z_2|=2a$ (with $2a>|z_1-z_2|$): an <strong>ellipse</strong> with foci $z_1,z_2$. E.g. $|z-3|+|z+3|=10$: $\frac{x^2}{25}+\frac{y^2}{16}=1$.</li>
<li>$\text{Re}(z)>2$ is the half-plane $x>2$; $\text{Im}(z)\le\text{Re}(z)$ is the region on or below $y=x$.</li>
<li>Combined regions: shade the intersection (and), and use dashed boundaries for strict inequalities.</li></ul>`,
          },
        ],
      },
      {
        id: 'fgr', group: 'Unit 2', title: 'Functions, relations and graphs',
        book: 'Cambridge Specialist 1&2: see the chapters on reciprocal and inverse circular functions, partial fractions, loci and conics, and polar coordinates.',
        kk: [
          {
            id: 'fg-pf', short: 'Partial fractions',
            text: 'identities from equating coefficients of polynomials, rational functions and their decompositions into partial fractions with denominators expressed as products of linear and irreducible quadratic terms',
            note: R`<ul>
<li><strong>Equating coefficients</strong>: if two polynomials are equal for all $x$, the coefficients of each power match.</li>
<li><strong>Distinct linear factors</strong>: $\frac{5x+1}{(x-1)(x+2)}=\frac{A}{x-1}+\frac{B}{x+2}$. Multiply through: $5x+1=A(x+2)+B(x-1)$. With $x=1$: $6=3A$, so $A=2$. With $x=-2$: $-9=-3B$, so $B=3$.</li>
<li><strong>Linear × irreducible quadratic</strong>: $\frac{3x^2+x+2}{(x+1)(x^2+1)}=\frac{A}{x+1}+\frac{Bx+C}{x^2+1}$. With $x=-1$: $4=2A$, so $A=2$. Equating $x^2$ coefficients: $3=A+B$, so $B=1$; constants: $2=A+C$, so $C=0$.</li>
<li>An irreducible quadratic has $\Delta\lt 0$, so it doesn't factorise over $R$.</li>
<li>If the degree of the numerator ≥ degree of the denominator, divide first (polynomial long division).</li>
<li>Check with the CAS (expand or partial-fraction command).</li></ul>`,
          },
          {
            id: 'fg-recip', short: 'Reciprocal functions and sec, cosec, cot',
            text: 'graphs of simple reciprocal functions, including graphs of the reciprocal circular functions cosecant, secant and cotangent, and simple transformations of these; construct the graph of a reciprocal function from the graph of the original function',
            note: R`<ul>
<li>Sketching $y=\frac1{f(x)}$ from $y=f(x)$:
<ul><li>zeros of $f$ become <strong>vertical asymptotes</strong>;</li><li>points where $f=\pm1$ are invariant;</li><li>a local max of $f$ becomes a local min of $\frac1f$ (same $x$), and vice versa;</li><li>the sign is unchanged;</li><li>where $|f|\to\infty$, $\frac1f\to0$.</li></ul></li>
<li>$\sec x=\frac{1}{\cos x}$: asymptotes at $x=\frac\pi2+k\pi$; range $(-\infty,-1]\cup[1,\infty)$; period $2\pi$.</li>
<li>$\text{cosec}\,x=\frac{1}{\sin x}$: asymptotes at $x=k\pi$; same range; period $2\pi$.</li>
<li>$\cot x=\frac{\cos x}{\sin x}$: asymptotes at $x=k\pi$; zeros at $\frac\pi2+k\pi$; period $\pi$; decreasing between asymptotes.</li>
<li>Transformations: $y=2\sec(3x)$ has period $\frac{2\pi}{3}$ and range $(-\infty,-2]\cup[2,\infty)$.</li></ul>`,
          },
          {
            id: 'fg-inv', short: 'Inverse circular functions',
            text: 'graphs of the restricted circular functions of sine, cosine and tangent over principal domains and their respective inverse functions sin⁻¹, cos⁻¹ and tan⁻¹ (students should be familiar with alternative notations, arcsin, arccos and arctan), and simple transformations of these graphs',
            note: R`<ul>
<li>$\sin^{-1}:[-1,1]\to\left[-\frac\pi2,\frac\pi2\right]$ (increasing). $\cos^{-1}:[-1,1]\to[0,\pi]$ (decreasing). $\tan^{-1}:R\to\left(-\frac\pi2,\frac\pi2\right)$ with horizontal asymptotes $y=\pm\frac\pi2$.</li>
<li>Exact values: $\sin^{-1}\left(-\frac12\right)=-\frac\pi6$; $\cos^{-1}\left(-\frac12\right)=\frac{2\pi}{3}$; $\tan^{-1}(-1)=-\frac\pi4$.</li>
<li>Compositions: $\sin(\sin^{-1}x)=x$ for $x\in[-1,1]$, but $\sin^{-1}(\sin x)=x$ only for $x\in\left[-\frac\pi2,\frac\pi2\right]$. E.g. $\sin^{-1}\left(\sin\frac{5\pi}{6}\right)=\frac\pi6$.</li>
<li>Right-triangle trick: $\cos\left(\sin^{-1}\frac35\right)=\frac45$.</li>
<li>Transformations: for $y=2\cos^{-1}(3x)-\frac\pi2$, the domain is $3x\in[-1,1]$, i.e. $\left[-\frac13,\frac13\right]$, and the range is $2[0,\pi]-\frac\pi2=\left[-\frac\pi2,\frac{3\pi}2\right]$.</li></ul>`,
          },
          {
            id: 'fg-locus', short: 'Loci, conics, parametric and polar forms',
            text: 'locus definition and construction in the plane of lines, parabolas, circles, ellipses and hyperbolas and their Cartesian, polar and parametric forms and graphs; use the distance formula and locus definitions to obtain the rule of a relation; graph non-linear relations in the plane from their Cartesian, polar and parametric representations',
            note: R`<ul>
<li><strong>Circle</strong>: points a fixed distance $r$ from a centre: $(x-h)^2+(y-k)^2=r^2$. Parametric: $x=h+r\cos t$, $y=k+r\sin t$.</li>
<li><strong>Parabola</strong>: equidistant from a focus and a directrix. Focus $(a,0)$, directrix $x=-a$: $y^2=4ax$.</li>
<li><strong>Ellipse</strong>: sum of the distances to two foci is constant ($2a$): $\frac{(x-h)^2}{a^2}+\frac{(y-k)^2}{b^2}=1$. Parametric: $x=h+a\cos t$, $y=k+b\sin t$. Foci at $(\pm c,0)$ with $c^2=a^2-b^2$.</li>
<li><strong>Hyperbola</strong>: difference of the distances to the foci is constant: $\frac{x^2}{a^2}-\frac{y^2}{b^2}=1$, with asymptotes $y=\pm\frac bax$ and foci $(\pm c,0)$, $c^2=a^2+b^2$. Parametric: $x=a\sec t$, $y=b\tan t$.</li>
<li>Locus method: let $P(x,y)$, write the condition with the distance formula, square, and simplify.</li>
<li><strong>Polar</strong>: $x=r\cos\theta$, $y=r\sin\theta$, $r^2=x^2+y^2$. $r=4$ is a circle; $\theta=\frac\pi4$ is a line; $r=4\cos\theta$ is a circle through the origin with centre $(2,0)$ (multiply by $r$: $x^2+y^2=4x$).</li>
<li>Parametric to Cartesian: eliminate $t$, e.g. using $\cos^2t+\sin^2t=1$ or $\sec^2t-\tan^2t=1$.</li></ul>`,
          },
          {
            id: 'fg-abs', short: 'Absolute value function',
            text: 'the absolute value function, its graph and simple transformations of its graph',
            note: R`<ul>
<li>$|x|=x$ if $x\ge0$, and $-x$ if $x\lt 0$. The graph of $y=|x|$ is a V shape with its vertex at the origin.</li>
<li>$y=a|x-h|+k$: vertex $(h,k)$, with arm gradients $\pm a$.</li>
<li>$y=|f(x)|$: reflect the parts of $y=f(x)$ that are below the $x$-axis up above it.</li>
<li>Solving $|2x-3|=5$: $2x-3=\pm5$, so $x=4$ or $x=-1$.</li>
<li>Inequalities: $|x-2|\lt 3 \iff -1\lt x\lt 5$; $|x|>a \iff x\lt -a$ or $x>a$.</li>
<li>$|x|$ is not differentiable at $x=0$ (sharp corner). $\sqrt{x^2}=|x|$.</li></ul>`,
          },
        ],
      },
    ],
  });
})();
