# 04 — Decision Matrix, Selection and Supervisor Attack

**Inputs:** the three paired architectures in `03_Three_Paired_PhD_Architectures.md`:

- **A:** Zina G1 (gates) + Jamal G2
- **B:** Zina G3 + Jamal G2
- **C:** Zina G3 + Jamal G1

No new literature was consulted.

---

## 1. Weighted decision matrix

Each pair is scored from 1 (poor) to 5 (excellent) on each criterion. Weighted total = Σ(weight × score) / 5, which gives a result out of 100.

| # | Criterion | Weight | A | B | C | Scoring note |
|---|---|---|---|---|---|---|
| 1 | Alignment with Tarinejad's verified work | 10 | 5 | 4.5 | 5 | A bridges C1 and C4; C sits wholly in C1 |
| 2 | Strength of evidence that the gaps are open | 9 | 4 | 3.5 | 3.5 | G1 checked open; G2 partly open; G3 unchecked |
| 3 | Novelty of Zina's thesis | 8 | 5 | 3 | 3 | G1 is a new formulation; G3 is valuable but more incremental |
| 4 | Novelty of Jamal's thesis | 8 | 3.5 | 3.5 | 5 | G2 must be framed narrowly; G1 is strong |
| 5 | Scientific complementarity | 7 | 5 | 2 | 4 | A: excitation vs structure of the same object |
| 6 | Independence (no scientific dependency) | 8 | 4.5 | 5 | 3 | C shares its method family |
| 7 | Parallel executability | 7 | 4.5 | 5 | 4 | A shares flume scheduling only |
| 8 | Low overlap | 6 | 4 | 5 | 2 | C is at the edge of excessive |
| 9 | Low cost | 6 | 3.5 | 4 | 4.5 | |
| 10 | Low field dependence | 4 | 5 | 5 | 5 | No pair needs fieldwork to graduate |
| 11 | Low laboratory dependence | 4 | 2.5 | 3.5 | 4 | A needs a flume for both students |
| 12 | Validation feasibility | 8 | 4.5 | 3.5 | 4 | A has measured ground truth (EMA, pressures) |
| 13 | Publication potential | 6 | 4.5 | 4 | 4.5 | |
| 14 | Realistic completion in about 3 years | 6 | 4 | 4.5 | 3.5 | |
| 15 | Likely supervisor acceptance | 3 | 4.5 | 3.5 | 3.5 | |
| | **Weighted total (/100)** | **100** | **86.4** | **79.0** | **78.2** | |

### Ranking

1. **Pair A: 86.4**
2. **Pair B: 79.0**
3. **Pair C: 78.2**

### Sensitivity

- **A versus B.** A leads by 17.5 weighted points (on the Σ weight × score scale). Complementarity alone contributes 21 of those points.
  - B would only overtake A if the weight on laboratory dependence rose from 4 to about 21, which would mean "flume access is effectively impossible".
  - B would also overtake A if complementarity were almost entirely ignored.
- **C.** C stays third under any reasonable weighting, because its overlap and independence scores are structural weaknesses rather than matters of emphasis.

---

## 2. Selection

### Recommended: **Pair A — Flow-Excited Underflow Gates: Loading and Identification**

- **Zina:** *Operating-State-Dependent Transmissibility-Based OMA of Flow-Excited Hydraulic Gates* (G1)
- **Jamal:** *Fluctuating Hydrodynamic Loads on Sluice Gates with Bottom Sills* (G2)

### Backup: **Pair B — Dual-Pillar**

- **Zina:** *Uncertainty-Quantified and Automated Transmissibility-Based Modal Identification of Concrete Dams from Short Seismic Records* (G3)
- **Jamal:** G2, unchanged.

### Backup rationale and limitation

B is second by score. It is the cleanest pair in independence and overlap, and it protects against failures on **Zina's side** of A:

- G1 turns out to be pre-empted;
- G1 overlaps with a current student's topic;
- the elastic-gate test-bed proves infeasible.

B does **not** protect against failures on **Jamal's side**, because it reuses G2. For that case, the contingency is **inside A**: G2 switches to its built-in fallback framing, labyrinth sliding gates with sills (T17), for which no dynamic-load data were found. A full switch to Pair C would only be justified if no flume is available at all.

C is not designated as backup because its overlap and independence weaknesses violate the core design principle.

---

## 3. Supervisor attack on Pair A

The questions below are posed as a skeptical Prof. Tarinejad would put them. Each is followed by a defence and a verdict.

| # | Attack | Defence | Verdict |
|---|---|---|---|
| 1 | **Why two PhDs? Isn't this one "gate dynamics" thesis split in half?** | The two theses answer different questions with different physics, methods and validation. Jamal asks what loads the flow applies (separation, shear layers, Strouhal scaling; experiments and LES). Zina asks how to identify the structure's dynamics when operating state changes it (system-identification theory; FE and EMA). Neither produces the other's results. Together they cover roughly two doctoral workloads, not one. | Survives |
| 2 | **What exactly is Zina's unique contribution?** | A parameter-varying transmissibility formulation in which poles are functions λᵣ(θ) of a measured hydraulic state. The contribution is the method, its theory and its validation. The gate is the test-bed, not the contribution. | Survives |
| 3 | **What exactly is Jamal's unique contribution?** | A dimensionless spectral load model for sill-equipped gates, the separation-switching mechanism, and the efficiency-versus-dynamic-load trade-off. None of these exist in the group's Cd work (T17, S06, T18). | Survives, if framed narrowly (see M1) |
| 4 | **Where do their scopes overlap?** | Same flume, same geometry family, same DAQ, shared run register. Separate specimens (elastic vs rigid), separate sensors, separate data ownership, no shared analysis. Overlap is about 10–20% of resources and 0% of novelty. | Survives |
| 5 | **Why can't one student do everything?** | Doing both would mean mastering LES and experimental turbulence **and** system-identification theory, plus two separate experimental campaigns. That is about six papers' worth of work, which a single student cannot complete within three years. | Survives |
| 6 | **Is either topic only MSc level?** | Zina's is not: it requires a new estimator, theoretical conditions and multi-level validation. Jamal's **would be** MSc level if it stopped at measuring pressures for a few sills. It reaches PhD level only through the mechanism (separation switching), Strouhal scaling and the validated spectral model. This must be written into the proposal. | **Conditional** (M1) |
| 7 | **Which of my papers support each direction?** | Zina: T07, T08, T11, S01 (transmissibility); T10 (white-noise limitation); T04 (ambient vs seismic mode sets); T03 and T10 (Pacoima). Jamal: T17 (sills raise Cd by about 10–21%), S06, T18 (gate/weir hydraulics), T19 (GCI verification method; 2D limitation). | Survives |
| 8 | **Are the gaps really still open?** | G1: no transmissibility or parameter-varying OMA of hydraulic gates appeared in the targeted check, but it was one check at snippet level. G2: the general physics is studied, so only the narrow spectral/trade-off question is claimed. Both need a structured confirmation review (Consensus becomes available again on 1 November 2026) before registration. | **Conditional** (M2) |
| 9 | **Isn't G1 what Amanzad is already doing?** | Amanzad's verified work (T11, S01) improves pole estimation for time-invariant systems under seismic or correlated inputs. G1 targets **parameter-varying** systems under **hydraulic** operation. They are adjacent but distinct. The supervisor must confirm that no current student holds this topic. | **Conditional** (M3) |
| 10 | **What physical phenomena are involved?** | Zina: added mass and added damping varying with submergence; coloured turbulent excitation; narrow-band vortex-shedding forcing; time-variant identification. Jamal: separation at the gate lip and sill crest; shear-layer instability and vortex shedding; jet contraction; recirculation in the submerged jump; wall-pressure fluctuations. | Survives |
| 11 | **How is each thesis validated independently?** | Zina: exact FE poles, EMA in still water at each level, published dam identifications. Jamal: measured pressure spectra, CFD checked against them, no-sill baseline checked against classical data. Neither uses the other's results for validation. | Survives |
| 12 | **Can both proceed in parallel? What if one student stops?** | Yes. Zina's first year is theory and FE; Jamal's first year is test design and LES setup. If either stops, the other's thesis is unaffected. Shared flume time is reallocated, and the specimens belong to their respective theses. | Survives |
| 13 | **Are we creating unnecessary experimental work?** | Partly a fair concern. Mitigations: Zina's lab work is limited to one small elastic specimen and is short (EMA plus operational runs at about 4–6 states); her third paper uses public records. Jamal's campaign uses one gate and one sill set (about 3 heights × 2 lengths × 2 positions), not a full factorial. | **Conditional** (M4) |
| 14 | **Is a lab-scale elastic gate meaningful? It isn't a scaled prototype.** | For Zina it is a test-bed for the method, not a similitude model, so hydroelastic scaling is not required. Ground truth comes from EMA on the same specimen. Prototype relevance comes through the dam application (Z3). | Survives |
| 15 | **Can the same dataset legitimately support both?** | Only the run register (head, opening, submergence, discharge) is shared, as labels. Accelerations belong to Zina and pressures to Jamal. Simultaneous runs are allowed, but each thesis owns its own measured quantities. | Survives |
| 16 | **How will publications and authorship be separated?** | Three first-author papers each, each on its own data and novelty. One optional joint paper (a resonance-risk map that combines Jamal's load spectra with Zina's θ-dependent frequencies), only **after** each student has two papers submitted, and counted in neither thesis's core. | Survives (M5) |
| 17 | **What is the simplest implementation?** | Zina: MATLAB/Python implementation of the estimators; one FE model of a gate plate with added-mass elements; one elastic specimen; public dam records. Jamal: one rigid gate with 6–8 pressure taps; one CFD solver the lab already licenses or OpenFOAM; LES only at key states, with RANS screening. | Survives |
| 18 | **What happens if no flume or transducers are available?** | Zina loses only the lab paper. She replaces it with an FE plus public-dam-record validation, and if necessary a field EMA/OMA campaign on an accessible regulator gate. Jamal's thesis would not survive without measurements, so the team would move to Pair C. This risk must be cleared before registration. | **Conditional** (M6) |
| 19 | **Is Jamal's construction-management background relevant?** | Not to the science, and it must not turn the thesis into project management. His relevant asset is practical familiarity with gated regulators: realistic operating envelopes, sill configurations and prototype interpretation (paper J3). | Survives |

### Verdict

**Pair A survives with six mandatory modifications.** There is no fatal attack. Five of the conditional verdicts depend on information that only the supervisor or the facility can provide, and a targeted confirmation review.

| ID | Mandatory modification |
|---|---|
| **M1** | Jamal's proposal must state the mechanism-level hypothesis (separation switching and Strouhal scaling) and the spectral load model as the doctoral contribution. A parametric pressure dataset alone is insufficient. |
| **M2** | Before registration, run a structured confirmation review of about 4–6 Consensus queries (after 1 November 2026) for G1 and G2. G2 switches to the labyrinth-gate framing if the plain-sluice version is found closed. |
| **M3** | The supervisor must confirm that no current student (Amanzad, Hafezi, Pourgholi, Abbaszadeh, Vaseti) holds G1 or G2. |
| **M4** | Experimental scope is capped: one elastic and one rigid specimen; a reduced sill matrix; LES only at selected states. |
| **M5** | A written scope-separation agreement covering data ownership, specimens and an optional single joint paper. |
| **M6** | Flume and transducer availability confirmed before registration. If unavailable: Zina proceeds unchanged (numerical plus public records); the team moves to Pair C rather than Pair B, because B also needs a flume for G2. In Pair C, Jamal's G1 is then validated with FE poles plus an EMA/OMA campaign on an accessible regulator gate instead of a flume specimen. |

The backup (Pair B) is not needed at this stage. It becomes the active option if M3 shows that G1 is held by a current student.
