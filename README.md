# Code Hustler's Boilerplate

Boiler plate FE+BE app that tries to

- be as simple as possible
- have as little dependencies as possible
- without compromising on features and safety

## Dependencies

- Deno
  - jsr:@std/assert
  - jsr:@std/testing
  - TODO: maybe do not mention std?

## Features

- General
  - [x] Format with `deno fmt`
  - [x] Code checks
    - [x] Lint with `deno lint`
    - [x] Type check with `deno check`
    - [x] Tests with `deno test`
    - [x] Tests coverage `deno coverage`
    - [x] Tests benchmarking `deno bench`
  - [x] Local dependencies
- API
  - [x] Web server with `effect/platform`
    - [x] Logging with `effect`
    - [x] Route shape validation with `effect`
  - [x] Typed environment variables and .env files support
  - [x] Debugger - add `--inspect-wait` parameter and connect with browser dev tools
  - [ ] Api tests
  - [ ] Auth
- DB
  - sqlite vs postgress?
  - what about the new sql thing
    - edge db?
  - [ ] DB
  - [ ] DB migrations
- Infra
  - [ ] Lambdas?
    - lambda states
  - [ ] Jobs
    - job states
  - [ ] Cron
    - job states
  - [ ] S3/Files?
- Deployment
  - [ ] Auto scale group
  - [ ] Health checks
- FE
  - [ ] share with BE the api stuff https://hono.dev/docs/concepts/stacks#client
  - [ ] FE specific Lint
    - [ ] Demo's missing React rules linting
  - [ ] React
  - [ ] Code sharing (types and validators with API)

## Notes

- Formatting
  - Works out of the box
  - Missing import/export sorting
- Lint with `deno lint`
  - Demo's missing floating promises rule https://github.com/denoland/deno_lint/issues/303
  - No plugins (planned)
  - No React rules
- Type checking
  - Just works
- Testing
  - BDD, but when using it the VSCode testing integration stops working
  - Snapshot tests little awkward (you need to add --allow-read --allow-write, watch mode is not able to update the
    snapshots), they miss inline snapshots
  - Coverage is not able to include files without tests (https://github.com/denoland/deno/issues/14281)
  - Included benchmarking tool
- [ ] Jupyter notebooks
  - [?] Brew installed Deno <> Jupyter incorrect path https://github.com/denoland/deno/issues/25306
  - [?] Most chart libraries depend on browser globals, which makes it little tricky to plug in
