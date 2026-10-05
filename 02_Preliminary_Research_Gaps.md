# 02 — Preliminary Research Gaps

**Status:** checkpoint, 5 October 2026. This file lists the strongest **six** gaps supported by the evidence already collected (`01_Tarinejad_Research_Map.md`, T/S identifiers). No new searches were run for it.

It does **not** propose PhD topics, pairings or assignments. That is for the next phase.

**Gap classification:**

- **A** = explicitly stated in Tarinejad papers;
- **B** = strongly implied by them;
- **C** = independently inferred.

**Openness check** means a targeted search of newer literature in this session (3 searches in total, listed in §4). Gaps marked "not checked" have **not** been verified against recent literature.

---

## 1. Summary

| Rank | Gap | Tarinejad basis | Class | Checked against newer literature? | Preliminary openness | Preliminary strength |
|---|---|---|---|---|---|---|
| G1 | OMA for water-interacting structures whose modal properties change with the hydraulic operating state (transmissibility-based) | T07, T08, T11, S01, T10, T04 | B (+C) | **Yes** (search 1) | **Appears open** | **Strong** |
| G2 | Unsteady hydrodynamic loading of sill-equipped gates: fluctuating-load spectra and the trade-off between discharge efficiency and dynamic load | T17, S06, T18, T19 | C (+B) | **Yes** (search 2) | **Partly open; must be framed narrowly** | Moderate–strong |
| G3 | Identification under short, non-stationary seismic records: uncertainty quantification and automation of transmissibility-based OMA | T07–T11, S01 | A | No | Unknown; likely active in his own group | Moderate |
| G4 | Unsteady 3D flow and dynamic loading in dam bottom outlets beyond 2D steady CFD | T19, T16 | B | No | Unknown | Moderate (risk: model-upgrade only) |
| G5 | Physics-based discharge partition (through-flow vs overflow) for porous gabion weirs | T18 | C | No | Probably partly closed (see notes) | Moderate–weak |
| G6 | Spatially varying seismic input at canyon dam sites coupled with the reservoir | T12–T15 | B | **Yes** (search 3) | **Largely closed** | Weak (downgraded) |

---

## 2. Gap details

### G1 — Operating-state-dependent OMA of water-interacting structures

**Tarinejad basis.** His transmissibility line runs from T07 (EESD 2021) and T08 (STC 2022) to T11 (JSV 2025) and S01 (2026). It uses the fact that transmissibility functions measured under **different loading conditions** coincide at the system poles. T11 already relaxes the *loading* requirement: it handles similar loading conditions and correlated inputs. T10 (JVC 2025) states explicitly that OMA rests on white-noise, stationary-input assumptions that add uncertainty. T04 shows that ambient and seismic responses of the same dam give different identifiable mode sets.

**What is solved.**

- Robust pole indicators under short seismic records (T07, T08, S01).
- Multiple and correlated inputs (T11).
- Automation and uncertainty filtering for SSI (T09, T10).

**What remains unresolved.** For gates, outlet structures, piers and dams, a change in the hydraulic operating state (head, submergence, gate opening, reservoir level) changes two things at once:

- the **excitation**, which is coloured turbulence, sometimes with narrow-band vortex-shedding components that scale with flow velocity;
- the **system itself**, through hydrodynamic added mass and added damping.

Every transmissibility formulation assumes a time-invariant system across loading conditions. When that assumption fails, poles become biased and spurious poles appear at flow-excitation peaks. None of the verified Tarinejad papers formulates identification with the hydraulic operating state as an explicit parameter.

**Classification.** **B** for the stationarity and loading assumptions (stated in T10 and implicit in T07/T11). **C** for the added-mass dependency, which is inferred from the method's assumptions.

**Openness check (search 1).** The results cover several things:

- flow-induced vibration of gates (numerical flow-induced-vibration (FIV) studies; a 1:5-scale Olmsted model; multiple-mode vibration under submerged discharge; sluice-gate horizontal and vertical vibration);
- added-mass effects;
- radial-gate modal analysis with added-mass and coupled fluid–structure methods;
- OMA of fuel rods in axial flow.

No transmissibility-based or operating-state-parameterised OMA of hydraulic gates or structures appeared.

**Verdict:** appears open. The search was single and targeted, so this needs confirmation in the next phase.

**Significance.** Without this, condition monitoring of flow-excited hydraulic components cannot tell structural change from operating-state change. It also extends Tarinejad's most active method line into his newest application area.

**Doctoral depth.** High: a theoretical formulation, numerical benchmarks and experimental validation.

**Simplest credible methodology.**

1. Parameter-dependent transmissibility pole indicator.
2. FE benchmark with submergence-dependent added mass and synthetic coloured loads.
3. Laboratory gate specimen with input–output modal testing (EMA) as ground truth.

**Validation.** EMA ground truth at each water level; exact FE poles; optionally, published dam records.

**Difficulty:** medium–high. **Cost:** low–moderate (accelerometers, impact hammer, flume time). **Publication potential:** high (MSSP, JSV, SCHM and JVC are the venues Tarinejad already uses).

---

### G2 — Unsteady hydrodynamic loading of sill-equipped gates

**Tarinejad basis.**

- T17 (Water Resources 2025): adding a sill to labyrinth sliding gates raises Cd by about 9.9–20.8%, depending on sill width.
- S06 (combined weirs) and T18 (gabion weirs): Cd and energy loss from experiments, soft computing and CFD.
- T19 (bottom outlet): 2D CFD of time-averaged quantities (Cd, wall pressure).
- A Persian-language sluice-gate sill paper was also found, at low confidence.

**What is solved.** Mean discharge capacity (Cd) of gates with sills; mean flow features.

**What remains unresolved.** The **dynamic cost** of these efficiency gains has not been quantified:

- fluctuating pressures on the gate lip, skin plate and sill;
- fluctuating horizontal and vertical (downpull) forces;
- their spectra and Strouhal scaling;
- how all of these depend on sill height, length and position, gate opening, and free versus submerged flow.

Designers have no dimensionless spectral load model for sill-equipped gates. As a result, Cd optimisation could raise vibration and fatigue risk without anyone noticing.

**Classification.** **C** (inferred from the scope of the group's papers), with a **B** element: T19's 2D steady model cannot capture these loads.

**Openness check (search 2).** The newer literature already includes:

- LES plus experiments on the vortex dynamics of submerged gates;
- upstream vortices of sluice gates;
- vortex identification;
- vortex suppression downstream of a submerged gate;
- shear-layer oscillation below submerged gates;
- the effect of sills on **mean** pressures and jump characteristics;
- a reported dominant vortex-shedding frequency in one configuration.

**Verdict:** partly open. The general flow physics of gate flow is **not** a gap. What remains plausibly open is the **systematic spectral load characterisation across sill parameters**, together with the efficiency-versus-dynamic-load trade-off.

A fallback framing that is very likely open: the same question for the group's own **labyrinth sliding gates with sills** (T17), for which no dynamic-load data were found.

**Significance.** It is directly relevant to the safety and operation of regulators. It connects the group's efficiency research to dynamic safety.

**Doctoral depth.** Moderate–high, if the work produces a mechanism-based load model rather than a parametric data set.

**Simplest credible methodology.** A rigid gate with flush-mounted pressure transducers in a flume, run over a parametric sill/opening/submergence matrix. Add LES/DES validated against measured spectra, with mesh verification following T19's GCI procedure. Then a dimensionless spectral load model.

**Validation.** Measured pressure spectra; a no-sill baseline compared against classical underflow-gate data.

**Difficulty:** medium. **Cost:** moderate (pressure transducers, flume time, compute). **Publication potential:** moderate–high (J. Hydraulic Research/Eng., J. Fluids & Structures, WRM).

---

### G3 — Uncertainty quantification and automation for transmissibility-based seismic OMA

**Tarinejad basis.**

- T09: Hankel-parameter uncertainty is "still a challenge".
- T10: automation, plus the white-noise assumption.
- T07, T08, T11, S01: short-record leakage and closely spaced modes.

**Unresolved.** Transmissibility methods (T07–T11, S01) yield point estimates. There is no variance or confidence quantification and no automated pole selection comparable to what T10 provides for SSI.

**Classification.** **A**: the issues are stated explicitly.

**Openness check.** Not checked.

**Caveat.** This is the direct continuation of the supervisor's current work with Amanzad and Hafezi/Pourgholi. It may already be in progress inside his group, which would create an overlap risk with existing students.

**Doctoral depth:** moderate–high. **Cost:** very low (numerical plus public or available records). **Publication potential:** high.

---

### G4 — Unsteady 3D flow and dynamic loading in dam bottom outlets

**Tarinejad basis.** T19 (2D CFD of a bottom outlet with mesh zoning; outputs Cd, wall pressure and flow-field parameters) and T16 (spillway cavitation with standard k-ε, without explicit aeration).

**Unresolved.** The 2D steady treatment leaves out several effects:

- 3D gate-slot flow;
- air demand and entrainment downstream of the gate;
- unsteady pressure loading on the outlet gate and conduit.

**Classification:** B. **Openness check:** not checked.

**Caveat.** Air demand and aeration in outlets are long-studied topics. Unless the work is framed around **dynamic loading**, which would overlap conceptually with G2, the gap risks being a "better CFD model" upgrade, and that is not doctoral novelty.

**Difficulty:** medium–high (3D two-phase LES). **Cost:** low–moderate (compute; validation data are the bottleneck).

---

### G5 — Physics-based discharge partition for porous (gabion) weirs

**Tarinejad basis.** T18 (WRM 2026), an experimental and CFD study of gabion weirs with an internal-structure and material-property comparison; S06 and T17 (soft-computing Cd).

**Unresolved.** Cd for gabion weirs is predicted empirically or with black-box models. A transferable physical model is lacking: one that splits through-flow (Darcy–Forchheimer) from overflow and is calibrated on internal structure and porosity.

**Classification:** C. **Openness check:** not checked.

**Caveat (domain knowledge, not verified this session).** Earlier hydraulics literature on permeable and rubble-mound weirs and on gabion stepped weirs already addresses through-flow/overflow interaction (for example Michioku et al., 2005, *J. Hydraulic Eng.*; Mohamed, 2010, *J. Irrig. Drain. Eng.*; Wüthrich & Chanson, 2014, and Zhang & Chanson, 2016, *J. Hydraulic Eng.*). Novelty is therefore probably limited. It is also weakly linked to Tarinejad's dynamics core.

**Cost:** moderate (laboratory).

---

### G6 — Spatially varying seismic input at canyon dam sites coupled with the reservoir

**Tarinejad basis.**

- T12–T15: BEM time-delay and coherence functions for V-shaped canyons; linear elastic media; vertical or limited incidence.
- T12: non-uniform excitation of an arch dam with linear substructuring.

**Unresolved (as originally framed).** Topography-specific coherency and time-delay functions that include reservoir–canyon coupling and oblique incidence.

**Classification:** B.

**Openness check (search 3).** Recent and earlier work already covers this area:

- realistic valley topography in dam–reservoir–foundation systems using the direct finite element method (*Soil Dyn. Earthq. Eng.*, 2024);
- a BEM model of the Soria arch dam with dynamic soil–structure and fluid–structure interaction, validated against ambient tests (*Eng. Anal. Bound. Elem.*, 2022);
- spatial variation plus canyon and reservoir geometry for Morrow Point Dam;
- random-vibration analysis of dam–water–foundation systems (2025).

**Verdict:** largely closed. Only a narrow residual remains (closed-form canyon-specific coherency with the reservoir). Downgraded.

---

## 3. Eliminated before ranking

| Candidate | Reason for elimination |
|---|---|
| Long-term environmental/operational variability (temperature, water level) compensation in dam SHM | Mature field with long-term arch-dam monitoring programmes (domain knowledge); needs multi-year continuous monitoring data that are not available |
| Re-applying existing Cd soft-computing models to new gate or weir types or new sites | Case-study change only; not doctoral novelty |
| Spillway cavitation or aeration with a newer turbulence model or software | Software/model upgrade only |
| Underground-structure scattering (C3) | Peripheral to the supervisor's current direction and to hydraulic structures |

---

## 4. Openness-check searches run in this session

Exactly three targeted web searches were run after the harvest. These are the result links they returned; they have not been read in full.

**Search 1 (G1):** "transmissibility-based operational modal analysis hydraulic gate flow-induced vibration added mass varying water level"

- [Numerical simulation of flow-induced vibration on gates (IAHR)](https://static.iahr.org/34/478.pdf)
- [Flow-induced structural response of a 1:5-scale Olmsted … (DTIC)](https://apps.dtic.mil/sti/tr/pdf/ADA344604.pdf)
- [Operational modal analysis of flow-induced vibration of nuclear fuel rods in a turbulent axial flow](https://www.researchgate.net/publication/270048330_Operational_modal_analysis_of_flow-induced_vibration_of_nuclear_fuel_rods_in_a_turbulent_axial_flow)
- [Numerical analysis of flow-induced vibration of deep-hole plane steel gate in partial opening operation](https://doi.org/10.3390/su142013616)
- [Free-surface flow simulations for discharge-based operation of hydraulic structure gates](https://arxiv.org/pdf/1211.4464)
- [Insights into the vibration characteristics of spatial radial gate affected by fluid–structure interaction](https://doi.org/10.3390/jmse12101804)
- [Flow-induced multiple-mode vibrations of gates with submerged discharge](https://www.sciencedirect.com/science/article/abs/pii/S0889974699902748)
- [Flow-induced horizontal and vertical vibration of sluice gates](https://www.researchgate.net/publication/312289041_Flow-induced_horizontal_and_vertical_vibration_of_sluice_gates)

**Search 2 (G2):** "sluice gate with bottom sill pressure fluctuations vortex shedding hydrodynamic force spectra experimental LES"

- [Experimental and numerical modeling of a sluice gate flow](https://www.researchgate.net/publication/245328304_Experimental_and_numerical_modeling_of_a_sluice_gate_flow)
- [Measured and simulated flow downstream of the submerged sluice gate](https://www.researchgate.net/publication/274513023_Measured_and_simulated_flow_downstream_of_the_submerged_sluice_gate)
- [Hysteretic behavior of the flow under a vertical sluice gate](https://www.researchgate.net/publication/252871561_Hysteretic_behavior_of_the_flow_under_a_vertical_sluice_gate)
- [Investigation of water flow passing underneath a sluice gate by experimental and numerical methods](https://www.researchgate.net/publication/361912440_Investigation_of_water_flow_passing_underneath_a_sluice_gate_by_experimental_and_numerical_methods)
- [A design for vortex suppression downstream of a submerged gate](https://pdfs.semanticscholar.org/4b9f/1b6c9e523a1db9a55a8fc6afbe47b5ddb2aa.pdf)
- [Vortex analysis of water flow through gates by different vortex identification methods](https://link.springer.com/article/10.1007/s42241-023-0006-2)
- [Upstream vortices of a sluice gate: an experimental and numerical study](https://iwaponline.com/aqua/article/72/10/1906/97635/Upstream-vortices-of-a-sluice-gate-An-experimental)
- [Fluid-dynamic feed-back in shear layer oscillation below a submerged sluice gate](https://www.tandfonline.com/doi/abs/10.1080/00221689909498535)

**Search 3 (G6):** "arch dam canyon topography spatially varying ground motion coherency reservoir water interaction scattering boundary element 2022 2023 2024"

- [Effect of valley topography on dynamic response of arch dams (SDEE 2024)](https://www.sciencedirect.com/science/article/abs/pii/S0267726124004883)
- [Boundary element model for the dynamic response of the Soria arch dam and experimental validation from ambient vibration tests](https://www.sciencedirect.com/science/article/pii/S0955799722002569)
- [Effects of space distribution of excitation on seismic response of arch dams](https://ascelibrary.org/doi/10.1061/(ASCE)0733-9399(2002)128:7(759))
- [Seismic analysis of 3D dam–water–foundation model under random seismic ground motion](https://link.springer.com/article/10.1007/s42417-025-01987-3)
- [Nonlinear seismic analysis of arch dams](https://ascelibrary.org/doi/10.1061/(ASCE)0733-9399(1989)115:4(768))
