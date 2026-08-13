# Sprint 0 Research Report

## Intents Reviewed

- [INT-0001](../../../intents/INT-0001-project-foundation.md) — created; relevance: direct sprint target; current state: proposed
- [INT-0002](../../../intents/INT-0002-cross-platform-publishing.md) — created; relevance: architectural decisions influence scaffold; current state: proposed
- [INT-0003](../../../intents/INT-0003-engagement-dashboard.md) — created; relevance: data model must accommodate metrics from day one; current state: proposed

## 1. Sprint Goal

Establish the complete project foundation for beamsplitter — a cross-platform
social media mirroring and engagement comparison application. Sprint 0 delivers
a working Next.js + TypeScript scaffold with a database schema, environment
configuration, linting/testing tooling, and a placeholder landing page. No live
API integrations are implemented; the goal is a buildable, testable, lintable
codebase that future sprints extend.

## 2. Existing Code Survey

| File      | Relevance | Notes                                                                                                                                                    |
| --------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| README.md | high      | Project description: "mirrored posts on Twitter-like social media platforms (X & Threads) and compare engagement performance over time" — confirms scope |
| LICENSE   | medium    | Apache 2.0 — permissive, compatible with all planned dependencies                                                                                        |

This is a greenfield repository; no existing application code exists.

## 3. External Sources

- [X API v2 Documentation](https://developer.x.com/en/docs/twitter-api) — OAuth 2.0 PKCE, POST /2/tweets, public_metrics, pay-per-use pricing ($0.005/read, $0.015–0.20/write)
- [Threads API Documentation](https://developers.facebook.com/docs/threads) — two-step container model, Meta OAuth 2.0, free API, 250 posts/24h rate limit
- [Next.js Documentation](https://nextjs.org/docs) — App Router, API routes, TypeScript support

## 4. Risks, Unknowns, Dependencies

- **Risk:** X API v2 pay-per-use costs may make high-frequency metrics polling
  expensive at scale. Mitigation: configurable polling intervals, per-user
  budgets.
- **Risk:** Threads API requires Meta App Review for production; development
  can proceed with test accounts. Mitigation: start the review process early,
  design the app to degrade gracefully if Threads is unavailable.
- **Unknown:** Optimal database schema for storing platform-divergent metrics
  in a normalized form. Sprint 0 establishes the core tables; schema evolution
  is expected.
- **Dependency:** Node.js >= 20, PostgreSQL >= 15, npm >= 10. Docker Compose for
  local database.

## 5. Recommended Approach

Primary: Next.js 15 App Router with TypeScript strict mode. API routes for the
backend. PostgreSQL via Prisma ORM for type-safe database access. Vitest for
unit testing. ESLint + Prettier for code quality. Docker Compose for local
PostgreSQL.

Alternative considered: Vite + Express — rejected because it doubles deployment
complexity for an early-stage project. Next.js API routes provide sufficient
backend capability until the project needs dedicated microservices.

Alternative considered: Drizzle ORM — strong type inference but Prisma has a
larger ecosystem, better migration tooling, and broader team familiarity.

Rationale: Minimizing the number of deployment units and maximizing type safety
across the full stack reduces Sprint 0 complexity while leaving room for future
decomposition.
