# 05 — Recommended Paired PhD Baseline

**Programme:** *Dynamics of Flow-Excited Underflow Gates — Loading and Identification*
**Supervisor:** Prof. Reza Tarinejad, Faculty of Civil Engineering, University of Tabriz
**Status:** baseline for review. It is subject to modifications M1–M6 in `04_Decision_and_Supervisor_Attack.md`. No proposals or Word documents have been produced yet.

```
COMMON SCIENTIFIC PROGRAMME — Dynamics of flow-excited underflow gates
│
├── Shared baseline assets: flume · gate–sill geometry family · DAQ · run register · CAD
│
├── ZINA PhD — the STRUCTURE under flow (identification)
│   ├── Gap: transmissibility OMA assumes a time-invariant system; hydraulic operation changes the system
│   ├── Question: separate structural poles from operating-state shifts and flow-excitation peaks
│   ├── Hypothesis: a parameter-varying pole model λᵣ(θ) gives unbiased poles across operating states
│   ├── Methods: theory → FE benchmark (synthetic loads) → elastic gate test-bed → public dam records
│   ├── Validation: exact FE poles · still-water EMA ground truth · published dam identifications
│   └── Papers: Z1 formulation · Z2 lab validation · Z3 dam application
│
└── JAMAL PhD — the FLOW loading on the structure (excitation)
    ├── Gap: the dynamic cost of sill-induced Cd gains is unquantified
    ├── Question: how sill geometry and submergence change fluctuating-load magnitude, frequency and mechanism
    ├── Hypothesis: Strouhal scaling with a switching length scale; C′_F rises beyond a sill threshold; an optimum exists
    ├── Methods: dimensional analysis → rigid-gate pressure experiments → LES (GCI-verified) → spectral load model
    ├── Validation: measured pressure spectra · CFD vs experiment · no-sill baseline vs classical data
    └── Papers: J1 experiments · J2 mechanism and scaling · J3 design trade-off
```

---

## ZINA

| Item | Baseline |
|---|---|
| **Title (EN)** | *Operating-State-Dependent Transmissibility-Based Operational Modal Analysis of Flow-Excited Hydraulic Gates* |
| **Title (FA)** | آنالیز مودال عملیاتی مبتنی بر توابع انتقال‌پذیری وابسته به وضعیت بهره‌برداری برای دریچه‌های هیدرولیکی تحت تحریک جریان |
| **Research gap** | Tarinejad's transmissibility-based OMA (T07, T08, T11, S01) identifies poles where transmissibilities from different loading conditions coincide. It assumes the structure is the same in every condition; T11 relaxes only the loading requirement. T10 states explicitly that OMA rests on white-noise, stationary-input assumptions. In hydraulic gates, changing the operating state (head, submergence, opening) changes both the excitation (coloured turbulence, narrow-band vortex shedding) and the system (hydrodynamic added mass and damping). No parameter-varying transmissibility OMA for hydraulic structures was found in the checkpoint search. |
| **Main hypothesis** | Standard transmissibility OMA and SSI-COV, applied across operating states, give biased frequencies and spurious poles at flow-excitation peaks. Modelling the poles as smooth functions λᵣ(θ) of a measured hydraulic state θ should (i) recover frequencies within about 2% and damping within about 20% of EMA ground truth across the operating range, and (ii) separate structural poles (which shift with added mass) from excitation peaks (which shift with flow velocity, by Strouhal scaling). |
| **Core scientific question** | How can output-only identification separate genuine structural poles from operating-state-induced pole shifts and flow-excitation peaks in water-interacting structures? |
| **Core methodology** | (1) **Theory:** extend the weighted/Hermitian transmissibility pole indicator to parameter-varying systems; derive pole-coincidence conditions; build frozen-θ and global polynomial-in-θ estimators. (2) **Numerical:** FE model of a vertical-lift gate with submergence-dependent added mass, driven by **synthetic** broadband plus narrow-band loads taken from classical literature; Monte Carlo trials over noise and record length. (3) **Laboratory:** one elastic gate specimen with 6–8 accelerometers; still-water EMA at each level, then operational runs at about 4–6 states. (4) **Generality:** public multi-event strong-motion records of an instrumented dam (e.g. Pacoima, as in T03 and T10), with θ = reservoir level. |
| **Validation** | Exact FE poles; EMA ground truth on the same specimen at each θ; published modal estimates for the dam. Benchmarked against standard transmissibility OMA, a P-WHTOMA-type method (T11) and SSI-COV (T10). Validation is entirely independent of Jamal's results. |
| **Expected scientific contribution** | The first transmissibility-based OMA that handles operating-state-dependent water interaction explicitly. It provides a validated identification protocol for flow-excited gates and extends Tarinejad's method line from seismic dam records to hydraulic structures. |
| **Papers** | **Z1:** formulation and numerical benchmark (MSSP or JSV). **Z2:** laboratory validation on a flow-excited gate (J. Fluids Struct. or SCHM). **Z3:** application to dam records with reservoir-level dependence (EESD or JVC). |
| **Indicative timeline** | Y1: review (M2), theory, FE benchmark, Z1 drafted. Y2: test-bed campaign (short), Z2. Y3: dam application, Z3, thesis. |
| **Fallback** | If laboratory access fails, Z2 becomes a numerical robustness study plus an optional field EMA/OMA test on an accessible regulator gate. Z1 and Z3 are unaffected. |

---

## JAMAL

| Item | Baseline |
|---|---|
| **Title (EN)** | *Fluctuating Hydrodynamic Loads on Sluice Gates with Bottom Sills: Spectral Characterisation and the Discharge-Efficiency versus Dynamic-Load Trade-off* |
| **Title (FA)** | بارهای هیدرودینامیکی نوسانی بر دریچه‌های کشویی دارای آستانه: مشخصه‌یابی طیفی و موازنه میان راندمان آبگذری و بار دینامیکی |
| **Research gap** | The Tarinejad group showed that sills raise gate discharge coefficients by about 10–21% (T17), and the group studies Cd, energy loss and mean flow (S06, T18; T19 in 2D). The dynamic cost of these gains has not been quantified: fluctuating pressures and forces on the gate lip, skin plate and sill, their spectra and Strouhal scaling, as functions of sill geometry, opening and submergence. The wider literature covers vortices, shear-layer oscillation and the effect of sills on **mean** pressure, but has no systematic spectral load model for sill-equipped gates (checkpoint search 2). **Fallback framing:** the group's labyrinth sliding gates with sills (T17), for which no dynamic-load data were found. |
| **Main hypothesis** | (i) The dominant fluctuating-load frequency follows a Strouhal law. Its length scale is the contracted jet thickness (C_c·a), switching to the sill-crest–lip gap when the sill moves the separation point. (ii) The rms fluctuating force coefficient C′_F rises with relative sill height s/a beyond a threshold, most strongly under submerged flow. (iii) A sill-configuration range therefore exists that keeps most of the Cd gain without raising C′_F above the no-sill reference. |
| **Core scientific question** | How do bottom-sill geometry and submergence change the magnitude, frequency content and governing mechanism of fluctuating hydrodynamic loads on an underflow gate? Where is the optimum between discharge efficiency and dynamic load? |
| **Core methodology** | (1) Dimensional analysis and a reduced test matrix: about 3 sill heights × 2 lengths × 2 positions; openings; free versus submerged flow. (2) Flume experiments on a **rigid** gate with 6–8 flush-mounted pressure transducers (≥200 Hz), plus discharge and depth measurements. (3) LES or DES with VOF, using whichever solver the group already licenses, or OpenFOAM. Run at selected states, with RANS screening beforehand. The mesh is verified with the Richardson/GCI procedure of T19. (4) A dimensionless spectral load model (C′_p, C′_F, St, PSD shape) with a physically structured regression, not black-box ML. A design chart for the efficiency/load trade-off, and a prototype-scale interpretation with a discussion of scale effects. |
| **Validation** | Measured pressure spectra are primary. CFD is checked against those measurements, and the no-sill baseline against classical underflow-gate data. Validation is entirely independent of Zina's results. |
| **Expected scientific contribution** | The first systematic spectral characterisation of fluctuating loads on sill-equipped gates and of the separation-switching mechanism. It links the group's hydraulic-efficiency results to dynamic safety, giving designers and operators of regulators a quantified trade-off. |
| **Papers** | **J1:** experimental fluctuating pressures and forces (J. Hydraulic Research or J. Hydraulic Eng.). **J2:** LES mechanism and Strouhal scaling (J. Fluids Struct. or Physics of Fluids). **J3:** efficiency versus dynamic-load design chart with a prototype-scale case (WRM or J. Irrig. Drain. Eng.). |
| **Indicative timeline** | Y1: review (M2), dimensional analysis, rig design, RANS screening. Y2: experimental campaign, J1, LES validation. Y3: mechanism and model, J2, J3, thesis. |
| **Role of background** | His practical experience with gated regulators gives realistic operating envelopes, sill configurations and the prototype interpretation in J3. His construction-management training is **not** part of the scientific contribution. |

---

## COMMON PROGRAMME

### Legitimate shared resources

| Resource | How shared |
|---|---|
| Hydraulic flume and discharge measurement | Shared booking; runs may be simultaneous |
| Gate–sill geometry family and CAD | Same dimensions; **separate specimens** (elastic for Zina, rigid for Jamal) |
| DAQ system | Shared hardware, separate channels and files |
| Run register (head, opening, submergence, discharge) | Used as **labels** by both; measured jointly |
| Literature on gate flow-induced vibration (background chapter) | Each student writes their own review |

### Strict scope separation and dependency matrix

| Element | Shared | Zina only | Jamal only | Optional collaboration |
|---|---|---|---|---|
| Flume, geometry, DAQ, run register | ✔ | | | |
| Elastic specimen, accelerometers, EMA | | ✔ | | |
| Rigid specimen, pressure transducers | | | ✔ | |
| Modal identification theory and algorithms | | ✔ | | |
| FE gate model with added mass; synthetic loads | | ✔ | | |
| CFD/LES, flow mechanisms, spectral load model | | | ✔ | |
| Public dam records (Z3) | | ✔ | | |
| Prototype-scale regulator interpretation (J3) | | | ✔ | |
| Resonance-risk map (Jamal's load spectra + Zina's θ-dependent frequencies) | | | | ✔ one joint paper, only after each student has two papers submitted |

**Rules:**

- Zina never analyses pressures or flow fields, and uses synthetic loads.
- Jamal never identifies modal parameters, and uses a rigid gate.
- Each owns their own measured data.
- The optional joint paper is not counted as core work in either thesis.

### Parallel execution logic

| Scenario | Outcome |
|---|---|
| Jamal delayed by one year | Zina's Year 1 is theory and FE. Her lab runs need only flume flow and her own specimen, and Z3 uses public records. **Zina finishes.** |
| Zina delayed by one year | Jamal's experiments, LES and load model need nothing from Zina. **Jamal finishes.** |
| One student withdraws | The other continues unchanged. Flume time is reallocated. |
| No flume available | Zina continues (numerical plus public records, optionally a field regulator test). The programme switches to Pair C (see M6). |

### Why this pair is stronger than two unrelated theses

1. **One object, two physics.** The excitation and the structural identification of the same gate family are studied by the appropriate specialists. Each thesis is then interpretable in terms of the other: load spectra give context for identified frequencies, and vice versa. Neither is required to graduate.
2. **It bridges the supervisor's two active lines.** Transmissibility OMA (T07–T11, S01) and gate/weir hydraulics (T17–T19) are not yet connected in his published record.
3. **Expensive assets are shared, not science.** One flume, one geometry family, one DAQ and one run register cut setup and calibration effort for both students. Novelty, data and papers stay separate.
4. **A legitimate joint output exists.** The resonance-risk map is possible without making either dissertation dependent on it.

### Cost and complexity (rough order of magnitude, excluding existing lab equipment)

| Item | Estimate |
|---|---|
| Two specimens and sill inserts | about US$0.5–1.5k |
| Pressure transducers (6–8) | about US$3–8k (or borrowed) |
| Accelerometers and impact hammer | about US$3–6k (or borrowed) |
| DAQ (shared) | about US$2–5k |
| Computation | Workstation or cluster time for selected LES runs |

Complexity sits in the science (Jamal's LES and mechanism; Zina's theory), not in equipment.

### Checks required before registration (from file 04)

| ID | Check |
|---|---|
| **M1** | Jamal's contribution is stated at mechanism and model level |
| **M2** | Structured confirmation review for G1 and G2 (about 4–6 Consensus queries after 1 November 2026) |
| **M3** | Supervisor confirms that no current student holds G1 or G2 |
| **M4** | Experimental scope capped |
| **M5** | Written scope-separation agreement |
| **M6** | Flume and transducer availability confirmed |

### Case studies, software and RASID

| Topic | Position |
|---|---|
| **Iraqi assets** | Optional and supportive only. An accessible gated regulator with a raised sill can supply prototype geometry and operating envelopes for J3, and an optional field EMA/OMA demonstration for Zina's fallback. Neither thesis's novelty or graduation depends on them. MOD / Al-Khamisiyah are relevant only if they have suitable gate–sill configurations and data access. |
| **Software** | Follows the question. Zina: MATLAB or Python for her own estimators, plus any FE package with fluid added-mass capability. Jamal: an LES-capable VOF solver the lab already has, or OpenFOAM. Software comparison is not part of either contribution. |
| **RASID** | Optional, for data organisation, run registers and reproducibility only. Not a source of novelty. |

### Backup

**Pair B** (see file 04): Zina takes G3, uncertainty-quantified and automated transmissibility OMA from short seismic dam records; Jamal keeps G2 unchanged. It becomes active if M3 shows that G1 is held by a current student.
