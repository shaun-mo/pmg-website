# PMG United — Monorepo

Bun-workspaces monorepo housing every PMG-branded application. Each app under `apps/` is a fully independent Next.js project. `packages/` (currently empty) is where we'll extract shared design tokens, UI primitives, and types when sync pain across apps warrants it.

## Apps

| App | Path | Purpose | Status |
|---|---|---|---|
| **PMG Website** | `apps/pmg-website` | Marketing front door (pmgunited.com) | In progress |
| **PMG ATS** | `apps/pmg-ats` | Applicant Tracking System (HR-internal, auth-gated) | Scaffold |
| **PMG Portal** *(planned)* | `apps/pmg-portal` | Employee portal — resources, trainings, internal directory | Not started |

## Commands

```bash
# Install all dependencies (hoisted to root)
bun install

# Run the website dev server
bun dev:website          # → http://localhost:3000

# Run the ATS dev server
bun dev:ats              # → http://localhost:3001

# Build a specific app
bun build:website
bun build:ats

# Lint / typecheck across every workspace
bun lint
bun typecheck
```

## Brand

All apps share PMG's brand: blue primary, action orange (`#f97316` + light/dark), squared corners, Geist body, Rockness accent for branded display, white-on-blue surfaces. Brand tokens currently live inside each app's `app/globals.css` and `public/fonts/`. When a brand change hurts to propagate, we promote those to `packages/design-tokens/`.

## When to add a new app

If you're building something that:

- Has its own deploy lifecycle
- Has its own auth model (or no auth at all)
- Has its own data model
- Has its own user base

…it deserves its own app under `apps/`. Otherwise it's a feature inside an existing app.
