Finalized - DO NOT EDIT

# Sprint 0 Build Plan

## Intents

- [INT-0001](../../../intents/INT-0001-project-foundation.md) — state: proposed → planned; acceptance criteria covered: all (AC-1 through AC-6)

## Schema Tree

- Sprint Goal: Project Foundation & Tech Stack
  - Next.js Scaffold
    - T-001: Initialize Next.js 15 with TypeScript
    - T-002: Create placeholder landing page
  - Database Schema
    - T-003: Define Prisma schema with core data model
  - Configuration
    - T-004: Environment configuration and API credential stubs
    - T-005: Docker Compose for local PostgreSQL
  - Tooling
    - T-006: ESLint + Prettier configuration
    - T-007: Vitest setup with initial test

## Execution Sequence

### T-001: Initialize Next.js 15 project with TypeScript and App Router

- **Intent:** [INT-0001](../../../intents/INT-0001-project-foundation.md)
- **Touches:** package.json, tsconfig.json, next.config.ts, src/app/layout.tsx, src/app/page.tsx
- **Depends on:** (none)
- **Acceptance criterion:** Running `npm run dev` starts a working development server (AC-1); TypeScript strict mode compiles without errors (AC-2)
- **Success criterion (EARS):**
  - **WHEN** `npm run dev` is executed, **THEN** Next.js **SHALL** start a development server on port 3000 without errors.
  - **WHEN** `npx tsc --noEmit` is executed, **THEN** TypeScript **SHALL** report zero errors under strict mode.
- **Notes:** Use `create-next-app` with `--typescript --app --eslint` flags. Target Next.js 15.

### T-002: Create placeholder landing page with beamsplitter branding

- **Intent:** [INT-0001](../../../intents/INT-0001-project-foundation.md)
- **Touches:** src/app/page.tsx, src/app/globals.css
- **Depends on:** T-001
- **Acceptance criterion:** Running `npm run dev` shows a branded landing page (AC-1)
- **Success criterion (EARS):**
  - **WHEN** a user navigates to `/`, **THEN** the page **SHALL** display the beamsplitter name, a tagline describing the app, and platform icons for X and Threads.
- **Notes:** Dark-mode-first design. No login functionality yet.

### T-003: Define Prisma schema with core data model

- **Intent:** [INT-0001](../../../intents/INT-0001-project-foundation.md)
- **Touches:** prisma/schema.prisma, src/lib/db.ts
- **Depends on:** T-001
- **Acceptance criterion:** Schema defines tables for `users`, `platform_accounts`, `posts`, and `engagement_snapshots` (AC-3)
- **Success criterion (EARS):**
  - **WHEN** `npx prisma validate` is executed, **THEN** Prisma **SHALL** report the schema as valid with no errors.
  - **WHEN** the schema is inspected, **THEN** it **SHALL** contain models for User, PlatformAccount, Post, and EngagementSnapshot with appropriate relationships.
- **Notes:** Use PostgreSQL provider. Include a JSON field on EngagementSnapshot for platform-specific raw metrics.

### T-004: Environment configuration and API credential stubs

- **Intent:** [INT-0001](../../../intents/INT-0001-project-foundation.md)
- **Touches:** .env.example, src/lib/config.ts
- **Depends on:** T-001
- **Acceptance criterion:** Environment variable stubs exist for X and Threads API credentials (AC-4)
- **Success criterion (EARS):**
  - **WHEN** `.env.example` is inspected, **THEN** it **SHALL** contain placeholder entries for DATABASE_URL, X_CLIENT_ID, X_CLIENT_SECRET, THREADS_APP_ID, THREADS_APP_SECRET, and NEXTAUTH_SECRET.
  - **WHEN** `src/lib/config.ts` is imported, **THEN** it **SHALL** export a typed configuration object that reads from environment variables.

### T-005: Docker Compose for local PostgreSQL

- **Intent:** [INT-0001](../../../intents/INT-0001-project-foundation.md)
- **Touches:** docker-compose.yml
- **Depends on:** T-003
- **Acceptance criterion:** A PostgreSQL instance is available for local development (supports AC-3)
- **Success criterion (EARS):**
  - **WHEN** `docker compose up -d` is executed, **THEN** a PostgreSQL 16 container **SHALL** start and accept connections on port 5432.
- **Notes:** Use a named volume for data persistence. Default credentials in .env.example.

### T-006: ESLint + Prettier configuration

- **Intent:** [INT-0001](../../../intents/INT-0001-project-foundation.md)
- **Touches:** .eslintrc.json or eslint.config.mjs, .prettierrc, package.json
- **Depends on:** T-001
- **Acceptance criterion:** ESLint and Prettier configs are present and `npm run lint` exits cleanly (AC-6)
- **Success criterion (EARS):**
  - **WHEN** `npm run lint` is executed, **THEN** ESLint **SHALL** exit with code 0 and zero warnings.
  - **WHEN** `npx prettier --check .` is executed, **THEN** Prettier **SHALL** report all files as formatted.

### T-007: Vitest setup with initial test

- **Intent:** [INT-0001](../../../intents/INT-0001-project-foundation.md)
- **Touches:** vitest.config.ts, src/lib/**tests**/config.test.ts, package.json
- **Depends on:** T-001, T-004
- **Acceptance criterion:** At least one unit test passes via `npm test` (AC-5)
- **Success criterion (EARS):**
  - **WHEN** `npm test` is executed, **THEN** Vitest **SHALL** run at least one test and report all tests as passing.
- **Notes:** Test the config module's environment variable parsing.
