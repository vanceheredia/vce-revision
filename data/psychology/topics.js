// VCE Psychology Units 3 & 4 – topics, key knowledge (verbatim from the VCE Psychology Study Design, from 2023) and revision notes.
// Revision notes follow the scope rulings in the VCAA "VCE Psychology 2023–2027 Frequently asked questions".
VCE.subject('psychology', {
  intro: 'Every question here is new, written against the <strong>VCE Psychology Study Design (from 2023)</strong> Units 3 and 4 key knowledge and the key science skills. It mirrors the VCAA exam format: 40 multiple-choice questions plus 80 marks of short and extended answers.',
  erCriteria: [
    'identification and explanation of appropriate psychological terminology in novel and unfamiliar contexts',
    'analysis and discussion of relevant psychological information, ideas and/or concepts and the connections between them',
    'analysis and evaluation of data, and/or scientific methodologies and methods, and/or models, and/or theories',
    'construction of evidence-based arguments and/or drawing of conclusions and/or discussion of implications and findings',
  ],
  topics: [
    // ---------------------------------------------------------------- Unit 3 AoS 1
    {
      id: 'ns', group: 'Unit 3 · AoS 1 – Nervous system and stress', title: 'Nervous system functioning',
      kk: [
        {
          id: 'ns-div', short: 'Nervous system subdivisions and spinal reflexes',
          text: 'the roles of different subdivisions of the central and peripheral nervous systems in responding to, and processing and coordinating with, sensory stimuli received by the body to enable conscious and unconscious responses, including spinal reflexes',
          note: `<ul>
<li><strong>Central nervous system (CNS)</strong> = brain + spinal cord. The brain processes information and initiates <em>conscious</em> (voluntary) responses; the spinal cord connects brain and PNS and can initiate spinal reflexes.</li>
<li><strong>Peripheral nervous system (PNS)</strong> = all nerves outside the CNS.
  <ul><li><strong>Somatic</strong>: carries sensory (afferent) messages from receptors to the CNS and motor (efferent) messages from the CNS to skeletal muscles: voluntary movement.</li>
  <li><strong>Autonomic</strong>: regulates visceral muscles, organs and glands, mostly unconsciously. <em>Sympathetic</em> (arousal, fight-or-flight), <em>parasympathetic</em> (calming, maintains homeostasis), <em>enteric</em> (controls the gastrointestinal tract).</li></ul></li>
<li><strong>Conscious response</strong>: involves awareness and the brain (e.g. deciding to move into shade). <strong>Unconscious response</strong>: occurs without awareness (e.g. sweating, heart rate changes, a spinal reflex).</li>
<li><strong>Spinal reflex</strong>: an unconscious, involuntary, automatic response initiated by the spinal cord <em>without the brain's involvement</em>: sensory neuron → <strong>interneuron</strong> in the spinal cord → motor neuron → muscle. The message also travels on to the brain, so you become aware of the pain <em>after</em> the reflex has happened. It is fast because the message travels a shorter distance and skips brain processing, which protects us from harm.</li>
<li>Tip: neurons don't "travel" anywhere. Neural <em>messages</em> travel along neurons.</li></ul>`,
        },
        {
          id: 'ns-nt', short: 'Neurotransmitters vs neuromodulators',
          text: 'the role of neurotransmitters in the transmission of neural information across a neural synapse to produce excitatory effects (as with glutamate) or inhibitory effects (as with gamma-amino butyric acid [GABA]) as compared to neuromodulators (such as dopamine and serotonin) that have a range of effects on brain activity',
          note: `<ul>
<li>Neural transmission across a synapse: neurotransmitter is released from <strong>synaptic vesicles</strong> in the <strong>axon terminal</strong> of the pre-synaptic neuron, crosses the synaptic gap, and binds to <strong>receptor sites</strong> on the <strong>dendrites</strong> of the post-synaptic neuron. The receptor's shape must be complementary to the neurochemical.</li>
<li><strong>Glutamate</strong>: the main <em>excitatory</em> neurotransmitter. It makes the post-synaptic neuron <em>more</em> likely to fire, and is central to learning, memory and long-term potentiation.</li>
<li><strong>GABA</strong>: the main <em>inhibitory</em> neurotransmitter. It makes the post-synaptic neuron <em>less</em> likely to fire, calming neural activity; low GABA is linked to anxiety.</li>
<li><strong>Neuromodulators</strong> act on a <em>widespread</em> group of neurons (not a single synapse), increasing or decreasing their responsiveness to neurotransmitter signals. They are slower and longer-lasting, but still need specific receptor sites.
  <ul><li><strong>Dopamine</strong>: reward-based learning, motivation, pleasure, voluntary movement (links to operant conditioning/reinforcement).</li>
  <li><strong>Serotonin</strong>: mood, emotional processing, sleep-wake cycle, appetite. Mostly inhibitory/stabilising; about 90% of the body's serotonin is in the gut (gut–brain axis link).</li></ul></li></ul>
<p class="muted small">Not required: action potentials, ion channels, the lock-and-key model, soma/myelin.</p>`,
        },
        {
          id: 'ns-plast', short: 'Synaptic plasticity, LTP and LTD',
          text: 'synaptic plasticity – resulting from long-term potentiation and long-term depression, which together act to modify connections between neurons (sprouting, rerouting and pruning) – as the fundamental mechanism of memory formation that leads to learning',
          note: `<ul>
<li><strong>Synaptic plasticity</strong>: the ability of synapses to change in strength and structure in response to experience. It is the fundamental mechanism of memory formation that leads to learning.</li>
<li><strong>Long-term potentiation (LTP)</strong>: a long-lasting <em>strengthening</em> of synaptic connections caused by repeated <em>high-intensity/high-frequency</em> stimulation (e.g. practising a skill). Glutamate plays a key role.</li>
<li><strong>Long-term depression (LTD)</strong>: a long-lasting <em>weakening</em> of synaptic connections caused by repeated <em>low-intensity/low-frequency</em> stimulation. LTD is not "no stimulation"; it is weak, low-level stimulation.</li>
<li>Structural changes: <strong>sprouting</strong> (new extensions grow on axon terminals/dendrites: LTP), <strong>rerouting</strong> (new connections form between neurons when existing ones are lost or unused: LTP and LTD), <strong>pruning</strong> (unused connections are eliminated: LTD).</li>
<li><strong>Working together</strong>: as a new skill is learnt, LTP strengthens and sprouts connections for the new behaviour <em>while</em> LTD weakens and prunes connections for the old/incorrect behaviour, making the neural pathway more efficient.</li>
<li>Exam tip: apply it to the scenario (e.g. "each time Mia practises the new serve…"), as generic answers lose marks.</li></ul>`,
        },
      ],
    },
    {
      id: 'stress', group: 'Unit 3 · AoS 1 – Nervous system and stress', title: 'Stress as a psychobiological process',
      kk: [
        {
          id: 'st-resp', short: 'Stressors, fight-flight-freeze and cortisol',
          text: 'internal and external stressors causing psychological and physiological stress responses, including the flight-or-fight-or-freeze response in acute stress and the role of cortisol in chronic stress',
          note: `<ul>
<li><strong>Stressor</strong>: anything that causes stress. <em>Internal</em> stressors come from within the person (e.g. illness, pain, perfectionist thoughts); <em>external</em> stressors come from the environment (e.g. exams, a dog barking, shift work).</li>
<li><strong>Psychological responses</strong>: emotional, cognitive or behavioural (e.g. irritability, worry, poor concentration). <strong>Physiological responses</strong>: bodily changes (e.g. raised heart rate, sweating, muscle tension, headaches).</li>
<li><strong>Acute stress</strong> is intense and short-term. The <strong>fight-or-flight-or-freeze response</strong> starts as a unitary response involving both autonomic branches:
<ul><li><em>Fight/flight</em>: the <strong>sympathetic</strong> nervous system dominates: adrenaline released, heart rate and breathing increase, pupils dilate, glucose released, digestion slows. Prepares to confront or escape.</li>
<li><em>Freeze</em>: the <strong>parasympathetic</strong> nervous system dominates: immobility, yet high arousal, alertness and tension. Useful when fighting or fleeing is unlikely to succeed (e.g. avoiding detection).</li></ul></li>
<li><strong>Chronic stress</strong> is prolonged. <strong>Cortisol</strong> (a stress hormone from the adrenal glands) increases blood glucose and energy, and initially suppresses non-essential functions to help us keep coping. Prolonged high cortisol suppresses the immune system, increasing vulnerability to illness, and is linked to anxiety, poor sleep and reduced gut microbiota diversity.</li></ul>`,
        },
        {
          id: 'st-gba', short: 'The gut–brain axis',
          text: 'the gut–brain axis (GBA) as an area of emerging research, with reference to the interaction of gut microbiota with stress and the nervous system in the control of psychological processes and behaviour',
          note: `<ul>
<li>The <strong>gut–brain axis</strong> is a <em>bidirectional</em> communication network between the brain and the gastrointestinal tract. It includes the brain, spinal cord and autonomic nervous system (sympathetic, parasympathetic and <strong>enteric</strong> divisions).</li>
<li>The <strong>vagus nerve</strong> is the main connection between the enteric nervous system and the CNS; about 90% of its information travels <em>from the gut to the brain</em>.</li>
<li><strong>Gut microbiota</strong> are the trillions of microorganisms (mostly bacteria) in the gut. As well as aiding digestion, they produce neurochemicals such as GABA, serotonin and dopamine.</li>
<li>Stress → gut: chronic stress and high cortisol can reduce the diversity and health of gut microbiota. Gut → brain: microbiota composition can influence stress responsiveness, mood, anxiety and memory.</li>
<li><strong>Emerging research</strong>: much evidence comes from animal studies (e.g. germ-free mice, probiotics/antibiotics) or is correlational, so cause and effect in humans is not yet established, and findings may change. Use this when evaluating a study.</li></ul>
<p class="muted small">Not required: the role of the HPA axis, specific bacteria names, specific studies.</p>`,
        },
        {
          id: 'st-gas', short: "Selye's General Adaptation Syndrome",
          text: "the explanatory power of Hans Selye's General Adaptation Syndrome as a biological model of stress, including alarm reaction (shock/counter shock), resistance and exhaustion",
          note: `<table><tr><th>Stage</th><th>What happens</th><th>Resistance to stress</th></tr>
<tr><td>Alarm reaction: <strong>shock</strong></td><td>Body is briefly taken by surprise; body temperature and blood pressure drop.</td><td>Below normal</td></tr>
<tr><td>Alarm reaction: <strong>counter shock</strong></td><td>Sympathetic nervous system activated (fight-or-flight), adrenaline then cortisol released.</td><td>Above normal</td></tr>
<tr><td><strong>Resistance</strong></td><td>Cortisol keeps the body focused on the stressor; physiological arousal stays high; immune system starts to be suppressed.</td><td>Above normal (but vulnerable to other stressors)</td></tr>
<tr><td><strong>Exhaustion</strong></td><td>Resources depleted; cortisol's effects take their toll; illness, fatigue, depression more likely.</td><td>Below normal</td></tr></table>
<p><strong>Explanatory power.</strong> Strengths: describes a predictable biological pattern; explains how chronic stress can lead to illness; based on controlled experimental research. Limitations: the same response is assumed for every stressor and person (ignores <em>psychological</em> factors such as how the stressor is appraised and individual differences); based largely on rats, which limits generalisation to people.</p>
<p class="muted small">"Explanatory power" = how well a model accounts for observations: more observations explained, fewer assumptions, more falsifiable, more cause-and-effect detail.</p>`,
        },
        {
          id: 'st-tmsc', short: 'Lazarus and Folkman’s Transactional Model',
          text: "the explanatory power of Richard Lazarus and Susan Folkman's Transactional Model of Stress and Coping to explain stress as a psychological process (primary and secondary appraisal only)",
          note: `<ul>
<li>Stress is a <em>transaction</em> between person and environment: it depends on how the person <strong>appraises</strong> the situation.</li>
<li><strong>Primary appraisal</strong>: "Is this a problem for me?" Judged as <em>irrelevant</em>, <em>benign-positive</em> or <em>stressful</em>. If stressful, it's further judged as <em>harm/loss</em> (damage already done), <em>threat</em> (possible future harm) or <em>challenge</em> (opportunity for growth).</li>
<li><strong>Secondary appraisal</strong>: "Do I have the resources to cope?" The person evaluates their coping resources and options (internal: skills, confidence; external: support, money, time). Stress is experienced when demands are judged to exceed resources.</li>
<li><strong>Explanatory power.</strong> Strengths: explains individual differences (the same exam can be a threat to one student and a challenge to another); recognises cognition. Limitations: appraisals are subjective and hard to measure/test (self-report); it doesn't explain the physiological stress response.</li>
<li>GAS vs TMSC: GAS is biological and universal; TMSC is psychological and individual. Combined, they explain stress more fully.</li></ul>
<p class="muted small">Not required: emotion-focused/problem-focused coping, reappraisal.</p>`,
        },
        {
          id: 'st-coping', short: 'Approach and avoidance coping strategies',
          text: 'use of strategies (approach and avoidance) for coping with stress and improving mental wellbeing, including context-specific effectiveness and coping flexibility',
          note: `<ul>
<li><strong>Approach strategies</strong> confront the stressor directly, or the emotions it causes (e.g. making a study plan, seeking information, asking a teacher for help, talking it through).</li>
<li><strong>Avoidance strategies</strong> evade the stressor (e.g. denial, distraction, procrastinating, substance use). They can give short-term relief and can be helpful briefly (e.g. distraction during a painful medical procedure you can't change), but usually don't resolve the stressor and can increase stress long-term.</li>
<li><strong>Context-specific effectiveness</strong>: a strategy is effective when it matches the demands of the particular stressor and situation. No strategy works for everything.</li>
<li><strong>Coping flexibility</strong>: the ability to recognise when a strategy isn't working and to <em>adjust</em> or switch to a more suitable one.</li></ul>`,
        },
      ],
    },
    // ---------------------------------------------------------------- Unit 3 AoS 2
    {
      id: 'learning', group: 'Unit 3 · AoS 2 – Learning and memory', title: 'Approaches to learning',
      kk: [
        {
          id: 'le-beh', short: 'Classical and operant conditioning',
          text: 'behaviourist approaches to learning, as illustrated by classical conditioning as a three-phase process (before conditioning, during conditioning and after conditioning) that results in the involuntary association between a neutral stimulus and unconditioned stimulus to produce a conditioned response, and operant conditioning as a three-phase process (antecedent, behaviour and consequence) involving reinforcement (positive and negative) and punishment (positive and negative)',
          note: `<p><strong>Behaviourist approach</strong>: learning occurs through interaction with stimuli in the environment (conditioning).</p>
<p><strong>Classical conditioning</strong> (involuntary, reflexive responses; learner is passive):</p>
<ul><li><em>Before</em>: neutral stimulus (NS) → no relevant response; unconditioned stimulus (UCS) → unconditioned response (UCR), a naturally occurring reflex.</li>
<li><em>During</em>: NS is repeatedly presented <strong>just before</strong> the UCS (short interval, consistent pairings).</li>
<li><em>After</em>: the NS is now a conditioned stimulus (CS) and alone produces the conditioned response (CR), which is similar to the UCR.</li></ul>
<p><strong>Operant conditioning</strong> (voluntary behaviours; learner is active): <strong>Antecedent</strong> (stimulus that precedes the behaviour) → <strong>Behaviour</strong> → <strong>Consequence</strong>.</p>
<table><tr><th></th><th>Add something</th><th>Take something away</th></tr>
<tr><td><strong>Increases</strong> behaviour</td><td>Positive reinforcement (add pleasant)</td><td>Negative reinforcement (remove unpleasant)</td></tr>
<tr><td><strong>Decreases</strong> behaviour</td><td>Positive punishment (add unpleasant)</td><td>Negative punishment (remove pleasant)</td></tr></table>
<p>Consequences work best when immediate and consistent. Negative reinforcement is <em>not</em> punishment: it strengthens behaviour.</p>
<p class="muted small">Not required: stimulus generalisation/discrimination, extinction, spontaneous recovery, names of researchers.</p>`,
        },
        {
          id: 'le-obs', short: 'Observational learning',
          text: 'social-cognitive approaches to learning, as illustrated by observational learning as a process involving attention, retention, reproduction, motivation and reinforcement',
          note: `<ul><li><strong>Social-cognitive approach</strong>: learning involves the social context and cognitive (mental) processes, not just stimuli and responses.</li>
<li>Stages of <strong>observational learning</strong>:
<ol><li><strong>Attention</strong>: actively watch the model's behaviour (influenced by model's status, similarity, the learner's interest).</li>
<li><strong>Retention</strong>: store a mental representation of the behaviour in memory.</li>
<li><strong>Reproduction</strong>: have the physical and mental ability to perform the behaviour.</li>
<li><strong>Motivation</strong>: want to perform it, usually because of expected reinforcement.</li>
<li><strong>Reinforcement</strong>: direct (learner is rewarded) or <em>vicarious</em> (seeing the model rewarded), which increases the likelihood of repeating the behaviour.</li></ol></li>
<li>In scenario questions, identify each stage with evidence from the scenario.</li></ul>`,
        },
        {
          id: 'le-ab', short: 'Aboriginal and Torres Strait Islander ways of knowing',
          text: 'approaches to learning that situate the learner within a system, as illustrated by Aboriginal and Torres Strait Islander ways of knowing where learning is viewed as being embedded in relationships where the learner is part of a multimodal system of knowledge patterned on Country',
          note: `<ul><li>Aboriginal and Torres Strait Islander knowledge systems are the oldest continuing systems of learning in Australia. They are diverse across language and cultural groups.</li>
<li>Learning is <strong>embedded in relationships</strong> with Elders, family, kinship, community, Country and ancestors. The learner is <em>part of</em> the system, not separate from it.</li>
<li>Knowledge is <strong>multimodal</strong> (story, song, dance, art, symbols, observation, hands-on experience on Country) and <strong>patterned on Country</strong> (land, waters and sky hold and cue knowledge).</li>
<li>Contrast with Western/behaviourist approaches, which often treat the learner as an individual responding to stimuli, with knowledge broken into separate subjects.</li>
<li>Specific examples are not required; you need to be able to explain these features and apply them.</li></ul>`,
        },
      ],
    },
    {
      id: 'memory', group: 'Unit 3 · AoS 2 – Learning and memory', title: 'The psychobiological process of memory',
      kk: [
        {
          id: 'me-msm', short: 'Atkinson–Shiffrin multi-store model',
          text: 'the explanatory power of the Atkinson-Shiffrin multi-store model of memory in the encoding, storage and retrieval of stored information in sensory, short-term and long-term memory stores',
          note: `<table><tr><th>Store</th><th>Function</th><th>Capacity</th><th>Duration</th></tr>
<tr><td>Sensory (iconic: visual; echoic: auditory)</td><td>Briefly holds incoming sensory information; what is <strong>attended</strong> to transfers to STM</td><td>Potentially unlimited</td><td>Iconic ~0.2–0.4 s; echoic ~3–4 s</td></tr>
<tr><td>Short-term (STM)</td><td>Holds information we're consciously aware of; receives retrieved LTM information</td><td>About 7 ± 2 items (increased by <strong>chunking</strong>)</td><td>About 18–30 s (extended by <strong>rehearsal</strong>)</td></tr>
<tr><td>Long-term (LTM)</td><td>Relatively permanent storage</td><td>Potentially unlimited</td><td>Potentially permanent</td></tr></table>
<ul><li><strong>Encoding</strong>: converting information into a usable form. <strong>Storage</strong>: retaining it. <strong>Retrieval</strong>: recovering information from LTM back into STM.</li>
<li>Rehearsal helps transfer (encode) information from STM to LTM.</li>
<li><strong>Explanatory power</strong>. Strengths: clearly distinguishes stores with different capacity/duration, supported by research (e.g. people with brain damage who lose one store but not another). Limitations: overly simple and linear; treats STM as a single passive store; rehearsal is not the only route into LTM (e.g. emotional events are encoded without rehearsal).</li></ul>
<p class="muted small">Not required: maintenance vs elaborative rehearsal, recall/recognition/relearning, context- and state-dependent cues.</p>`,
        },
        {
          id: 'me-brain', short: 'Brain regions in implicit and explicit memory',
          text: 'the roles of the hippocampus, amygdala, neocortex, basal ganglia and cerebellum in long-term implicit and explicit memories',
          note: `<ul><li><strong>Explicit memory</strong> (conscious, "knowing that"): semantic (facts, knowledge) and episodic (personal events). <strong>Implicit memory</strong> (unconscious, "knowing how"): procedural skills, habits, classically conditioned responses.</li>
<li><strong>Hippocampus</strong>: encodes and consolidates new <em>explicit</em> memories, then helps transfer them to the neocortex for storage; involved in spatial memory. It interacts with the amygdala to encode emotional explicit memories.</li>
<li><strong>Amygdala</strong>: adds the emotional significance to explicit memories (with the hippocampus) and encodes <em>implicit</em> classically conditioned emotional responses, especially fear.</li>
<li><strong>Neocortex</strong>: the long-term <em>storage</em> site of explicit (semantic and episodic) memories; its motor areas also contribute to implicit motor memories.</li>
<li><strong>Basal ganglia</strong>: encode and store <em>implicit</em> procedural memories and habits, especially those involving reward and voluntary movement sequences.</li>
<li><strong>Cerebellum</strong>: encodes and stores <em>implicit</em> procedural memories for fine motor skills, coordination and timing, and simple classically conditioned reflexes (e.g. eye-blink).</li>
<li>Memory involves these regions interacting in networks; no single region holds a whole memory.</li></ul>`,
        },
        {
          id: 'me-epi', short: "Episodic and semantic memory, Alzheimer's and aphantasia",
          text: "the role of episodic and semantic memory in retrieving autobiographical events and in constructing possible imagined futures, including evidence from brain imaging and post-mortem studies of brain lesions in people with Alzheimer's disease and aphantasia as an example of individual differences in the experience of mental imagery",
          note: `<ul><li><strong>Autobiographical events</strong> are retrieved using both <em>episodic</em> knowledge (specific personal experiences: what, where, when) and <em>semantic</em> knowledge (general facts about yourself, e.g. your school's name).</li>
<li><strong>Possible imagined futures</strong> (episodic future thinking): we recombine elements of past episodic and semantic memories to mentally simulate events that might happen. Memory of the past and imagining the future rely on overlapping processes.</li>
<li><strong>Alzheimer's disease</strong>: a neurodegenerative disease. <strong>Amyloid plaques</strong> form <em>around</em> neurons and <strong>neurofibrillary tangles</strong> form <em>within</em> neurons, followed by neuronal death. It typically begins in the hippocampus and spreads to the neocortex. People have increasing difficulty retrieving autobiographical events and imagining futures. Evidence: <em>brain imaging</em> (shrinkage/reduced activity in living patients) and <em>post-mortem</em> studies (plaques, tangles, lesions confirmed after death).</li>
<li><strong>Aphantasia</strong>: absence of <em>voluntary</em> visual mental imagery (cannot picture things in the "mind's eye"). It is an individual difference, not a disease. People with aphantasia often report less vivid, less detailed episodic memories and imagined futures, while semantic memory is typically intact. This shows that visual imagery contributes to episodic retrieval and future thinking.</li></ul>
<p class="muted small">Not required: identifying the type of brain scan, retrograde/anterograde amnesia, biological causes of aphantasia.</p>`,
        },
        {
          id: 'me-mnem', short: 'Mnemonics and songlines',
          text: "the use of mnemonics (acronyms, acrostics and the method of loci) by written cultures to increase the encoding, storage and retrieval of information as compared with the use of mnemonics such as sung narrative used by oral cultures, including Aboriginal peoples' use of songlines",
          note: `<ul><li><strong>Mnemonics</strong> are techniques that improve encoding, storage and retrieval by organising information and providing retrieval cues.</li>
<li><strong>Acronym</strong>: the first letters of the items form a <em>pronounceable word</em> (e.g. "SCUBA").</li>
<li><strong>Acrostic</strong>: the first letters of the items begin the words of a memorable phrase (e.g. "My Very Easy Method Just Speeds Up Naming" for the planets).</li>
<li><strong>Method of loci</strong>: mentally place items along a familiar route or place, then mentally "walk" the route to retrieve them in order. It relies on <em>visual imagery</em> and spatial memory.</li>
<li><strong>Sung narratives / songlines</strong>: used by oral cultures; Aboriginal peoples' songlines link knowledge (law, navigation, food, kinship, history) to features of Country through song, story, dance and art. They are <strong>multimodal</strong> (rhythm, melody, movement, place), <strong>communal</strong>, emotionally and culturally meaningful, and repeated across generations. Place and Country act as powerful retrieval cues.</li>
<li>Comparison: both link information to places in sequence. Songlines are multimodal and culturally embedded, carrying vast amounts of knowledge across generations; written-culture mnemonics are usually individual, arbitrary and short-term.</li>
<li>Links to brain regions: hippocampus (spatial/sequence encoding), amygdala (emotional significance), neocortex (storage).</li></ul>`,
        },
      ],
    },
    // ---------------------------------------------------------------- Unit 4 AoS 1
    {
      id: 'sleep', group: 'Unit 4 · AoS 1 – Sleep', title: 'The demand for sleep',
      kk: [
        {
          id: 'sl-asc', short: 'Sleep as an altered state, REM/NREM, measurement',
          text: 'sleep as a psychological construct that is broadly categorised as a naturally occurring altered state of consciousness and is further categorised into REM and NREM sleep, and the measurement of physiological responses associated with sleep, through electroencephalography (EEG), electromyography (EMG), electro-oculography (EOG), sleep diaries and video monitoring',
          note: `<ul><li>Sleep is a <strong>psychological construct</strong> (it can't be directly observed, so it is inferred from measurable responses) and a <strong>naturally occurring altered state of consciousness</strong>: compared with normal waking consciousness it involves reduced awareness of the environment, altered perception and time orientation, and different brain wave patterns.</li>
<li><strong>NREM Stage 1</strong>: light, transitional sleep; brain waves slowing (frequency decreasing, amplitude increasing); easily woken; hypnic jerks possible. <strong>Stage 2</strong>: brain waves continue to slow, with bursts of activity (sleep spindles and K-complexes). <strong>Stage 3</strong> (slow-wave sleep): high-amplitude, low-frequency waves; hardest to wake; body physically restored.</li>
<li><strong>REM sleep</strong>: high-frequency, low-amplitude brain waves similar to being awake; rapid eye movements; skeletal muscles are almost paralysed (atonia); vivid dreaming. It is sometimes called "paradoxical" sleep (active brain, inactive body).</li>
<li><strong>Measurement</strong>:
<table><tr><th>Tool</th><th>Measures</th><th>Key pattern</th></tr>
<tr><td>EEG</td><td>Electrical activity of the brain (brain waves)</td><td>Frequency/amplitude distinguish stages</td></tr>
<tr><td>EMG</td><td>Electrical activity of skeletal muscles</td><td>Very low in REM (atonia)</td></tr>
<tr><td>EOG</td><td>Electrical activity of muscles moving the eyes</td><td>High in REM; low in NREM</td></tr>
<tr><td>Sleep diary</td><td>Self-reported sleep times, wakings, daytime sleepiness</td><td>Subjective; can be inaccurate</td></tr>
<tr><td>Video monitoring</td><td>Observable behaviour during sleep (e.g. movements, sleepwalking)</td><td>Objective behaviour, no brain data</td></tr></table></li></ul>
<p class="muted small">Not required: naming waves as alpha/beta/theta/delta; "Stage 4" no longer exists (now part of NREM Stage 3).</p>`,
        },
        {
          id: 'sl-reg', short: 'Circadian and ultradian rhythms, SCN and melatonin',
          text: 'regulation of sleep-wake patterns by internal biological mechanisms, with reference to circadian rhythm, ultradian rhythms of REM and NREM Stages 1–3, the suprachiasmatic nucleus and melatonin',
          note: `<ul><li><strong>Circadian rhythm</strong>: a biological cycle of about 24 hours. The sleep-wake cycle is one.</li>
<li><strong>Ultradian rhythm</strong>: a cycle shorter than 24 hours. A sleep cycle (NREM 1 → 2 → 3 → 2 → REM) lasts about 90 minutes and repeats 4–5 times a night. Early cycles have more NREM Stage 3; later cycles have longer REM periods and little or no Stage 3.</li>
<li><strong>Suprachiasmatic nucleus (SCN)</strong>: in the <em>hypothalamus</em>; the body's master clock. It runs on an approximately 24-hour cycle on its own but is reset daily by <strong>zeitgebers</strong>, mainly daylight.</li>
<li>Light → light-sensitive cells in the retina → SCN. When light is detected, the SCN sends <em>inhibitory</em> messages to the <strong>pineal gland</strong> (less melatonin). When dark, the SCN sends <em>excitatory</em> messages, and the pineal gland releases <strong>melatonin</strong> into the bloodstream, promoting sleepiness.</li>
<li>Common error: the SCN is not in the pineal gland and does not itself secrete melatonin.</li></ul>`,
        },
        {
          id: 'sl-life', short: 'Sleep across the life span',
          text: 'differences in, and explanations for, the demands for sleep across the life span, with reference to total amount of sleep and changes in a typical pattern of sleep (proportion of REM and NREM)',
          note: `<table><tr><th>Age</th><th>Typical total sleep</th><th>REM proportion</th><th>Notes</th></tr>
<tr><td>Newborn</td><td>~14–17 hours</td><td>~50%</td><td>Rapid brain development</td></tr>
<tr><td>Child</td><td>~10–11 hours</td><td>Falling to ~25%</td><td>Lots of NREM Stage 3 for growth</td></tr>
<tr><td>Adolescent</td><td>Needs ~8–10 hours</td><td>~20–25%</td><td>Melatonin released later (sleep phase delay), so they fall asleep later</td></tr>
<tr><td>Adult</td><td>~7–9 hours</td><td>~20–25%</td><td>NREM Stage 3 gradually declines</td></tr>
<tr><td>Elderly</td><td>~7–8 hours (often less achieved)</td><td>~20% or slightly less</td><td>Much less NREM Stage 3, more awakenings, lighter sleep</td></tr></table>
<ul><li><strong>Explanations</strong>: REM is thought to support brain development, synaptic connections and memory consolidation, so it is highest in infants. NREM Stage 3 supports physical growth and restoration (e.g. growth hormone release), so it is highest in children and declines with age.</li>
<li>You don't need to name sleep theories; you need to link stage benefits to the age differences.</li></ul>`,
        },
      ],
    },
    {
      id: 'sleepwb', group: 'Unit 4 · AoS 1 – Sleep', title: 'Sleep disruption and mental wellbeing',
      kk: [
        {
          id: 'sw-dep', short: 'Partial and full sleep deprivation; BAC comparison',
          text: "the effects of partial sleep deprivation (inadequate sleep either in quantity or quality) on a person's affective, behavioural and cognitive functioning, and the affective and cognitive effects of one night of full sleep deprivation as a comparison to blood alcohol concentration readings of 0.05 and 0.10",
          note: `<ul><li><strong>Partial sleep deprivation</strong>: inadequate sleep in quantity <em>or</em> quality over one or more nights.</li>
<li><strong>Affective</strong> (emotions): irritability, mood swings, amplified emotional reactions, reduced ability to regulate emotions, increased anxiety.</li>
<li><strong>Behavioural</strong> (observable actions): yawning, eye closure, microsleeps, clumsiness, reduced motivation to do tasks.</li>
<li><strong>Cognitive</strong> (thinking): poorer attention and concentration, impaired decision-making and problem-solving, slower thinking, poorer memory, reduced creativity.</li>
<li><strong>Full sleep deprivation</strong> (one night with no sleep) compared with alcohol: being awake about <strong>17 hours</strong> produces cognitive and affective impairment similar to a <strong>BAC of 0.05</strong>; about <strong>24 hours</strong> awake is similar to a <strong>BAC of 0.10</strong> (e.g. poorer concentration, hand–eye coordination, reaction to hazards, emotional regulation).</li>
<li>Exam tip: classify effects carefully. Impaired concentration and decision-making are <em>cognitive</em>, not behavioural.</li></ul>`,
        },
        {
          id: 'sw-crsd', short: 'Circadian rhythm sleep disorders and bright light therapy',
          text: "changes to a person's sleep-wake cycle that cause circadian rhythm sleep disorders (Delayed Sleep Phase Syndrome [DSPS], Advanced Sleep Phase Disorder [ASPD] and shift work) and the treatments of circadian rhythm sleep disorders through bright light therapy",
          note: `<ul><li><strong>DSPS</strong>: the sleep-wake cycle is <em>delayed</em> by 2+ hours. The person can't fall asleep until very late and struggles to wake for school or work. Common in adolescents.</li>
<li><strong>ASPD</strong>: the cycle is <em>advanced</em>. The person becomes sleepy early in the evening and wakes very early. Common in the elderly.</li>
<li><strong>Shift work disorder</strong>: the work schedule (e.g. night or rotating shifts) is misaligned with the circadian rhythm, causing insomnia and excessive sleepiness. Rotating shifts are especially disruptive because the rhythm never adjusts.</li>
<li><strong>Bright light therapy</strong>: timed exposure to bright artificial light to shift (re-set) the circadian rhythm via the SCN and melatonin.
<ul><li>DSPS → bright light in the <em>morning</em> to shift the cycle earlier.</li>
<li>ASPD → bright light in the <em>evening</em> to shift the cycle later.</li>
<li>Shift work → bright light at the start or during the night shift, and darkness when trying to sleep during the day.</li></ul></li></ul>`,
        },
        {
          id: 'sw-hyg', short: 'Sleep hygiene and zeitgebers',
          text: 'improving sleep hygiene and adaptation to zeitgebers to improve sleep-wake patterns and mental wellbeing, with reference to daylight and blue light, temperature, and eating and drinking patterns',
          note: `<ul><li><strong>Sleep hygiene</strong>: habits and environment that promote good-quality sleep. <strong>Zeitgebers</strong>: external cues that entrain (reset) the circadian rhythm.</li>
<li><strong>Daylight</strong>: morning daylight helps reset the SCN and keeps the cycle aligned; dim light in the evening allows melatonin release.</li>
<li><strong>Blue light</strong> (phones, laptops, LED screens) is detected by the retina → SCN inhibits melatonin release → harder to fall asleep. Avoid screens about an hour before bed or use night mode.</li>
<li><strong>Temperature</strong>: core body temperature naturally drops at night; a cool bedroom helps sleep onset, while a hot room disrupts sleep.</li>
<li><strong>Eating and drinking</strong>: avoid caffeine (a stimulant) later in the day, large or heavy meals close to bedtime, and alcohol (disrupts sleep, especially REM). Regular meal times act as zeitgebers.</li>
<li>Advice must fit the person's sleep schedule. For a night-shift worker, "evening" may be the start of their day.</li></ul>`,
        },
      ],
    },
    // ---------------------------------------------------------------- Unit 4 AoS 2
    {
      id: 'wellbeing', group: 'Unit 4 · AoS 2 – Mental wellbeing', title: 'Defining mental wellbeing',
      kk: [
        {
          id: 'wb-def', short: 'Levels of functioning, resilience and SEWB',
          text: 'ways of considering mental wellbeing, including levels of functioning; resilience, as the ability to cope with and manage change and uncertainty; and social and emotional wellbeing (SEWB), as a multidimensional and holistic framework for wellbeing that encapsulates all elements of being (body, mind and emotions, family and kinship, community, culture, country, spirituality and ancestors) for Aboriginal and Torres Strait Islander people',
          note: `<ul><li><strong>Levels of functioning</strong>: how well a person can carry out everyday tasks independently (e.g. study, work, self-care, relationships). High functioning suggests high mental wellbeing.</li>
<li><strong>Resilience</strong>: the ability to cope with and manage change and uncertainty, and to "bounce back" from adversity.</li>
<li><strong>Social and emotional wellbeing (SEWB)</strong>: a holistic, multidimensional framework unique to Aboriginal and Torres Strait Islander peoples. The self sits within seven interconnected <strong>domains</strong> (connection to body; mind and emotions; family and kinship; community; culture; Country; spirituality and ancestors). Wellbeing depends on the quality of connections to all domains. These are shaped by social, historical and political determinants (e.g. the effects of colonisation).</li>
<li>"Mind and emotions" is the domain closest to Western ideas of mental wellbeing, but SEWB is broader than Western, individual-focused models. "Mental wellbeing" is not the same as "mental health" in this course.</li></ul>`,
        },
        {
          id: 'wb-cont', short: 'Mental wellbeing as a continuum; stress, anxiety, phobia',
          text: "mental wellbeing as a continuum, with an individual's mental wellbeing influenced by the interaction of internal and external factors and fluctuating over time, as illustrated by variations for individuals experiencing stress, anxiety and phobia",
          note: `<ul><li>Mental wellbeing varies along a <strong>continuum</strong>, from high wellbeing (mentally healthy) through mental health problems to mental disorders. A person's position <em>fluctuates over time</em> because of the interaction of <strong>internal factors</strong> (e.g. genetics, thoughts, sleep, illness) and <strong>external factors</strong> (e.g. exams, relationships, finances).</li>
<li><strong>Stress</strong>: a psychobiological response to a stressor, usually short-term and linked to a specific stressor; it can even be helpful.</li>
<li><strong>Anxiety</strong>: worry and apprehension, often about a future or uncertain event, sometimes without a clear stressor. It can persist, and it is a disorder when it is excessive and interferes with functioning.</li>
<li><strong>Specific phobia</strong>: an anxiety disorder involving persistent, intense, irrational fear of a particular object or situation that is out of proportion to the actual danger, leads to avoidance, and significantly disrupts functioning.</li>
<li>When placing someone on the continuum, use evidence: the intensity, duration and impact on their level of functioning.</li></ul>`,
        },
      ],
    },
    {
      id: 'phobia', group: 'Unit 4 · AoS 2 – Mental wellbeing', title: 'Specific phobia: biopsychosocial approach',
      kk: [
        {
          id: 'ph-dev', short: 'Development of specific phobia',
          text: 'the relative influences of factors that contribute to the development of specific phobia, with reference to gamma-amino butyric acid (GABA) dysfunction and long-term potentiation (biological); behavioural models involving precipitation by classical conditioning and perpetuation by operant conditioning, and cognitive biases including memory bias and catastrophic thinking (psychological); and specific environmental triggers and stigma around seeking treatment (social)',
          note: `<p><strong>Biological</strong></p><ul><li><strong>GABA dysfunction</strong>: too little GABA, or GABA not binding effectively, means less neural inhibition. Neurons fire too readily, so fear and anxiety responses are excessive.</li>
<li><strong>Long-term potentiation</strong>: repeated activation of fear pathways (e.g. each anxious encounter) strengthens the neural connections linking the stimulus with fear, making the fear response stronger and more automatic.</li></ul>
<p><strong>Psychological</strong></p><ul><li><strong>Precipitation by classical conditioning</strong>: a previously neutral stimulus (e.g. a dog) is paired with a frightening UCS (e.g. being bitten → pain/fear). The dog becomes a CS that triggers fear (CR).</li>
<li><strong>Perpetuation by operant conditioning</strong>: avoiding or escaping the stimulus <em>removes</em> the anxiety. This is <strong>negative reinforcement</strong>, which strengthens avoidance and keeps the phobia going (the person never learns the stimulus is safe).</li>
<li><strong>Cognitive biases</strong>: <em>memory bias</em> (remembering past encounters as more frightening than they were, or recalling fear-related information more readily); <em>catastrophic thinking</em> (expecting the worst possible outcome).</li></ul>
<p><strong>Social</strong></p><ul><li><strong>Specific environmental triggers</strong>: particular situations, events or encounters that set off the fear.</li>
<li><strong>Stigma around seeking treatment</strong>: fear of being judged leads people to avoid help, so the phobia persists.</li></ul>
<p>"Relative influences": factors interact and their importance differs between individuals.</p>`,
        },
        {
          id: 'ph-int', short: 'Evidence-based interventions for specific phobia',
          text: 'evidence-based interventions and their use for specific phobia, with reference to the use of short-acting anti-anxiety benzodiazepine agents (GABA agonists) in the management of phobic anxiety and breathing retraining (biological); the use of cognitive behavioural therapy (CBT) and systematic desensitisation as psychotherapeutic treatments of phobia (psychological); and psychoeducation for families/supporters with reference to challenging unrealistic or anxious thoughts and not encouraging avoidance behaviours (social)',
          note: `<p><strong>Biological</strong></p><ul><li><strong>Benzodiazepines</strong>: short-acting anti-anxiety drugs that are <strong>GABA agonists</strong>. They bind to GABA receptor sites and enhance GABA's inhibitory effect, reducing neural firing and physiological anxiety. Good short-term relief (e.g. before a flight), but they do not treat the cause; there is a risk of dependence and side effects (drowsiness).</li>
<li><strong>Breathing retraining</strong>: learning slow, controlled (diaphragmatic) breathing to counteract the rapid breathing/hyperventilation of the anxiety response, reducing sympathetic arousal and giving the person a sense of control.</li></ul>
<p><strong>Psychological</strong></p><ul><li><strong>CBT</strong>: identifies and challenges irrational, catastrophic thoughts about the phobic stimulus and replaces them with realistic ones (cognitive), and uses behavioural techniques such as gradual exposure so avoidance is reduced (behavioural).</li>
<li><strong>Systematic desensitisation</strong>: (1) learn deep muscle relaxation; (2) build a <em>fear hierarchy</em> from least to most feared situations; (3) gradually work up the hierarchy while relaxed. A relaxed state is incompatible with fear, so relaxation becomes associated with the stimulus.</li></ul>
<p><strong>Social</strong></p><ul><li><strong>Psychoeducation for families/supporters</strong>: teaching them about phobia so they can help <em>challenge unrealistic or anxious thoughts</em> and <em>not encourage avoidance</em> (e.g. not changing family plans to avoid the feared stimulus, not giving excessive reassurance). This helps break the negative reinforcement cycle.</li></ul>`,
        },
      ],
    },
    {
      id: 'maintain', group: 'Unit 4 · AoS 2 – Mental wellbeing', title: 'Maintaining mental wellbeing',
      kk: [
        {
          id: 'mt-bps', short: 'Biopsychosocial protective factors',
          text: 'the application of a biopsychosocial approach to maintaining mental wellbeing, with reference to protective factors including adequate nutritional intake and hydration and sleep (biological), cognitive behavioural strategies and mindfulness meditation (psychological) and support from family, friends and community that is authentic and energising (social)',
          note: `<ul><li><strong>Protective factors</strong> reduce the likelihood of developing a mental health problem and help maintain wellbeing.</li>
<li><strong>Biological</strong>: adequate <em>nutrition</em> (supports brain function and healthy, diverse gut microbiota, a link to the gut–brain axis); adequate <em>hydration</em> (dehydration impairs mood, concentration and energy); adequate <em>sleep</em> (supports emotional regulation and cognition).</li>
<li><strong>Psychological</strong>: <em>cognitive behavioural strategies</em> (recognising and challenging unhelpful thoughts, replacing them with more realistic ones; changing unhelpful behaviours); <em>mindfulness meditation</em> (focusing <strong>attention</strong> on the present moment, e.g. the breath, and observing thoughts and feelings with <strong>acceptance</strong> and without judgement, which reduces rumination and stress).</li>
<li><strong>Social</strong>: support from family, friends and community (e.g. a sports club, Headspace) that is <strong>authentic</strong> (genuine) and <strong>energising</strong> (gives vitality and enthusiasm), which buffers stress and increases belonging.</li>
<li>The factors interact; e.g. good sleep makes cognitive strategies easier to apply.</li></ul>`,
        },
        {
          id: 'mt-cult', short: 'Cultural determinants: cultural continuity and self-determination',
          text: 'cultural determinants, including cultural continuity and self-determination, as integral for the maintenance of wellbeing in Aboriginal and Torres Strait Islander peoples',
          note: `<ul><li><strong>Cultural determinants</strong> are culturally based protective factors that strengthen the wellbeing of Aboriginal and Torres Strait Islander peoples. They are integral to SEWB.</li>
<li><strong>Cultural continuity</strong>: maintaining and passing on culture across generations: language, connection to Country, kinship, ceremony, cultural practices and knowledge. This strengthens identity and belonging.</li>
<li><strong>Self-determination</strong>: Aboriginal and Torres Strait Islander peoples having the right and power to make decisions about matters affecting their own lives and communities (e.g. community-controlled health services designed and run by communities). It is linked to empowerment and better wellbeing outcomes.</li>
<li>Correlational evidence (e.g. communities with stronger cultural continuity have better outcomes) shows association, not causation.</li></ul>`,
        },
      ],
    },
    // ---------------------------------------------------------------- Key science skills
    {
      id: 'skills', group: 'Key science skills (all units, including Unit 4 AoS 3)', title: 'Research methods and key science skills',
      kk: [
        {
          id: 'sk-design', short: 'Aims, hypotheses and variables',
          text: 'identify, research and construct aims and questions for investigation; identify independent, dependent and controlled variables in controlled experiments; formulate hypotheses to focus investigations; predict possible outcomes of investigations',
          note: `<ul><li><strong>Aim</strong>: what the investigation sets out to find out. <strong>Hypothesis</strong>: a testable prediction including the IV, the DV, the <em>direction</em> of the expected result, and all groups/conditions being compared. Use a hypothesis for experiments; for correlational studies, case studies etc., make a <em>prediction</em> instead.</li>
<li><strong>Independent variable (IV)</strong>: manipulated by the researcher (x-axis). <strong>Dependent variable (DV)</strong>: measured (y-axis). <strong>Controlled variables</strong>: held constant so only the IV affects the DV (not the same as a control group).</li>
<li><strong>Extraneous variable</strong>: any variable other than the IV that <em>may</em> affect the DV. <strong>Confounding variable</strong>: one that <em>has</em> affected the DV, providing an alternative explanation and reducing internal validity.</li>
<li>A <strong>control group</strong> is not exposed to the IV, giving a baseline for comparison.</li></ul>
<p class="muted small">Operationalising variables is not required.</p>`,
        },
        {
          id: 'sk-method', short: 'Methodologies, experimental designs and sampling',
          text: 'determine appropriate investigation methodology: case study; classification and identification; controlled experiment (within-subjects design, between-subjects design, mixed design); correlational study; fieldwork; literature review; modelling; product, process or system development; simulation … consideration of sampling technique (random and stratified) and size to achieve representativeness',
          note: `<ul><li><strong>Controlled experiment designs</strong>:
<ul><li><em>Between-subjects</em>: different participants in each condition (no carry-over effects, but differences between groups can confound).</li>
<li><em>Within-subjects</em>: the same participants do all conditions (controls participant differences; risk that doing one condition affects the next).</li>
<li><em>Mixed design</em>: features of both (e.g. separate groups, each tested before and after).</li></ul></li>
<li><strong>Correlational study</strong>: variables measured, not manipulated, so it shows association, <em>not</em> cause and effect. <strong>Fieldwork</strong>: observing or interacting in a real environment beyond the classroom (observation, interviews, questionnaires, focus groups, yarning circles). <strong>Case study</strong>: in-depth study of a particular person, event or situation. <strong>Literature review</strong>: collating and analysing <em>secondary</em> data from others' research. <strong>Modelling</strong>, <strong>simulation</strong>, <strong>classification and identification</strong>, <strong>product/process/system development</strong>: see the study design definitions.</li>
<li><strong>Random sampling</strong>: every member of the population has an equal chance of selection. <strong>Stratified sampling</strong>: population divided into subgroups (strata, e.g. age groups) and participants selected in the same proportions as in the population. Both aim for representativeness. Larger samples reduce the effect of random error and outliers.</li></ul>
<p class="muted small">Not required: matched-participants design, convenience sampling.</p>`,
        },
        {
          id: 'sk-data', short: 'Data types, analysis and quality of measurement',
          text: 'process quantitative data using appropriate mathematical relationships and units, including calculations of percentages, percentage change and measures of central tendencies (mean, median, mode), and demonstrate an understanding of standard deviation as a measure of variability; identify and analyse experimental data qualitatively, applying where appropriate concepts of: accuracy, precision, repeatability, reproducibility and validity',
          note: `<ul><li><strong>Primary data</strong>: collected first-hand by the researcher. <strong>Secondary data</strong>: collected by someone else. <strong>Quantitative</strong>: numerical. <strong>Qualitative</strong>: descriptive (words, images); it can be converted to numbers, e.g. by rating scales.</li>
<li>Mean = sum ÷ n; median = middle value; mode = most frequent. Percentage change = (new − old) ÷ old × 100.</li>
<li><strong>Standard deviation</strong>: how spread out scores are around the mean. A small SD means data clustered close to the mean (more precise); a large SD means more variability. You don't need to calculate it.</li>
<li><strong>Accuracy</strong>: how close a measurement is to the true value. <strong>Precision</strong>: how closely repeated measurements agree with each other. <strong>Repeatability</strong>: same results under the <em>same</em> conditions (same procedure, observer, instrument, location, short time). <strong>Reproducibility</strong>: same results under <em>changed</em> conditions (different observer, method, location, culture…). <strong>Validity</strong>: measures what it claims to; <em>internal validity</em> = investigates what it set out to (design, sampling, allocation, confounds); <em>external validity</em> = results apply to similar people in other settings.</li>
<li>Graphs: bar charts for categories; line graphs for continuous data or change over time. IV on the x-axis, DV on the y-axis, with titles, labels and units.</li></ul>
<p class="muted small">Don't use "reliable"; use repeatability and reproducibility.</p>`,
        },
        {
          id: 'sk-error', short: 'Errors, uncertainty and outliers',
          text: 'identify outliers and contradictory or incomplete data; evaluate investigation methods and possible sources of error or uncertainty, and suggest improvements to increase validity and to reduce uncertainty',
          note: `<ul><li><strong>Random errors</strong>: unpredictable variations that cause a spread of results, reducing <em>precision</em> (e.g. participants tested at different times of day, small variations in procedure). Reduce them with more repetitions or a larger sample, and by refining the method.</li>
<li><strong>Systematic errors</strong>: bias readings in one direction (above or below the true value), often but not always by a consistent amount, reducing <em>accuracy</em> (e.g. a miscalibrated instrument, a flawed method, participants expecting a probiotic to work and reporting less anxiety). Repeating doesn't help; fix the instrument or method.</li>
<li><strong>Personal errors</strong> (mistakes, miscalculations) are not included in analysis; the measurement should be redone.</li>
<li><strong>Uncertainty</strong>: the lack of exact knowledge of the true value. All measurements have it, and psychological constructs increase it. It is treated qualitatively only. Uncertainty is not the same as error.</li>
<li><strong>Outliers</strong>: data points that don't fit the pattern. VCAA's guidance: don't ignore them or assume they are mistakes. Include all data, outliers too, in the analysis, consider what might explain them, and note their effect on the mean. More observations reduce the influence of outliers caused by random factors.</li>
<li><strong>Contradictory data</strong> conflicts with other data (e.g. an impossible response); <strong>incomplete data</strong> is missing values.</li></ul>
<p class="muted small">You don't need to name specific errors such as "placebo effect" or "order effect"; classify them as random or systematic, or as an extraneous/confounding variable.</p>`,
        },
        {
          id: 'sk-ethics', short: 'Ethical concepts and guidelines',
          text: 'demonstrate ethical conduct and apply ethical guidelines when undertaking and reporting investigations; analyse and evaluate psychological issues using relevant ethical concepts and guidelines',
          note: `<p><strong>Ethical concepts</strong>: <em>beneficence</em> (maximise benefits, minimise risks and harms); <em>integrity</em> (honest searching and reporting of all results, favourable or not); <em>justice</em> (fair consideration of competing claims, no unfair burden on one group, fair access to benefits); <em>non-maleficence</em> (avoid causing harm, and any harm must not be disproportionate to the benefits); <em>respect</em> (regard for the welfare, autonomy, beliefs and culture of individuals and groups, and protecting those with diminished capacity).</p>
<p><strong>Ethical guidelines</strong>: <em>confidentiality</em> (privacy and anonymity of personal information and results); <em>debriefing</em> (at the end, participants learn the aim, results and conclusions, questions are answered and support given; essential when deception is used); <em>informed consent procedures</em> (participants understand the nature, purpose and risks before agreeing; written consent, or from a parent/guardian if unable); <em>use of deception</em> (only when knowing the true purpose would change behaviour and affect validity); <em>voluntary participation</em> (no coercion or pressure); <em>withdrawal rights</em> (leave at any time without penalty, including having their results removed afterwards).</p>
<p>Exam tip: name the specific guideline <em>and</em> explain how it applies in the scenario.</p>`,
        },
        {
          id: 'sk-conclude', short: 'Conclusions, limitations and communication',
          text: 'evaluate data to determine the degree to which the evidence supports or refutes the initial prediction or hypothesis; use reasoning to construct scientific arguments, and to draw and justify conclusions consistent with evidence base; identify, describe and explain the limitations of conclusions; discuss the implications of research findings … distinguish between opinion, anecdote and evidence',
          note: `<ul><li>A <strong>conclusion</strong> answers the aim using the results: state whether the hypothesis is <em>supported</em> or <em>not supported</em> (never "proven"), referring to the data.</li>
<li>Only conclude what the design allows: correlational data shows a relationship, not cause and effect; a conclusion must be about the variables actually measured.</li>
<li><strong>Limitations</strong>: small or unrepresentative sample, uncontrolled extraneous variables, errors, self-report bias, and limited generalisability to other cultural groups or settings (external validity).</li>
<li><strong>Implications</strong>: what the findings mean for real life or further research.</li>
<li><strong>Evidence</strong> comes from systematic investigation; an <strong>anecdote</strong> is a personal story; an <strong>opinion</strong> is a belief that may not be based on evidence.</li>
<li><strong>Scientific poster</strong> (Unit 4 AoS 3): title (question), introduction, methodology and methods, results, discussion, conclusion, references; the centre holds a one-sentence summary of the key finding; maximum 600 words. Keep a <strong>logbook</strong> to authenticate primary data.</li></ul>`,
        },
      ],
    },
  ],
  technique: `<h1>Exam technique: Psychology</h1>
<h2>The exam at a glance</h2>
<ul><li>15 minutes reading + 2 hours 30 minutes writing · 120 marks · 50% of your study score.</li>
<li>Section A: 40 multiple-choice (40 marks). Section B: short and extended answers (80 marks), including one 10-mark extended response.</li>
<li>Time budget: about 1¼ minutes per mark. Roughly 45 minutes for Section A, 100 minutes for Section B (including about 18 minutes for the 10-mark response), leaving a few minutes to check.</li></ul>
<h2>Command words</h2>
<table class="tbl"><tr><th>Word</th><th>What it asks for</th></tr>
<tr><td>Identify / name</td><td>State the thing, no explanation needed.</td></tr>
<tr><td>Describe</td><td>Give the characteristics or features. Say what it is or what happens.</td></tr>
<tr><td>Explain</td><td>Say <em>why</em> or <em>how</em>: give reasons or causes, usually with a "because…" link.</td></tr>
<tr><td>Outline</td><td>Brief summary of the main points.</td></tr>
<tr><td>Distinguish / compare</td><td>Show differences (distinguish) or similarities <em>and</em> differences (compare), using linking words such as "whereas" and "both".</td></tr>
<tr><td>Analyse</td><td>Break into parts and show how they relate or interact, usually applied to the scenario.</td></tr>
<tr><td>Evaluate</td><td>Weigh up strengths and limitations, then make a judgement.</td></tr>
<tr><td>Discuss</td><td>Present several perspectives or points with evidence, often with a conclusion.</td></tr>
<tr><td>Justify</td><td>Give reasons and evidence for a decision or claim.</td></tr>
<tr><td>Suggest / propose</td><td>Put forward a reasonable idea that fits the scenario.</td></tr></table>
<h2>Short-answer rules of thumb</h2>
<ul><li><strong>Marks = points.</strong> A 3-mark "explain" usually needs about three linked ideas.</li>
<li><strong>Use the scenario.</strong> Most marks are lost by giving a textbook definition without applying it to the person or study in the question.</li>
<li><strong>Use precise terms</strong> (e.g. "negative reinforcement", "neocortex", "internal validity"). Write terms out in full the first time in each question; don't rely on your own abbreviations.</li>
<li>Don't use "reliable"; use repeatability or reproducibility. Hypotheses are "supported", never "proven".</li></ul>
<h2>The 10-mark extended response</h2>
<p>Marked holistically against four criteria:</p>
<ol><li>Terminology used correctly <em>and</em> applied to the novel context, not just defined.</li>
<li>Analysis and discussion of concepts <em>and the connections between them</em>.</li>
<li>Analysis and evaluation of the data, methods or models given. Quote or describe the stimulus explicitly ("The table shows… this suggests…").</li>
<li>Evidence-based argument or conclusion: justified judgements using because-statements.</li></ol>
<p><strong>Plan for 2 minutes:</strong> list the concepts the question needs, the stimulus details to quote, and your judgement. Then write in paragraphs that each tie a concept to the stimulus. Examiners reward reasoning over length.</p>
<h2>Multiple choice</h2>
<ul><li>Read the stem twice and underline the key word (e.g. "most likely", "behavioural", "after conditioning").</li>
<li>Eliminate options that are true statements but don't answer the question.</li>
<li>With two-column options, check <em>both</em> columns; usually one half is a trap.</li>
<li>Never leave a question blank, since there's no penalty for guessing.</li></ul>
<h2>What the VCAA examiners' reports say (2023–2025)</h2>
<p>These come from the official reports on how real students answered. Each is a pattern that cost many students marks. The <a href="#/s/psychology">"Where students lose marks" test</a> drills them.</p>
<ul>
<li><strong>Give only the number of answers asked for.</strong> If a question asks for one example and you give two, only the first is marked.</li>
<li><strong>Link to the scenario.</strong> A correct but generic answer is often capped (e.g. 4 out of 5) or gets no marks. Name the person, the task, the data.</li>
<li><strong>"Compare" or "distinguish" needs congruent differences:</strong> compare the <em>same feature</em> for both (e.g. range of effect for neurotransmitters <em>and</em> neuromodulators).</li>
<li><strong>Physiological responses need a direction:</strong> "heart rate increases", not "heart rate".</li>
<li><strong>Populations must include every characteristic</strong> needed to measure the variables (e.g. people with Alzheimer's disease <em>who take antibiotics</em>). In 2025 only 7% got this right.</li>
<li><strong>Benefits of a design must be explained for that study</strong>, not just described ("there are two groups" earns nothing).</li>
<li><strong>Hypotheses</strong> need the population, both levels of the IV, the DV and a direction, written as a prediction.</li>
<li><strong>Precision is shown by the standard deviation</strong> (smallest SD = most precise), not the mean.</li>
<li><strong>Conclusions vs implications:</strong> a conclusion is about this study's results; an implication is what they might mean beyond it.</li>
<li><strong>Conclusions need a direction</strong>, using comparison words such as higher, lower, increased and decreased, ideally with data.</li>
<li><strong>Correlation is not causation.</strong> A correlational study shows a relationship only.</li>
<li><strong>Acute and chronic stress are types of stress, not stressors.</strong> Resilience is the ability to cope with and manage change and uncertainty.</li>
<li><strong>Light and sleep:</strong> light is detected by the SCN, which signals the pineal gland to delay melatonin release. The SCN does not release melatonin.</li>
<li><strong>Sleep hygiene advice depends on when the person sleeps</strong> (e.g. night-shift workers), not on clock time.</li>
<li><strong>Phobias:</strong> catastrophic thinking looks forward (the worst will happen) and perpetuates the phobia; memory bias looks back. Stigma works through shame, which leads to avoiding help, which maintains the phobia.</li>
<li><strong>Command terms matter:</strong> "summarise" means a concise account of the main steps; "evaluate" needs strengths <em>and</em> limitations and a judgement; "justify" needs a reason.</li>
<li><strong>10-mark question:</strong> quote or describe the stimulus explicitly, use because-statements, give at least one similarity and one difference when comparing, and always attempt every part. Strong responses often use subheadings. The 2025 state average was 4.8 out of 10.</li>
</ul>`,
});
