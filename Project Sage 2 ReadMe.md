# Project SAGE

Project SAGE is Michael V. Hopkins II's interactive executive portfolio: a browser-based operating record focused on enterprise operations, logistics, governance, continuity, compliance, and leadership in high-consequence environments.

**Release:** v2.0 production candidate  
**Primary audience:** executive recruiters, hiring managers, and leadership teams  
**Format:** static HTML, CSS, and JavaScript

## What v2.0 includes

- A cinematic executive cover with direct email, phone, and LinkedIn access.
- The Operating Record: 15 years, 13 operational zones, 100+ concurrent workstreams, four prime transitions, $65M+ in asset stewardship, and a zero-failure control record.
- A 15-year tenure transition event that hands visual energy into the career journey.
- An interactive Mission 01–05 leadership journey, including the unresolved Mission 05 future-state callback.
- **From Execution to Enterprise**, an interactive four-stage operating archive covering One Stop Environmental, Technica, The Logistics Company, and Chenega Base & Logistics Services.
- **TOP — Tactical Operations Picture**, an interactive stakeholder and enterprise-relationship map with filters, route tracing, chronological briefing behavior, and stakeholder intelligence dossiers.
- **How I Think**, a decision-architecture section centered on anticipation, interface governance, preparation, trust, and continuity.
- **Why It Matters**, translating the operating model into business outcomes.
- **Mission 05 // Forward**, the closing call to action and executive identity block.

## Technical stack

Project SAGE intentionally uses a lightweight static stack:

- HTML5
- CSS3
- Vanilla JavaScript
- D3.js and TopoJSON for the U.S. stakeholder map
- Google Fonts: Inter and IBM Plex Mono

No build system or framework is required.

## Project structure

```text
project-sage/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    └── michael-hopkins-headshot.png
```

## Run locally

Because TOP loads map data from remote modules, serve the project through a local web server rather than relying on a `file://` URL.

From the project directory:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

VS Code Live Server works as well.

## GitHub Pages deployment

Project SAGE is designed to deploy as a static GitHub Pages site.

1. Create a GitHub repository for the production files.
2. Upload the contents of this directory to the repository root.
3. In the repository settings, open **Pages**.
4. Configure Pages to deploy from the production branch/root.
5. Verify the published URL on desktop and mobile.
6. Optionally attach a custom domain after the GitHub Pages version is stable.

## Production notes

- Keep `index.html`, `style.css`, `script.js`, and the `assets` directory together.
- The headshot path is relative: `assets/michael-hopkins-headshot.png`.
- TOP loads D3, TopoJSON, and U.S. map data from public CDNs. The rest of the portfolio remains readable if the geographic layer cannot load.
- Email, phone, and LinkedIn links are intentionally actionable.
- The source is public when deployed from a public GitHub repository. Do not place private records, credentials, API keys, internal documents, or sensitive personal data in this repository.
- Maintain a separate development/master copy before publishing production changes.


## Pre-publish audit

The v2.0 production pass completed the following technical cleanup:

- Removed obsolete duplicate JavaScript implementations that were being overridden by the v2.0 functions.
- Removed development-only console logging while retaining useful warnings and error reporting.
- Removed the unused Font Awesome dependency.
- Removed the missing `print.css` reference so GitHub Pages does not publish a local 404.
- Added IBM Plex Mono to the Google Fonts request because the production CSS uses it throughout the technical interface.
- Standardized the LinkedIn destination so the top and closing contact links point to the same profile.
- Verified that local production references resolve to `style.css`, `script.js`, and `assets/michael-hopkins-headshot.png`.
- Preserved the current TOP intelligence registry and interactive map logic.
- Preserved the current operating-record counter choreography.
- Added basic tab semantics to the interactive Operating Archive.
- Added `.nojekyll` for a straightforward static GitHub Pages deployment.

### Manual checks before making the repository public

- Verify the Mission 04 employment-date language. The current HTML still contains `2026 – Present`; publish only if that is factually current.
- Confirm every public metric, contract reference, company relationship, and stakeholder description is wording you are comfortable placing on a public website.
- Confirm the public phone number and email address are intentionally exposed.
- Test TOP on the actual GitHub Pages URL because its geographic layer depends on remote D3, TopoJSON, and U.S. atlas resources.
- Test at least one desktop and one phone-sized browser before sharing the URL with recruiters.


## v2.1 candidates

The next release should be refinement rather than a redesign.

- Cross-browser QA: Chrome, Edge, Firefox, Safari.
- Full responsive QA across laptop, tablet, and phone widths.
- Accessibility pass for keyboard flow, focus visibility, motion preferences, landmarks, and screen-reader labels.
- Performance pass for CSS size, unused legacy selectors, animation cost, and remote dependency loading.
- Metadata polish for social sharing and a future custom domain.
- Optional favicon and social-preview image.
- Optional privacy-conscious analytics, only if there is a clear recruiting use case.
- Dedicated static PDF companion for application systems that accept uploads but not portfolio URLs.
- Custom domain after the GitHub Pages release is verified.
- Consider moving the TOP stakeholder intelligence registry into a separate data file if the project continues to grow.

## Release discipline

v2.0 should be treated as a frozen baseline once the production deployment passes QA. New experiments should be developed separately and promoted only after verification.

Project SAGE is intended to demonstrate the operating model it describes: clear architecture, controlled change, continuity, and decision-ready visibility.

---

© 2026 Michael V. Hopkins II. Portfolio content and presentation are reserved.
