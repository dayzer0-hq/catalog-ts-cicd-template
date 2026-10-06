# catalog-ts-cicd-template

A small **TypeScript + NestJS** payments service for DayZer0 CI/CD briefs. Your project
repository is provisioned from this template: the service, its Jest suite and its build
command already exist and pass. **The pipeline around them does not — building it is your
project.** There is deliberately no `.github/workflows` directory here.

## What's here

- `src/` — the NestJS app: `GET /healthz`, `POST /payments`, business logic in
  `payments.service.ts`.
- `src/reports.service.ts` — carries a **seeded handful of lint violations and one loose
  type** (`any`). Some briefs have you clean exactly this up; it is deliberate, not an
  accident. Tests and the build pass with it in place — only `npm run lint` objects.
- `test/` — the Jest suite (ts-jest + supertest), passing on Node 20 from a clean clone.
- `package-lock.json` — committed on purpose; CI installs with `npm ci`.

## Requirements

- Node 20 or newer.

## Run it

```bash
npm ci
npm run build
npm start
```

Then, in another terminal:

```bash
curl http://localhost:8080/healthz
# {"status":"ok"}
```

## Test it

```bash
npm test          # passes
npm run lint      # FAILS today — the violations are the seeded starting state
npm run typecheck # passes (the loose type is legal until the config is strict)
```

## What you add

Your tickets have you build the GitHub Actions pipeline: workflows, matrices or lint gates
as your brief asks. Beyond what a ticket names (for example, cleaning the seeded
violations), do not add features to the service. One ticket, one branch (`issue-N-<slug>`),
one pull request with `Closes #N`.
