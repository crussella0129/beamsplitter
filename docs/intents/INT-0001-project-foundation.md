# INT-0001 — Project Foundation & Tech Stack

<!-- sprint-loop-intent-v2 -->

- **Intent ID:** INT-0001
- **State:** realized
- **Work evidence:** [T-001–T-007 build plan](../sprints/s0/sprint-plans/build-plan.md)
- **Completion evidence:** [T-001–T-007 completion](../work/completed-tasks.md)
- **Code evidence:** [Next.js & Prisma scaffold](../../src/lib/config.ts)
- **Test evidence:** [Sprint 0 Test Report](../sprints/s0/sprint-tests/test-report.md)
- **Documentation evidence:** [Project README](../../README.md)

## Intent

Establish the foundational project scaffold for beamsplitter: a cross-platform
social-media mirroring and engagement-comparison application targeting X
(Twitter) and Threads as initial platforms.

The foundation includes:

- A Next.js web application with TypeScript for the frontend dashboard
- A backend API layer (Next.js API routes or standalone Node.js) for platform
  integration orchestration
- PostgreSQL for relational data (users, accounts, scheduled posts)
- A unified data model abstracting platform-specific post and metric schemas
- OAuth 2.0 authentication scaffolding for both X API v2 and Threads API
- Environment-based configuration for API credentials and secrets
- Project tooling: ESLint, Prettier, testing framework (Vitest), CI skeleton

**Boundaries:** This intent covers only the project scaffold and architecture
decisions. It does not implement actual API calls, posting logic, or analytics
collection — those belong in follow-on intents.

**Non-goals:** Production deployment, paid API tier decisions, mobile app.

## Acceptance criteria

1. Running `npm run dev` starts a working Next.js development server with a
   placeholder landing page.
2. TypeScript strict mode compiles without errors.
3. A database schema file defines tables for `users`, `platform_accounts`,
   `posts`, and `engagement_snapshots`.
4. Environment variable stubs exist for X and Threads API credentials.
5. At least one unit test passes via `npm test`.
6. ESLint and Prettier configs are present and `npm run lint` exits cleanly.

## Rationale

A greenfield project needs a solid, well-structured foundation before feature
work begins. Next.js with TypeScript provides SSR capabilities, API routes, and
a mature ecosystem. PostgreSQL is chosen for its reliability with relational
data (user→account→post→metrics relationships) and JSON column support for
flexible platform-specific metadata.

## Alternatives

- **Vite + separate Express backend:** More separation of concerns but doubles
  the deployment surface for an early-stage project.
- **Python/Django backend:** Strong ORM but adds a language boundary; the team
  is JS/TS-focused.
- **Supabase/Firebase:** Reduces backend effort but limits control over the
  data model and API abstraction layer needed for multi-platform normalization.

## Consequences

- Committing to Next.js couples frontend and API in a single deployable unit
  initially; can be decoupled later if needed.
- PostgreSQL requires a running database instance for development (mitigated
  by Docker Compose or a local install).
- OAuth 2.0 scaffolding will need real credentials to test end-to-end; Sprint 0
  only verifies the code structure, not live API connectivity.

## Transition history

- 2026-08-13: created as `proposed`.
- 2026-08-13: `proposed` → `planned` — Sprint 0 build plan created with tasks T-001 through T-007 covering all acceptance criteria.
- 2026-08-13: `planned` → `active` — Sprint 0 build phase begins.
- 2026-08-13: `active` → `realized` — All 7 build tasks and verification suite passed.
