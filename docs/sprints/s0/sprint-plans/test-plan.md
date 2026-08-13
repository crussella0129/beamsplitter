Finalized - DO NOT EDIT

# Sprint 0 Test Plan

## Intent Traceability

| Intent                                                      | Acceptance criterion                            | Build task / EARS clause                                                  | Verification                   |
| ----------------------------------------------------------- | ----------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------ |
| [INT-0001](../../../intents/INT-0001-project-foundation.md) | AC-1: `npm run dev` starts a working dev server | T-001 / WHEN `npm run dev` ... THEN Next.js SHALL start                   | manual_dev_server_start        |
| [INT-0001](../../../intents/INT-0001-project-foundation.md) | AC-1: Placeholder landing page renders          | T-002 / WHEN user navigates to `/` ... THEN page SHALL display branding   | manual_landing_page_check      |
| [INT-0001](../../../intents/INT-0001-project-foundation.md) | AC-2: TypeScript strict compiles cleanly        | T-001 / WHEN `npx tsc --noEmit` ... THEN TS SHALL report zero errors      | test_typescript_strict_compile |
| [INT-0001](../../../intents/INT-0001-project-foundation.md) | AC-3: DB schema defines core tables             | T-003 / WHEN `npx prisma validate` ... THEN SHALL report valid            | test_prisma_schema_valid       |
| [INT-0001](../../../intents/INT-0001-project-foundation.md) | AC-4: Env stubs for X and Threads credentials   | T-004 / WHEN `.env.example` inspected ... THEN SHALL contain placeholders | test_config_env_parsing        |
| [INT-0001](../../../intents/INT-0001-project-foundation.md) | AC-5: At least one unit test passes             | T-007 / WHEN `npm test` ... THEN Vitest SHALL report passing              | test_config_env_parsing        |
| [INT-0001](../../../intents/INT-0001-project-foundation.md) | AC-6: Lint exits cleanly                        | T-006 / WHEN `npm run lint` ... THEN ESLint SHALL exit 0                  | test_lint_clean                |

## Unit Tests

### T-004 / T-007 unit tests

- **Intent:** [INT-0001](../../../intents/INT-0001-project-foundation.md)
- `test_config_env_parsing`: given valid env vars → config object has expected typed properties
- `test_config_missing_vars`: given missing required env vars → config module throws descriptive error
- Stubs: `process.env` mocking via `vi.stubEnv`

## Integration Tests

### Build toolchain integration

- **Intents:** [INT-0001](../../../intents/INT-0001-project-foundation.md)
- `test_typescript_strict_compile`: run `npx tsc --noEmit` → exit code 0
- `test_prisma_schema_valid`: run `npx prisma validate` → exit code 0
- `test_lint_clean`: run `npm run lint` → exit code 0

## End-to-End Tests

- **Status:** not-yet-possible
- Unlocked by: INT-0002 (cross-platform publishing) and INT-0003 (engagement dashboard) — Sprint 0 has no user-facing workflows beyond the landing page. Manual verification of `npm run dev` + browser confirms AC-1.
