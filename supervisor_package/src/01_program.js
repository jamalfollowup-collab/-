const R = require('./refs');
module.exports = {
  theme: 'common',
  meta: { title: 'Paired PhD Research Programme — Summary', docLabel: 'Document 01', docName: 'Paired research programme summary' },
  blocks: [
    { t: 'masthead', kicker: 'Document 01 · Paired research programme summary',
      text: 'Dynamics of Flow-Excited Hydraulic Gates: Loading and Identification',
      fa: 'دینامیک دریچه‌های هیدرولیکی تحت تحریک جریان: بارگذاری و شناسایی',
      subtitle: 'A proposed pair of independent but complementary doctoral concepts' },

    { t: 'callout', title: 'Status',
      text: 'Proposed research direction for preliminary discussion, subject to supervisor confirmation. Two points remain open: (1) a short recent-literature confirmation review of both research gaps; (2) confirmation that neither scope overlaps with current students\' work.' },

    { t: 'h1', text: 'Why this programme' },
    { t: 'p', text: 'Prof. Tarinejad\'s publication record contains two active lines that are not yet connected:' },
    { t: 'bullets', items: [
      '**Output-only identification of dam dynamics**, most recently transmissibility-based methods [1, 2, 4] and automated SSI [3].',
      '**Hydraulic control structures**: gate and weir discharge performance [5, 6] and outlet CFD verification [7].',
    ] },
    { t: 'p', text: 'The hydraulic work characterises time-averaged performance; the identification work addresses dam bodies under seismic or ambient input. Flow-excited gates sit between the two: they are excited by fluctuating flow, and their dynamic properties change with water level and operation.' },

    { t: 'h1', text: 'Scientific logic' },
    { t: 'flow', steps: [
      { title: 'FLOW', body: 'Operating state: head, opening, submergence, sill geometry', foot: 'Common hydraulic context' },
      { title: 'HYDRODYNAMIC LOADING', body: '**Jamal:** what fluctuating loads does the flow apply, by which mechanism, and how do they scale?', foot: 'Rigid gate · pressures · LES → regime map, scaling, criterion' },
      { title: 'STRUCTURAL DYNAMIC RESPONSE', body: '**Zina:** how can the gate\'s modal properties be identified when water and operating state change them?', foot: 'Flexible gate · accelerations · EMA → parameter-varying identification' },
    ] },
    { t: 'p', text: 'Each thesis addresses **one link** of the chain: Jamal characterises the excitation, Zina identifies the structure. Neither thesis needs the other\'s results. Zina uses synthetic loads defined independently, and Jamal uses a rigid gate whose dynamics play no role in his question.' },

    { t: 'h1', text: 'The two doctoral concepts' },
    { t: 'table', compact: true, cols: [17, 41.5, 41.5], head: ['', 'ZINA', 'JAMAL'],
      rows: [
        ['Discussion title', 'Operational Modal Identification of Hydraulic Gates under Varying Flow Conditions', 'Unsteady Hydrodynamic Loading of Sluice Gates with Bottom Sills'],
        ['Research gap', 'Transmissibility OMA assumes the structure is unchanged across loading conditions; in gates, changing the operating state changes the added mass and damping as well', 'A regime-based, dimensionless description of fluctuating loads on sill-equipped gates, and an efficiency–load criterion, appear not to be available'],
        ['Core question', 'How can structural poles be separated from operating-state pole shifts and flow-excitation peaks?', 'How do sill geometry and submergence change load magnitude, frequency and mechanism, and where is the efficiency–load optimum?'],
        ['Working hypothesis', 'Modelling poles as smooth functions of a measured hydraulic state θ gives unbiased identification across operating states', 'A sill shifts separation control from the gate lip to the sill crest; frequencies follow regime-specific Strouhal scaling; a favourable trade-off region exists'],
        ['Expected contribution', 'Parameter-varying transmissibility identification for water-interacting structures', 'Regime map, scaling relationship and efficiency–dynamic-load criterion'],
      ] },

    { t: 'h1', text: 'Scope separation' },
    { t: 'table', compact: true, cols: [16, 31, 31, 22], head: ['Component', 'Zina', 'Jamal', 'Shared'],
      rows: [
        ['Research gap', 'Identification of time-varying water-interacting structures', 'Mechanism and scaling of fluctuating loads', '—'],
        ['Scientific question', 'Separating structural poles from operating-state effects', 'Load regimes, scaling and the trade-off', '—'],
        ['Hypothesis', 'Parameter-varying pole model λr(θ)', 'Separation-control shift; regime Strouhal scaling', '—'],
        ['Test specimen', 'Flexible instrumented gate', 'Rigid gate with interchangeable sills', 'Gate family / outer geometry'],
        ['Sensors', 'Accelerometers; impact hammer', 'Pressure transducers', 'DAQ hardware'],
        ['Measurements', 'Accelerations; EMA FRFs', 'Wall pressures; discharge; depths', 'Hydraulic-state labels'],
        ['Numerical modelling', 'Structural FE with added mass; synthetic loads', 'LES/DES with VOF (CFD)', '—'],
        ['Analysis', 'System identification algorithms', 'Spectral load analysis; dimensional analysis', '—'],
        ['Validation', 'FE exact poles; EMA ground truth; public dam records', 'Measured spectra; held-out configurations', '—'],
        ['Expected results', 'Identification method and protocol', 'Regime map, scaling law, criterion', '—'],
        ['Journal papers', 'Z1–Z3 (own data, first author)', 'J1–J3 (own data, first author)', 'Optional joint paper only'],
      ] },

    { t: 'h2', text: 'Independent executability' },
    { t: 'kv', compact: true, cols: [36, 64], rows: [
      ['If Zina\'s work is delayed by a year, can Jamal still finish?', '**Yes.** His experiments, CFD and load model use his own rigid specimen and pressure data, and need no modal information.'],
      ['If Jamal\'s work is delayed by a year, can Zina still finish?', '**Yes.** Year 1 is theory and FE; her laboratory runs need only flume flow and her own specimen; Paper Z3 uses public dam records; her loads are synthetic.'],
    ] },
    { t: 'p', text: 'Each thesis is designed to remain independently executable, with clear scope separation and independent data ownership.' },

    { t: 'h1', text: 'Shared resources' },
    { t: 'bullets', items: [
      '**Flume and water supply**, with shared scheduling. Runs may be simultaneous, but each candidate records their own quantities.',
      '**General gate family and initial drawings**, with the same outer dimensions but **separate specimens**: flexible for Zina, rigid with sill inserts for Jamal.',
      '**DAQ infrastructure and general laboratory setup**, with separate channels and files.',
      '**Common baseline hydraulic conditions** (head, opening, submergence, discharge), logged once and used by both only as labels.',
    ] },
    { t: 'p', text: 'No measured response, load, model or result is shared in a way that would create dependency. One optional joint paper (for example, a resonance-risk discussion combining load spectra with identified frequencies) could follow later, but it would not form part of either thesis\'s core contribution.' },

    { t: 'h1', text: 'Minimum laboratory requirements' },
    { t: 'table', compact: true, cols: [20, 40, 40], head: ['Item', 'Zina', 'Jamal'],
      rows: [
        ['Flume', 'ESSENTIAL: hold still water at 4–6 levels; run 4–6 flow states', 'ESSENTIAL: tailgate for free/submerged control; adequate discharge range'],
        ['Gate model', 'ESSENTIAL: one flexible plate gate (light, measurable modes)', 'ESSENTIAL: one rigid gate; sill inserts (3 heights × 2 lengths)'],
        ['Response / load sensors', 'ESSENTIAL: 6–8 accelerometers; impact hammer with force sensor. USEFUL: strain gauges. OPTIONAL: laser vibrometer', 'ESSENTIAL: 6–8 flush pressure transducers with adequate bandwidth. USEFUL: two-component load cell'],
        ['Hydraulic measurements', 'USEFUL: head and discharge as θ labels', 'ESSENTIAL: discharge meter; water-level gauges. USEFUL: high-speed camera. OPTIONAL: ADV/PIV'],
        ['DAQ', 'ESSENTIAL: synchronised, ≥8 channels', 'ESSENTIAL: synchronised, ≥8 channels (shared hardware possible)'],
        ['Operating-state variation', 'ESSENTIAL: water level and opening at 4–6 states', 'ESSENTIAL: opening (3) × flow state (2–3)'],
        ['Minimum configurations', 'About 4–6 still-water EMA levels + 4–6 flow states (about 20–30 runs)', '7 geometries × 3 openings × 2–3 flow states (about 40–60 runs)'],
        ['Computation', 'Workstation (FE, identification)', 'Workstation or cluster for 6–8 LES/DES cases'],
      ] },
    { t: 'p', muted: true, text: 'The experimental scope is deliberately bounded. Instrumentation requirements will be refined after confirmation of existing laboratory resources.' },

    { t: 'h1', text: 'Publication architecture' },
    { t: 'table', compact: true, cols: [14, 43, 43], head: ['', 'Zina', 'Jamal'],
      rows: [
        ['Paper 1', 'Parameter-varying transmissibility formulation and numerical benchmark', 'Experimental fluctuating loads and regime identification'],
        ['Paper 2', 'Laboratory validation with EMA ground truth', 'Separation-control mechanism and Strouhal scaling (experiment + LES)'],
        ['Paper 3', 'Dam application with reservoir-level-dependent records', 'Efficiency–dynamic-load criterion; prototype-scale interpretation'],
      ] },

    { t: 'h1', text: 'Open points and alternatives' },
    { t: 'numbers', ref: 'B', items: [
      '**Recent-literature confirmation** of both gaps through a short structured review. If the plain-sluice framing of Jamal\'s concept proves already covered, the same question would be studied for labyrinth sliding gates with sills [5].',
      '**Scope**: confirmation that neither topic overlaps with current students\' work (for example, in transmissibility identification or gate hydraulics).',
      '**Facilities**: flume, pressure transducers, accelerometers and DAQ, available or accessible.',
    ] },
    { t: 'p', text: '**Alternative if laboratory access is not available:** both concepts would become identification-based and require no pressure campaign. Zina would study uncertainty-quantified transmissibility identification from seismic dam records; Jamal would study the gate-identification concept, validated numerically and on an accessible regulator gate. If only Zina\'s topic overlaps with a current student\'s work, Zina would move to the seismic-uncertainty concept and Jamal\'s concept would remain unchanged.' },

    { t: 'h2', text: 'Key supervisor publications referred to' },
    { t: 'refs', items: [R.T07, R.T08, R.T10, R.T11, R.T17, R.T18, R.T19] },
  ],
};
