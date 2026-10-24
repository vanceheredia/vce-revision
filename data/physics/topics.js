// Physics Units 1 & 2 – topics, study design key knowledge and revision notes.
// Key knowledge is taken from the VCE Physics Study Design (accredited from 2023 for Units 1–2), VCAA.
// Units 1–2 are school-assessed; the paper formats follow the VCAA Units 3–4 exam style (MC + short/extended answer).
(() => {
  const R = String.raw;
  const comm = (n) => ({ id: `o${n}-comm`, short: 'Communicating physics (all options)',
    text: 'evaluate validity of sources of information; apply physics concepts specific to the investigation: definitions of key terms; and use of appropriate scientific terminology, conventions and representations; apply the use of data representations, models and theories in organising and explaining observed phenomena and physics concepts, and discuss the limitations of the explanations; discuss the influence of sociocultural, economic, legal and political factors relevant to the selected issue or application; apply physics understanding to justify a stance, opinion or solution to the selected issue or application',
    note: R`<ul>
<li><strong>Validity of sources</strong>: check the author's expertise, peer review, date, purpose/bias (who funded it?), whether the claims are supported by data, and whether other reputable sources agree.</li>
<li><strong>Models have limits</strong>: say what a model explains and what it doesn't (e.g. a DC model of household AC; the ray model can't explain interference).</li>
<li><strong>Societal factors</strong>: social/cultural (public acceptance, equity), economic (cost, jobs), legal (laws, regulation, liability), political (policy, international agreements).</li>
<li><strong>Justifying a stance</strong>: state the stance, support it with specific physics (numbers, mechanisms), acknowledge the strongest counter-argument and explain why your evidence outweighs it.</li></ul>` });

  VCE.subject('physics', {
    intro: R`Every question is new, written against the <strong>VCE Physics Study Design (Units 1 and 2)</strong>, and tagged to its key knowledge dot points. Units 1 and 2 are assessed by the school, so the practice exams copy the style of the VCAA Units 3–4 exam: multiple choice plus short- and extended-answer questions, with a scientific calculator. <strong>Unit 2 Area of Study 2:</strong> each student studies <strong>one of 18 options</strong>; all 18 have notes and a test below, so start with your school's option. Every question has a step-by-step worked solution.`,
    testsTitle: 'Topic tests',
    testsNote: 'Shorter papers (about 40–50 minutes) on one area of study, which suit a weeknight.',
    optionsTitle: 'Unit 2 option tests (Area of Study 2)',
    optionsNote: 'Your school studies <strong>one</strong> of these 18 options. Ask which one, then use that test (each is about 25 minutes).',
    technique: R`<h1>Exam technique: Physics</h1>
<h2>How Physics is marked</h2>
<ul>
<li><strong>Show working</strong> for any question worth more than 1 mark. VCAA's instruction is that "appropriate working must be shown", and marks are awarded for the steps. The minimum is: <em>formula → substitution with units converted → answer with unit</em>. A formula on its own, or a bare answer, can lose marks.</li>
<li><strong>Convert units first</strong>: km → m, ms → s, g → kg, nm → m, kW → W, minutes/hours → s. Unit conversion is the most common error in the examiners' reports.</li>
<li><strong>Significant figures</strong>: give the number asked for (usually 2 or 3). Don't round in the middle of a calculation.</li>
<li><strong>Vectors need a direction</strong> (velocity, acceleration, force, momentum, impulse): give a sign with your convention ("taking right as positive") or a word (up, north, to the left).</li>
<li><strong>Use $g=9.8$ m s<sup>−2</sup></strong> unless told otherwise.</li>
</ul>
<h2>Explain and justify questions</h2>
<ul>
<li>Link the physics to <strong>this</strong> situation (the object, the numbers in the question). Copying a general statement from your notes sheet earns little.</li>
<li>Name the right law: an <em>acceleration</em> needs a <em>net force</em> (Newton's <strong>second</strong> law); "equal and opposite" forces on <em>different</em> objects is the <strong>third</strong> law.</li>
<li>Be precise with words: say <strong>kinetic energy</strong> is not conserved in an inelastic collision (momentum and total energy are always conserved).</li>
<li>For "compare": state the property for <strong>both</strong> things, using a comparative word (higher, lower, faster).</li>
</ul>
<h2>Graphs and data (key science skills)</h2>
<ul>
<li>Independent variable on the horizontal axis; label axes with quantity and unit.</li>
<li>A line of best fit does <strong>not</strong> have to go through the first and last points (or the origin). Calculate gradients as $\frac{\text{rise}}{\text{run}}$ using two points <strong>on the line</strong>, far apart.</li>
<li><strong>Systematic</strong> errors shift every reading the same way (e.g. a zero error) and can't be reduced by repeating. <strong>Random</strong> errors vary unpredictably and are reduced in effect by repeating and averaging.</li>
<li>Accuracy = close to the true value. Precision = close to each other. Repeatability = same person, same method. Reproducibility = different person/equipment/method.</li>
</ul>`,
    topics: [
      // ---------------- Unit 1 ----------------
      { id: 'light', group: 'Unit 1: How is energy useful to society?', title: 'Light and electromagnetic waves', kk: [
        { id: 'lw-em', short: 'Electromagnetic waves and the spectrum',
          text: 'identify all electromagnetic waves as transverse waves travelling at the same speed, c, in a vacuum as distinct from mechanical waves that require a medium to propagate; identify the amplitude, wavelength, period and frequency of waves; calculate the wavelength, frequency, period and speed of travel of waves; explain the wavelength of a wave as a result of the velocity (determined by the medium through which it travels) and the frequency (determined by the source); describe electromagnetic radiation emitted from the Sun as mainly ultraviolet, visible and infrared; compare the wavelength and frequencies of different regions of the electromagnetic spectrum, including radio, microwave, infrared, visible, ultraviolet, x-ray and gamma, and compare the different uses each has in society',
          note: R`<ul>
<li>All EM waves are <strong>transverse</strong> and travel at $c=3.0\times10^8$ m s<sup>−1</sup> in a vacuum. Mechanical waves (sound, water) need a medium.</li>
<li>$v=f\lambda$ and $T=\frac1f$. Frequency is set by the <strong>source</strong>; speed by the <strong>medium</strong>; so wavelength $\lambda=\frac vf$ changes when light enters a new medium.</li>
<li>Spectrum (increasing frequency, decreasing wavelength): radio → microwave → infrared → visible (red ~700 nm to violet ~400 nm) → ultraviolet → X-ray → gamma.</li>
<li>Uses: radio (broadcasting), microwave (mobile phones, cooking), IR (remote controls, thermal imaging), visible (sight, optical fibres), UV (sterilising), X-ray (medical imaging), gamma (cancer therapy, sterilising equipment).</li>
<li>Sunlight is mainly IR, visible and UV.</li></ul>` },
        { id: 'lw-refr', short: 'Refraction, Snell’s law and total internal reflection',
          text: 'investigate and analyse theoretically and practically the behaviour of waves including: refraction using Snell’s Law: n1 sin(θ1) = n2 sin(θ2) and n1v1 = n2v2; total internal reflection and critical angle including applications: n1 sin(θc) = n2 sin(90º)',
          note: R`<ul>
<li>Refractive index $n=\frac cv$, so $n_1v_1=n_2v_2$. Angles are measured from the <strong>normal</strong>.</li>
<li>Snell's law: $n_1\sin\theta_1=n_2\sin\theta_2$. Into a denser medium (higher $n$) light slows and bends <strong>towards</strong> the normal.</li>
<li><strong>Total internal reflection</strong> happens only going from high $n$ to low $n$, when the angle of incidence exceeds the critical angle: $\sin\theta_c=\frac{n_2}{n_1}$.</li>
<li>Example: glass ($n=1.50$) to air: $\theta_c=\sin^{-1}\frac{1}{1.50}=41.8^\circ$.</li></ul>` },
        { id: 'lw-disp', short: 'Dispersion, rainbows, mirages and optical fibres',
          text: 'investigate and explain theoretically and practically colour dispersion in prisms and lenses with reference to refraction of the components of white light as they pass from one medium to another; explain the formation of optical phenomena: rainbows; mirages; investigate light transmission through optical fibres for communication',
          note: R`<ul>
<li><strong>Dispersion</strong>: the refractive index is slightly different for each wavelength (higher for violet than red), so each colour refracts by a different angle and white light separates.</li>
<li><strong>Rainbow</strong>: sunlight refracts (and disperses) entering a raindrop, reflects off the back, and refracts (disperses further) leaving. Red appears on the outside of the primary bow; the Sun must be behind the observer.</li>
<li><strong>Mirage</strong>: air near hot ground is hotter and less dense, so has a lower refractive index. Light from the sky gradually refracts away from the normal until it totally internally reflects upwards; the brain traces it back in a straight line and "sees" water on the road.</li>
<li><strong>Optical fibres</strong>: a core with higher $n$ than the cladding; light hitting the boundary above $\theta_c$ is totally internally reflected along the fibre. Used for high-bandwidth, low-loss communication not affected by electrical interference.</li></ul>` },
      ] },
      { id: 'heat', group: 'Unit 1: How is energy useful to society?', title: 'Thermal energy and climate', kk: [
        { id: 'th-temp', short: 'Temperature, thermal energy and heat transfer',
          text: 'convert between Celsius and kelvin scales; describe how an increase in temperature corresponds to an increase in thermal energy (kinetic and potential energy of the atoms) of a system; distinguish between conduction, convection and radiation with reference to heat transfers within and between systems; explain why cooling results from evaporation using a simple kinetic energy model',
          note: R`<ul>
<li>$T(\text{K})=T(^\circ\text{C})+273$. A temperature <em>change</em> is the same size in K and °C.</li>
<li><strong>Temperature</strong> measures the average kinetic energy of the particles. <strong>Internal (thermal) energy</strong> is the total kinetic + potential energy of the particles.</li>
<li><strong>Conduction</strong>: energy passed by particle collisions (and free electrons in metals), mainly in solids. <strong>Convection</strong>: bulk movement of a fluid, as warm less-dense fluid rises. <strong>Radiation</strong>: EM waves (mainly IR), needs no medium.</li>
<li><strong>Evaporation cools</strong>: the fastest (highest-kinetic-energy) molecules escape the surface, so the average kinetic energy, and the temperature, of the remaining liquid falls.</li></ul>` },
        { id: 'th-calc', short: 'Specific heat capacity and latent heat',
          text: 'investigate and analyse theoretically and practically the energy required to: raise the temperature of a substance: Q = mcΔT; change the state of a substance: Q = mL',
          note: R`<ul>
<li>$Q=mc\Delta T$ ($c$ in J kg<sup>−1</sup> K<sup>−1</sup>; water $c=4200$). $Q=mL$ for a change of state at constant temperature ($L_{\text{fusion}}$ of water $3.34\times10^5$ J kg<sup>−1</sup>, $L_{\text{vaporisation}}$ $2.26\times10^6$ J kg<sup>−1</sup>).</li>
<li>During melting or boiling, energy goes into breaking bonds (potential energy), so the temperature stays constant: the flat sections of a heating curve.</li>
<li>Multi-stage problems: add the energies for each stage (warm the ice, melt it, warm the water, …).</li></ul>` },
        { id: 'th-rad', short: 'Wien’s law, radiation and climate change',
          text: 'calculate the peak wavelength of the radiated electromagnetic radiation using Wien’s Law: λmaxT = constant; compare the total energy across the electromagnetic spectrum emitted by objects at different temperatures; apply concepts of energy transfer, energy transformation, temperature change and change of state to climate change and global warming',
          note: R`<ul>
<li>Wien's law: $\lambda_{\max}T=2.9\times10^{-3}$ m K ($T$ in kelvin). Hotter objects peak at shorter wavelengths: the Sun (~5800 K) peaks near 500 nm (visible); Earth (~288 K) near 10 μm (infrared).</li>
<li>A hotter object emits <strong>more energy at every wavelength</strong> (the total, the area under the curve, rises steeply with temperature).</li>
<li><strong>Greenhouse effect</strong>: sunlight (short wavelength) passes through the atmosphere and warms Earth; Earth re-emits IR, which greenhouse gases (CO<sub>2</sub>, CH<sub>4</sub>, H<sub>2</sub>O) absorb and re-emit, some back down. Extra greenhouse gases enhance the effect.</li>
<li>Climate links: melting ice absorbs latent heat and lowers albedo (darker surfaces absorb more); warmer oceans expand and hold less CO<sub>2</sub>; more evaporation adds water vapour (positive feedbacks).</li></ul>` },
      ] },
      { id: 'nuc', group: 'Unit 1: How is energy useful to society?', title: 'Nuclear radiation', kk: [
        { id: 'nu-stab', short: 'Nuclear stability and decay',
          text: 'explain nuclear stability with reference to the forces in the nucleus including electrostatic forces, the strong nuclear force and the weak nuclear force; describe the properties of α, β-, β+ and γ radiation; explain nuclear transformations using decay equations involving α, β-, β+ and γ radiation; analyse decay series diagrams with reference to type of decay and stability of isotopes',
          note: R`<ul>
<li>The <strong>strong nuclear force</strong> (attractive, very short range) holds nucleons together against the <strong>electrostatic repulsion</strong> between protons. The <strong>weak nuclear force</strong> is responsible for β decay. Large nuclei need extra neutrons for stability; nuclei with too many or too few neutrons, or that are too big, are unstable.</li>
<li><strong>α</strong> = helium nucleus $^4_2\text{He}$: highly ionising, stopped by paper/skin. <strong>β<sup>−</sup></strong> = electron (n → p + e<sup>−</sup> + antineutrino). <strong>β<sup>+</sup></strong> = positron (p → n + e<sup>+</sup> + neutrino). β: moderately ionising, stopped by a few mm of aluminium. <strong>γ</strong> = high-energy photon: weakly ionising, very penetrating (reduced by thick lead/concrete).</li>
<li>Decay equations conserve mass number (top) and atomic number (bottom): α: $A\to A-4$, $Z\to Z-2$. β<sup>−</sup>: $Z\to Z+1$. β<sup>+</sup>: $Z\to Z-1$. γ: no change.</li>
<li>Decay series diagram (N vs Z): α moves 2 down and 2 left; β<sup>−</sup> moves 1 down and 1 right.</li></ul>` },
        { id: 'nu-half', short: 'Random decay and half-life',
          text: 'model radioactive decay as random decay with a particular half-life, including mathematical modelling with reference to whole half-lives',
          note: R`<ul>
<li>Decay is <strong>random</strong>: you can't predict when a particular nucleus will decay, but a large sample decays predictably.</li>
<li>Half-life: the time for half the nuclei (or the activity) to decay. After $n$ half-lives, the fraction remaining is $\left(\frac12\right)^n$.</li>
<li>Example: 80 g with a half-life of 6 h; after 18 h (3 half-lives) $80\to40\to20\to10$ g remain.</li></ul>` },
        { id: 'nu-dose', short: 'Effects of radiation and dose',
          text: 'explain the effects of α, β and γ radiation on humans, including: different capacities to cause cell damage; short- and long-term effects of low and high doses; ionising impacts of radioactive sources outside and inside the body; calculations of absorbed dose (gray), equivalent dose (sievert) and effective dose (sievert); evaluate the use of medical radioisotopes in therapy including the effects on healthy and damaged tissues and cells',
          note: R`<ul>
<li><strong>Absorbed dose</strong> $D=\frac{E}{m}$ in gray (Gy = J kg<sup>−1</sup>). <strong>Equivalent dose</strong> $H=D\times w_R$ in sievert (Sv); $w_R$: α = 20, β = 1, γ = 1. <strong>Effective dose</strong> $=\sum H\times w_T$ (tissue weighting factor) in Sv.</li>
<li><strong>Outside</strong> the body, α is harmless (stopped by dead skin) and γ is the main hazard. <strong>Inside</strong> (inhaled/ingested), α is most damaging because all its energy is deposited in a small volume of tissue.</li>
<li>High doses: short-term radiation sickness, burns, death. Low doses: long-term increased cancer risk and genetic mutation.</li>
<li>Radiotherapy targets fast-dividing cancer cells, which are more sensitive; healthy cells are also damaged, so doses are focused and fractionated (split up) to allow healthy tissue to recover.</li></ul>` },
      ] },
      { id: 'nucE', group: 'Unit 1: How is energy useful to society?', title: 'Nuclear energy: fission and fusion', kk: [
        { id: 'ne-energy', short: 'Mass–energy, fission, fusion and binding energy',
          text: 'explain, qualitatively, nuclear energy as energy resulting from the conversion of mass; explain fission chain reactions including: the effect of mass and shape on criticality; neutron absorption and moderation; compare the processes of nuclear fusion and nuclear fission; explain, using a binding energy curve, why both fusion and fission are reactions that release energy; investigate the viability of nuclear energy as an energy source for Australia',
          note: R`<ul>
<li>In fission and fusion the products have slightly less mass than the reactants; this "missing mass" appears as energy ($E=mc^2$, qualitatively).</li>
<li><strong>Fission</strong>: a slow neutron is absorbed by U-235, which splits into two medium nuclei plus 2–3 neutrons and energy. Those neutrons can cause more fissions: a <strong>chain reaction</strong>.</li>
<li><strong>Critical mass</strong>: enough fuel, in a compact shape (sphere: smallest surface area per volume), that on average at least one neutron from each fission causes another. Too small or too flat and too many neutrons escape.</li>
<li><strong>Moderator</strong> (water, graphite) slows neutrons so U-235 absorbs them. <strong>Control rods</strong> (boron, cadmium) absorb neutrons to control the rate.</li>
<li><strong>Fusion</strong>: light nuclei (e.g. hydrogen isotopes) join; needs extreme temperature and pressure to overcome electrostatic repulsion.</li>
<li><strong>Binding energy per nucleon</strong> peaks at iron-56. Fusing light nuclei or splitting heavy nuclei both move towards the peak, so products are more tightly bound and energy is released.</li>
<li>Australia: large uranium reserves, low-emission baseload power; but high capital cost, long build times, waste storage, public opinion and current legal bans.</li></ul>` },
      ] },
      { id: 'elec', group: 'Unit 1: How is energy useful to society?', title: 'Electricity: concepts and circuits', kk: [
        { id: 'el-conc', short: 'Charge, current, voltage, energy and power',
          text: 'apply concepts of charge (Q), electric current (I), potential difference (V), energy (E) and power (P), in electric circuits; analyse and evaluate different analogies used to describe electric current and potential difference; investigate and analyse theoretically and practically electric circuits using the relationships; justify the use of selected meters (ammeter, voltmeter, multimeter) in circuits; apply the kilowatt-hour (kW h) as a unit of energy',
          note: R`<ul>
<li>$I=\frac{Q}{t}$ (A = C s<sup>−1</sup>); $V=\frac{E}{Q}$ (V = J C<sup>−1</sup>); $V=IR$; $P=\frac Et=VI=I^2R=\frac{V^2}{R}$; $E=VIt$.</li>
<li>Charge of an electron $e=1.6\times10^{-19}$ C.</li>
<li><strong>Ammeter</strong> in series (very low resistance); <strong>voltmeter</strong> in parallel (very high resistance); a multimeter can be set to either.</li>
<li><strong>kW h</strong>: energy used by 1 kW for 1 hour $=3.6\times10^6$ J. Cost = kW h × price per kW h.</li>
<li>Analogies (water in pipes, a conveyor belt delivering energy) help, but each has limits: e.g. charge isn't used up, and the battery doesn't supply the charge, it supplies energy.</li></ul>` },
        { id: 'el-circ', short: 'Resistance, series and parallel circuits',
          text: 'model resistance in series and parallel circuits using: current versus potential difference (I–V) graphs; resistance as the potential difference to current ratio, including R = constant for ohmic devices; equivalent resistance in arrangements in series and parallel; calculate and analyse the equivalent resistance of circuits comprising parallel and series resistance; analyse circuits comprising voltage dividers; model household (AC) electrical systems as simple direct current (DC) circuits; compare power transfers in series and parallel circuits; explain why the circuits in homes are mostly parallel circuits',
          note: R`<ul>
<li>Ohmic device: straight-line I–V graph through the origin; $R=\frac VI$ constant.</li>
<li><strong>Series</strong>: same current; voltages add; $R_T=R_1+R_2+\dots$</li>
<li><strong>Parallel</strong>: same voltage; currents add; $\frac1{R_T}=\frac1{R_1}+\frac1{R_2}+\dots$ ($R_T$ is less than the smallest).</li>
<li><strong>Voltage divider</strong>: $V_{\text{out}}=V_{\text{in}}\times\frac{R_2}{R_1+R_2}$ (the voltage splits in proportion to resistance).</li>
<li>Homes are wired in <strong>parallel</strong>: every appliance gets the full 230 V, each can be switched independently, and one failing doesn't stop the others.</li></ul>` },
        { id: 'el-dev', short: 'Circuit components and electrical safety',
          text: 'investigate and apply theoretically and practically concepts of current, resistance, potential difference (voltage drop) and power to the operation of electronic circuits comprising resistors, light bulbs, diodes, thermistors, light dependent resistors (LDRs), light-emitting diodes (LEDs) and potentiometers; describe energy transfers and transformations in common devices; model household electricity connections as a simple DC circuit comprising fuses, switches, circuit breakers, loads and earth; compare the operation of safety devices including fuses, circuit breakers and residual current devices (RCDs); describe the causes, effects and first aid treatment of electric shock and identify the approximate danger thresholds for current and duration',
          note: R`<ul>
<li><strong>Diode/LED</strong>: conducts in one direction only, once forward voltage (~0.7 V silicon, ~2 V LED) is reached. <strong>Thermistor (NTC)</strong>: resistance falls as temperature rises. <strong>LDR</strong>: resistance falls as light intensity rises. <strong>Potentiometer</strong>: variable voltage divider. A <strong>filament bulb</strong> is non-ohmic: resistance rises as it heats up.</li>
<li><strong>Fuse</strong>: wire melts when the current exceeds its rating (one use). <strong>Circuit breaker</strong>: electromagnetic switch trips on overcurrent; resettable. Both protect <em>wiring</em> from overheating, in the active wire.</li>
<li><strong>RCD (safety switch)</strong>: compares active and neutral currents; trips in ~30 ms if they differ by ~30 mA (current leaking through a person or to earth). It protects <em>people</em>.</li>
<li><strong>Earth wire</strong>: connects a metal case to the ground so a fault current flows to earth (blowing the fuse) rather than through a person.</li>
<li>Shock danger depends on current and time: ~1 mA felt, ~10 mA can't let go, ~50 mA+ can cause ventricular fibrillation. First aid: switch off the power (don't touch the person), call 000, CPR/defibrillator if needed.</li></ul>` },
      ] },
      // ---------------- Unit 2 AoS1 ----------------
      { id: 'kin', group: 'Unit 2: How is motion understood?', title: 'Describing motion', kk: [
        { id: 'mo-kin', short: 'Vectors, scalars and constant acceleration',
          text: 'identify parameters of motion as vectors or scalars; analyse graphically, numerically and algebraically, straight-line motion under constant acceleration',
          note: R`<ul>
<li><strong>Vectors</strong> (magnitude + direction): displacement, velocity, acceleration, force, momentum. <strong>Scalars</strong>: distance, speed, time, mass, energy.</li>
<li>Constant acceleration: $v=u+at$, $s=ut+\frac12at^2$, $s=vt-\frac12at^2$, $v^2=u^2+2as$, $s=\frac12(u+v)t$.</li>
<li>Method: list $s,u,v,a,t$; tick the three you know; choose the equation without the unknown you don't need. Choose a positive direction and stick to it.</li>
<li>Free fall: $a=-9.8$ m s<sup>−2</sup> (up positive). At the top of a vertical throw $v=0$ but $a$ is still $-9.8$.</li></ul>` },
        { id: 'mo-graph', short: 'Motion graphs (including non-uniform motion)',
          text: 'analyse, graphically, non-uniform motion in a straight line',
          note: R`<ul>
<li><strong>Position–time</strong>: gradient = velocity. Curved = changing velocity.</li>
<li><strong>Velocity–time</strong>: gradient = acceleration; area under the graph = displacement (area below the axis is negative displacement).</li>
<li><strong>Acceleration–time</strong>: area = change in velocity.</li>
<li>Non-uniform motion: use the gradient of the <strong>tangent</strong> at a point for instantaneous values, and count squares (or split into shapes) for areas.</li></ul>` },
      ] },
      { id: 'force', group: 'Unit 2: How is motion understood?', title: 'Forces and Newton’s laws', kk: [
        { id: 'fo-newton', short: 'Newton’s three laws and momentum',
          text: 'apply concepts of momentum to linear motion: p = mv; explain changes in momentum as being caused by a net force; model the force due to gravity, Fg, as the force of gravity acting at the centre of mass of a body, F on body by Earth = mg, where g is the gravitational field strength (9.8 N kg-1 near the surface of Earth); model forces as vectors acting at the point of application (with magnitude and direction), labelling these forces using the convention ‘force on A by B’; apply Newton’s three laws of motion to a body on which forces act',
          note: R`<ul>
<li><strong>First law</strong>: with zero net force, an object stays at rest or moves at constant velocity.</li>
<li><strong>Second law</strong>: $\Sigma F=ma$, or $\Sigma F=\frac{\Delta p}{\Delta t}$. The net force and the acceleration point the same way.</li>
<li><strong>Third law</strong>: $F_{\text{on A by B}}=-F_{\text{on B by A}}$: equal size, opposite direction, same type of force, acting on <em>different</em> objects (so they never cancel).</li>
<li>Weight $F_g=mg$ acts at the centre of mass; $g=9.8$ N kg<sup>−1</sup>.</li>
<li>Momentum $p=mv$ (kg m s<sup>−1</sup>), a vector.</li></ul>` },
        { id: 'fo-vec', short: 'Force vectors, components, friction and normal forces',
          text: 'apply the vector model of forces, including vector addition and components of forces, to readily observable forces including the force due to gravity, friction and normal forces',
          note: R`<ul>
<li>Add forces head to tail (or add components). Perpendicular forces: $F=\sqrt{F_x^2+F_y^2}$, direction $\tan\theta=\frac{F_y}{F_x}$.</li>
<li>Components of a force $F$ at angle $\theta$: $F\cos\theta$ (adjacent) and $F\sin\theta$ (opposite).</li>
<li><strong>Inclined plane</strong> (angle $\theta$): weight component down the slope $mg\sin\theta$; into the slope $mg\cos\theta$, balanced by the normal force $N=mg\cos\theta$ (if no other perpendicular forces).</li>
<li>Friction acts parallel to the surface, opposing (attempted) sliding. Normal force acts perpendicular to the surface.</li>
<li>Draw a free-body diagram for <strong>one</strong> object, with arrows starting at the point of application.</li></ul>` },
      ] },
      { id: 'energy', group: 'Unit 2: How is motion understood?', title: 'Work, energy and power', kk: [
        { id: 'en-work', short: 'Work and Hooke’s law',
          text: 'apply the concept of work done by a force using: work done = force × displacement: W = Fscosθ, where force is constant; work done = area under force vs distance graph; investigate and analyse theoretically and practically Hooke’s Law for an ideal spring: F = –kx, where x is extension',
          note: R`<ul>
<li>$W=Fs\cos\theta$ (J), where $\theta$ is the angle between the force and the displacement. A force perpendicular to the motion does no work.</li>
<li>Work = area under a force–distance graph.</li>
<li>Hooke's law: $F=-kx$ (restoring force opposite to the extension). $k$ (N m<sup>−1</sup>) is the gradient of a force–extension graph.</li>
<li>Elastic potential energy $E_s=\frac12kx^2$ = area under the force–extension graph.</li></ul>` },
        { id: 'en-cons', short: 'Energy conservation, power and efficiency',
          text: 'analyse and model mechanical energy transfers and transformations using energy conservation: changes in gravitational potential energy near Earth’s surface: Eg = mgΔh; elastic potential energy in ideal springs; kinetic energy; analyse rate of energy transfer using power; calculate the efficiency of an energy transfer system',
          note: R`<ul>
<li>$E_k=\frac12mv^2$, $E_g=mg\Delta h$, $E_s=\frac12kx^2$. With no friction, total mechanical energy is conserved: $E_k+E_g+E_s=$ constant.</li>
<li>Power $P=\frac{E}{t}=\frac Wt$ (W). Also $P=Fv$ at constant speed.</li>
<li>Efficiency $\eta=\frac{\text{useful energy out}}{\text{total energy in}}\times100\%$ (or with powers).</li>
<li>Energy "lost" to friction and air resistance becomes thermal energy and sound; it isn't destroyed.</li></ul>` },
      ] },
      { id: 'mom', group: 'Unit 2: How is motion understood?', title: 'Impulse and momentum', kk: [
        { id: 'mm-imp', short: 'Impulse and conservation of momentum',
          text: 'analyse impulse in an isolated system (for collisions between objects moving in a straight line): FΔt = mΔv; investigate and analyse theoretically and practically momentum conservation in one dimension',
          note: R`<ul>
<li>Impulse $=F\Delta t=\Delta p=m\Delta v$ (N s = kg m s<sup>−1</sup>); also the area under a force–time graph.</li>
<li>For the same change in momentum, a longer stopping time means a smaller force: crumple zones, airbags, bending knees on landing.</li>
<li>In an isolated system, total momentum is conserved: $m_1u_1+m_2u_2=m_1v_1+m_2v_2$. Keep signs for direction!</li>
<li><strong>Elastic</strong> collision: kinetic energy also conserved. <strong>Inelastic</strong>: some kinetic energy becomes heat, sound or deformation. Momentum and total energy are always conserved.</li>
<li>$\Delta v=v-u$: if a ball bounces back, $\Delta v$ is large (e.g. $+4-(-5)=9$ m s<sup>−1</sup>).</li></ul>` },
      ] },
      { id: 'torque', group: 'Unit 2: How is motion understood?', title: 'Torque and equilibrium', kk: [
        { id: 'tq-eq', short: 'Torque and equilibrium',
          text: 'calculate torque, τ = r⊥ F; analyse translational and rotational forces (torques) in simple structures in translational and rotational equilibrium; investigate the application of motion concepts through a case study, for example, through motion in sport, vehicle safety, a device or a structure',
          note: R`<ul>
<li>Torque $\tau=r_\perp F$ (N m): the perpendicular distance from the pivot to the line of action of the force, times the force.</li>
<li><strong>Equilibrium</strong>: (1) net force = 0 (translational) and (2) net torque about any point = 0 (rotational): clockwise torques = anticlockwise torques.</li>
<li>Tip: take torques about the point where an unknown force acts, so that force drops out.</li>
<li>A uniform beam's weight acts at its centre.</li></ul>` },
      ] },
      // ---------------- Unit 2 AoS2: options ----------------
      { id: 'op01', group: 'Unit 2 options (your school studies one)', title: 'Option 2.1: Climate change', kk: [
        { id: 'o1-atm', short: 'Radiation, the atmosphere and greenhouse gases',
          text: 'describe the transformation of radiation as it passes through the atmosphere, is absorbed and re-emitted by Earth; explain how greenhouse gases in the atmosphere (including methane, water and carbon dioxide) absorb and re-emit infrared radiation and the impact on global warming; compare the total energy across the electromagnetic spectrum emitted by objects at different temperatures such as the Sun; calculate the peak wavelength of the re-radiated electromagnetic radiation from Earth using Wien’s Law',
          note: R`<ul>
<li>About 30% of incoming sunlight is reflected (Earth's <strong>albedo</strong> ≈ 0.3). The rest is absorbed by the surface and atmosphere, which re-emit it as infrared (Earth peaks near 10 μm by Wien's law).</li>
<li>Greenhouse gas molecules absorb IR at particular wavelengths (their molecular vibrations) and re-emit it in all directions, some back towards Earth. More greenhouse gas → more IR returned → higher equilibrium temperature.</li>
<li>Methane is a much stronger absorber per molecule than CO<sub>2</sub>, but less abundant and shorter-lived; water vapour is the largest contributor but acts as a feedback, rising with temperature.</li></ul>` },
        { id: 'o1-sb', short: 'Stefan–Boltzmann law and evidence for an enhanced greenhouse effect',
          text: 'describe power radiated by a body as being dependent on the temperature of the body according to the Stefan-Boltzmann Law; analyse the evidence for the influence of human activity in creating an enhanced greenhouse effect, including the change in the materials that comprise the surface of Earth and the balance of gases in the atmosphere',
          note: R`<ul>
<li>Stefan–Boltzmann: $P=\sigma AT^4$ ($\sigma=5.67\times10^{-8}$ W m<sup>−2</sup> K<sup>−4</sup>). Doubling the absolute temperature multiplies the power radiated by $2^4=16$.</li>
<li>Evidence: rising CO<sub>2</sub> (about 280 ppm pre-industrial to over 420 ppm), with the carbon isotope signature of fossil fuels; warming nights more than days; cooling of the upper atmosphere while the lower atmosphere warms (so the Sun isn't the cause); satellite measurements of less IR escaping at CO<sub>2</sub> absorption wavelengths.</li>
<li>Surface changes: deforestation, urbanisation (dark roads/roofs), and melting ice reduce albedo, so more sunlight is absorbed.</li></ul>` },
        comm(1),
      ] },
      { id: 'op02', group: 'Unit 2 options (your school studies one)', title: 'Option 2.2: Fusion and fission as power sources', kk: [
        { id: 'o2-fus', short: 'Fusion reactions',
          text: 'explain nuclear fusion reactions of proton-proton and deuterium-tritium with reference to: reactants, products and energy production; availability of reactants; energy production compared with mass of fuel',
          note: R`<ul>
<li><strong>Proton–proton chain</strong> (in the Sun): four protons → one helium-4 nucleus + 2 positrons + 2 neutrinos + energy (about 26.7 MeV). Needs the Sun's enormous temperature, pressure and time; impractical on Earth.</li>
<li><strong>D–T fusion</strong>: $^2_1\text{H}+{}^3_1\text{H}\to^4_2\text{He}+{}^1_0\text{n}+17.6$ MeV. Deuterium is plentiful in seawater; tritium is rare and must be bred from lithium.</li>
<li>Fusion releases more energy per kilogram of fuel than fission (about 4× per kg), with no long-lived high-level waste, but sustaining it (~100 million K plasma, magnetic confinement) is still experimental.</li></ul>` },
        { id: 'o2-fis', short: 'Fission of U-235 and Pu-239; reactors',
          text: 'explain nuclear fission reactions of 235U and 239Pu with reference to: fission initiation by slow and fast neutrons respectively; products of fission including typical unstable fission fragments and energy; radiation produced by unstable fission fragments; describe neutron absorption in 238U, including formation of 239Pu; describe the energy transfers and transformations in the systems that convert nuclear energy into thermal energy for subsequent power generation; explain the risks and benefits for society of using nuclear energy as a power source',
          note: R`<ul>
<li>U-235 fissions most readily with <strong>slow (thermal) neutrons</strong>; Pu-239 can fission with <strong>fast neutrons</strong>. Each fission releases ~200 MeV, 2–3 neutrons and two neutron-rich fragments (e.g. Ba-141 and Kr-92) that undergo β<sup>−</sup> and γ decay.</li>
<li>U-238 absorbs a neutron → U-239 → (β<sup>−</sup>) Np-239 → (β<sup>−</sup>) Pu-239.</li>
<li>Energy chain: nuclear → kinetic energy of fragments → thermal energy of fuel and coolant → steam → kinetic energy of turbine → electrical energy (generator).</li>
<li>Benefits: reliable baseload power, very low CO<sub>2</sub>, small fuel mass. Risks: long-lived waste, accidents, weapons proliferation, high cost and long build times.</li></ul>` },
        comm(2),
      ] },
      { id: 'op03', group: 'Unit 2 options (your school studies one)', title: 'Option 2.3: Flight', kk: [
        { id: 'o3-forces', short: 'Forces on an aircraft; lift and drag',
          text: 'model the forces acting on an aircraft in flight as: the force due to gravity, acting at the centre of mass; thrust; lift, acting at the centre of pressure; drag, acting at the centre of pressure; compare contributions to aerodynamic drag, including skin friction, form and lift-induced',
          note: R`<ul>
<li>Four forces: weight (at the centre of mass), thrust, lift and drag (at the centre of pressure).</li>
<li>Lift $L=\frac12\rho v^2AC_L$ and drag $D=\frac12\rho v^2AC_D$: both grow with the <strong>square</strong> of speed and with air density $\rho$ and wing area $A$.</li>
<li>Drag types: <strong>skin friction</strong> (air rubbing the surface), <strong>form</strong> (pressure drag from the shape; reduced by streamlining), <strong>lift-induced</strong> (from wingtip vortices; largest at low speed/high angle of attack; reduced by long wings and winglets).</li></ul>` },
        { id: 'o3-lift', short: 'Producing lift and thrust; control',
          text: 'explain the production of aerodynamic lift with reference to: Bernoulli’s principle and pressure differences; conservation of momentum and downwash; explain the production of thrust with reference to Newton’s laws of motion; apply balance of forces and torques with reference to Newton’s laws of motion to the different stages of flight and the control of the aircraft',
          note: R`<ul>
<li><strong>Bernoulli</strong>: faster-moving air has lower pressure; air over the curved upper surface moves faster, so the pressure above the wing is lower than below.</li>
<li><strong>Downwash</strong>: the wing (at an angle of attack) deflects air downwards; by Newton's third law the air pushes the wing up (momentum given to the air downwards each second = lift).</li>
<li><strong>Thrust</strong>: propellers/engines push air or exhaust backwards; the third-law reaction pushes the aircraft forwards.</li>
<li>Level flight at constant speed: lift = weight and thrust = drag. Climbing/accelerating: unbalanced forces. Control surfaces (elevator, ailerons, rudder) create torques about the centre of mass for pitch, roll and yaw.</li></ul>` },
        comm(3),
      ] },
      { id: 'op04', group: 'Unit 2 options (your school studies one)', title: 'Option 2.4: Structures and materials', kk: [
        { id: 'o4-load', short: 'Loads, stability and torques',
          text: 'identify different types of external forces due to loads such as compression, tension and shear, that can act on a body, including gravitational forces; analyse the stability of structures using translational and rotational forces (torques) and identify that gravitational forces act at the centre of mass',
          note: R`<ul>
<li><strong>Compression</strong> squashes, <strong>tension</strong> stretches, <strong>shear</strong> slides layers past each other.</li>
<li>A structure is stable while its centre of mass stays above its base; a wider base and lower centre of mass increase stability (the tipping torque has to be larger).</li>
<li>Equilibrium: $\Sigma F=0$ and $\Sigma\tau=0$.</li></ul>` },
        { id: 'o4-ss', short: 'Stress, strain and Young’s modulus',
          text: 'calculate the stress and strain resulting from the application of compressive and tensile forces and loads to materials in structures, σ = F/A, ε = ∆l/l; analyse the behaviour of materials under load in terms of extension and compression, including Young’s modulus, E = σ/ε, area under stress versus strain graphs and the elastic or plastic behaviour of materials under load; evaluate the suitability of different materials for use in structures, comparing tensile and compressive strength and stiffness or flexibility under load',
          note: R`<ul>
<li>Stress $\sigma=\frac FA$ (Pa); strain $\varepsilon=\frac{\Delta l}{l}$ (no unit); Young's modulus $E=\frac\sigma\varepsilon$ (Pa) = gradient of the linear part of a stress–strain graph = <strong>stiffness</strong>.</li>
<li><strong>Elastic</strong> region: returns to its original length. Beyond the elastic limit, <strong>plastic</strong> (permanent) deformation.</li>
<li>Area under a stress–strain graph = energy absorbed per unit volume (J m<sup>−3</sup>): a measure of <strong>toughness</strong>.</li>
<li>Concrete: strong in compression, weak in tension, so it's reinforced with steel (strong in tension).</li></ul>` },
        comm(4),
      ] },
      { id: 'op05', group: 'Unit 2 options (your school studies one)', title: 'Option 2.5: Forces on the human body', kk: [
        { id: 'o5-cm', short: 'Centre of mass, forces and torques in the body',
          text: 'apply centre of mass calculations to a body or system; investigate and apply theoretically and practically translational forces (gravitational, compressive, tensile and shear) and torques',
          note: R`<ul>
<li>Centre of mass of a system: $x_{cm}=\frac{\sum m_ix_i}{\sum m_i}$.</li>
<li>Muscles act as levers: e.g. the forearm with the elbow as pivot. The biceps attaches close to the pivot, so it must pull with a force many times the load in the hand (torque balance $F_{\text{muscle}}r_1=F_{\text{load}}r_2$).</li>
<li>Bones mainly experience compression (and bending); tendons and ligaments experience tension.</li></ul>` },
        { id: 'o5-tissue', short: 'Stress and strain in tissue; prosthetics',
          text: 'calculate the stress and strain resulting from the application of compressive and tensile forces and loads to materials in organic structures including bone and muscle; analyse the behaviour of living tissue under load with reference to extension and compression, including Young’s modulus, area under stress versus strain graphs and the elastic or plastic behaviour of materials under load; investigate the suitability of different materials for use in the human body, including bone, tendons and muscle, by comparing tensile and compressive strength and stiffness, toughness, and flexibility under load; evaluate the development, performance and challenges of using artificial materials and structures in prosthetics',
          note: R`<ul>
<li>$\sigma=\frac FA$, $\varepsilon=\frac{\Delta l}l$, $E=\frac\sigma\varepsilon$. Bone: stiff ($E\approx$ 10–20 GPa), stronger in compression than tension. Tendons: strong in tension, more flexible.</li>
<li>Prosthetics must match strength and stiffness (too stiff an implant "shields" the bone from stress, so the bone weakens), be biocompatible (titanium, ceramics, polymers), resist wear and fatigue, and be affordable.</li></ul>` },
        comm(5),
      ] },
      { id: 'op06', group: 'Unit 2 options (your school studies one)', title: 'Option 2.6: Medical radiation', kk: [
        { id: 'o6-prod', short: 'Producing X-rays and radioisotopes; ionising radiation',
          text: 'describe how X-rays for medical use are produced including the distinction between soft and hard X-rays; describe how medical radioisotopes may be produced by neutron bombardment and high energy collisions; compare ionising and non-ionising radiation with reference to how each affects living tissues and cells',
          note: R`<ul>
<li>X-ray tube: electrons accelerated through a large voltage hit a tungsten target and decelerate, emitting X-rays. Higher voltage → higher-energy, more penetrating <strong>hard</strong> X-rays; <strong>soft</strong> X-rays are absorbed by tissue (filtered out to reduce dose).</li>
<li>Radioisotopes: <strong>neutron bombardment</strong> in a reactor (e.g. Mo-99 → Tc-99m at ANSTO's OPAL reactor) or <strong>high-energy collisions</strong> in a cyclotron (proton-rich isotopes such as F-18 for PET).</li>
<li><strong>Ionising</strong> radiation (UV-C, X-ray, γ, α, β) has enough energy to remove electrons, breaking DNA. <strong>Non-ionising</strong> (radio, microwave, IR, visible) mainly heats tissue.</li></ul>` },
        { id: 'o6-img', short: 'Medical imaging and radioisotopes',
          text: 'compare the processes of, and images produced by, medical imaging using two or more of X-rays, computed tomography (CT), γ radiation, magnetic resonance imaging (MRI), single photon emission computed tomography (SPECT) and positron emission tomography (PET); describe applications of medical radioisotopes in imaging and diagnosis; relate the detection and penetrating properties of α, β and γ radiation to their use in different medical applications',
          note: R`<ul>
<li><strong>X-ray</strong>: 2D shadow image; bone absorbs more than soft tissue. <strong>CT</strong>: many X-rays from different angles → 3D slices (higher dose). <strong>MRI</strong>: strong magnetic field + radio waves; excellent soft-tissue detail; no ionising radiation.</li>
<li><strong>SPECT</strong>: a γ emitter (Tc-99m, half-life 6 h) is injected; a γ camera detects where it collects → shows <em>function</em> (blood flow, bone activity). <strong>PET</strong>: a β<sup>+</sup> emitter (F-18 in glucose); each positron annihilates with an electron to make two 511 keV γ photons travelling in opposite directions, which pinpoint the source; shows metabolic activity (e.g. cancer).</li>
<li>Diagnosis (outside detection) needs γ (penetrating, weakly ionising) with a short half-life. Therapy inside a tumour suits α or β (highly ionising, short range).</li></ul>` },
        comm(6),
      ] },
      { id: 'op07', group: 'Unit 2 options (your school studies one)', title: 'Option 2.7: Electricity in the human body', kk: [
        { id: 'o7-nerve', short: 'Charge carriers, nerves and action potentials',
          text: 'compare charge carriers in the human body (specifically Na+, K+, Ca2+, Mg2+, PO43- and Cl- ions) with those in metals (specifically electrons); describe the nervous system as the control of the function of the human body through electrical processes of nerve cells (through an action potential) and chemical transfer between nerve cells (through neurotransmitters diffusing across synapses); model an action potential as a short-lasting electrical event across the cell membrane in response to a stimulus, including reference to the roles of ion channels (leakage and voltage gated) in changing membrane potentials during the processes of depolarisation, repolarisation, hyperpolarisation and return to resting state',
          note: R`<ul>
<li>In metals the charge carriers are free <strong>electrons</strong>; in the body they are <strong>ions</strong> in solution (positive and negative, much heavier and slower).</li>
<li>Resting potential ≈ −70 mV (inside negative), maintained by leakage channels and the Na<sup>+</sup>/K<sup>+</sup> pump.</li>
<li>Action potential: threshold (≈ −55 mV) reached → voltage-gated Na<sup>+</sup> channels open, Na<sup>+</sup> rushes in: <strong>depolarisation</strong> (to ≈ +30 mV) → Na<sup>+</sup> channels close, K<sup>+</sup> channels open, K<sup>+</sup> flows out: <strong>repolarisation</strong> → overshoot below rest: <strong>hyperpolarisation</strong> → return to rest.</li>
<li>Between neurons, the signal crosses the synapse chemically (neurotransmitters).</li></ul>` },
        { id: 'o7-heart', short: 'The heart and current through the body',
          text: 'explain heart beat with reference to the production of a potential difference and model heart beat with reference to the action of the nodes in atrial and ventricular muscles as the source of the electric signal, the staggering of signals from the atrial and ventricular muscles, and time delay before both muscles can contract again; describe the effects of current through, and potential difference across, the human body; explain why people have different electrical resistances with reference to comparison of the resistances in human bone, fat, muscle, nerves and skin',
          note: R`<ul>
<li>The <strong>sinoatrial (SA) node</strong> (pacemaker) fires, the atria depolarise and contract; the <strong>atrioventricular (AV) node</strong> delays the signal (~0.1 s) so the atria empty first; then the ventricles depolarise and contract. A refractory period follows before they can contract again. An ECG records these potential differences.</li>
<li>Resistance: dry skin and bone are high; fat is high; muscle, blood and nerves (more water and ions) are low. Wet skin greatly lowers resistance, so the same voltage drives a larger, more dangerous current ($I=\frac VR$).</li>
<li>Current through the chest can cause fibrillation; a defibrillator delivers a controlled shock to reset the heart's rhythm.</li></ul>` },
        comm(7),
      ] },
      { id: 'op08', group: 'Unit 2 options (your school studies one)', title: 'Option 2.8: Enhancing human vision', kk: [
        { id: 'o8-lens', short: 'Lenses, image formation, telescopes and microscopes',
          text: 'describe image formation using pinhole cameras and convex and concave lenses; calculate image positions for thin lenses using either accurate ray tracing scale diagrams and/or the thin lens equation; calculate image sizes in pinhole and simple lens cameras; explain the operation of simple two-lens telescopes and microscopes',
          note: R`<ul>
<li>Thin lens equation: $\frac1f=\frac1u+\frac1v$ (real-is-positive: $f>0$ convex, $f\lt 0$ concave; $v>0$ real image, $v\lt 0$ virtual image).</li>
<li>Magnification $M=\frac{h_i}{h_o}=\frac vu$ (also for a pinhole camera: image height / object height = image distance / object distance).</li>
<li>Convex lens: object beyond $f$ gives a real, inverted image; inside $f$, a virtual, upright, magnified image (magnifying glass). Concave lens: always virtual, upright, diminished.</li>
<li><strong>Telescope</strong>: objective (long $f$) forms a real image of a distant object; the eyepiece (short $f$) magnifies it. <strong>Microscope</strong>: short-$f$ objective makes a magnified real image, which the eyepiece magnifies further.</li></ul>` },
        { id: 'o8-eye', short: 'The eye, glasses and sunglasses',
          text: 'model and explain human vision as refraction at a spherical surface with an adjusting lens and explain accommodation in the human eye including the effects of ageing; distinguish between short-sightedness and long-sightedness, and explain their correction by concave and convex lenses, respectively; apply the power of a lens to eye glasses; investigate sunglasses including the function of polarised lenses, photochromatic lenses and the benefits and possible damaging effects of tinted lenses',
          note: R`<ul>
<li>Most refraction happens at the cornea; the lens fine-tunes (<strong>accommodation</strong>: the ciliary muscles make the lens fatter for near objects). With age the lens stiffens (presbyopia), so the near point moves away.</li>
<li><strong>Short-sighted</strong> (myopia): image forms in front of the retina; can't see far; corrected with a <strong>concave</strong> (diverging) lens. <strong>Long-sighted</strong> (hyperopia): image behind the retina; corrected with a <strong>convex</strong> (converging) lens.</li>
<li>Lens power $P=\frac1f$ in dioptres (D), with $f$ in metres. Concave lenses have negative power.</li>
<li>Polarised lenses block horizontally polarised glare from reflections; photochromic lenses darken in UV. Tinted lenses without UV protection are risky: the pupil dilates and lets in more UV.</li></ul>` },
        comm(8),
      ] },
      { id: 'op09', group: 'Unit 2 options (your school studies one)', title: 'Option 2.9: Photography', kk: [
        { id: 'o9-lens', short: 'Image formation in cameras',
          text: 'describe image formation using pinhole cameras and convex and concave lenses; calculate image positions for thin lenses using either accurate ray tracing scale diagrams and/or the thin lens equation; calculate image sizes in pinhole and simple lens cameras; explain the operation of a simple two-lens camera',
          note: R`<ul>
<li>Pinhole camera: each point of the object sends a narrow beam through the hole, giving an inverted image; $\frac{h_i}{h_o}=\frac{d_i}{d_o}$. A bigger hole is brighter but blurrier.</li>
<li>Thin lens: $\frac1f=\frac1u+\frac1v$, $M=\frac vu$. To focus on nearer objects the lens must move <strong>further</strong> from the sensor.</li>
<li>Two-lens (zoom) systems change the effective focal length; longer focal length = more magnification, narrower field of view.</li></ul>` },
        { id: 'o9-exp', short: 'Exposure, filters and digital vs film',
          text: 'investigate the effect on image formation by polarising lenses, colour filters and aperture size and shutter speed; compare image formation by a traditional camera and a digital camera',
          note: R`<ul>
<li><strong>Aperture</strong> (f-number $=\frac{f}{D}$): a larger opening (smaller f-number) lets in more light but gives a shallower depth of field. Each f-stop (f/2.8 → f/4) halves the light.</li>
<li><strong>Shutter speed</strong>: faster freezes motion but lets in less light. Exposure ∝ aperture area × time.</li>
<li>Polarising filters cut reflections and darken skies; colour filters transmit their own colour and absorb others.</li>
<li>Film: light causes a chemical change in silver halide grains. Digital: a CCD/CMOS sensor of pixels converts photons to electrical charge, read out and stored as numbers; resolution set by pixel count; no developing, instant review.</li></ul>` },
        comm(9),
      ] },
      { id: 'op10', group: 'Unit 2 options (your school studies one)', title: 'Option 2.10: Music and sound', kk: [
        { id: 'o10-snd', short: 'Sound, intensity and decibels',
          text: 'describe sound as the transmission of energy via longitudinal pressure waves and distinguish between sound intensity (W m-2) and sound intensity level (dB); calculate sound intensity at different distances from a source using an inverse square law',
          note: R`<ul>
<li>Sound: longitudinal pressure waves (compressions and rarefactions); speed in air ≈ 340 m s<sup>−1</sup>.</li>
<li>Intensity $I=\frac{P}{4\pi r^2}$ (W m<sup>−2</sup>): inverse square law: doubling the distance quarters the intensity.</li>
<li>Sound intensity level $L=10\log_{10}\frac{I}{I_0}$ dB with $I_0=10^{-12}$ W m<sup>−2</sup>. +10 dB = 10× intensity; +3 dB ≈ 2× intensity.</li></ul>` },
        { id: 'o10-res', short: 'Resonance, harmonics and instruments',
          text: 'explain resonance and identify it as related to the natural frequency of an object, and analyse the unique sound of an instrument as a consequence of multiple resonances created by the instrument and described as timbre; investigate factors that influence natural frequency including shape and material and explain how this relates to instruments; investigate and explain a variety of musical instruments with reference to the similarities and differences of sound production between instrument types (brass, string, woodwind and percussion) and how they compare with the human voice; analyse, for strings and open and closed resonant tubes, the fundamental and subsequent harmonics and apply this analysis to selected musical instruments',
          note: R`<ul>
<li><strong>Resonance</strong>: driving an object at its natural frequency gives large-amplitude vibration.</li>
<li><strong>String</strong> (fixed both ends) and <strong>open pipe</strong>: $\lambda_n=\frac{2L}{n}$, $f_n=\frac{nv}{2L}$, all harmonics $n=1,2,3,\dots$</li>
<li><strong>Closed pipe</strong> (one end closed): $\lambda=\frac{4L}{n}$, $f_n=\frac{nv}{4L}$, odd harmonics only ($n=1,3,5,\dots$).</li>
<li><strong>Timbre</strong>: the mix of harmonics (overtones) that makes a violin and flute sound different on the same note.</li>
<li>Strings: shorter, tighter or lighter strings give higher pitch. Brass: buzzing lips; woodwind: reed or edge tone; percussion: vibrating membranes/bars; voice: vocal folds with the throat and mouth as resonators.</li></ul>` },
        comm(10),
      ] },
      { id: 'op11', group: 'Unit 2 options (your school studies one)', title: 'Option 2.11: Ball sports', kk: [
        { id: 'o11-coll', short: 'Collisions, friction and rolling',
          text: 'investigate and calculate theoretically and practically the transfer of momentum in elastic and inelastic collisions (limited to two dimensions) including the use of the coefficient of restitution, e; investigate and apply theoretically and practically the coefficients of static and kinetic friction to sliding and rolling balls to calculate speeds using Newton’s laws of motion and the equations of constant acceleration; explain rolling of spherical objects using angular and linear speeds: v = r ω',
          note: R`<ul>
<li>Coefficient of restitution $e=\frac{\text{speed of separation}}{\text{speed of approach}}$; for a ball dropped onto a floor $e=\sqrt{\frac{h_{\text{bounce}}}{h_{\text{drop}}}}$. $e=1$ elastic, $e=0$ perfectly inelastic.</li>
<li>Friction: $F_f=\mu N$ (kinetic: $\mu_k$; static maximum: $\mu_s$). On level ground, a sliding ball decelerates at $a=\mu_kg$.</li>
<li>Rolling without slipping: $v=r\omega$ ($\omega$ in rad s<sup>−1</sup>).</li></ul>` },
        { id: 'o11-flight', short: 'Projectiles, drag and the Magnus effect',
          text: 'calculate air resistance (drag) and terminal velocity, where CD is the drag coefficient, ρ is the gas density, A is the frontal area; investigate and apply theoretically and practically the equations of constant acceleration to calculate the flight of objects through the air (neglecting air resistance) in two dimensions; model and describe qualitatively the flight of: a ball through the air when air resistance is not neglected; spinning sports balls with reference to the Magnus effect',
          note: R`<ul>
<li>Projectiles: treat horizontal ($a=0$, $u_x=u\cos\theta$) and vertical ($a=-9.8$, $u_y=u\sin\theta$) separately; time links them. Maximum range on level ground at 45° (no air resistance).</li>
<li>Drag $F_D=\frac12C_D\rho Av^2$. Terminal velocity when drag = weight: $v_T=\sqrt{\frac{2mg}{C_D\rho A}}$.</li>
<li>With air resistance: lower maximum height, shorter range, asymmetric path (steeper descent).</li>
<li><strong>Magnus effect</strong>: a spinning ball drags air around with it, creating a pressure difference; topspin dips the ball, backspin lifts it, sidespin curves it.</li></ul>` },
        comm(11),
      ] },
      { id: 'op12', group: 'Unit 2 options (your school studies one)', title: 'Option 2.12: AC to DC (power supplies)', kk: [
        { id: 'o12-rect', short: 'Rectification, smoothing and regulation',
          text: 'explain the use of diodes in half-wave and full-wave bridge rectification; explain the effect of capacitors with reference to voltage drop and current change when charging and discharging (time constant for charging and discharging, τ = RC) leading to smoothing for DC power supplies; describe the use of voltage regulators including Zener diodes and integrated circuits',
          note: R`<ul>
<li>A transformer first lowers the mains voltage (230 V AC). <strong>Half-wave</strong> rectification (one diode) passes only the positive halves. <strong>Full-wave bridge</strong> (four diodes) flips the negative halves, so current always flows the same way through the load.</li>
<li>A <strong>capacitor</strong> in parallel with the load charges near the peaks and discharges through the load between them, reducing ripple. Time constant $\tau=RC$: after one $\tau$ the capacitor discharges to about 37% (charges to 63%). Larger $RC$ → smoother output.</li>
<li><strong>Zener diode</strong> in reverse breakdown holds a constant voltage; IC regulators (e.g. 7805 → 5 V) give a steady output despite ripple or load changes.</li></ul>` },
        { id: 'o12-sens', short: 'Sensors and light sources',
          text: 'apply the use of heat and light sensors such as thermistors and light-dependent resistors (LDRs) to trigger an output device such as lighting or a motor; compare different light sources (bulbs, LEDs, lasers) for their suitability for data transfer',
          note: R`<ul>
<li>Put an LDR or thermistor in a voltage divider; as its resistance changes, $V_{\text{out}}$ changes and can switch a transistor/relay to turn on a light or motor.</li>
<li>Data transfer needs fast switching and a narrow, bright beam: lasers (coherent, monochromatic, very fast) > LEDs (fast, cheap, wider spread) > filament bulbs (slow to switch, broad spectrum).</li></ul>` },
        comm(12),
      ] },
      { id: 'op13', group: 'Unit 2 options (your school studies one)', title: 'Option 2.13: Stars and black holes', kk: [
        { id: 'o13-stars', short: 'Measuring and classifying stars',
          text: 'apply methods used to investigate the light from stars and for measurements of the distances to stars and galaxies; identify the properties of stars, including luminosity, radius and mass, temperature and spectral type, and explain how these properties are used to classify stars; distinguish between the different nuclear fusion phenomena that occur in stars of various sizes; apply the Hertzsprung–Russell diagram as a tool to describe the evolution and death of stars with differing initial mass',
          note: R`<ul>
<li>Distance: <strong>parallax</strong> for nearby stars, $d(\text{pc})=\frac{1}{p(\text{arcsec})}$; standard candles (Cepheids, Type Ia supernovae) and redshift for galaxies. 1 pc ≈ 3.26 light-years.</li>
<li>Temperature from colour/Wien's law ($\lambda_{\max}T=2.9\times10^{-3}$ m K); composition from spectral lines. Spectral types O B A F G K M (hot → cool).</li>
<li>Luminosity $L=4\pi R^2\sigma T^4$; apparent brightness falls as $\frac1{d^2}$.</li>
<li>Main-sequence stars fuse hydrogen to helium (p–p chain in Sun-like stars; CNO cycle in more massive stars). Later stages fuse helium and heavier elements, up to iron in massive stars.</li>
<li>H–R diagram: luminosity vs temperature (hot on the left). Low-mass stars → red giant → white dwarf; high-mass → supergiant → supernova → neutron star or black hole.</li></ul>` },
        { id: 'o13-bh', short: 'Black holes',
          text: 'explain the event horizon of a black hole and use the formula to calculate the Schwarzschild radius; describe the effects of the gravitational fields of black holes on space and time',
          note: R`<ul>
<li>Event horizon: the boundary within which the escape speed exceeds $c$, so not even light escapes. Schwarzschild radius $R_s=\frac{2GM}{c^2}$ ($G=6.67\times10^{-11}$ N m<sup>2</sup> kg<sup>−2</sup>).</li>
<li>Strong gravity bends light (gravitational lensing) and slows time (clocks near the horizon run slow relative to distant observers); light escaping is redshifted.</li></ul>` },
        comm(13),
      ] },
      { id: 'op14', group: 'Unit 2 options (your school studies one)', title: 'Option 2.14: Life beyond the Solar System', kk: [
        { id: 'o14-exo', short: 'Spectroscopy, exoplanet detection and Doppler shift',
          text: 'identify spectroscopy as a tool to investigate the light from stars, and interpret and analyse spectroscopic data with reference to information from beyond our Solar System; compare methods of exoplanet detection including astrometric, radial velocity, transit method and microlensing, referring to databases that differentiate for size, eccentricity and radius, and by observing the gravitational effect of a planetary system on a star; explain and apply Doppler shift including spectral shift and ‘wobble’ of planetary systems',
          note: R`<ul>
<li>Absorption lines identify elements and molecules (e.g. water, oxygen, methane in an exoplanet's atmosphere during a transit).</li>
<li><strong>Transit</strong>: the star dims slightly as the planet crosses; the dip gives the planet's radius ($\frac{\Delta F}{F}=\frac{R_p^2}{R_s^2}$) and the period gives its orbit. <strong>Radial velocity</strong>: the star wobbles, so its lines shift back and forth (Doppler); gives a minimum mass. <strong>Astrometry</strong>: the star's position wobbles on the sky. <strong>Microlensing</strong>: a star–planet system briefly magnifies a background star.</li>
<li>Doppler shift: $\frac{\Delta\lambda}{\lambda}=\frac vc$; moving away → redshift (longer wavelength), towards → blueshift.</li></ul>` },
        { id: 'o14-seti', short: 'Drake equation, Fermi paradox and SETI',
          text: 'explain the use of the Fermi paradox and the Drake equation to question the possibility of life outside Earth’s Solar System and of predicting the likelihood of life existing in the Universe; distinguish between targeted and untargeted searches for extra-terrestrial intelligence (ETI), and describe optimising strategies including where to look and how to ‘listen’ with reference to choice of frequency and bandwidth; explain the nature of information that humans transmit beyond Earth to signal that intelligent life exists on Earth',
          note: R`<ul>
<li><strong>Drake equation</strong>: $N=R_*\,f_p\,n_e\,f_l\,f_i\,f_c\,L$ (star formation rate × fraction with planets × habitable planets per system × fraction with life × with intelligence × that communicate × lifetime of communicating civilisations). Most factors are very uncertain, so $N$ ranges from less than 1 to millions.</li>
<li><strong>Fermi paradox</strong>: if civilisations are likely, why have we found no evidence?</li>
<li>Targeted searches observe specific nearby, Sun-like stars deeply; untargeted (sky surveys) cover many stars less sensitively. The "water hole" (1.4–1.7 GHz, between hydrogen and hydroxyl lines) is quiet and a natural meeting place; narrow-bandwidth signals would indicate technology.</li>
<li>Our messages: radio leakage, the Arecibo message (binary pictures), Pioneer plaques and Voyager golden records.</li></ul>` },
        comm(14),
      ] },
      { id: 'op15', group: 'Unit 2 options (your school studies one)', title: 'Option 2.15: Traditional artefacts, knowledge and techniques', kk: [
        { id: 'o15-trad', short: 'Physics of Aboriginal and Torres Strait Islander artefacts and techniques',
          text: 'apply appropriate protocols to access information and to then select one or more Aboriginal and Torres Strait Islander peoples’ traditional artefacts, knowledge or techniques; investigate Aboriginal and Torres Strait Islander peoples’ descriptions and explanations of the chosen artefacts, knowledge or techniques; identify and discuss the physics ideas that are used in the descriptions and explanations; apply physics ideas to the understanding and explanation of the chosen artefacts, knowledge or techniques',
          note: R`<ul>
<li><strong>Protocols</strong>: use sources authored by or with the permission of the relevant community; acknowledge Country and knowledge holders; respect restricted/secret knowledge; don't generalise one community's knowledge to all.</li>
<li><strong>Boomerang</strong>: each arm is an aerofoil producing lift; a returning boomerang is thrown near-vertically with spin, so the top arm moves faster through the air than the bottom arm, giving more lift on top; this uneven lift creates a torque that causes gyroscopic precession, turning the path into a circle.</li>
<li><strong>Woomera</strong> (spear thrower): lengthens the arm (a lever), so the spear tip moves faster for the same arm rotation ($v=r\omega$), giving more kinetic energy and range.</li>
<li><strong>Fish and eel traps</strong> (e.g. Budj Bim): channels and weirs use flowing water and funnel shapes; stone walls stand by friction and balanced forces.</li>
<li><strong>Astronomy</strong>: rising times of stars (e.g. the Emu in the Sky) as seasonal calendars; navigation by stars.</li></ul>` },
        comm(15),
      ] },
      { id: 'op16', group: 'Unit 2 options (your school studies one)', title: 'Option 2.16: Particle accelerators', kk: [
        { id: 'o16-sync', short: 'The Australian Synchrotron',
          text: 'distinguish between the use of particle accelerators to produce synchrotron light and to collide particles; explain the general purpose of the electron linac, circular booster, storage ring and beamlines in the Australian Synchrotron; explain, using the characteristics of brightness, spectrum and divergence, why for some experiments synchrotron radiation is preferable to laser light and radiation from X-ray tubes',
          note: R`<ul>
<li>Light sources accelerate electrons around a ring so they emit intense <strong>synchrotron light</strong> for experiments; colliders smash particles together to study their structure.</li>
<li>Australian Synchrotron: <strong>electron gun + linac</strong> (accelerate electrons to ~100 MeV) → <strong>booster ring</strong> (to 3 GeV) → <strong>storage ring</strong> (bending magnets keep electrons circulating; they emit light at each bend) → <strong>beamlines</strong> (filter and focus the light for each experiment).</li>
<li>Synchrotron light is extremely <strong>bright</strong>, covers a <strong>broad spectrum</strong> (IR to hard X-ray, tunable), and has very <strong>low divergence</strong>. Lasers are bright and narrow but single-wavelength (and not X-ray); X-ray tubes are far less bright and diverge widely.</li></ul>` },
        { id: 'o16-coll', short: 'Colliders and the Standard Model',
          text: 'explain the evolution of collider technology including: particles involved in the collision event; the increasing energies attained since the 1950s; evaluate the role of colliders in the development of the Standard Model of particle physics, including reference to subatomic structure and processes; explain how the immense amount of data collected by the Large Hadron Collider is stored and analysed, and the associated role particle detectors have had in the development of information processing technologies',
          note: R`<ul>
<li>Fixed-target accelerators (1950s, MeV–GeV) → colliders of electrons/positrons, protons/antiprotons → the LHC (protons at 13.6 TeV). Higher energy probes smaller distances and can create heavier particles ($E=mc^2$).</li>
<li>Collider discoveries confirmed the Standard Model: quarks (deep inelastic scattering), W and Z bosons (1983), top quark (1995), Higgs boson (2012).</li>
<li>The LHC produces far more data than can be stored; triggers keep only interesting events, and the Worldwide LHC Computing Grid distributes storage and analysis. CERN also gave us the World Wide Web.</li></ul>` },
        comm(16),
      ] },
      { id: 'op17', group: 'Unit 2 options (your school studies one)', title: 'Option 2.17: Origins of matter', kk: [
        { id: 'o17-bb', short: 'The Big Bang and the evolving Universe',
          text: 'describe the Big Bang as a currently held theory that explains the origins of both time and space, and evaluate evidence for the Big Bang including the identification of cosmic background radiation; explain the changes of matter during the different stages of the Universe over time due to expansion and cooling; describe the contribution that the detection of gravitational waves has made to understanding of the Universe',
          note: R`<ul>
<li>Evidence: galaxies receding with redshift ∝ distance (Hubble); the <strong>cosmic microwave background</strong> (2.7 K, nearly uniform, from ~380 000 years after the Big Bang); the abundance of light elements (~75% H, ~25% He by mass).</li>
<li>As the Universe expanded and cooled: quarks and leptons → protons and neutrons (≈ 1 μs) → light nuclei by fusion (≈ 3 min) → neutral atoms as electrons combined with nuclei (≈ 380 000 years; the Universe became transparent, releasing the CMB) → stars and galaxies.</li>
<li>Gravitational waves (first detected by LIGO in 2015 from merging black holes) confirm general relativity and open a new way to observe the Universe.</li></ul>` },
        { id: 'o17-part', short: 'Particles and antiparticles',
          text: 'relate predictions to the subsequent discoveries of the neutron, neutrino, positron and Higgs boson; compare the nature of leptons, hadrons, mesons and baryons; explain that for every elementary matter particle there exists an antimatter particle of equal mass and opposite charge, and that if a particle and its antiparticle come into contact the particles will annihilate each other to create radiation',
          note: R`<ul>
<li>Predictions then discoveries: neutron (Rutherford 1920 → Chadwick 1932); neutrino (Pauli 1930, to save energy conservation in β decay → detected 1956); positron (Dirac 1928 → Anderson 1932); Higgs boson (1964 → LHC 2012).</li>
<li><strong>Leptons</strong>: fundamental, not made of quarks (electron, muon, tau, neutrinos). <strong>Hadrons</strong>: made of quarks: <strong>baryons</strong> (3 quarks, e.g. proton uud, neutron udd) and <strong>mesons</strong> (quark + antiquark, e.g. pions).</li>
<li>Antiparticles have the same mass and opposite charge; particle + antiparticle annihilate into photons (e.g. electron + positron → two 511 keV γ photons).</li></ul>` },
        comm(17),
      ] },
      { id: 'op18', group: 'Unit 2 options (your school studies one)', title: 'Option 2.18: Physics research in our region', kk: [
        { id: 'o18-res', short: 'Investigating local physics research',
          text: 'investigate cutting-edge research that is based in Victoria, Australia or Oceania; select one area of local physics research and follow protocols to access information related to current research in the selected area; identify the physics related to the chosen research; explain how physics understanding has led to the development of the selected research; explain how critical and creative thinking shapes the application of physics concepts related to the selected research; analyse the extent to which both individual contribution and collaboration are involved in the selected research; evaluate how the chosen physics research may change the way we live',
          note: R`<ul>
<li>Examples: the <strong>Australian Synchrotron</strong> (Clayton) and ANSTO's OPAL reactor; <strong>SUPL</strong> (Stawell Underground Physics Laboratory) searching for dark matter a kilometre underground, shielded from cosmic rays; the <strong>Square Kilometre Array</strong> (WA) and Murchison Widefield Array radio telescopes; quantum computing (silicon qubits, UNSW); OzGrav gravitational-wave research; proton therapy (Adelaide).</li>
<li>Structure an answer: the problem → the physics used → how earlier physics made it possible → creative/critical thinking (new design, testing assumptions) → collaboration (teams, international partners, funding) → impact on society.</li>
<li>Access information through the research group's own publications, university and CSIRO/ANSTO pages, and peer-reviewed articles, citing them properly.</li></ul>` },
        comm(18),
      ] },
      // ---------------- Key science skills / Unit 2 AoS3 ----------------
      { id: 'skills', group: 'Key science skills (Units 1–2, Unit 2 Area of Study 3)', title: 'Investigations, data and errors', kk: [
        { id: 'sk-design', short: 'Questions, hypotheses, variables and methods',
          text: 'identify, research and construct aims and questions for investigation; identify independent, dependent and controlled variables in experiments; formulate hypotheses to focus investigations; predict possible outcomes of investigations; determine appropriate investigation methodology; design and conduct investigations; demonstrate safe laboratory practices',
          note: R`<ul>
<li><strong>Independent</strong> variable: what you change. <strong>Dependent</strong>: what you measure. <strong>Controlled</strong>: kept the same so the test is fair.</li>
<li>A hypothesis is a testable prediction that names both variables and the expected relationship, e.g. "If the length of a pendulum is increased, then its period will increase".</li>
<li>Methodologies: controlled experiment, fieldwork, modelling, simulation, case study, classification, product/process development, literature review.</li></ul>` },
        { id: 'sk-data', short: 'Graphs, gradients and significant figures',
          text: 'process quantitative data using appropriate mathematical relationships and units; use appropriate numbers of significant figures in calculations; construct graphs that show the relationship between variables; extrapolate to determine graph intercepts of significance; construct linearised graphs and identify the significance of the gradient',
          note: R`<ul>
<li>Plot the independent variable on the $x$-axis. Draw a smooth line of best fit with points balanced either side; it doesn't have to pass through the origin or the end points.</li>
<li>Gradient: use two widely spaced points <strong>on the line</strong>: $\frac{\Delta y}{\Delta x}$, with units.</li>
<li><strong>Linearising</strong>: if theory says $y\propto x^2$, plot $y$ against $x^2$; a straight line confirms the relationship, and the gradient gives the constant (e.g. plotting $s$ against $t^2$ for a dropped object gives gradient $\frac g2$).</li>
<li>Significant figures: answers to the same number of sig figs as the least precise data used.</li></ul>` },
        { id: 'sk-error', short: 'Accuracy, precision, errors and conclusions',
          text: 'identify and analyse experimental data qualitatively, handling, where appropriate, concepts of: accuracy, precision, repeatability, reproducibility, resolution and validity of measurements; and errors (random and systematic); identify outliers, and contradictory, provisional or incomplete data; repeat experiments to evaluate the precision of data; evaluate investigation methods and possible causes of error and uncertainty, and suggest how precision can be improved; draw and justify conclusions consistent with evidence; identify, describe and explain the limitations of conclusions',
          note: R`<ul>
<li><strong>Accuracy</strong>: closeness to the true value. <strong>Precision</strong>: closeness of repeated measurements to each other. <strong>Resolution</strong>: smallest change an instrument can detect. <strong>Validity</strong>: whether the experiment actually tests what it claims (fair test).</li>
<li><strong>Repeatability</strong>: same method, person and equipment, short time. <strong>Reproducibility</strong>: different person, equipment or method gives the same result.</li>
<li><strong>Random errors</strong> (reaction time, fluctuating readings) scatter results; reduce their effect by repeating and averaging. <strong>Systematic errors</strong> (uncalibrated scale, zero error, parallax always from the same side) shift all results the same way; repeating doesn't help; fix the method or equipment. Mistakes (personal errors) aren't "errors" to be analysed: redo them.</li>
<li>Outliers: investigate, and include them unless there's a known reason (a mistake) to exclude them; report what you did.</li>
<li>Conclusion: answer the question/hypothesis with the trend and data, then state limitations.</li></ul>` },
      ] },
    ],
  });
})();
