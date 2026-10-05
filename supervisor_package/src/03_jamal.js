const R = require('./refs');
module.exports = {
  theme: 'jamal',
  meta: { title: 'Jamal — Preliminary Doctoral Concept', docLabel: 'Document 03', docName: 'Jamal · Preliminary doctoral concept' },
  blocks: [
    { t: 'masthead', kicker: 'Document 03 · Preliminary doctoral concept · Jamal',
      text: 'Unsteady Hydrodynamic Loading of Sluice Gates with Bottom Sills',
      fa: 'بارگذاری هیدرودینامیکی ناپایدار دریچه‌های کشویی دارای آستانه',
      people: 'Candidate: **Jamal**     Proposed supervisor: **Prof. Reza Tarinejad**     October 2026' },

    { t: 'callout', title: 'Status',
      text: 'Preliminary concept prepared for discussion, subject to supervisor confirmation. Two points remain open: (1) a short recent-literature confirmation review of the gap; (2) confirmation that the scope does not overlap with current students\' work. This concept is one half of a proposed paired programme and is independent of Zina\'s concept.' },

    { t: 'h2', text: 'Title options' },
    { t: 'kv', compact: true, cols: [18, 82], rows: [
      ['Discussion', 'Unsteady Hydrodynamic Loading of Sluice Gates with Bottom Sills'],
      ['Formal PhD', 'Hydrodynamic Load Regimes of Sluice Gates with Bottom Sills: Mechanisms, Scaling and the Discharge-Efficiency versus Dynamic-Load Trade-off'],
      ['Publication', 'Regime-based scaling of fluctuating hydrodynamic loads on sill-equipped sluice gates'],
    ] },

    { t: 'h1', text: 'Problem' },
    { t: 'p', text: 'Adding a bottom sill under a gate is a known way to increase discharge capacity. In the supervisor\'s group, sills on **labyrinth sliding gates** increased the discharge coefficient by about 9.9–20.8%, depending on sill width [1]. The group\'s related work [1–3] characterises **time-averaged** performance. A sill also changes **where the flow separates** (gate lip, sill crest, or both), and therefore the **fluctuating** loads that drive gate vibration and fatigue. These loads appear not to have been quantified for sill-equipped gates, so an efficiency gain could carry an unmeasured dynamic cost.' },

    { t: 'h1', text: 'Research gap' },
    { t: 'p', text: 'The general physics of gate flow is **not** the gap: vortices, shear-layer oscillation below submerged gates and the effect of sills on **mean** pressure have been studied, as a targeted check confirmed. The narrower gap, which appears insufficiently addressed, concerns:' },
    { t: 'bullets', items: [
      'a **regime-based** description of which hydraulic conditions produce strong fluctuating loads on sill-equipped gates;',
      'a **dimensionless relationship** linking sill geometry, opening and submergence to load magnitude and frequency content;',
      'a **criterion** identifying operating regions that keep the discharge gain without raising dynamic excitation.',
      'Fallback if the plain-sluice version is already covered: the same question for the group\'s labyrinth sliding gates with sills [1], for which no dynamic-load data were found.',
    ] },

    { t: 'h1', text: 'The scientific chain' },
    { t: 'steps', cols: [30, 70], items: [
      ['PHYSICAL MECHANISM', 'Which separation and shear-layer process dominates in each regime?'],
      ['LOAD CHARACTERISATION', 'RMS magnitude, frequency content, narrow-band versus broadband loading'],
      ['DIMENSIONLESS RELATION', 'Which groups, and which length scale, collapse the data?'],
      ['ENGINEERING CRITERION', 'Operating regions with high discharge efficiency and low dynamic load'],
    ] },
    { t: 'p', text: 'Measurements and simulations are **means** to discover the mechanism and the scaling; this is not a measurement campaign. The deliverable is the relationship and criterion, tested on held-out configurations.' },

    { t: 'h1', text: 'Hydraulic regimes to be established' },
    { t: 'table', compact: true, cols: [22, 40, 38], head: ['Candidate regime (working hypothesis)', 'Expected dominant mechanism', 'What must be discovered'],
      rows: [
        ['R1 Free flow, no or low sill', 'Separation at the gate lip; shear layer of the contracted jet', 'Baseline fluctuating-load level and spectral shape'],
        ['R2 Free flow, effective sill', 'A second separation point at the sill crest; possible reattachment on the sill depending on its length', 'The sill height and length at which control of separation shifts from lip to sill'],
        ['R3 Submerged flow', 'Recirculating roller over the jet; shear-layer feedback that may produce narrow-band oscillation', 'Whether submergence turns broadband loading into narrow-band loading, and at what submergence'],
        ['R4 Transition free ↔ submerged', 'Unstable switching between R1/R2 and R3', 'Regime boundaries and whether the transition produces load peaks'],
      ] },

    { t: 'h1', text: 'Dimensionless framework (candidates, not final)' },
    { t: 'table', compact: true, cols: [30, 70], head: ['Group', 'Role'],
      rows: [
        ['a/H1 (relative opening)', 'Basic control variable'],
        ['s/a, Ls/a, xs/a', 'Relative sill height, length and position: geometry controlling separation'],
        ['Submergence ratio (tailwater / opening)', 'Free versus submerged regime'],
        ['Fr (at the contracted section)', 'Inertial scaling of the jet'],
        ['St = f·ℓ/V', 'Frequency scaling. The length scale ℓ is to be determined: contracted jet thickness, lip–sill gap, or sill length'],
        ['C′p, C′F (rms pressure and force coefficients)', 'Load magnitude normalised by jet dynamic pressure'],
        ['Spectral concentration index', 'Share of load energy in a narrow band (more critical for resonance)'],
        ['Cd; Re', 'Hydraulic efficiency, paired with C′F for the trade-off; Re monitored to bound scale effects'],
      ] },

    { t: 'h1', text: 'Working hypotheses (to be tested)' },
    { t: 'numbers', ref: 'A', items: [
      '**Mechanism.** Above a threshold relative sill height, control of separation moves from the gate lip to the sill crest. That shift changes both the level and the spectral shape of the fluctuating load.',
      '**Scaling.** Within each regime, the dominant load frequency collapses on a Strouhal number with a regime-specific length scale. Identifying that length scale is a primary outcome.',
      '**Trade-off.** There is a range of sill geometry and operating conditions in which most of the discharge gain is kept while C′F and the spectral concentration stay at or below the no-sill reference.',
    ] },

    { t: 'h1', text: 'Predictive modelling direction' },
    { t: 'p', text: 'No final equation is proposed in advance. The thesis must discover:' },
    { t: 'bullets', items: [
      'the regime boundaries in the (s/a, submergence, a/H1) space;',
      'the length scale that collapses the dominant frequencies in each regime;',
      'the functional dependence of C′F and of spectral concentration on the sill groups, within each regime;',
      'whether one efficiency–load criterion holds across configurations, tested on held-out geometries.',
    ] },
    { t: 'p', text: 'The proposed model form is **semi-empirical and regime-conditioned**, with the structure set by the mechanism and coefficients fitted to data. Black-box machine learning is not the contribution. CFD explains mechanisms; it does not replace experiments.' },

    { t: 'h1', text: 'Methodology and bounded scope' },
    { t: 'table', compact: true, cols: [17, 59, 24], head: ['Work package', 'Content', 'Output'],
      rows: [
        ['WP1 Framework', 'Dimensional analysis, regime hypotheses, reduced test matrix', 'Test plan'],
        ['WP2 Experiments', 'One **rigid** gate with 6–8 flush pressure transducers on the lip, skin plate and sill. Configurations: no sill plus 3 sill heights × 2 lengths (7 geometries) × 3 openings × 2–3 flow states (free, submerged), about 40–60 runs, a subset repeated', 'Load data; Paper J1'],
        ['WP3 CFD', 'LES or DES with VOF at about 6–8 selected cases. Mesh verified with the Richardson/GCI procedure used in [3]. Validated against measured spectra', 'Mechanism evidence; Paper J2'],
        ['WP4 Model and criterion', 'Regime map, scaling relationship and efficiency–load criterion, checked on held-out configurations. Prototype-scale interpretation with a scale-effect discussion', 'Criterion; Paper J3'],
      ] },

    { t: 'h1', text: 'Validation' },
    { t: 'bullets', items: [
      'Measured pressure spectra are the primary reference; CFD is accepted only where it reproduces them. The no-sill baseline is checked against classical underflow-gate data (compiled in the confirmation review).',
      'Predictive check: the relationship and criterion are derived on part of the matrix and tested on held-out configurations.',
    ] },

    { t: 'h1', text: 'Expected contribution and papers' },
    { t: 'p', text: 'If the hypotheses hold: a regime-based, dimensionless description of fluctuating loads on sill-equipped gates and a criterion linking the group\'s discharge-efficiency results to dynamic safety (novelty subject to the confirmation review).' },
    { t: 'table', compact: true, keep: true, cols: [10, 58, 32], head: ['Paper', 'Indicative content', 'Candidate journals'],
      rows: [
        ['J1', 'Experimental fluctuating pressures and forces; regime identification', 'J. Hydraulic Research; J. Hydraulic Eng.'],
        ['J2', 'Mechanism of separation control and Strouhal scaling (experiment + LES)', 'J. Fluids Struct.; Physics of Fluids'],
        ['J3', 'Efficiency–dynamic-load criterion with prototype-scale interpretation', 'Water Resources Management; J. Irrig. Drain. Eng.'],
      ] },

    { t: 'h1', text: 'Independence' },
    { t: 'p', text: 'Rigid gate and pressure sensors only; no modal identification; nothing is needed from Zina\'s thesis. Laboratory requirements are listed in Document 01, §6.' },

    { t: 'h2', text: 'References (supervisor\'s publications)' },
    { t: 'refs', items: [R.T17, R.T18, R.T19] },
  ],
};
