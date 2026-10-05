module.exports = {
  theme: 'common',
  meta: { title: 'Supervisor Discussion Sheet', docLabel: 'Meeting sheet', docName: 'Supervisor discussion sheet' },
  blocks: [
    { t: 'masthead', kicker: 'For the meeting · Supervisor discussion sheet',
      text: 'Paired PhD Programme — Points for Discussion', size: 30 },

    { t: 'h1', text: 'Proposed direction (subject to supervisor confirmation)' },
    { t: 'kv', compact: true, cols: [18, 82], rows: [
      ['Programme', 'Dynamics of Flow-Excited Hydraulic Gates: Loading and Identification'],
      ['Zina', '**Operational Modal Identification of Hydraulic Gates under Varying Flow Conditions.** Identifying a gate\'s structural modes when water level and operation change its apparent dynamic properties (parameter-varying transmissibility OMA).'],
      ['Jamal', '**Unsteady Hydrodynamic Loading of Sluice Gates with Bottom Sills.** Regimes, mechanisms and dimensionless scaling of fluctuating gate loads, and an efficiency–dynamic-load criterion.'],
      ['Basis', 'Connects Prof. Tarinejad\'s transmissibility-based identification research with the group\'s recent gate and weir hydraulics. Selected as the preferred paired direction after comparison with alternative architectures.'],
    ] },

    { t: 'h1', text: 'Five questions for Prof. Tarinejad' },
    { t: 'numbers', ref: 'C', items: [
      'Could you advise whether Zina\'s proposed scope overlaps with the work of Farhad Amanzad or another current student?',
      'Could you advise whether Jamal\'s proposed scope overlaps with the hydraulic-gate work of another current student?',
      'Is a suitable hydraulic flume available or accessible, with tailwater control and the ability to hold still water at several levels?',
      'Are the required pressure transducers, accelerometers, impact hammer and data-acquisition system available?',
      'Would you prefer this integrated gate programme, or would you prefer one thesis to remain closer to the dam and seismic identification line?',
    ] },

    { t: 'h1', text: 'To confirm before registration' },
    { t: 'table', compact: true, cols: [62, 38], head: ['Condition', 'Related question'],
      rows: [
        ['Short recent-literature confirmation review of both gaps', 'Prepared by the candidates'],
        ['No overlap with current students\' topics', 'Questions 1 and 2'],
        ['Flume and instrumentation available or accessible', 'Questions 3 and 4'],
      ] },
    { t: 'p', small: true, text: 'Already reflected in the concepts: a bounded experimental scope (Zina about 20–30 runs; Jamal about 40–60 runs and 6–8 LES cases); Jamal\'s contribution framed at mechanism, scaling and criterion level; and clear scope separation with independent data ownership.' },

    { t: 'h1', text: 'Scope separation (summary)' },
    { t: 'table', compact: true, cols: [20, 40, 40], head: ['', 'Zina', 'Jamal'],
      rows: [
        ['Specimen / sensors', 'Flexible gate; accelerometers; impact hammer', 'Rigid gate with sill inserts; pressure transducers'],
        ['Modelling', 'Structural FE with added mass; synthetic loads', 'LES/DES (CFD); dimensional analysis'],
        ['Validation', 'FE poles; EMA ground truth; public dam records', 'Measured spectra; held-out configurations'],
        ['Shared', 'Flume, water supply, DAQ hardware, outline drawings', 'Common hydraulic-state labels (head, opening, submergence)'],
        ['Independence', 'Remains executable if Jamal\'s work is delayed', 'Remains executable if Zina\'s work is delayed'],
      ] },

    { t: 'h1', text: 'If the conditions are not met' },
    { t: 'bullets', items: [
      '**Laboratory not available:** both concepts become identification-based (Zina: uncertainty-quantified identification from seismic dam records; Jamal: gate identification, validated numerically and on an accessible regulator gate).',
      '**Zina\'s topic overlaps a current student\'s work:** Zina moves to the seismic-uncertainty concept; Jamal\'s concept is unchanged.',
      '**Jamal\'s topic overlaps a current student\'s work:** the same question is studied for labyrinth sliding gates with sills; otherwise the laboratory-independent alternative above applies.',
    ] },

    { t: 'h1', text: 'Supervisor response' },
    { t: 'kv', cols: [24, 76], tallLast: 6400, rows: [
      ['Paired direction', '☐ Agree in principle        ☐ Agree with changes        ☐ Prefer alternative'],
      ['Zina concept', '☐ Proceed to proposal        ☐ Modify        ☐ Replace'],
      ['Jamal concept', '☐ Proceed to proposal        ☐ Modify        ☐ Replace'],
      ['Notes and suggested changes', ''],
    ] },
  ],
};
