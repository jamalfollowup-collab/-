# RESEARCH CHECKPOINT — Paired PhD Programme under Prof. Reza Tarinejad

**Date:** 5 October 2026
**Phase completed:** evidence collection, research map and preliminary gaps.
**Phase NOT started:** paired-thesis design, decision matrix, supervisor attack, proposals, Word documents. These wait for review of this checkpoint.

---

## 1. Verified identity

**Prof. Reza Tarinejad** (رضا تاری‌نژاد), Faculty of Civil Engineering, **University of Tabriz**, Iran.

- **Rank:** Full Professor since 2021, according to search snippets.
- **ORCID:** 0000-0002-7211-4846. **Google Scholar:** `l7kLxCgAAAAJ`. Both were found in search results; neither record could be opened.
- **PhD:** Tarbiat Modares University (reported). Early co-authors are M.T. Ahmadi and N. Khaji.
- **Listed expertise:** earthquake engineering, hydraulic structures, physical modelling, SHM, operational modal analysis.

**Identity confidence: high.** The Consensus author records, the stable co-author network (2007–2026), the publisher listings and the expertise keywords all agree.

**Homonyms excluded:**

- Alireza Tarinejad (separate Scholar profile);
- an unrelated biology author;
- several collaborator papers on which Tarinejad is not an author.

## 2. Publications collected

| Measure | Count |
|---|---|
| Harvest queries (Consensus + web) | 271 |
| Raw records | 108 |
| **Deduplicated records screened** | **53** (32 high, 16 medium, 5 low confidence) |
| Records with an exact Consensus URL / with a DOI | 28 / 26 |
| Rejected candidates | 61 |
| **Core verified publications used for the research map** | **20** (T01–T20) |
| Supporting records | 6 (S01–S06) |

## 3. Main research clusters

1. **C1: Output-only system identification, OMA and SHM of dams** (≈19 records, 2014–2026). Strongest and most active. Covers FDD-wavelet, balanced/automated SSI, and weighted / multi-reference Hermitian / PSD transmissibility methods. Includes full-scale arch-dam testing (Shahid Rajaee, Karun IV, Pacoima).
2. **C2: Seismic wave scattering, topographic site effects and non-uniform input for dams** (≈16 records, 2007–2023). Strong historically (3D BEM, coherence and time-delay functions), but tapering: no records after 2023.
3. **C4: Hydraulic structures and water engineering** (≈9 records, 2019–2026). Emerging and active. Covers gate and weir Cd from experiments, soft computing and CFD; bottom-outlet CFD; spillway cavitation; embankments. The focus is time-averaged performance.
4. **C5: Fluid–structure interaction and extreme loading** (≈5 records). Dam–reservoir SEM, tanks, blast and underwater explosion.
5. **C3 and C6: Underground structures and miscellaneous.** Peripheral.

**Key structural observation:** the two active lines, C1 (identification and dynamics) and C4 (hydraulic control structures), are **not yet connected** in the verified record.

## 4. Strongest preliminary gaps

| Gap | Short description | Preliminary strength |
|---|---|---|
| **G1** | OMA (transmissibility-based) for water-interacting structures whose modal properties change with the hydraulic operating state (added mass, coloured or narrow-band flow excitation) | Strong |
| **G2** | Unsteady hydrodynamic loading of sill-equipped gates: fluctuating-load spectra and the trade-off between discharge efficiency and dynamic load | Moderate–strong (needs narrow framing) |
| **G3** | Uncertainty quantification and automation for transmissibility-based seismic OMA | Moderate (possible overlap with the supervisor's current students) |
| **G4** | Unsteady 3D flow and dynamic loading in dam bottom outlets beyond 2D steady CFD | Moderate (risk of being a model upgrade only) |
| **G5** | Physics-based discharge partition for porous (gabion) weirs | Moderate–weak (probably partly closed) |
| **G6** | Spatially varying seismic input at canyon dam sites coupled with the reservoir | Weak (downgraded after check) |

Details are in `02_Preliminary_Research_Gaps.md`.

## 5. Gaps checked against newer literature

| Gap | Checked? | Result |
|---|---|---|
| G1 | Yes (1 targeted web search) | **Appears open.** Gate flow-induced vibration and added mass are well studied, but no transmissibility-based or operating-state-parameterised OMA for hydraulic gates or structures appeared |
| G2 | Yes (1 targeted web search) | **Partly open.** LES and experimental studies of gate vortices, shear-layer oscillation, and the effect of sills on *mean* pressure exist. What remains plausibly open is systematic fluctuating-load spectra across sill parameters plus the efficiency-versus-load trade-off. Fallback: the group's own labyrinth sliding gates with sills |
| G6 | Yes (1 targeted web search) | **Largely closed.** Valley topography with dam–reservoir–foundation interaction (SDEE 2024), the Soria arch dam BEM model with DSSI and FSI (2022), and Morrow Point canyon and reservoir studies |
| G3, G4, G5 | **No** | Not verified against recent literature |

## 6. Unresolved uncertainties

1. **Registry verification incomplete.** The ORCID works list, the Google Scholar profile and the University of Tabriz faculty page (including supervised-thesis titles) could not be opened, because the proxy blocked them. Some metadata (DOIs for T03, T09, T10, T20; S01's author list) come from search summaries.
2. **Openness checks are thin.** Each of G1, G2 and G6 rests on a single targeted search, read at snippet level. G3–G5 are unchecked. Domain-knowledge statements in `02` (for G5 and the eliminated candidates) are marked as not verified this session.
3. **Overlap with the supervisor's current students is unknown.** G3, and possibly G1, touch his active work with F. Amanzad, A. Hafezi and M. Pourgholi. G2 touches H. Abbaszadeh's gate/weir work.
4. **Facilities are unknown.** It is not confirmed which hydraulic flume, pressure transducers, accelerometers or CFD licences are available to the group (the gate and weir experiments may have used University of Tabriz or University of Maragheh facilities).
5. **Year and venue conventions.** Online-first and print years differ for several papers. A few venues are Iranian journals whose pages could not be opened.
6. **Iraqi case-study assets** have not yet been evaluated. By design, this belongs to a later phase.

## 7. Evidence and source files

| File | Content |
|---|---|
| `01_Tarinejad_Research_Map.md` | Identity, verified core publications, clusters, trajectory, co-authors, limitations |
| `02_Preliminary_Research_Gaps.md` | Six preliminary gaps, openness-check results and all search links |
| `data/harvest_raw.json` | Complete outputs of the six harvest sweeps (records, rejected candidates, disambiguation notes, 271 queries) |
| `data/harvest_dedup.json` | 53 deduplicated records with findings and stated limitations |
| `data/tarinejad_core_publications.json` | 20 core and 6 supporting records used in the map |
| `data/workflow_harvest_journal.jsonl` | Raw workflow journal (audit trail of agent outputs) |
| `tools/docgen.js` | Word-document generator (built earlier; **not used** in this phase) |

The four Consensus records verified directly in the main session (T01, T03, T04 and the 2015 IOMAC paper) are included in the files above, with exact Consensus URLs.

## 8. Next phase (after review)

1. **Optional verification**, once tools allow (Consensus quota resets 1 November 2026; ORCID/Crossref need network access):
   - open the ORCID works list and the Scholar profile;
   - check one newer-literature query each for G3, G4 and G5;
   - add one confirmation query for G1 (for example, transmissibility OMA with time-varying or parameter-varying systems).
2. **Confirm practical constraints** with the supervisor or group:
   - flume and instrumentation availability;
   - topics already held by current students (Amanzad, Hafezi, Pourgholi, Abbaszadeh, Vaseti).
3. **Design three paired-PhD architectures** from the surviving gaps, with:
   - independence and dependency tests in both directions;
   - overlap and synergy analysis;
   - shared-asset definition.
4. **Decision matrix → recommended and backup pair → supervisor attack** on the recommended pair.
5. **Baseline for each candidate** (title, gap, hypothesis, methodology, validation, contribution). Then evaluate Iraqi case-study assets, which can improve feasibility only and do not define novelty.
6. **Only then:** full proposals and Word documents, using `tools/docgen.js`.

**Constraint reminder for the next phase:** Consensus searches are unavailable until 1 November 2026, and the web-search budget for this session is exhausted.
