const R = require('./refs');
module.exports = {
  theme: 'common',
  meta: { title: 'Paired PhD Research Programme — Summary', header: 'Proposed paired PhD research programme · Subject to supervisor confirmation' },
  blocks: [
    { t: 'title', kicker: 'Proposed research direction · for discussion with Prof. Reza Tarinejad',
      text: 'Dynamics of Flow-Excited Hydraulic Gates: Loading and Identification',
      fa: 'دینامیک دریچه‌های هیدرولیکی تحت تحریک جریان: بارگذاری و شناسایی',
      subtitle: 'A proposed pair of independent but complementary doctoral concepts',
      byline: 'Candidates: **Zina** and **Jamal** · Proposed supervisor: **Prof. Reza Tarinejad** · Faculty of Civil Engineering, University of Tabriz · October 2026' },

    { t: 'callout', title: 'Status',
      text: 'This summary presents a proposed research direction for preliminary discussion. It is not an approved programme. Two conditions are unresolved: (1) a short recent-literature confirmation review of both research gaps; (2) confirmation that no current student already owns either scope.' },

    { t: 'h1', text: '1. Why this programme' },
    { t: 'p', text: 'The supervisor\'s publication record has two active lines that are not yet connected:' },
    { t: 'bullets', items: [
      '**Output-only identification of dam dynamics.** Most recently transmissibility-based methods (T07, T08, T11, S01) and automated SSI (T10).',
      '**Hydraulic control structures.** Gate and weir discharge performance (T17, T18) and outlet CFD verification (T19).',
    ] },
    { t: 'p', text: 'The hydraulic work characterises time-averaged performance. The identification work addresses dam bodies under seismic or ambient input. Flow-excited gates sit exactly between the two. They are excited by fluctuating flow, and their dynamic properties change with water level and operation.' },

    { t: 'h1', text: '2. Scientific logic' },
    { t: 'pre', size: 16, lines: [
      '   FLOW  ──────────►  HYDRODYNAMIC LOADING  ──────────►  STRUCTURAL DYNAMIC RESPONSE',
      '   (operating state:          │                                     │',
      '    head, opening,      JAMAL: what fluctuating loads          ZINA: how to identify the gate\'s',
      '    submergence, sill)  does the flow apply, by which         modal properties when water and',
      '                        mechanism, and how do they scale?     operating state change them?',
      '                              │                                     │',
      '                        rigid gate · pressures · LES          flexible gate · accelerations · EMA',
      '                        → regime map, scaling, criterion       → parameter-varying identification',
    ] },
    { t: 'p', text: 'Each thesis owns **one link** of the chain. Jamal characterises the excitation; Zina identifies the structure. Neither thesis needs the other\'s results: Zina uses synthetic loads defined independently, and Jamal uses a rigid gate whose dynamics are irrelevant to his question.' },

    { t: 'h1', text: '3. The two doctoral concepts' },
    { t: 'table', cols: [18, 41, 41], head: ['', 'ZINA', 'JAMAL'],
      rows: [
        ['Discussion title', 'Operational Modal Identification of Hydraulic Gates under Varying Flow Conditions', 'Unsteady Hydrodynamic Loading of Sluice Gates with Bottom Sills'],
        ['Research gap', 'Transmissibility OMA assumes the structure is unchanged across loading conditions; in gates, changing the operating state changes the added mass and damping as well', 'There is no regime-based, dimensionless description of fluctuating loads on sill-equipped gates, and no efficiency–load criterion'],
        ['Core question', 'How can structural poles be separated from operating-state pole shifts and flow-excitation peaks?', 'How do sill geometry and submergence change load magnitude, frequency and mechanism, and where is the efficiency–load optimum?'],
        ['Hypothesis', 'Modelling poles as smooth functions of a measured hydraulic state θ gives unbiased identification across operating states', 'A sill shifts separation control from the gate lip to the sill crest; frequencies follow regime-specific Strouhal scaling; a favourable trade-off region exists'],
        ['Expected contribution', 'Parameter-varying transmissibility identification for water-interacting structures', 'Regime map, scaling relationship and efficiency–dynamic-load criterion'],
      ] },

    { t: 'h1', text: '4. Scope separation' },
    { t: 'table', compact: true, cols: [16, 30, 30, 24], head: ['Component', 'Zina', 'Jamal', 'Shared'],
      rows: [
        ['Research gap', 'Identification of time-varying water-interacting structures', 'Mechanism and scaling of fluctuating loads', '—'],
        ['Scientific question', 'Separating structural poles from operating-state effects', 'Load regimes, scaling and the trade-off', '—'],
        ['Hypothesis', 'Parameter-varying pole model λr(θ)', 'Separation-control shift; regime Strouhal scaling', '—'],
        ['Test specimen', 'Flexible instrumented gate', 'Rigid gate with interchangeable sills', 'Gate family / outer geometry'],
        ['Sensors', 'Accelerometers; impact hammer', 'Pressure transducers', 'DAQ hardware'],
        ['Measurements', 'Accelerations; EMA FRFs', 'Wall pressures; discharge; depths', 'Run register (labels only)'],
        ['Numerical modelling', 'Structural FE with added mass; synthetic loads', 'LES/DES with VOF (CFD)', '—'],
        ['Analysis', 'System identification algorithms', 'Spectral load analysis; dimensional analysis', '—'],
        ['Validation', 'FE exact poles; EMA ground truth; public dam records', 'Measured spectra; held-out configurations', '—'],
        ['Expected results', 'Identification method and protocol', 'Regime map, scaling law, criterion', '—'],
        ['Journal papers', 'Z1–Z3 (own data, first author)', 'J1–J3 (own data, first author)', 'Optional joint paper only'],
      ] },

    { t: 'h2', text: 'Independence test' },
    { t: 'kv', cols: [38, 62], rows: [
      ['If Zina is delayed by one year, can Jamal still finish?', '**Yes.** His experiments, CFD and load model use his own rigid specimen and pressure data, and need no modal information.'],
      ['If Jamal is delayed by one year, can Zina still finish?', '**Yes.** Year 1 is theory and FE. Her laboratory runs need only flume flow and her own specimen. Paper Z3 uses public dam records. Her loads are synthetic.'],
      ['If one candidate withdraws?', 'The other continues unchanged. Flume time is reallocated, and each specimen belongs to its own thesis.'],
    ] },

    { t: 'h1', text: '5. Legitimately shared assets' },
    { t: 'bullets', items: [
      '**Flume and water supply**, with shared booking. Runs may be simultaneous, but each candidate records their own quantities.',
      '**General gate family and initial drawings.** Same outer dimensions, but **separate specimens**: flexible for Zina, rigid with sill inserts for Jamal.',
      '**DAQ infrastructure and general laboratory setup** (separate channels and files).',
      '**Baseline hydraulic conditions**: head, opening, submergence and discharge, logged in a common run register and used by both only as labels.',
    ] },
    { t: 'p', text: 'No measured response, load, model or result is shared in a way that would create dependency. The only collaborative output is an **optional** joint paper (for example, a resonance-risk discussion combining load spectra with identified frequencies). It would be written only after each candidate has two papers submitted, and it is not counted as core work in either thesis.' },

    { t: 'h1', text: '6. Minimum laboratory requirements' },
    { t: 'table', compact: true, cols: [24, 38, 38], head: ['Item', 'Zina', 'Jamal'],
      rows: [
        ['Flume', 'ESSENTIAL: hold still water at 4–6 levels; run 4–6 flow states', 'ESSENTIAL: tailgate for free/submerged control; adequate discharge range'],
        ['Gate model', 'ESSENTIAL: one flexible plate gate (light, measurable modes)', 'ESSENTIAL: one rigid gate; sill inserts (3 heights × 2 lengths)'],
        ['Response / load sensors', 'ESSENTIAL: 6–8 accelerometers; impact hammer with force sensor. USEFUL: strain gauges. OPTIONAL: laser vibrometer', 'ESSENTIAL: 6–8 flush pressure transducers with adequate bandwidth. USEFUL: 2-component load cell'],
        ['Hydraulic measurements', 'USEFUL: head and discharge as θ labels', 'ESSENTIAL: discharge meter; water-level gauges. USEFUL: high-speed camera. OPTIONAL: ADV/PIV'],
        ['DAQ', 'ESSENTIAL: synchronised, ≥8 channels', 'ESSENTIAL: synchronised, ≥8 channels (can be shared hardware)'],
        ['Operating-state variation', 'ESSENTIAL: water level and opening varied at 4–6 states', 'ESSENTIAL: opening (3) × flow state (2–3)'],
        ['Minimum configurations', 'About 4–6 still-water EMA levels + 4–6 flow states, about 20–30 runs', '7 geometries × 3 openings × 2–3 flow states, about 40–60 runs'],
        ['Computation', 'Workstation (FE, identification)', 'Workstation or cluster for 6–8 LES/DES cases'],
      ] },
    { t: 'p', muted: true, text: 'Scope is capped deliberately. Indicative cost, excluding existing equipment, is of the order of US$10–20k for the programme. Much of it may be covered by borrowing sensors and DAQ. Figures are rough estimates to be checked with the laboratory.' },

    { t: 'h1', text: '7. Publication architecture' },
    { t: 'table', cols: [14, 43, 43], head: ['', 'Zina', 'Jamal'],
      rows: [
        ['Paper 1', 'Parameter-varying transmissibility formulation and numerical benchmark', 'Experimental fluctuating loads and regime identification'],
        ['Paper 2', 'Laboratory validation with EMA ground truth', 'Separation-control mechanism and Strouhal scaling (experiment + LES)'],
        ['Paper 3', 'Dam application with reservoir-level-dependent records', 'Efficiency–dynamic-load criterion; prototype-scale interpretation'],
        ['Joint (optional)', 'Resonance-risk discussion: Jamal\'s load spectra with Zina\'s identified frequencies; not core to either thesis', ''],
      ] },

    { t: 'h1', text: '8. Open conditions and backup' },
    { t: 'numbers', ref: 'B', items: [
      '**Recent-literature confirmation** of both gaps through a short structured review. If Jamal\'s plain-sluice framing proves already covered, his fallback is the same question for labyrinth sliding gates with sills (T17).',
      '**Scope ownership**: confirmation that no current student (for example, those working on transmissibility identification or gate hydraulics) already holds either topic.',
      '**Facilities**: flume, pressure transducers, accelerometers and DAQ, available or accessible.',
    ] },
    { t: 'p', text: '**Backup.** If laboratory access is unavailable, the backup is the earlier-ranked alternative in which both concepts are identification-based and need no pressure campaign: Zina takes uncertainty-quantified transmissibility identification from seismic dam records, and Jamal takes the gate-identification concept, validated numerically and on an accessible regulator gate. If only Zina\'s gap overlaps with a current student, Zina moves to the seismic-uncertainty concept and Jamal\'s thesis is unchanged.' },

    { t: 'h1', text: 'Verified references (supervisor\'s publications)' },
    { t: 'refs', items: [R.T07, R.T08, R.T10, R.T11, R.S01, R.T17, R.T18, R.T19] },
  ],
};
