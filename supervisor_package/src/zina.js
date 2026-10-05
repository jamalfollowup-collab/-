const R = require('./refs');
module.exports = {
  theme: 'zina',
  meta: { title: 'Zina — Preliminary Doctoral Concept', header: 'Preliminary doctoral concept — Zina · Subject to supervisor confirmation' },
  blocks: [
    { t: 'title', kicker: 'Preliminary doctoral concept · proposed research direction',
      text: 'Operational Modal Identification of Hydraulic Gates under Varying Flow Conditions',
      fa: 'شناسایی مودال عملیاتی دریچه‌های هیدرولیکی در شرایط متغیر جریان',
      subtitle: 'Formal working title: Operating-State-Dependent Operational Modal Analysis of Flow-Excited Hydraulic Gates Using Transmissibility Functions',
      byline: 'Candidate: **Zina** · Proposed supervisor: **Prof. Reza Tarinejad** · Faculty of Civil Engineering, University of Tabriz · October 2026' },

    { t: 'callout', title: 'Status of this concept', text: 'Preliminary concept for discussion, not an approved topic. Unresolved: (1) a short recent-literature confirmation review of the gap; (2) confirmation that no current student already owns this scope. One half of a proposed paired programme; Jamal\'s concept is independent of it.' },

    { t: 'h1', text: 'The problem in plain terms' },
    { t: 'p', text: 'Operational modal analysis (OMA) estimates natural frequencies, mode shapes and damping from response alone. For a hydraulic gate these "apparent" properties are not fixed. When water level, submergence or opening changes, the hydrodynamic added mass and damping change the frequencies. At the same time, the exciting flow changes its own frequency content and may contain narrow-band vortex-shedding components.' },
    { t: 'p', text: 'The scientific problem is therefore: **how can the structural modal properties of a hydraulic gate be identified reliably when the surrounding water and the operating state themselves change the apparent dynamic properties?** Without an answer, a frequency shift measured on a gate cannot be attributed with confidence to damage, to a different water level, or to a flow-excitation peak.' },

    { t: 'h1', text: 'Research gap' },
    { t: 'p', text: 'Prof. Tarinejad\'s recent work develops **transmissibility-based OMA**: weighted transmissibility (T07, T08), multi-reference weighted Hermitian transmissibility (T11) and PSD-transmissibility (S01). These methods find structural poles where transmissibility functions measured under **different loading conditions** coincide, which makes them less sensitive to the unknown input spectrum. That is attractive for coloured flow excitation. T10 states explicitly that conventional OMA relies on white-noise, stationary-input assumptions.' },
    { t: 'p', text: 'All of these formulations assume that the **structure is the same** across the loading conditions used. T11 relaxes the requirements on the loading, not on the structure. In a hydraulic gate, the natural way to obtain different loading conditions (changing head, opening or submergence) also changes the structure\'s effective mass and damping. That violates the assumption at the very point where the method needs it. In the targeted check made during this study, no transmissibility-based or operating-state-parameterised OMA of hydraulic gates appeared. This finding still needs a structured confirmation review.' },

    { t: 'h2', text: 'What is new compared with conventional OMA' },
    { t: 'table', compact: true, cols: [26, 37, 37], head: ['Aspect', 'Conventional OMA (incl. current transmissibility methods)', 'This thesis'],
      rows: [
        ['System assumption', 'Time-invariant structure', 'Modal properties depend on a measured hydraulic state θ (e.g. submergence ratio, head)'],
        ['Input assumption', 'White, stationary (SSI/FDD); or several loadings on one unchanged structure (transmissibility)', 'Coloured flow excitation that changes with θ, including narrow-band components'],
        ['Pole model', 'Fixed poles λr', 'Pole trajectories λr(θ) estimated across operating states'],
        ['Spurious peaks', 'Removed by stabilisation or clustering', 'Separated physically: structural poles follow added mass; excitation peaks follow flow velocity'],
      ] },

    { t: 'h1', text: 'Core question and hypothesis' },
    { t: 'callout', title: 'Core scientific question',
      text: 'How can output-only identification separate genuine structural poles from operating-state-induced pole shifts and from flow-excitation peaks in a water-interacting structure?' },
    { t: 'callout', title: 'Main hypothesis (to be tested)',
      text: 'When standard transmissibility OMA or SSI-COV pools data across operating states, it gives biased frequencies and spurious poles at flow-excitation peaks. If the poles are modelled as smooth functions λr(θ) of a measured hydraulic state θ, the identified frequencies and damping should agree with input–output (EMA) ground truth across the operating range. The target accuracy, to be refined, is about 2% for frequency and about 20% for damping. Structural poles and excitation peaks should be distinguishable by how they scale.' },

    { t: 'h1', text: 'Methodology' },
    { t: 'table', compact: true, cols: [18, 56, 26], head: ['Work package', 'Content', 'Output'],
      rows: [
        ['WP1 Theory', 'Extend the weighted/Hermitian transmissibility pole indicator (T07, T11) to parameter-varying systems. Derive when transmissibility differences vanish at θ-dependent poles. Compare local (frozen-θ) and global (smooth-in-θ) estimators.', 'Formulation; Paper Z1'],
        ['WP2 Numerical benchmark', 'FE model of a vertical-lift gate (plate and stiffeners) with submergence-dependent added mass. Driven by synthetic broadband plus narrow-band loads defined independently from the literature. Monte Carlo study of noise, record length and mode spacing.', 'Exact-pole benchmark; Paper Z1'],
        ['WP3 Laboratory test-bed', 'One small flexible gate specimen in a flume. Still-water EMA (impact hammer) at 4–6 water levels. Operational runs under flow at 4–6 operating states.', 'Ground-truth validation; Paper Z2'],
        ['WP4 Generality', 'Apply the method to public multi-event strong-motion records of an instrumented dam with different reservoir levels across events (e.g. Pacoima, previously studied in T10), with θ = reservoir level.', 'Field-scale demonstration; Paper Z3'],
      ] },

    { t: 'h1', text: 'Validation' },
    { t: 'bullets', items: [
      '**Numerical:** identified poles compared with exact FE poles at each θ, under controlled noise.',
      '**Laboratory:** identified poles compared with EMA ground truth measured on the same specimen at the same water level.',
      '**Field-scale:** identified dam modes compared with published identifications. Benchmarks: standard transmissibility OMA, a T11-type method and SSI-COV (T10).',
      'Validation does **not** use any result from Jamal\'s thesis.',
    ] },

    { t: 'h1', text: 'Expected contribution and papers' },
    { t: 'p', text: 'If the hypothesis holds, the thesis would provide an identification method that treats the hydraulic operating state as an explicit parameter of the modal model. That carries Prof. Tarinejad\'s transmissibility line from seismic records of dams into flow-excited hydraulic structures, and adds a validated test protocol for gates. The novelty claim is subject to the confirmation review.' },
    { t: 'table', compact: true, cols: [12, 58, 30], head: ['Paper', 'Indicative content', 'Candidate journals'],
      rows: [
        ['Z1', 'Parameter-varying transmissibility formulation and numerical benchmark', 'Mech. Syst. Signal Process.; J. Sound Vib.'],
        ['Z2', 'Laboratory validation on a flow-excited gate with EMA ground truth', 'J. Fluids Struct.; Struct. Control Health Monit.'],
        ['Z3', 'Dam application with reservoir-level-dependent records', 'Earthq. Eng. Struct. Dyn.; J. Vib. Control'],
      ] },

    { t: 'h1', text: 'Independence and minimum requirements' },
    { t: 'bullets', items: [
      'Uses its **own flexible specimen, accelerometers and EMA**, and **synthetic loads**. It does not need Jamal\'s pressure or load results.',
      'Year 1 (theory and FE) needs no laboratory. Paper Z3 uses public records. If Jamal is delayed by a year, this thesis can still finish.',
      '**Essential:** flume able to hold still water at several levels and run several flow states; one flexible gate specimen; 6–8 accelerometers; impact hammer with force sensor; synchronised DAQ (≥8 channels). Useful: strain gauges. Optional: laser vibrometer; field test on a regulator gate.',
    ] },

    { t: 'h1', text: 'Title options' },
    { t: 'kv', compact: true, cols: [24, 76], rows: [
      ['A. Discussion', 'Operational Modal Identification of Hydraulic Gates under Varying Flow Conditions'],
      ['B. Formal PhD', 'Operating-State-Dependent Operational Modal Analysis of Flow-Excited Hydraulic Gates Using Transmissibility Functions'],
      ['C. Publication', 'Parameter-varying transmissibility-based identification of hydraulic gates with water-level-dependent added mass'],
    ] },

    { t: 'h1', text: 'Verified references (supervisor\'s publications)' },
    { t: 'refs', items: [R.T07, R.T08, R.T10, R.T11, R.S01] },
  ],
};
