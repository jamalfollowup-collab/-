# 03 — Gap Selection and Three Paired PhD Architectures

**Basis:** `01_Tarinejad_Research_Map.md`, `02_Preliminary_Research_Gaps.md`, `RESEARCH_CHECKPOINT.md` and `data/`. No new literature searches were run for this file. Tarinejad publications are cited by their identifiers in file 01 (T01–T20, S01–S06).

---

## Part 1 — Critical evaluation of the six preliminary gaps

### 1.1 Screening criteria

A gap is eliminated if any of the following holds:

- it is **weak** (already largely solved);
- it is **too broad** to finish in about three years;
- it is **too expensive**;
- it **depends heavily on laboratory or field work** without a numerical fallback;
- it is **essentially a software or model upgrade**;
- it has **weak alignment** with Tarinejad's verified record.

### 1.2 Evaluation

| Gap | Strength of evidence | Main weakness | Lab/field dependence | Upgrade-only risk | Alignment | Decision |
|---|---|---|---|---|---|---|
| **G1** OMA for structures whose modal properties change with hydraulic operating state | Checked: appears open. Builds on T07, T08, T11, S01 (transmissibility line) and T10 (explicit white-noise/stationarity limitation) | One snippet-level check only; may touch the supervisor's ongoing transmissibility work (Amanzad) | Low–moderate: numerical core; small lab test-bed or public dam records for validation | None (new formulation) | **Very high**: extends his most active method line into his newest application area | **KEEP** |
| **G2** Fluctuating hydrodynamic loads on sill-equipped gates; efficiency vs dynamic-load trade-off | Checked: partly open. Builds on T17 (sills raise Cd by about 10–21%), S06, T18, T19 | General gate-flow physics is well studied, so the topic must stay narrow (spectral loads across sill parameters). Built-in fallback: labyrinth sliding gates (T17), for which no dynamic-load data were found | **Moderate**: needs a flume campaign with pressure transducers | Low, provided the deliverable is a mechanism-based load model, not just a parametric dataset | High: directly extends his group's gate/weir programme (Abbaszadeh, Daneshfaraz) and T19's verification method | **KEEP** (with narrow framing) |
| **G3** Uncertainty quantification and automation for transmissibility-based seismic OMA | Explicitly stated limitations (T09, T10, T07, T08, S01); not checked against newer literature | Possible overlap with his current students; somewhat incremental on its own | **None**: numerical plus public strong-motion records | None | **Very high** | **KEEP** (conditional on supervisor confirming no current-student overlap) |
| **G4** Unsteady 3D flow and dynamic loading in dam bottom outlets | Not checked; based on T19 (2D) and T16 (k-ε) | Without a dynamic-load framing it is a CFD upgrade; with that framing it duplicates G2's question in a costlier geometry (high-head, 3D two-phase LES) | Moderate–high: needs validation data that are not available | **High** | Moderate | **ELIMINATE** |
| **G5** Physics-based discharge partition for gabion weirs | Not checked; domain knowledge suggests the porous-weir hydraulics literature already covers much of it | Probably partly closed; weak link to Tarinejad's dynamics core | Moderate (laboratory) | Moderate | Moderate | **ELIMINATE** |
| **G6** Canyon spatially varying input coupled with the reservoir | Checked: largely closed (SDEE 2024; Soria arch dam BEM with DSSI and FSI, 2022; Morrow Point studies) | Only a narrow residual remains | None | Low | High historically, but the line is tapering | **ELIMINATE** |

### 1.3 The three selected gaps

| Code | Selected gap | Short name |
|---|---|---|
| **G1** | Operating-state-dependent (parameter-varying) transmissibility-based OMA for water-interacting hydraulic structures | *Identification under changing hydraulic state* |
| **G2** | Fluctuating hydrodynamic loads on sill-equipped underflow gates and the efficiency-versus-dynamic-load trade-off | *Dynamic cost of hydraulic efficiency* |
| **G3** | Uncertainty quantification and automated pole selection for transmissibility-based OMA from short seismic records | *Confidence in seismic identification* |

**The scientific distinction between G1 and G3** matters for Pair C:

- **G3** assumes the structure is **time-invariant**. It asks how uncertain the estimates are when records are short and non-stationary. Its subject is **random estimation error**.
- **G1** asks what happens when the structure itself **changes** with a measured hydraulic state variable. Its subject is **systematic model error**, together with a new parameter-varying formulation.

---

## Part 2 — The three paired architectures

| Pair | Zina | Jamal | One-line logic |
|---|---|---|---|
| **A** | G1, applied to flow-excited gates | G2 | Same structure family (underflow gates), two different physics: Zina identifies the structure under flow, Jamal characterises the flow loading on it |
| **B** | G3 (seismic records of dams) | G2 | Two separate pillars of Tarinejad's current work; maximal independence, minimal synergy |
| **C** | G3 (seismic records of dams) | G1 (gates / hydraulic operation) | Both in Tarinejad's transmissibility-OMA line, split by error type (random vs systematic) and structure (dam body vs gate) |

Gap-to-person assignment in Pairs A and B follows scientific fit first:

- G2 is assigned to Jamal because his practical experience with gated water infrastructure helps directly: realistic operating envelopes, typical sill and gate configurations, and prototype context.
- The methodology-heavy gaps (G1, G3) go to Zina, who is further ahead academically and can begin the theoretical work immediately.

In Pair C, the hydraulic-structure application (G1) goes to Jamal for the same reason. **Background affects the assignment only; it did not determine the gaps.**

---

### PAIR A — Flow-Excited Underflow Gates: Loading and Identification

#### ZINA (G1)

- **Title:** *Operating-State-Dependent Transmissibility-Based Operational Modal Analysis of Flow-Excited Hydraulic Gates*
- **Research gap:** Tarinejad's transmissibility methods (T07, T08, T11, S01) identify poles where transmissibilities from different loading conditions coincide. They assume the structure does not change between conditions; T11 relaxes only the *loading* requirement. For hydraulic gates, changing the operating state (upstream head, submergence, opening) changes the excitation **and** the hydrodynamic added mass and damping at the same time. Flow excitation is also coloured and often contains narrow-band vortex-shedding components (the white-noise issue explicit in T10). No operating-state-parameterised transmissibility OMA for hydraulic structures was found (checkpoint search 1).
- **Main hypothesis:** Applied across operating states, standard transmissibility OMA (and SSI-COV) gives biased natural frequencies and spurious poles at flow-excitation peaks. Treating the poles as smooth functions λᵣ(θ) of a measured hydraulic state variable θ (for example the submergence ratio) gives a parameter-varying formulation. That formulation is expected to:
  - recover frequencies within about 2% and damping within about 20% of input–output (EMA) ground truth across the operating range;
  - separate structural poles, which shift with added mass (θ), from excitation peaks, which shift with flow velocity (Strouhal scaling).
- **Core scientific question:** How can output-only modal identification separate genuine structural poles from operating-state-induced pole shifts and flow-excitation peaks in a water-interacting structure?
- **Methodology:**
  1. **Theory.** Generalise the weighted/Hermitian transmissibility pole indicator (T07, T11) to parameter-varying systems. Derive the conditions under which transmissibility differences vanish at θ-dependent poles. Compare frozen-θ (local) and polynomial-in-θ (global) estimators.
  2. **Numerical benchmark.** FE model of a vertical-lift gate (plate with stiffeners) with submergence-dependent added mass (acoustic/potential-flow fluid elements or a Westergaard-type approximation). It is driven by **synthetic** loads: broadband turbulence plus narrow-band components with Strouhal scaling taken from the classical literature. Monte Carlo trials with noise and short records.
  3. **Laboratory test-bed.** A small elastic gate specimen in a flume with 6–8 accelerometers:
     - impact-hammer EMA in still water at each water level (ground truth);
     - operational tests under flow at several heads and openings;
     - benchmark against standard transmissibility OMA, the P-WHTOMA-type method (T11) and SSI-COV (T10).
  4. **Generality (no new fieldwork).** Apply the method to public strong-motion records from an instrumented dam with different reservoir levels across events. The Pacoima records already used in T03 and T10 are a candidate; here θ is the reservoir level.
- **Validation strategy:**
  - exact FE poles (numerical);
  - EMA ground truth at each θ (laboratory);
  - published modal estimates of the dam (field data). Pacoima estimates exist in T03, T10 and other literature.
- **Expected contribution:** The first transmissibility-based OMA formulation that handles operating-state-dependent water interaction explicitly. It comes with a validated protocol for identifying hydraulic gates under flow, and it carries Tarinejad's method line from seismic dams into hydraulic structures.
- **Indicative papers:**
  - Z1: formulation and numerical benchmark (MSSP or JSV).
  - Z2: laboratory validation on a flow-excited gate (J. Fluids Struct. or SCHM).
  - Z3: dam application with reservoir-level-dependent records (EESD or JVC).

#### JAMAL (G2)

- **Title:** *Fluctuating Hydrodynamic Loads on Sluice Gates with Bottom Sills: Spectral Characterisation and the Discharge-Efficiency versus Dynamic-Load Trade-off*
- **Research gap:** The Tarinejad group has shown that sills raise gate discharge coefficients by about 10–21% (T17), and the group works on Cd, energy loss and mean flow (S06, T18; T19 in 2D). The **dynamic cost** of these gains has not been quantified: fluctuating pressures on the gate lip, skin plate and sill, fluctuating horizontal and downpull forces, and their spectra and Strouhal scaling as functions of sill geometry, opening and submergence. The wider literature covers gate-flow vortices, shear-layer oscillation and the effect of sills on **mean** pressure (checkpoint search 2). It does not provide a systematic spectral load model for sill-equipped gates.
- **Main hypothesis:**
  1. The dominant fluctuating-load frequency follows a Strouhal law. Its length scale is the contracted jet thickness (C_c·a) at the vena-contracta velocity, and switches to the sill-crest–lip gap when the sill moves the separation point.
  2. The rms fluctuating force coefficient C′_F grows with relative sill height s/a beyond a threshold where separation moves to the sill crest. The growth is strongest under submerged flow.
  3. There is therefore a sill-configuration range that keeps most of the Cd gain without raising C′_F above the no-sill reference.
- **Core scientific question:** How do bottom-sill geometry and flow submergence change the magnitude, frequency content and governing mechanism of fluctuating hydrodynamic loads on an underflow gate? Where is the optimum between discharge efficiency and dynamic load?
- **Methodology:**
  1. **Dimensional analysis and test matrix:** sill height, length and position; opening; free versus submerged flow; Froude number.
  2. **Flume experiments:** a **rigid** gate with flush-mounted pressure transducers (≥200 Hz) on the lip, skin plate and sill, plus discharge and depth measurements; a two-component load cell optional.
  3. **LES or DES with VOF**, using whichever solver the group already has (OpenFOAM or FLOW-3D). The mesh is verified with the Richardson/GCI procedure of T19, and the simulations are validated against measured pressure spectra. They are used to explain separation and shear-layer mechanisms.
  4. **Dimensionless spectral load model** (C′_p, C′_F, St, PSD shape) fitted with a physically structured regression, not black-box ML. A design chart for the efficiency/load trade-off. Prototype-scale interpretation with a discussion of scale effects.
- **Validation strategy:**
  - measured pressure spectra are the primary validation;
  - CFD is checked against those measurements;
  - the no-sill baseline is checked against classical underflow-gate data (Naudascher-school literature).
- **Expected contribution:** The first systematic spectral characterisation of fluctuating loads on sill-equipped gates, including the separation-switching mechanism. It also gives a design trade-off between the hydraulic efficiency the group has already demonstrated and dynamic safety.
- **Indicative papers:**
  - J1: experimental fluctuating pressures and forces (J. Hydraulic Research or J. Hydraulic Eng.).
  - J2: LES mechanism and Strouhal scaling (J. Fluids Struct. or Physics of Fluids).
  - J3: efficiency versus dynamic-load design chart with a prototype-scale case (WRM or J. Irrig. Drain. Eng.).

#### PAIR A — programme analysis

- **Shared scientific programme:** *Dynamics of flow-excited underflow gates*. One thesis characterises the **excitation** acting on the structure (Jamal); the other identifies the **structure** while it is being excited (Zina).
- **Legitimate shared resources:**
  - one flume and its discharge measurement;
  - one gate–sill geometry family (same dimensions, separate specimens);
  - one DAQ system;
  - a shared test-state register (head, opening, submergence, discharge recorded per run);
  - shared CAD geometry;
  - shared booking of flume time.
- **Strict scope separation:**

  | Zina only | Jamal only |
  |---|---|
  | Elastic gate specimen; accelerometers; EMA | Rigid gate specimen; pressure transducers |
  | Modal identification theory and algorithms | CFD/LES and flow mechanisms |
  | FE structural model with added mass; synthetic loads | Dimensionless load model and design chart |
  | Public dam records (paper Z3) | Prototype-scale interpretation (paper J3) |

  Zina **never** analyses pressure or flow fields and **does not need** Jamal's load spectra: she uses synthetic loads from classical literature. Jamal **never** identifies modal parameters and uses a rigid gate, so he needs no structural information.
- **Parallel execution test:**
  - *If Jamal is delayed by one year,* Zina continues. Year 1 is theory and FE, needing no lab. Her lab tests need only flume flow and her own specimen. Paper Z3 uses public records. **She can still finish.**
  - *If Zina is delayed by one year,* Jamal's rigid-gate measurements, LES and load model need nothing from her. **He can still finish.**
- **Overlap risk:**

  | Dimension | Shared share | Comment |
  |---|---|---|
  | Literature | about 15% | Gate flow-induced vibration background only |
  | Data | about 10% | Test-state labels (head, opening) only |
  | Experiments | about 20% of flume days | Same flume, different specimens and sensors |
  | Models | about 5% | Geometry only |
  | Outputs | 0–1 optional joint paper | |
  | Novelty | 0% | |

  **Overall: low/acceptable.**
- **Cost and complexity:** moderate. Rough order of magnitude, excluding existing lab equipment: two gate specimens with sill inserts (US$0.5–1.5k), 6–8 pressure transducers (US$3–8k, or borrowed), accelerometers and impact hammer (US$3–6k, or borrowed from structural dynamics testing), a shared DAQ (US$2–5k), and workstation or cluster time for LES. The complexity is in Jamal's LES and Zina's theory, not in equipment.
- **Strongest reason Tarinejad may accept:** It connects his two active lines, transmissibility OMA (T07–T11, S01) and gate/weir hydraulics (T17–T19), which are not connected in his published record. Both theses produce output in journals he already publishes in.
- **Strongest reason he may reject:** Lab dependence (flume time, sensors), plus the risk that G2 is narrower than it looks or that G1 touches work his current students (Amanzad) already have under way.

---

### PAIR B — Dual-Pillar: Seismic Identification Confidence + Gate Loading

#### ZINA (G3)

- **Title:** *Uncertainty-Quantified and Automated Transmissibility-Based Modal Identification of Concrete Dams from Short Seismic Records*
- **Research gap:**
  - Transmissibility OMA methods (T07, T08, T11, S01) give point estimates with no variance or confidence bounds.
  - T09 states that uncertainty is "still a challenge" because results depend on user parameters.
  - T10 automates SSI, but no comparable automation exists for transmissibility methods.
  - Short, non-stationary seismic records cause leakage and closely spaced modes (T07, T11, S01).
- **Main hypothesis:** A variance model of the weighted transmissibility pole indicator, built either by first-order perturbation or by block bootstrap, is combined with clustering-based automated pole selection. The resulting 95% confidence intervals are expected to:
  - cover the true poles at close to nominal rate (≥90%) on benchmarks with known poles, across record lengths and noise levels;
  - give statistically consistent estimates across several earthquakes recorded at the same dam.
- **Core scientific question:** How much can one trust modal parameters identified by transmissibility methods from a short earthquake record? Can that confidence be quantified and the pole selection automated?
- **Methodology:**
  1. Derive the variance of the pole indicator (perturbation) and calibrate it against a block bootstrap.
  2. Automated pole selection and stabilisation, using clustering adapted from T10.
  3. Monte Carlo coverage studies on MDOF and FE dam benchmarks (record length, signal-to-noise ratio, mode spacing).
  4. Application to public multi-event dam strong-motion records (e.g. Pacoima, as used in T03 and T10). Karun records if the supervisor can supply them.
- **Validation strategy:** coverage tests against known poles (numerical); consistency across events and with published identifications (field records).
- **Expected contribution:** Confidence bounds and automation for Tarinejad's transmissibility family. This makes seismic modal estimates usable for model updating and safety assessment.
- **Indicative papers:** Z1 variance model (MSSP); Z2 automation and coverage benchmark (JSV or JVC); Z3 multi-event dam application (EESD or SCHM).

#### JAMAL (G2)

Same thesis as in Pair A: *Fluctuating Hydrodynamic Loads on Sluice Gates with Bottom Sills*.

#### PAIR B — programme analysis

- **Shared scientific programme:** weak. Two pillars of the same supervisor's programme (dynamics identification; hydraulic structures) with no common object.
- **Legitimate shared resources:** supervisor seminars, a signal-processing toolbox for spectral analysis, a shared writing and review schedule. No shared experiments, data or models.
- **Strict scope separation:** complete by construction (dam seismic records versus flume gate hydraulics).
- **Parallel execution test:** passes trivially in both directions.
- **Overlap risk:** about 5% (spectral-analysis basics). **Low.**
- **Cost and complexity:** low for Zina (fully numerical plus public data); moderate for Jamal (flume).
- **Strongest reason Tarinejad may accept:** Zina's thesis sits squarely in his most cited line and needs no lab. Both theses are clean and examinable.
- **Strongest reason he may reject:** Zina's gap may overlap with his current students (Amanzad, Hafezi/Pourgholi). The pair also has almost no synergy, so it amounts to two unrelated theses rather than a programme.

---

### PAIR C — Transmissibility OMA, Split by Error Type and Structure

#### ZINA (G3)

Same thesis as in Pair B: *Uncertainty-Quantified and Automated Transmissibility-Based Modal Identification of Concrete Dams from Short Seismic Records*. Scope: time-invariant structures, random estimation error, seismic input, dam bodies.

#### JAMAL (G1)

- **Title:** *Operating-State-Dependent Transmissibility-Based Operational Modal Analysis of Gated Hydraulic Structures*
- **Gap, hypothesis, question, methodology, validation:** as in Pair A's G1 thesis, with two scope restrictions:
  - **no dam application**, which is reserved to Zina in this pair;
  - more weight on gate and regulator operation scenarios, matching Jamal's background.

  Validation uses FE poles plus a laboratory EMA ground truth. An optional field demonstration on an accessible regulator gate is not required for graduation.
- **Expected contribution:** Parameter-varying OMA for gated hydraulic structures.

#### PAIR C — programme analysis

- **Shared scientific programme:** *Reliable output-only identification of water-retaining and flow-control structures*. Zina addresses estimation uncertainty in time-invariant systems; Jamal addresses systematic error in parameter-varying systems.
- **Legitimate shared resources:** a common transmissibility OMA code base (the T07/T11 formulation re-implemented once); common benchmark conventions; journal-club literature.
- **Strict scope separation:**
  - Zina: seismic records, dams, variance and automation, time-invariant systems.
  - Jamal: hydraulic operation, gates, parameter-varying formulation, laboratory test-bed.
  - Neither may use the other's structure class or error type.
- **Parallel execution test:** passes. Each thesis is self-contained once the shared base code exists, and each student can write a base implementation independently.
- **Overlap risk:**

  | Dimension | Shared share | Comment |
  |---|---|---|
  | Literature | about 50% | |
  | Code base | about 30% | |
  | Models | about 10% | |
  | Novelty | about 10% | Both extend the same pole indicator |

  **Overall: high, at the edge of acceptable.** An examiner could argue that "robust transmissibility OMA" is one thesis.
- **Cost and complexity:** low (no flume pressure campaign; one small lab test-bed for Jamal).
- **Strongest reason Tarinejad may accept:** Both theses are in his strongest, most cited and most current line, with minimal lab cost.
- **Strongest reason he may reject:** The two theses are too close to each other, and possibly to his existing students' topics. The pair also does not draw on Jamal's hydraulic-infrastructure strengths for a hydraulic-loading question.

---

## Part 3 — Constraint compliance summary

| Requirement | Pair A | Pair B | Pair C |
|---|---|---|---|
| Two genuinely independent PhD-level gaps | Yes | Yes | Yes, but close (high overlap) |
| Clear scientific complementarity | **Strong** (excitation vs structure) | Weak | Moderate |
| Can proceed in parallel | Yes | Yes | Yes |
| No graduation dependency | Yes | Yes | Yes |
| Low/moderate cost | Moderate | Low–moderate | Low |
| Limited lab/field dependence | Moderate (flume for both) | Low for Zina, moderate for Jamal | Low |
| Alignment with Tarinejad | Very high (bridges C1 and C4) | High | Very high (C1 only) |
| 2–3 papers per thesis | Yes (3 + 3) | Yes (3 + 3) | Yes (3 + 2–3) |

Ranking and selection are in `04_Decision_and_Supervisor_Attack.md`.
