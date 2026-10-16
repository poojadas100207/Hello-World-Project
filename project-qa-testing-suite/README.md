# Project QA Testing Suite

Automated quality checks for the Express onboarding API and the browser weather project.

## Test layers

- Unit: pure learning functions and response contracts
- Integration: HTTP request through Express and response validation
- Manual: browser checks documented in `MANUAL-CHECKLIST.md`
- Coverage: run `npm test -- --coverage` after installing dependencies

## Setup

```bash
npm install
npm test
```

## Exit criteria

Every pull request must pass the automated suite, have no open critical bugs, and include a manual-checklist result when user-facing behavior changes.
