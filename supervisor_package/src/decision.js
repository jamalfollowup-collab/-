module.exports = {
  theme: 'common',
  meta: { title: 'Supervisor Decision and Questions', header: 'For discussion with Prof. Reza Tarinejad · Proposed research direction' },
  blocks: [
    { t: 'title', kicker: 'Supervisor decision sheet',
      text: 'Paired PhD Programme — Decisions Requested',
      byline: 'Candidates: **Zina** and **Jamal** · Proposed supervisor: **Prof. Reza Tarinejad** · University of Tabriz · October 2026' },

    { t: 'h1', text: 'Proposed pair (subject to supervisor confirmation)' },
    { t: 'kv', cols: [22, 78], rows: [
      ['Programme', 'Dynamics of Flow-Excited Hydraulic Gates: Loading and Identification'],
      ['Zina', '**Operational Modal Identification of Hydraulic Gates under Varying Flow Conditions.** Identifying a gate\'s structural modes when water level and operation change its apparent dynamic properties (parameter-varying transmissibility OMA).'],
      ['Jamal', '**Unsteady Hydrodynamic Loading of Sluice Gates with Bottom Sills.** Regimes, mechanisms and dimensionless scaling of fluctuating gate loads, and an efficiency–dynamic-load criterion.'],
      ['Basis', 'Connects the supervisor\'s transmissibility identification work (T07, T08, T11) with the group\'s gate/weir hydraulics (T17, T18, T19). It ranked first of three evaluated pairs (86/100).'],
    ] },

    { t: 'h1', text: 'Backup' },
    { t: 'bullets', items: [
      '**Laboratory unavailable:** both concepts become identification-based. Zina: uncertainty-quantified transmissibility identification from seismic dam records. Jamal: gate identification, validated numerically and on an accessible regulator gate. The overlap between the two theses would be higher and must be managed.',
      '**G1 (Zina) overlaps a current student:** Zina moves to seismic-uncertainty identification; Jamal is unchanged.',
      '**G2 (Jamal) overlaps a current student:** first try the labyrinth-sill-gate framing; if that is also owned, apply the laboratory-unavailable backup.',
    ] },

    { t: 'h1', text: 'Five questions for Prof. Tarinejad' },
    { t: 'numbers', ref: 'C', items: [
      'Is Zina\'s topic (identification of gates under varying water level and operation) already assigned to, or substantially overlapping with, the work of Mr Amanzad or another current student?',
      'Is Jamal\'s topic (fluctuating loads on sluice gates with bottom sills) already assigned to another current student?',
      'Is a suitable hydraulic flume available, with tailwater control and the ability to hold still water at several levels?',
      'Are pressure transducers, accelerometers, an impact hammer and DAQ available or accessible?',
      'Do you prefer this paired gate programme, or would you prefer one thesis to remain in structural or earthquake identification?',
    ] },

    { t: 'h1', text: 'Feasibility conditions before registration' },
    { t: 'table', compact: true, cols: [6, 64, 30], head: ['#', 'Condition', 'Status'],
      rows: [
        ['1', 'Short recent-literature confirmation review of both gaps', 'Pending'],
        ['2', 'No current student already owns either scope', 'Pending (Q1, Q2)'],
        ['3', 'Flume and instrumentation available or accessible', 'Pending (Q3, Q4)'],
        ['4', 'Jamal\'s contribution stated at mechanism, scaling and criterion level, not as a dataset', 'Built into concept'],
        ['5', 'Experimental scope capped (Zina about 20–30 runs; Jamal about 40–60 runs; 6–8 LES cases)', 'Built into concept'],
        ['6', 'Written scope-separation agreement (specimens, data ownership, optional single joint paper)', 'To be signed'],
      ] },

    { t: 'h1', text: 'Scope separation (summary)' },
    { t: 'table', compact: true, cols: [22, 39, 39], head: ['', 'Zina', 'Jamal'],
      rows: [
        ['Specimen / sensors', 'Flexible gate; accelerometers; impact hammer', 'Rigid gate with sill inserts; pressure transducers'],
        ['Modelling', 'Structural FE with added mass; synthetic loads', 'LES/DES (CFD); dimensional analysis'],
        ['Validation', 'FE poles; EMA ground truth; public dam records', 'Measured spectra; held-out configurations'],
        ['Shared by both', 'Flume, water supply, DAQ hardware, outline drawings', 'Run register (head, opening, submergence; labels only)'],
        ['Independence', 'Can finish if Jamal is delayed: **yes**', 'Can finish if Zina is delayed: **yes**'],
      ] },

    { t: 'h1', text: 'Supervisor response' },
    { t: 'kv', cols: [30, 70], rows: [
      ['Paired direction', '☐ Agree in principle    ☐ Agree with changes    ☐ Prefer alternative'],
      ['Zina concept', '☐ Proceed to proposal    ☐ Modify    ☐ Replace'],
      ['Jamal concept', '☐ Proceed to proposal    ☐ Modify    ☐ Replace'],
      ['Notes', ' \n \n '],
    ] },
  ],
};
