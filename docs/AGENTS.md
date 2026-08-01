# AGENTS.md

Instructions for AI coding agents working in this repository.

## Project

Bits 'N Speeches is a Next.js (App Router) + TypeScript app for running a Toastmasters club: a public site, a member portal, and an officer admin portal in one codebase. See [architecture.md](architecture.md) for the full system design.

## Before writing or suggesting code

1. **Read [architecture.md](architecture.md) first.** Follow its dependency flow, data flow, and directory conventions — don't put business logic in `app/`, don't fetch data client-side when it belongs in a Server Component, and put new code in the folder architecture.md assigns to it (`src/features/`, `src/lib/`, `src/hooks/`, etc.).
2. **Read [brand-guidelines.md](brand-guidelines.md) before touching anything user-facing.** Any UI, copy, imagery, or page that is publicly visible must follow the color palette, typography, photography rules, and approved phrases there. The "Club Website Requirements" section is binding, not optional — required content (club name, meeting info, contact, mission, District/TI links), the verbatim trademark statement, and the advertising rules must be respected in any change that touches the public site.
3. If a change conflicts with either doc, flag the conflict instead of silently picking one side.

## Setup

```bash
pnpm install
pnpm dev      # http://localhost:3000
```

## Commands

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Start the dev server |
| `pnpm build` | Production build |
| `pnpm lint` | ESLint |
| `pnpm test` | Vitest |

Run `pnpm lint` (and `pnpm test` if tests exist for the touched code) before considering a change done.

## Code style

* TypeScript everywhere; avoid `any`.
* Validate external input (forms, API payloads) with Zod schemas from `src/types/`.
* Server state comes from Supabase via TanStack Query hooks in `src/hooks/` — components consume it, they don't fetch or mutate it directly.
* Keep `app/` route files presentational; logic belongs in `src/features/` or `src/lib/`.
* Match existing formatting/naming in the file you're editing rather than introducing a new convention.

## Scope discipline

* Don't add abstractions, config options, or error handling for cases that can't happen — see repo-level conventions in the root `AGENTS.md`.
* Prefer editing existing files over creating new ones.
* No new files or heavy dependencies without a clear need tied to the task.
