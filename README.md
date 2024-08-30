# Code Hustler's Boilerplate

Boiler plate FE+BE app that tries to be as simple as possible without compromising on features and safety

## Dependencies

- Deno
  - jsr:@std/assert
  - jsr:@std/testing
  - TODO: maybe do not mention std?

## Features

- General
  - [x] Format with `deno fmt`
  - [x] Code cheks
    - [x] Lint with `deno lint`
    - [x] Type check with `deno check`
    - [x] Tests with `deno test`
    - [x] Tests coverage `deno coverage`
    - [x] Tests benchmarking `deno bench`
  - [ ] Local dependencies (maybe committed to the repo?)
- DB
  - [ ] DB
  - [ ] DB migrations
- API
  - [ ] Routing
    - [ ] 200
    - [ ] 204
    - [ ] redirects
    - [ ] 404
  - [ ] Debugger/Stepping through the code
  - [ ] Logging
  - [ ] Shape validation
  - [ ] Lambdas?
    - lambda states
  - [ ] Jobs
    - job states
  - [ ] Cron
    - job states
  - [ ] S3/Files?
  - [ ] Tests
    - [ ] Api tests
- Deployment
  - [ ] Auto scale group
  - [ ] Health checks
- FE
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
