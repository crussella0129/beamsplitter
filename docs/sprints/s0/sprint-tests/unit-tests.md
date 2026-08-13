# Sprint 0 Unit Tests

## T-004 / T-007 Unit Tests

- **Intent:** [INT-0001](../../../intents/INT-0001-project-foundation.md)
- **Suite:** `src/lib/__tests__/config.test.ts`
- **Runner:** Vitest v4.1.10

### Execution Results

1. `returns a valid config when all required env vars are set` — **PASS**
2. `uses default NEXTAUTH_URL when not provided` — **PASS**
3. `throws ConfigError when required env vars are missing` — **PASS**
4. `lists all missing vars in the error message` — **PASS**
5. `throws when env vars are empty strings` — **PASS**

**Total:** 5 passed, 0 failed, 5 total.
