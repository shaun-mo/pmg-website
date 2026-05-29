# PMG United Website — PRD

**Status:** needs-triage
**Owner:** Shaun Morris
**Last updated:** 2026-05-12

---

## Problem Statement

PMG United (a Texas-based program/project management, construction, professional services, and disaster recovery firm) operates pmgunited.com as its marketing front door. The current site is dated, hard to navigate, weak on storytelling, not mobile-optimized, and offers no path for prospective clients to deeply understand PMG's work, no efficient way for job seekers to find and apply for roles, and no system for PMG staff to publish or update content without a developer. Internally, PMG has no CMS — every content change is a code change. Prospective clients and partners reach the site, fail to find proof of capability quickly, and bounce. Job applicants have no usable application flow. PMG cannot effectively showcase its portfolio or scale content operations.

## Solution

A new pmgunited.com built on Next.js 16 + React 19, styled with shadcn/ui + Tailwind v4 + Inter, content-managed by Sanity (hosted CMS), and deployed on Vercel. The site mirrors the IA of the current pmgunited.com but is rebuilt with: a Turner-Construction-grade narrative, a project portfolio with proper filtering/search/pagination, a printable per-project "project sheet" PDF export, a Workday-feel careers section with a lightweight CMS-driven ATS, a LinkedIn module on the About page powered by the official LinkedIn Marketing Developer Platform API, a globally consistent header (transparent at top, solid on scroll, hide-on-scroll-down, show-on-scroll-up) and footer, square corners throughout, blue as the primary application color, and orange (#f97316 + light/dark variants) as the primary action/button color. The site is mobile-first with first-class desktop and mobile support and a clean tablet experience. Every CMS-driven domain object (projects, personnel, services, markets, jobs, offices) is editable by non-technical PMG staff.

## Domain Glossary

- **Project** — A construction or program engagement PMG delivered or is delivering.
- **Project Sheet** — The branded, printable PDF representation of a Project, designed to mirror PMG's proposal-document aesthetic.
- **Market** — An industry sector PMG serves (e.g., Transportation, Aviation, Education).
- **Service** — A PMG service line (Program/Project Management, Professional Services, Construction Services, Disaster Recovery).
- **Personnel** — A named PMG team member featured on About Us.
- **Job Posting** — A published open role on the Careers page.
- **Job Application** — A candidate's submission against a Job Posting.
- **Office** — A physical PMG office location.
- **LinkedIn Post** — A post fetched from PMG's LinkedIn company page via the LinkedIn Marketing Developer Platform.
- **Action color** — The orange palette (`#f97316` base + light + dark) used for primary buttons and the link-underline accent. Distinct from the application's primary color (blue), which is used for application chrome and emphasis.
- **Brand blue** — The application's primary color, inherited from `app/globals.css` (`oklch(0.488 0.243 264.376)`).

## User Stories

### Prospective client — discovery

1. As a prospective client, I want to land on the homepage and immediately understand what PMG does, so that I can decide within seconds whether PMG is relevant to my project.
2. As a prospective client, I want a clear narrative of PMG's capability, so that I can build trust before committing to a conversation.
3. As a prospective client, I want to see PMG's marquee projects on the homepage, so that I have immediate proof of capability.
4. As a prospective client, I want to navigate the site from any page without confusion, so that I do not have to re-learn the interface as I move through sections.
5. As a prospective client, I want the site to load fast on my phone, so that I can review PMG between meetings.
6. As a prospective client, I want to know which markets PMG serves, so that I can confirm relevance before contacting them.
7. As a prospective client, I want to know PMG's services, so that I can map my needs to their offerings.

### Prospective client — project portfolio

8. As a prospective client, I want to browse all PMG projects on a single index page, so that I can see the full breadth of their work.
9. As a prospective client, I want to filter projects by market, so that I only see projects relevant to my sector.
10. As a prospective client, I want to filter projects by service line, so that I only see projects matching the kind of engagement I'm considering.
11. As a prospective client, I want to filter projects by location/region, so that I can find geographically relevant proof of work.
12. As a prospective client, I want to filter projects by completion year, so that I can see recent work.
13. As a prospective client, I want to search projects by free text, so that I can find a specific project I've heard of.
14. As a prospective client, I want filtered results to update the URL, so that I can share a filtered view with a colleague.
15. As a prospective client, I want pagination on the projects index when there are many projects, so that I do not have to scroll endlessly.
16. As a prospective client, I want to click into a project to see the full project sheet, so that I can evaluate the work in depth.
17. As a prospective client, I want each project detail page to look like a polished proposal sheet, so that the page itself functions as a credible reference document.
18. As a prospective client, I want to export a project detail page to a branded PDF, so that I can save or share it offline.
19. As a prospective client, I want the exported PDF to be visually consistent with PMG's proposal-sheet design, so that it carries the same credibility as the on-screen version.
20. As a prospective client, I want each project page to display location, client, market, service line, value, schedule, scope summary, and imagery, so that I have a complete picture.

### Prospective client — services & markets

21. As a prospective client, I want a Services index page that lists all four PMG service lines, so that I can pick the one relevant to me.
22. As a prospective client, I want a dedicated page per service line with its own narrative, so that I can understand each service in depth.
23. As a prospective client, I want each service page to list related projects, so that I can see proof of that service in action.
24. As a prospective client, I want a Markets index page that lists all markets, so that I can find my sector.
25. As a prospective client, I want a dedicated page per market with its own narrative, so that I can understand PMG's depth in my sector.
26. As a prospective client, I want each market page to list related projects, so that I can see relevant work.

### Prospective client — credibility & trust

27. As a prospective client, I want to read about PMG's history and founding, so that I can understand who I'm dealing with.
28. As a prospective client, I want to read a CEO message, so that I can sense the company's leadership voice.
29. As a prospective client, I want to see PMG's leadership and team on the About page, so that I can put faces to the firm.
30. As a prospective client, I want to see PMG's recent LinkedIn activity, so that I have current evidence of the firm's activity.
31. As a prospective client, I want to see PMG's safety commitment, so that I can evaluate operational seriousness.
32. As a prospective client, I want to see PMG's office locations, so that I can confirm geographic coverage.

### Prospective client — contact

33. As a prospective client, I want a Contact page with a clear form, so that I can request a conversation without phone tag.
34. As a prospective client, I want to see each office address and phone, so that I can reach the right office directly.
35. As a prospective client, I want my contact form submission to feel acknowledged, so that I know it was received.

### Job seeker

36. As a job seeker, I want a Careers landing page that feels professional and modern, so that I trust PMG as an employer.
37. As a job seeker, I want to see all current open positions, so that I can decide which to apply to.
38. As a job seeker, I want to filter jobs by office/location, so that I can find roles near me.
39. As a job seeker, I want to filter jobs by department/team, so that I can find roles matching my background.
40. As a job seeker, I want to see job-detail pages with description, responsibilities, and qualifications, so that I can decide whether to apply.
41. As a job seeker, I want to submit an application via a form (name, email, phone, resume upload, optional cover letter), so that I can apply without leaving the site.
42. As a job seeker, I want to receive a confirmation that my application was received, so that I am not left wondering.
43. As a job seeker, I want the application to work on my phone, so that I can apply on the go.

### CMS editor (PMG staff)

44. As a CMS editor, I want a hosted admin interface (Sanity Studio), so that I do not need engineering help to publish content.
45. As a CMS editor, I want to create, edit, archive, and publish Projects, so that the portfolio stays current.
46. As a CMS editor, I want to upload and reorder project images, so that the gallery on each project page reflects what I want shown.
47. As a CMS editor, I want to tag each project with its market(s), service(s), location, client, value, and schedule, so that filtering works correctly.
48. As a CMS editor, I want to create and edit Service pages, so that we can refresh service narratives as offerings evolve.
49. As a CMS editor, I want to create and edit Market pages, so that we can refresh market narratives.
50. As a CMS editor, I want to manage Personnel entries (name, title, headshot, bio, credentials), so that the About page stays accurate as the team changes.
51. As a CMS editor, I want to manage Office entries (name, address, phone, hours, map link), so that contact info is always correct.
52. As a CMS editor, I want a Site Settings document for the global tagline, footer copy, and social links, so that one place controls site-wide chrome.
53. As a CMS editor, I want a draft/publish workflow, so that I can prepare content without it appearing live.
54. As a CMS editor, I want a preview mode, so that I can see how a draft will render before publishing.
55. As a CMS editor, I want to add a LinkedIn post to a "highlighted posts" list manually, so that we always have a fallback if the LinkedIn API is unavailable.

### HR / recruiter

56. As HR, I want to create, edit, archive, and publish Job Postings, so that we can run the careers page without engineering.
57. As HR, I want each posting to have title, department, office, employment type, description, responsibilities, qualifications, and posted date, so that listings are complete.
58. As HR, I want to receive an email notification for every new application, so that I can act quickly.
59. As HR, I want to see all applications for a posting in one place, so that I can review candidates efficiently.
60. As HR, I want to download a candidate's resume directly from the dashboard, so that I do not need to search email.
61. As HR, I want to mark an application's status (new, reviewed, interviewing, rejected, hired), so that I can track the pipeline.

### Admin

62. As an admin, I want to grant or revoke CMS editor access for staff members, so that access stays scoped to current employees.
63. As an admin, I want an audit trail of CMS edits, so that I can see who changed what.

### Mobile experience (cross-actor)

64. As any user, I want every page to be fully usable on a phone, so that I never need a desktop to get value from the site.
65. As any user, I want navigation to collapse into a mobile-friendly menu on small screens, so that the header does not crowd the content.
66. As any user, I want images to scale and load efficiently on mobile, so that pages remain fast on cellular networks.
67. As any user, I want tap targets to be appropriately sized on mobile, so that I can use the site without misclicks.

### SEO & AI discoverability (cross-actor)

77. As a Google searcher, I want PMG's homepage to rank for "PMG United" and "construction management Houston", so that I can find them quickly.
78. As a sector-specific buyer, I want PMG's market pages to rank for "[market] construction management Texas", so that I can find a specialist.
79. As a project-specific searcher, I want individual project pages to rank for the project name, so that I can find proof of work.
80. As a job seeker on Google for Jobs, I want PMG's open roles to appear, so that I can apply through Google's job search.
81. As a CMS editor, I want every CMS document to enforce a title, meta description, and image alt text, so that no page ships SEO-incomplete.
82. As an LLM (ChatGPT / Claude / Perplexity / Gemini), I want a `/llms.txt` index and `/llms-full.txt` corpus at PMG's domain, so that I can summarize PMG accurately when asked.
83. As an LLM crawler, I want PMG's `robots.txt` to explicitly permit my user agent, so that I have authorization to index the site.
84. As an AI search user, I want PMG's content to be richly described in JSON-LD, so that AI answers about PMG cite accurate facts.
85. As a site visitor on slow mobile network, I want pages to hit Core Web Vitals targets, so that the site does not feel broken.

### Look, feel, motion

68. As any user, I want the header to be transparent when I'm at the top of a page, so that hero imagery is unobstructed.
69. As any user, I want the header to gain a solid background as I scroll, so that navigation remains readable over content.
70. As any user, I want the header to smoothly hide when I scroll down and reappear when I scroll up, so that I have full screen for content but instant access to nav.
71. As any user, I want hover and interaction animations to be subtle and quick, so that the site feels responsive without being distracting.
72. As any user, I want all components to have squared corners, so that the visual language reflects construction-industry rigor.
73. As any user, I want a custom thin scrollbar without arrow buttons, so that the page chrome looks intentional.
74. As any user, I want primary buttons in orange and secondary buttons as outlined, so that I can immediately identify primary actions.
75. As any user, I want primary nav links underlined in orange, so that I always know how to navigate.
76. As any user, I want to switch between light and dark themes, so that I can use the site comfortably in any lighting (themed install deferred but tokens must exist).

## Implementation Decisions

### Stack

- **Framework:** Next.js 16 (App Router, RSC, Turbopack dev) on Node runtime.
- **Language:** TypeScript strict.
- **UI:** shadcn/ui (already installed) + Tailwind v4 + Base UI primitives.
- **Typography:** Inter (sans, primary) + JetBrains Mono (mono, for monospace contexts). `--font-sans` / `--font-mono`.
- **Icons:** lucide-react. The "arrow" lucide icon (`ArrowRight` / `ArrowUpRight`) is the canonical button glyph.
- **Theming:** next-themes (already installed) with light + dark token sets. Dark mode wired but launch can ship light-only.
- **CMS:** Sanity (hosted), Studio embedded at `/studio` route on the same Vercel deployment.
- **Hosting:** Vercel.
- **Email:** Resend (transactional — contact form receipts, application notifications).
- **Forms:** React Hook Form + Zod schema validation on both client and server.
- **Resume storage:** Sanity asset uploads (job application PDFs).
- **Analytics:** Vercel Analytics + Vercel Speed Insights.
- **SEO:** Next.js metadata API, dynamic Open Graph images via Next.js OG, JSON-LD for Organization and Project schema.

### Design tokens

- **Brand blue:** Preserve existing `--primary` value `oklch(0.488 0.243 264.376)` from `app/globals.css`. This is the **application's primary color** — used for headings, accents, focus rings, and brand chrome.
- **Action orange:** New token family for the primary button / link-underline accent:
  - `--action: #f97316` (orange-500)
  - `--action-foreground: white`
  - `--action-light: #fb923c` (orange-400)
  - `--action-dark: #ea580c` (orange-600)
  - Dark mode equivalents follow shadcn neutrals.
- **Corners:** `--radius: 0` (already set). Enforce squared corners on every component.
- **Scrollbar:** Custom thin scrollbar via `::-webkit-scrollbar` + `scrollbar-width: thin` for Firefox. No arrow buttons. Track and thumb tinted with neutral grays; thumb hover uses action orange.
- **Spacing scale:** Tailwind default. No internal divider lines between sections — separation by spacing and container backgrounds only.

### Site structure

```
/                                                Home
/about-us                                        About Us
/services                                        Services index
/services/program-project-management
/services/professional-services
/services/construction-services
/services/disaster-recovery
/markets                                         Markets index
/markets/[slug]                                  Market detail (transportation, aviation, education, health-science-research, municipal, housing — exact slugs determined by editors)
/projects                                        Projects index (filter + search + paginate)
/projects/[slug]                                 Project detail (project sheet, PDF export)
/careers                                         Careers landing
/careers/[slug]                                  Job detail + application form
/contact                                         Contact (office locations + form)
/privacy-policy                                  Privacy
/studio                                          Sanity Studio (auth-gated)
```

### Modules (deep, testable in isolation)

1. **Sanity schemas** — `project`, `personnelMember`, `jobPosting`, `jobApplication`, `market`, `service`, `office`, `linkedInPost` (fallback / manual highlights), `siteSettings`. Strongly typed via Sanity's TypeGen.
2. **CMS read layer** — One file per domain object exposing typed query functions (`getProjects`, `getProjectBySlug`, `getMarkets`, etc.). All reads cached with Next.js `cache()` + tag-based revalidation tied to Sanity webhooks for fresh content within 30 seconds of publish.
3. **Project filtering engine** — A pure function `filterProjects(projects, filters)` plus a URL-state hook `useProjectFilters()` that syncs filter state to query params (`?market=&service=&year=&q=&page=`). Filters can stack. Empty state and "clear filters" CTA.
4. **Project sheet PDF renderer** — `@react-pdf/renderer` template under `lib/pdf/project-sheet.tsx`. Server route `/projects/[slug]/sheet.pdf` streams the PDF. Template matches PMG's proposal sheet aesthetic (squared corners, blue header band, orange accents, no internal dividers — spacing-only separation).
5. **Job application handler** — Server action `submitApplication`: Zod-validate → upload resume to Sanity assets → write `jobApplication` document → send Resend notification to HR + confirmation to applicant. Idempotent on (email, jobId, hash(resume)) to dedupe accidental double-submits.
6. **Header scroll controller** — Hook `useHeaderScrollState()` returns `{ atTop, scrollingDown }`. Header component consumes it to apply transparent vs solid background and translate-Y for hide/show. Easing: 200ms ease-out for opacity, 250ms ease for transform.
7. **LinkedIn API client** — Server-side module under `lib/linkedin/`. OAuth 2.0 with token refresh. Fetches latest N posts from PMG's company page via LinkedIn Marketing Developer Platform. Cached via ISR (15 min). Graceful fallback: if API is down or partner approval is pending, render manually-curated `linkedInPost` documents from Sanity.
8. **Theme tokens** — `app/globals.css` extended with action-orange tokens, custom scrollbar styles, square-corner enforcement, primary-link-underline utility (`underline decoration-action`).
9. **Responsive layout primitives** — `<Container>` (max-w container with responsive padding), `<Section>` (vertical rhythm wrapper), `<Grid>` (responsive grid presets). Mobile-first; breakpoints align to Tailwind defaults (sm 640, md 768, lg 1024, xl 1280, 2xl 1536). Desktop and mobile are tier-1; tablet validated but not the design focus.
10. **Contact form handler** — Server action `submitContact`: Zod-validate → send Resend email to designated PMG inbox → return success state to client. Rate-limited at 5/min/IP.
11. **SEO metadata pipeline** — Per-route `generateMetadata` reading from CMS, dynamic OG image route at `/og/[type]/[slug]`, canonical URL helper, breadcrumb helper, and CMS-side validators that warn on missing SEO fields.
12. **Structured-data layer** — Centralized helper that emits JSON-LD for any entity type (`Organization`, `Service`, `WebPage`, `BreadcrumbList`, `JobPosting`, `LocalBusiness`, `Person`, `ImageObject`, custom Project schema). Single source of truth so schema stays consistent across pages.
13. **LLM corpus generator** — Build-time route handlers for `/llms.txt` (curated index) and `/llms-full.txt` (full content dump from Sanity), ISR-revalidated on publish.
14. **Sitemap + robots generator** — Dynamic `/sitemap.xml` from Sanity content + static routes; `/robots.txt` with AI-bot allowlist on production, deny-all on preview; IndexNow webhook on publish.
15. **Contact panel** — Right-slide `Sheet` (desktop) / bottom `Drawer` (mobile) housing the contact form. Triggered by any `Contact Us` button (header nav, hero CTAs, mid-page CTAs). Submit reuses the `submitContact` server action so `/contact` page and panel share one handler.
16. **Page Hero (universal)** — Single `<PageHero>` component used as the first child of every public route. Reads its config from the doc owning the page (CMS), drives header transparent-state colors via context, includes accessibility overlay and scroll cue.
17. **Mega-menu** — Hover-triggered overlay for `Markets` and `Services` nav items. Reads from `lib/nav/mega-menu-data.ts` which pulls live `market[]` and `service[]` from Sanity. Keyboard-accessible, mobile fallback to accordion.

### Sanity schema overview

- **`project`**: title, slug, market[], service[], client, location (city, state), value (USD), startDate, endDate, status (in-progress / complete), heroImage, gallery[], scopeSummary (portable text), highlights[], relatedProjects[], featured (bool).
- **`personnelMember`**: name, title, headshot, bio, credentials (e.g., PE, MBA, LEED AP), order.
- **`jobPosting`**: title, slug, department, office (ref), employmentType (full-time / part-time / contract), description (portable text), responsibilities[], qualifications[], postedAt, expiresAt, status (open / closed).
- **`jobApplication`** (write-only from public, read in Studio): jobPosting (ref), firstName, lastName, email, phone, coverLetter, resume (file), submittedAt, status (new / reviewed / interviewing / rejected / hired).
- **`market`**: name, slug, summary, narrative (portable text), heroImage, featured (bool), order.
- **`service`**: name, slug, summary, narrative (portable text), heroImage, order.
- **`office`**: name, address, city, state, postalCode, phone, email, hours, mapEmbedUrl, order.
- **`linkedInPost`**: url, caption, image, postedAt — manual fallback only; primary path is the LinkedIn API.
- **`siteSettings`** (singleton): tagline, footerCopy, linkedInUrl, contactEmail, hrEmail, defaultOgImage.

### Header (desktop)

**Layout (≥ md breakpoint), left → right:**

1. **Logo** (links to `/`)
2. **Primary nav (in this exact order):** `Markets`, `Services`, `Projects`, `About Us`, `Contact Us`
3. **Careers button** (right-aligned) — solid action-orange button with `ArrowRight` lucide glyph

Primary nav links use the action-orange underline accent on hover and persist that underline on the currently-active route. `Contact Us` is **not** a normal link — it opens the Contact slide-in panel (see below).

**Background and color states**

| Scroll state | Background | Nav text + logo |
|---|---|---|
| At top (Y < 8px) | fully transparent | white *or* brand blue per page (CMS override on each hero) |
| Scrolled (Y ≥ 8px) | solid surface (white in light / charcoal in dark), 1px bottom shadow | brand blue |

**Scroll-hide behavior**

- Y > 64px **and** direction = down → `translateY(-100%)` over 250ms ease.
- Direction = up (any) → `translateY(0)` over 250ms ease.
- At top (Y < 8px) → always visible regardless of direction.

### Header (mobile, < md)

- Logo (left), hamburger trigger (right).
- Tapping the hamburger opens a full-screen overlay panel sliding in from the right.
- Inside the panel: primary nav vertically stacked. `Markets` and `Services` are expandable accordion sections that reveal their child links inline (no mega-menu cards on mobile). `Contact Us` opens the Contact bottom sheet (not a panel from the side). Careers renders as a full-width orange action button at the end of the menu.

### Mega-menu overlay (desktop only)

Hovering `Markets` or `Services` reveals a full-width overlay anchored to the bottom edge of the header. Each entry in the parent collection (Sanity `market` / `service` docs) renders as a card.

- Cards in a 4-column grid at `lg`+, 3 columns at `md`–`lg`.
- Each card: 4:3 hero thumbnail (CMS `heroImage`), title (`name`), one-line summary (`summary`, max ~80 chars), orange arrow glyph on hover. Entire card is the link target.
- Open animation: opacity 0 → 1 (180ms ease-out) + translateY(-4px) → 0 (220ms ease-out).
- Close animation: opacity 1 → 0 (140ms ease-in).
- 150ms hover-close grace period so the cursor can travel diagonally from trigger to card without dismissing.
- Trailing "View all markets →" / "View all services →" link in the bottom-right of the grid.
- Keyboard accessible: triggers are `<button>` with `aria-expanded` and `aria-controls`; `Esc` closes; arrow keys navigate between cards; focus is trapped while open.

### Contact panel

Desktop `Contact Us` nav button opens a right-side `Sheet` (shadcn) — approx **480px wide**, slides in over 250ms, content underneath dimmed by a 30% scrim. `Esc` or scrim-click closes.

**Contents**

- H2 "Get in touch" + brief subhead
- Form fields: name (required), email (required), phone, subject, message (required)
- Primary submit button in action orange with arrow glyph
- Secondary "or call us" section listing offices (from `office` collection)
- On success: form swaps for an inline confirmation message with a `Close` button
- Submit handler is the same `submitContact` server action used by the `/contact` page route — one implementation, two surfaces

**Mobile equivalent:** the same form rendered in a `Drawer` (Vaul) bottom sheet, taking ~85% of viewport height with a drag-to-dismiss handle. Same submit handler.

**`/contact` page:** still exists as a direct-URL fallback for SEO, deep linking, and "view all offices" purposes. It renders the same form plus the full office list and map embeds. The nav button always opens the panel; only deep links land on `/contact`.

### Footer

Deep brand-blue background, white text. No internal borders — separation via spacing only.

**Desktop columns (4-up):**

1. **Company info** — logo, HQ address, phone, email, compliance hotline + confidential-reporting note
2. **Markets** — full list, links to `/markets/[slug]`
3. **Services** — full list, links to `/services/[slug]`
4. **Resources** — Projects, Careers, Contact, Privacy Policy, LinkedIn

**Below columns:** social row (LinkedIn at minimum; expandable via `siteSettings.socialLinks[]`).

**Legal strip:** copyright, Equal Opportunity Employer statement, Privacy Policy link.

Footer link hover style mirrors header — orange underline on hover. All copy and link sets driven by `siteSettings` and the live `market` / `service` collections.

**Responsive collapse:** 4 columns → 2 columns at `md` → 1 column at `sm`.

### Universal page hero

Every public route renders a `<PageHero>` component as its first child. The same component, CMS-configured per page.

**Sizing**

| Breakpoint | Height |
|---|---|
| Desktop (≥ md) | `min-height: 100vh`, `max-height: 900px` |
| Tablet (`sm`–`md`) | `min-height: 80vh` |
| Mobile (< sm) | `min-height: 90vh` |

**Per-page CMS configuration** (lives on each market / service / project / static-page doc, or on `siteSettings.homeHero` for `/`):

- `backgroundImage` (required, with required `alt`)
- `backgroundVideo` (optional, used on `/` and select pages)
- `heading` (page H1)
- `subheading`
- `primaryCta` (label + href, optional)
- `secondaryCta` (label + href, optional)
- `textColor` — `light` (white text over dark imagery) or `dark` (brand-blue text over light imagery). This value also sets the header's transparent-state colors via React context.
- `showScrollCue` (boolean, default true)

**Accessibility**

- Hero image alt text required at the schema level.
- 30% black gradient overlay applied automatically when `textColor === 'light'` to guarantee 4.5:1 contrast regardless of underlying photo.
- Scroll-cue animation respects `prefers-reduced-motion`.

### Placeholder image strategy

Until real photography is shot/sourced, all hero and card imagery uses curated placeholders stored locally at `public/placeholder/`. ~25 high-quality construction/infrastructure images (Unsplash-licensed) covering all hero pages, market thumbnails, service thumbnails, and ~15 fixture projects. CMS docs reference these by relative path during development; production swap is one-for-one replacement of the file in Sanity's media library with no code changes.

### Project sheet PDF

- Layout: cover band with project title + client + location + market badge; key stats row (value, schedule, services); hero image; scope summary block; numbered highlights; gallery thumbnails; footer with PMG logo and contact.
- Squared corners, blue header band, orange accent line under section titles, no internal dividers.
- Server-rendered on GET to `/projects/[slug]/sheet.pdf`. Cached at the edge.

### Careers ATS (v1)

- Public side: list, filter, view, apply.
- Sanity side: posting CRUD + applications inbox under a custom Studio tool view, sortable by submission date, status filter.
- Email: Resend webhook sends to `hrEmail` from `siteSettings`. Applicant gets a templated receipt.
- Resume storage: Sanity asset (PDF only, max 10 MB).
- Future (out of scope for v1): full custom ATS with pipeline stages, candidate scoring, scheduled interviews, and offer letters. Tracked as a v2 initiative.

### LinkedIn integration

- Apply for LinkedIn Marketing Developer Platform partner access in parallel with build (approval timeline ~weeks). On approval, server-side client fetches the company page feed.
- Until approved (or as permanent fallback): manually-curated `linkedInPost` documents in Sanity render the same component. The component is data-source-agnostic.

### Auth

- **Public site:** no auth.
- **Sanity Studio (`/studio`):** Sanity's built-in auth (Google / email magic link). Editor + Administrator roles. Audit log enabled.
- **No public account system** on the marketing site.

### Analytics & observability

- Vercel Analytics for traffic; Speed Insights for Core Web Vitals.
- Sentry for client + server error tracking (free tier).
- Sanity webhook → Next.js revalidate tag endpoint on every publish.

### SEO

**Goal:** Rank top-3 on Google for "[market] construction management Texas / Houston" and brand queries within 6 months of launch.

**Technical SEO**

- Per-page `generateMetadata` driven by CMS fields (title, description, keywords, OG image, canonical).
- Single canonical URL per page; non-canonical variants (filtered/paginated lists) self-reference correctly with `rel="canonical"` to the canonical base where appropriate.
- One `<h1>` per page; semantic heading hierarchy (h1 → h2 → h3) enforced lint-style in CMS-rendered content.
- Clean URLs: human-readable slugs for projects, jobs, services, markets. Slugs are CMS-editable but stable; legacy URL changes generate 301 redirects via a `redirects` rule list in CMS.
- HTTPS everywhere; HSTS header enabled at the edge.
- Lighthouse mobile ≥ 90 across Performance, Accessibility, Best Practices, SEO on every public page.
- Core Web Vitals targets: LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1 (mobile, p75).
- Image alt text is a **required** CMS field on every uploaded image (validated at the schema level).
- `next/image` everywhere with explicit `sizes`, modern formats (AVIF/WebP), and lazy loading on below-fold images.
- Internal linking: project pages auto-link to their market(s) and service(s); market and service pages list related projects; related-projects module on each project detail page.
- `sitemap.xml` generated dynamically from Sanity (every Project, Market, Service, JobPosting, and static page) with `lastmod`, `changefreq`, and `priority`.
- `robots.txt` allows all crawlers on production (including `GPTBot`, `ClaudeBot`, `Google-Extended`, `PerplexityBot`, `CCBot`, `Applebot-Extended`), disallows all on preview deployments.
- 404 page returns proper 404 status; 301 redirects for legacy pmgunited.com URLs.

**Structured data (JSON-LD)**

- Site-wide: `Organization` with `@id`, logo, sameAs (LinkedIn), `address` (HQ), `contactPoint`, `founder`.
- Home: `WebSite` with `SearchAction` (if internal search is wired) + `BreadcrumbList`.
- Project detail: a custom schema mapping to `CreativeWork` + `Service`, including client, completion date, location, image gallery (`ImageObject[]`), and value when public.
- Market and Service pages: `Service` schema with `provider` referencing Organization, `areaServed`, and `hasOfferCatalog`.
- About Us: `AboutPage` plus `Person` entries for each Personnel member with `jobTitle`, `image`, `worksFor`.
- Careers index: `ItemList` of `JobPosting`.
- Job detail: `JobPosting` schema (title, description, datePosted, validThrough, employmentType, hiringOrganization, jobLocation, applicantLocationRequirements, baseSalary if disclosed).
- Contact: `LocalBusiness` per Office with hours, address, phone.
- All pages: `BreadcrumbList`.

**Open Graph + Twitter Cards**

- Per-page OG title, description, image (1200×630), type, locale, site_name.
- Dynamic OG image generation via Next.js OG for project, market, service, and job pages — each renders the entity's name, hero image, and PMG logo on a branded template.
- Twitter Card type `summary_large_image` with the same OG image.

**Search engine integration**

- Google Search Console verification (DNS TXT or HTML file) on launch; submit `sitemap.xml`.
- Bing Webmaster Tools verification + sitemap submission.
- Yandex / Naver intentionally skipped (no target audience).
- Optional: IndexNow ping on Sanity publish webhook (instant push to Bing).

**Content guidelines (CMS-enforced)**

- Required: title (≤ 60 chars), description (≤ 160 chars), hero image with alt text.
- Recommended: keywords field (free-text, used internally for keyword targeting tracking — not emitted as meta keywords).
- Validation warnings in Studio for missing description, missing alt text, duplicate titles across documents.

### AI / LLM discoverability

**Goal:** When AI assistants (ChatGPT, Claude, Perplexity, Gemini) are asked about PMG, construction-management firms in Texas, or any market we serve, the assistant can both **find** and **accurately summarize** PMG using fresh content.

- **`/llms.txt`** — Short, curated index at the site root. Hand-crafted listing of the most important pages and their purpose, with a brief PMG description, contact email, and links to key sections. Generated at build time from `siteSettings` + a curated page allowlist.
- **`/llms-full.txt`** — Long-form, machine-readable, plain-text dump of all primary content: every Project (title, location, client, market, scope summary, highlights), every Market and Service narrative, About Us body, and current Job Postings. Generated dynamically and ISR-cached. Designed to be consumed in a single fetch by an LLM.
- **`robots.txt` AI policy** — Explicitly allow major AI crawlers on production: `GPTBot`, `ChatGPT-User`, `OAI-SearchBot`, `ClaudeBot`, `Claude-Web`, `anthropic-ai`, `Google-Extended`, `PerplexityBot`, `CCBot`, `Applebot-Extended`, `Bytespider`, `Amazonbot`, `cohere-ai`. Block on preview deployments.
- **Schema.org first** — Structured data (above) is the primary AI-readable surface. LLMs that ingest JSON-LD get clean facts.
- **Semantic HTML** — Plain `<main>`, `<article>`, `<section>`, `<nav>`, `<header>`, `<footer>` with descriptive ARIA landmarks. Avoid `<div>` soup that hurts AI extraction.
- **Stable URLs and clear titles** — Every page has a descriptive `<title>` that names the entity ("Health Science and Research Center Expansion | PMG United"), not generic ("Project — PMG").
- **No JavaScript-only content** — Critical content rendered server-side so non-JS crawlers (and AI fetchers that don't execute JS) see it.
- **`/ai-policy.txt`** (optional, v2) — Public statement of PMG's stance on AI scraping and licensing.

### Mobile-first acceptance criteria (applies to every page)

- Pages must pass Lighthouse mobile ≥ 90 (Performance, Accessibility, Best Practices, SEO).
- All interactive elements have minimum 44×44 px tap targets on mobile.
- Header collapses to a hamburger ≤ md breakpoint.
- Project filter UI collapses to a bottom sheet or filter drawer on mobile.
- Project gallery uses a swipeable carousel on mobile, grid on desktop.
- Job application form is a single column on mobile, two-column where appropriate on desktop.
- All images are served via `next/image` with mobile-optimized sizes.

## Testing Decisions

### What makes a good test

Tests must verify **external observable behavior**, not implementation details. A test should pass even after a refactor of internal structure, as long as the module's public contract is unchanged. Tests should be fast (< 100ms per unit test), deterministic, and require no live network calls (mock Sanity, Resend, LinkedIn).

### Modules with automated tests

1. **Project filtering engine** — Pure function tests using a fixture set of ~20 projects covering all markets, services, years, and locations. Cases: single-filter, stacked-filters, free-text search, empty result, URL-state round-trip.
2. **PDF renderer** — Snapshot tests on rendered PDF bytes for 3–5 fixture project documents (minimal project, fully-populated project, project with long scope text, project with no gallery, project with all markets/services). Snapshot stored in repo; regenerated only on intentional template change.
3. **Job application handler** — Server-action tests with mocked Sanity write and Resend send. Cases: happy path, invalid email, oversized resume, missing required fields, duplicate submission (idempotency), email send failure.
4. **Header scroll controller** — Unit tests on `useHeaderScrollState` simulating scroll events. Cases: at-top → scroll past 8px → solid; scroll-down → hide; scroll-up → show; rapid direction changes do not flicker (debounced/state-machine).

### Untested for v1

Visual UI components (covered by `/design-review` + `/qa` skill workflows rather than unit tests). E2E tests deferred to a follow-up — Playwright happy-path smoke tests for contact form and job application should be added before public launch.

### Prior art

No prior art in this repo (greenfield). Test conventions to be established: Vitest as runner; `__tests__/` colocated with each module; fixture data under `__tests__/fixtures/`.

## Out of Scope

- Custom ATS with pipeline stages, candidate scoring, and offer letters (tracked as a v2 initiative).
- Full content migration from the existing pmgunited.com — initial content will be re-entered by PMG staff in Sanity; legacy URLs that need to stay live will be 301-redirected.
- Multi-language support.
- E-commerce or paid services.
- A blog / news / insights section (intentionally excluded).
- Account creation or user login on the public marketing site.
- A "Clients & Partners" standalone page (handled as a section within About Us if needed).
- An "Our Approach" standalone page (handled as a section within service pages if needed).
- Live chat.
- AI-powered project recommendations.
- A separate iOS/Android app.

## Further Notes

- **Existing repo state:** Next.js 16, React 19, Tailwind v4, shadcn already initialized with `radix-vega` style, `--radius: 0`, neutral base color. All shadcn components installed. Inter and JetBrains Mono wired as font variables. `ThemeProvider` is already mounted.
- **Domain switchover:** v1 ships to a preview subdomain (e.g., `next.pmgunited.com`). Cutover to `pmgunited.com` happens after stakeholder sign-off and content load.
- **Content load:** Sanity will be pre-seeded with all current pmgunited.com projects (~15) plus services, markets, personnel, and offices. PMG staff own ongoing edits.
- **LinkedIn partner application:** Initiate as soon as PRD is approved — independent timeline from the build.
- **Accessibility:** Target WCAG 2.2 AA. Color contrast on orange-on-white verified at 4.5:1 for body text size; orange-on-white is **not** used for body text — only buttons and underline accents where shape and weight reinforce the affordance.
- **Print stylesheet:** The project page must also be print-friendly via browser print, in addition to the dedicated PDF download — so users who print directly get something usable.
- **Sanity Studio:** Embedded at `/studio` on the same Vercel deployment for unified deploy lifecycle. Optionally split to `studio.pmgunited.com` later if convenient.
- **Tracker setup deferred:** This PRD lives at `pmg/PRD.md` until a project issue tracker (Linear, GitHub Issues, or similar) is wired up; at that point this document gets migrated and labeled `needs-triage`.
