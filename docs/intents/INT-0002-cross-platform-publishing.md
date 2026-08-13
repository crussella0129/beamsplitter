# INT-0002 — Cross-Platform Post Publishing

<!-- sprint-loop-intent-v2 -->

- **Intent ID:** INT-0002
- **State:** proposed
- **Work evidence:** none
- **Completion evidence:** none
- **Code evidence:** none
- **Test evidence:** none
- **Documentation evidence:** none

## Intent

Enable users to compose a single post and publish it simultaneously (or
near-simultaneously) to both X (Twitter) and Threads from the beamsplitter
dashboard. The system must handle the divergent API contracts: X API v2
`POST /2/tweets` with OAuth 2.0 PKCE, and Threads' two-step container model
(`POST /{user-id}/threads` → `POST /{user-id}/threads_publish`) with Meta
OAuth 2.0.

**Boundaries:** Text-only posts for the initial implementation. Media upload
support (images, video, carousel) is a follow-on intent.

**Non-goals:** Scheduling, drafts, approval workflows, and bulk publishing.

## Acceptance criteria

1. A user can connect their X account via OAuth 2.0 PKCE and their Threads
   account via Meta OAuth 2.0 from the dashboard.
2. A "Compose" form accepts text content and lets the user select target
   platforms.
3. Submitting the form creates a `post` record and dispatches publish jobs
   to each selected platform.
4. On success, the post record stores the platform-specific post ID for each
   target and shows a confirmation with links to the live posts.
5. On failure, the post record captures the error and the user sees a
   meaningful error message with a retry option.

## Rationale

This is the core value proposition of beamsplitter — "write once, post
everywhere." Starting with text-only keeps the scope manageable while proving
out the API integration patterns and error-handling model that media support
will extend later.

## Alternatives

- **Client-side direct posting:** Simpler but exposes API credentials in the
  browser and can't handle retry/queueing.
- **Third-party aggregator SDK (Ayrshare, PostEverywhere):** Abstracts API
  complexity but adds a vendor dependency, ongoing cost, and limits
  customization of the user experience.

## Consequences

- X API v2 posts cost ~$0.015–0.20 per post under pay-per-use pricing; the
  app must surface cost awareness to users or rate-limit posting.
- Threads API requires Meta App Review before production access; development
  can use test accounts, but production launch depends on review approval.
- Token management (refresh flows) becomes a critical reliability concern.

## Transition history

- 2026-08-13: created as `proposed`.
