# PMG United — Page Wireframes

Companion to [`PRD.md`](./PRD.md). Captures the section-by-section structure for every public route so an engineer can build a page from this document alone.

Every page renders the same three global chrome elements (not re-drawn per page):

- **SiteHeader** — transparent over hero, solid after 8px scroll, hides on scroll-down, shows on scroll-up
- **PageHero** — full-viewport hero (`100vh`, capped at `900px`) as the first child of every route
- **SiteFooter** — deep brand-blue, white text, no internal borders

Wireframes below show only the **content sections between hero and footer**.

Section type vocabulary used throughout:

| Type | What it is |
|---|---|
| `hero` | Universal PageHero |
| `intro-split` | 5/7 column intro: eyebrow + H2 on left, narrative on right |
| `stats-band` | Deep-blue band with 3–4 large numbers + labels |
| `feature-grid` | N-column grid of image+title+body cards |
| `image-text` | Alternating image/text band, 50/50 or 6/6 |
| `numbered-list` | Numbered items (01, 02, …) with copy |
| `gallery` | Image grid, swipeable on mobile |
| `quote-band` | Large pull-quote with attribution |
| `filter-grid` | Filter UI + responsive result grid + pagination |
| `form-band` | Form (contact / application) with side rail |
| `related-strip` | Horizontal "related X" strip (3–4 cards) |
| `rich-text` | Long-form body copy (legal / policy) |
| `cta-band` | Closing band, blue background, action CTA |

---

## Home (`/`)

**Purpose:** Marketing front door. Establish authority, capability, proof.

Already implemented — reference the live route. Section order:

1. `hero` — heading, subhead, primary + secondary CTA
2. `intro-split` — "Who we are", customer-focused narrative
3. `stats-band` — 4 numbers (years, programs $, offices, projects)
4. `feature-grid` (4-up) — Services callout
5. `feature-grid` (2-up large) — Featured Projects
6. `feature-grid` (6-up square tiles) — Markets
7. `numbered-list` (4-up) — Values / how we work
8. `cta-band` — "Have a project that demands more…"

---

## About Us (`/about-us`)

**Purpose:** Tell PMG's story. Build trust before the conversation.

**Sections:**

1. `hero` — "About PMG" + subhead
2. `intro-split` — Our story (founder, 20+ years, mission)
3. `quote-band` — CEO message with headshot + name + title
4. `feature-grid` (4-up) — Core values (numbered 01–04)
5. `image-text` — Health & Safety commitment (image left, copy right)
6. `feature-grid` (3-up) — Leadership team (top tier: CEO, COO, CFO equivalents)
7. `feature-grid` (4-up or 5-up) — Broader team / personnel (smaller cards)
8. **LinkedIn module** — custom-styled feed of recent PMG company posts (3–6 latest)
9. `related-strip` — Recent projects (3-up)
10. `cta-band` — Two CTAs side-by-side: "Talk to us" + "See open roles"

**Wireframe (desktop):**

```
┌────────────────────────────────────────────────────────────────┐
│                          HERO (100vh)                          │
└────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────┐
│ Eyebrow                                                        │
│ H2 ──── Our story                                              │
│         Narrative body in 7-col on the right                   │
└────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────┐
│  "We don't just build projects, we build relationships."       │
│                                  — Vladimir Naranjo, CEO       │
│                                              [photo]           │
└────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────┐
│  01 Customer    02 Always       03 Safety       04 Built       │
│     focused        responsive      first           to last     │
│     body           body             body            body       │
└────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────┐
│                                  Safety, uncompromised.        │
│  [image full-bleed left half]    Narrative on right            │
│                                  Stats: incidents, awards      │
└────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────┐
│ Leadership                                                     │
│ ┌────────┐  ┌────────┐  ┌────────┐                             │
│ │ [img]  │  │ [img]  │  │ [img]  │                             │
│ │ Name   │  │ Name   │  │ Name   │                             │
│ │ Title  │  │ Title  │  │ Title  │                             │
│ │ + bio  │  │ + bio  │  │ + bio  │                             │
│ └────────┘  └────────┘  └────────┘                             │
└────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────┐
│ Our team                                                       │
│ ┌──┐ ┌──┐ ┌──┐ ┌──┐ ┌──┐  (rows of 5; click → modal w/ bio)    │
│ Name Name Name Name Name                                       │
└────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────┐
│ Latest from LinkedIn                          [view all →]     │
│ ┌────────┐  ┌────────┐  ┌────────┐                             │
│ │ [img]  │  │ [img]  │  │ [img]  │                             │
│ │ post   │  │ post   │  │ post   │                             │
│ │ text   │  │ text   │  │ text   │                             │
│ │ date   │  │ date   │  │ date   │                             │
│ └────────┘  └────────┘  └────────┘                             │
└────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────┐
│ Recent work                                  [all projects →]  │
│ ┌────────┐  ┌────────┐  ┌────────┐                             │
│ │ project│  │ project│  │ project│                             │
│ └────────┘  └────────┘  └────────┘                             │
└────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────┐
│ Start a conversation         OR         See open roles         │
│ (orange action button)                  (outline button)       │
└────────────────────────────────────────────────────────────────┘
```

**Responsive notes:** Leadership grid 3→2→1 columns. Team grid 5→3→2. LinkedIn 3→2→1.

---

## Services index (`/services`)

**Purpose:** Show the four service lines as equal-weight options. Get visitors into the relevant detail page in one click.

**Sections:**

1. `hero` — "Our services" + tagline
2. `intro-split` — How PMG approaches services (single team, end-to-end)
3. `feature-grid` (4-up, large cards) — The four services with image, name, summary, "Explore →" arrow
4. `image-text` — "Our approach" narrative (alternating bands or single image-left/copy-right)
5. `related-strip` — Featured projects across all services (3-up)
6. `cta-band` — "Tell us about your project"

**Wireframe (desktop):**

```
┌────────────────────────────────────────────────────────────────┐
│                          HERO                                  │
└────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────┐
│ Eyebrow / What we do                                           │
│ H2 ── single accountable team across the lifecycle             │
└────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────┐
│ ┌────────────────┐  ┌────────────────┐                         │
│ │ [image]    [→] │  │ [image]    [→] │                         │
│ │ Program /      │  │ Professional   │                         │
│ │ Project Mgmt   │  │ Services       │                         │
│ │ summary        │  │ summary        │                         │
│ └────────────────┘  └────────────────┘                         │
│ ┌────────────────┐  ┌────────────────┐                         │
│ │ [image]    [→] │  │ [image]    [→] │                         │
│ │ Construction   │  │ Disaster       │                         │
│ │ Services       │  │ Recovery       │                         │
│ │ summary        │  │ summary        │                         │
│ └────────────────┘  └────────────────┘                         │
└────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────┐
│ [image left]      Our approach                                 │
│                   Narrative — preconstruction → close-out      │
└────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────┐
│ Recent work across services            [all projects →]        │
└────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────┐
│                       CTA-BAND                                 │
└────────────────────────────────────────────────────────────────┘
```

---

## Service detail (`/services/[slug]`) — template

Same template renders for all 4: program-project-management, professional-services, construction-services, disaster-recovery.

**Sections:**

1. `hero` — Service name + tagline (CMS heading + subheading)
2. `intro-split` — Overview of the service (eyebrow: "What it is")
3. `numbered-list` (4–6 items) — "What's included" — capabilities or deliverables
4. `image-text` — "How we do it" — process/approach with image
5. `stats-band` — Service-specific stats (e.g., "120 programs managed" for PgM)
6. `feature-grid` (3-up) — Related markets (where this service is applied)
7. `related-strip` — Related projects (auto-filtered by `project.service[]`)
8. `cta-band` — "Bring us in on your next project"

**Wireframe (desktop):**

```
┌────────────────────────────────────────────────────────────────┐
│                          HERO                                  │
└────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────┐
│ Eyebrow ── What it is                                          │
│ H2 ── Overview                                                 │
│         body                                                   │
└────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────┐
│ 01  Capability one      02  Capability two                     │
│     body                    body                               │
│ 03  Capability three    04  Capability four                    │
│     body                    body                               │
└────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────┐
│                                   How we do it                 │
│  [image]                          Narrative                    │
└────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────┐
│   $X.XB     YYY        ZZZ        WWW                          │
│   value     count      avg        clients                      │
└────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────┐
│ Markets we apply this in                                       │
│ ┌────┐ ┌────┐ ┌────┐                                           │
└────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────┐
│ Selected projects                       [all projects →]       │
└────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────┐
│                       CTA-BAND                                 │
└────────────────────────────────────────────────────────────────┘
```

---

## Markets index (`/markets`)

**Purpose:** Show all sectors PMG serves. Push to a market-specific detail page in one click.

**Sections:**

1. `hero` — "Markets we serve"
2. `intro-split` — Why we specialize by market
3. `feature-grid` (3-up large cards) — All 6 markets with image, name, summary, arrow
4. `image-text` — "Our cross-market team" (engineers, PMs work across)
5. `related-strip` — Featured projects across markets
6. `cta-band`

**Wireframe (desktop):**

```
┌────────────────────────────────────────────────────────────────┐
│                          HERO                                  │
└────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────┐
│ Eyebrow / Markets we serve                                     │
│ H2 ── specialists across the sectors that define Texas         │
└────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────┐
│ ┌──────────┐  ┌──────────┐  ┌──────────┐                       │
│ │ [img][→] │  │ [img][→] │  │ [img][→] │                       │
│ │ Trans.   │  │ Aviation │  │ Education│                       │
│ │ summary  │  │ summary  │  │ summary  │                       │
│ └──────────┘  └──────────┘  └──────────┘                       │
│ ┌──────────┐  ┌──────────┐  ┌──────────┐                       │
│ │ [img][→] │  │ [img][→] │  │ [img][→] │                       │
│ │ H/Sci    │  │ Municipal│  │ Housing  │                       │
│ │ summary  │  │ summary  │  │ summary  │                       │
│ └──────────┘  └──────────┘  └──────────┘                       │
└────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────┐
│ One team, every sector.                                        │
│ [image]                                                        │
└────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────┐
│ Recent work                              [all projects →]      │
└────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────┐
│                       CTA-BAND                                 │
└────────────────────────────────────────────────────────────────┘
```

---

## Market detail (`/markets/[slug]`) — template

Same template for all 6 markets.

**Sections:**

1. `hero` — Market name + tagline
2. `intro-split` — Why this market matters, what's unique
3. `stats-band` — Market-specific stats ($ delivered in market, # projects)
4. `numbered-list` — Sub-segments (e.g., transit, roads, rail for Transportation)
5. `image-text` — Highlight project or capability
6. `related-strip` (4-up) — Recent projects in this market
7. `feature-grid` (3-up) — Services we apply to this market
8. `cta-band` — "Talk to our [market] lead"

**Wireframe (desktop):**

```
┌────────────────────────────────────────────────────────────────┐
│                          HERO                                  │
└────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────┐
│ Eyebrow ── Aviation                                            │
│ H2 ── building Texas airports for the next decade              │
│         narrative                                              │
└────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────┐
│   $XB        YY          ZZ            WW                      │
│   delivered  airports    terminals     hangars                 │
└────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────┐
│ 01 Terminals   02 Airside   03 Hangars   04 Cargo              │
└────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────┐
│                             Spotlight: IAH Terminal B          │
│  [image]                    body, link to project              │
└────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────┐
│ Projects in [market]                  [all in market →]        │
│ ┌────┐ ┌────┐ ┌────┐ ┌────┐                                    │
└────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────┐
│ Services we bring                                              │
│ ┌────┐ ┌────┐ ┌────┐                                           │
└────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────┐
│                       CTA-BAND                                 │
└────────────────────────────────────────────────────────────────┘
```

---

## Projects index (`/projects`)

**Purpose:** Let visitors find the proof they need quickly. Filter and search are first-class.

**Sections:**

1. `hero` — Shorter hero (~60vh override) — "Our projects"
2. `filter-grid` — Filter bar + project grid + pagination
3. `cta-band`

**Filter bar (desktop):** sticky just below hero. Contains:

- Free-text search input (left)
- Market multiselect dropdown
- Service multiselect dropdown
- Year select
- Location select
- "Clear filters" link (visible only when any filter active)
- Result count: "Showing 12 of 47 projects"

**Mobile filter:** "Filter (3)" button opens bottom-sheet drawer.

**Wireframe (desktop):**

```
┌────────────────────────────────────────────────────────────────┐
│                          HERO (60vh)                           │
└────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────┐
│ [search]   [Market ▾] [Service ▾] [Year ▾] [Loc ▾]   Clear ✕   │
│                                                                │
│ Showing 12 of 47 projects                                      │
│                                                                │
│ ┌────────┐  ┌────────┐  ┌────────┐                             │
│ │ [img]  │  │ [img]  │  │ [img]  │                             │
│ │ Market │  │ Market │  │ Market │                             │
│ │ Name   │  │ Name   │  │ Name   │                             │
│ │ Loc.   │  │ Loc.   │  │ Loc.   │                             │
│ └────────┘  └────────┘  └────────┘                             │
│ ┌────────┐  ┌────────┐  ┌────────┐                             │
│ ...                                                            │
│                                                                │
│              ‹ 1 2 3 4 ›                                       │
└────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────┐
│                       CTA-BAND                                 │
└────────────────────────────────────────────────────────────────┘
```

**URL state:** `?market=aviation&service=construction&year=2024&q=terminal&page=2` — all filter state syncs to URL for shareable views.

**Responsive:** 3-col → 2-col → 1-col grid. Filter bar collapses to a "Filter" button on mobile.

---

## Project detail (`/projects/[slug]`)

**Purpose:** The "project sheet." Looks like a polished proposal page. PDF export available.

**Sections:**

1. `hero` — Project title, client, location, market badge over hero image
2. `stats-band` (4-up) — Key stats: Value, Schedule, Services, Status
3. `intro-split` — Scope summary (eyebrow: "Project overview")
4. `numbered-list` — Highlights (3–6 numbered items)
5. `image-text` — Featured before/after or hero shot with context
6. `gallery` — Image grid (4–8 photos, swipeable on mobile)
7. **Specs card** — Compact side-card listing client, services, market, dates, value (also appears in printed sheet)
8. `cta-band` (split) — "Download project sheet (PDF)" + "Talk to us about a similar project"
9. `related-strip` — Related projects (same market or service)

**Wireframe (desktop):**

```
┌────────────────────────────────────────────────────────────────┐
│                          HERO                                  │
│  Project title                                                 │
│  Client · Location · Market                                    │
└────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────┐
│   $XX.XM     2022–24      Construction       Complete          │
│   value      schedule     services           status            │
└────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────┐
│ Eyebrow ── Project overview                                    │
│ H2 ── short headline                                           │
│         Scope summary body                                     │
└────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────┐
│ 01 Highlight       02 Highlight       03 Highlight             │
│    body               body               body                  │
└────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────┐
│ [image full-bleed]              Context paragraph              │
└────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────┐
│ Gallery                                                        │
│ ┌────┐ ┌────┐ ┌────┐ ┌────┐                                    │
│ ┌────┐ ┌────┐ ┌────┐ ┌────┐                                    │
└────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────┐
│ Download project sheet [PDF →]    Talk to us about a similar   │
│                                   project [start →]            │
└────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────┐
│ Related projects                                               │
│ ┌────┐ ┌────┐ ┌────┐                                           │
└────────────────────────────────────────────────────────────────┘
```

**PDF export:** `GET /projects/[slug]/sheet.pdf` returns a branded PDF mirroring the page structure with the proposal-sheet aesthetic (blue header band, orange accent line, no internal dividers).

---

## Careers landing (`/careers`)

**Purpose:** Workday-feel recruitment page. Convert visitors to applicants.

**Sections:**

1. `hero` — "Build with PMG" + photo of real team
2. `intro-split` — Why PMG (mission alignment, growth, impact)
3. `feature-grid` (3-up or 4-up) — Why PMG pillars (Career growth · Real impact · Texas roots · Comprehensive benefits)
4. `image-text` — Our culture (image + values reinforcement)
5. `numbered-list` (3-up) — Hiring process (Apply · Interview · Offer)
6. `filter-grid` — **Open positions** — filter by office, department, employment type + list of jobs
7. `cta-band` — "Don't see a role? Send us your resume anyway."

**Wireframe (desktop):**

```
┌────────────────────────────────────────────────────────────────┐
│                          HERO                                  │
│  Build with PMG                                                │
└────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────┐
│ Eyebrow ── Why PMG                                             │
│ H2 ── A team that answers the phone                            │
└────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────┐
│ ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐                 │
│ │ Growth │  │ Impact │  │ Roots  │  │Benefits│                 │
│ └────────┘  └────────┘  └────────┘  └────────┘                 │
└────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────┐
│ [image]                              Our culture               │
│                                      body                      │
└────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────┐
│ 01 Apply           02 Interview        03 Offer                │
│    Submit          15-min screen,      Reference check,        │
│    application     panel, ride-along   offer in <1 week        │
└────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────┐
│ Open positions                                                 │
│                                                                │
│ [Office ▾] [Department ▾] [Type ▾]            12 open roles    │
│                                                                │
│ ┌────────────────────────────────────────────────────────┐     │
│ │ Senior Project Manager · Houston · Full-time      [→] │     │
│ ├────────────────────────────────────────────────────────┤     │
│ │ Estimator II · Austin · Full-time                 [→] │     │
│ ├────────────────────────────────────────────────────────┤     │
│ │ ...                                                    │     │
│ └────────────────────────────────────────────────────────┘     │
└────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────┐
│ Don't see a role? Send us your resume anyway.                  │
│                                            [submit resume →]   │
└────────────────────────────────────────────────────────────────┘
```

**Empty state (no roles open):** the list area becomes a "We're between hiring waves — submit your resume for future openings" capture form.

---

## Job detail (`/careers/[slug]`)

**Purpose:** Convince + capture. Description → apply on the same page.

**Sections:**

1. `hero` — Smaller hero (~60vh) with job title, department, office, employment type, posted date
2. `image-text` — About the role (left: long-form description; right: sticky apply CTA card with key facts)
3. `numbered-list` — Responsibilities (numbered bullets)
4. `numbered-list` — Qualifications (numbered bullets)
5. `form-band` — **Apply form** in-page (name, email, phone, resume upload PDF, optional cover letter)
6. **Equal Opportunity disclosure** — small print
7. `related-strip` — Other open roles (3-up)

**Wireframe (desktop):**

```
┌────────────────────────────────────────────────────────────────┐
│                          HERO (60vh)                           │
│  Senior Project Manager                                        │
│  Houston · Construction · Full-time · Posted 5 days ago        │
└────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────┐
│ About the role                            ┌──────────────────┐ │
│ Body, multi-paragraph                     │ Apply now         │ │
│                                           │ Houston, TX      │ │
│                                           │ Full-time        │ │
│                                           │ Posted 5d ago    │ │
│                                           │ [Apply →]        │ │
│                                           └──────────────────┘ │
└────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────┐
│ Responsibilities                                               │
│ 01 ── …                                                        │
│ 02 ── …                                                        │
│ 03 ── …                                                        │
└────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────┐
│ Qualifications                                                 │
│ 01 ── …                                                        │
│ 02 ── …                                                        │
└────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────┐
│ Apply for this role                                            │
│ ┌───────────────┐  ┌───────────────┐                           │
│ │ First name *  │  │ Last name *   │                           │
│ └───────────────┘  └───────────────┘                           │
│ ┌───────────────┐  ┌───────────────┐                           │
│ │ Email *       │  │ Phone         │                           │
│ └───────────────┘  └───────────────┘                           │
│ ┌────────────────────────────────────┐                         │
│ │ Resume (PDF, max 10 MB) *  [upload]│                         │
│ └────────────────────────────────────┘                         │
│ ┌────────────────────────────────────┐                         │
│ │ Cover letter (optional)            │                         │
│ └────────────────────────────────────┘                         │
│                              [Submit application →]            │
└────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────┐
│ PMG is an Equal Opportunity Employer …small print …            │
└────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────┐
│ Other open roles                              [all roles →]    │
└────────────────────────────────────────────────────────────────┘
```

**Mobile:** apply card collapses below description, form is single-column, resume upload uses native file picker.

---

## Contact (`/contact`)

**Purpose:** SEO fallback for the slide-in contact panel. Full office grid lives here.

**Sections:**

1. `hero` — "Contact PMG" + brief copy
2. `form-band` — Full contact form (same fields as panel) with side rail showing HQ + phone
3. `feature-grid` (2-up or 4-up) — Office cards (name, address, phone, email, hours, map embed)
4. `cta-band` — Compliance hotline + ethics reporting note

**Wireframe (desktop):**

```
┌────────────────────────────────────────────────────────────────┐
│                          HERO                                  │
└────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────┐
│ Send us a message                  ┌──────────────────────┐    │
│ ┌────────┐  ┌────────┐             │ Houston HQ            │    │
│ │ Name * │  │ Email *│             │ Address              │    │
│ └────────┘  └────────┘             │ (713) 555-0100       │    │
│ ┌────────┐  ┌────────┐             │ contact@pmgunited.com│    │
│ │ Phone  │  │ Subject│             └──────────────────────┘    │
│ └────────┘  └────────┘                                         │
│ ┌────────────────────┐                                         │
│ │ Message *          │                                         │
│ │                    │                                         │
│ │                    │                                         │
│ └────────────────────┘                                         │
│              [Send message →]                                  │
└────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────┐
│ Our offices                                                    │
│ ┌──────────────┐  ┌──────────────┐                             │
│ │ Houston      │  │ Austin       │                             │
│ │ [map embed]  │  │ [map embed]  │                             │
│ │ Address      │  │ Address      │                             │
│ │ Phone        │  │ Phone        │                             │
│ └──────────────┘  └──────────────┘                             │
│ ┌──────────────┐  ┌──────────────┐                             │
│ │ San Antonio  │  │ Dallas       │                             │
│ └──────────────┘  └──────────────┘                             │
└────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────┐
│ Compliance hotline: (888) 555-0199                             │
│ Confidential reporting available 24/7.        [Ethics line →]  │
└────────────────────────────────────────────────────────────────┘
```

---

## Privacy Policy (`/privacy-policy`)

**Purpose:** Legal compliance.

**Sections:**

1. `hero` — Smaller hero (~50vh) — "Privacy Policy"
2. `rich-text` — Body sections (Information We Collect, How We Use It, Cookies, Your Rights, Contact)
3. **Last updated** date in muted text

**Wireframe (desktop):**

```
┌────────────────────────────────────────────────────────────────┐
│                          HERO (50vh)                           │
│  Privacy Policy                                                │
│  Last updated: 2026-05-12                                      │
└────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────┐
│ Long-form body content, max-w-prose                            │
│                                                                │
│ ## Information We Collect                                      │
│ Body text…                                                     │
│                                                                │
│ ## How We Use It                                               │
│ Body text…                                                     │
│                                                                │
│ ## Cookies                                                     │
│ Body text…                                                     │
│                                                                │
│ ## Your Rights                                                 │
│ Body text…                                                     │
│                                                                │
│ ## Contact                                                     │
│ Body text + link to /contact                                   │
└────────────────────────────────────────────────────────────────┘
```

---

## Cross-page conventions

- **Hero variant heights** — Most pages: `100vh` (full). Listing pages (Projects index, Careers landing): `60vh`. Privacy: `50vh`.
- **Max container width** — `max-w-7xl` (1280px), responsive padding `px-4 sm:px-6 lg:px-8`.
- **Vertical section rhythm** — `py-20 md:py-28` for most content sections; `py-16` for tighter ones (stats band).
- **No dividers** — Sections separate by background tone or whitespace only. The only acceptable horizontal rules are inside dense lists (e.g., job list rows).
- **CTA-band recipe** — Always brand-blue background, white text, primary action button in orange opens the contact panel.
- **Hero CTAs** — Primary in orange (action), secondary as outline white-on-dark (or outline blue when hero is light).
- **Card arrow convention** — Every "card that links to a detail page" gets the action-orange square arrow button (32–36px) in the top-right of its imagery. Used in mega-menu, services index, markets index, projects index, related strips.
- **Eyebrow style** — `text-xs font-semibold tracking-[0.2em] text-action uppercase` above every section H2.
- **Body type** — Inter, 16px base, line-height 1.625 for paragraphs.
- **Mobile breakpoint behaviors** — All multi-column grids collapse to single column on `sm`. Filter bars collapse to a "Filter" bottom-sheet trigger. Sticky elements (apply card, filter rail) become non-sticky.
