# INT-0003 — Engagement Metrics & Comparison Dashboard

<!-- sprint-loop-intent-v2 -->

- **Intent ID:** INT-0003
- **State:** proposed
- **Work evidence:** none
- **Completion evidence:** none
- **Code evidence:** none
- **Test evidence:** none
- **Documentation evidence:** none

## Intent

Provide a dashboard view where users can compare engagement performance of
mirrored posts across X and Threads side-by-side. Metrics are normalized into
platform-agnostic categories ("Reach," "Interaction," "Amplification") while
preserving access to raw platform-specific data.

Data sources:

- **X:** `public_metrics` from API v2 (likes, retweets, replies, quotes).
  Impressions are not reliably available via the public API.
- **Threads:** Insights API (views, likes, replies, reposts, quotes, shares).

Collection is periodic (polling-based) with configurable frequency.

**Boundaries:** Read-only analytics display. No export, no alerting, no
predictive analytics.

**Non-goals:** Competitor benchmarking, sentiment analysis, ad performance.

## Acceptance criteria

1. For each mirrored post, the dashboard shows a side-by-side comparison card
   with normalized engagement categories.
2. Raw platform-specific metrics are accessible via an expandable detail view.
3. Engagement data is refreshed at a configurable interval (default: hourly).
4. A time-series chart shows engagement growth over the first 48 hours after
   posting.
5. Stale or failed metric fetches display a warning indicator, not stale data
   presented as current.

## Rationale

Comparing engagement across platforms is the second half of beamsplitter's
value proposition. Normalizing metrics into broad categories ("Interaction" =
likes + replies on both platforms) avoids misleading apples-to-oranges
comparisons while still surfacing raw data for users who want precision.

## Alternatives

- **Real-time WebSocket streaming:** More responsive but unnecessary complexity
  for hourly metrics; also not supported by either platform API.
- **Embedded third-party analytics widget (e.g., Sprout Social embed):** Fast
  to integrate but locks the UX into someone else's design and limits
  customization.

## Consequences

- X API v2 read costs ($0.005/resource) make high-frequency polling expensive
  at scale; the configurable interval and a per-user polling budget are
  mitigations.
- Threads Insights API only returns data for the authenticated user's own
  posts; this limits the analytics to first-party data (which is the intended
  use case).
- The normalization model is an opinionated design choice — users may disagree
  with category mappings.

## Transition history

- 2026-08-13: created as `proposed`.
