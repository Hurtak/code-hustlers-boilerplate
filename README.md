# Code Hustler's Boilerplate

Boiler plate FE+BE app that tries to be as simple as possible without compromising on features and safety

## Features

- General
  - [x] Format with `deno fmt`
  - [x] Lint with `deno lint`
    - [?] Demo's missing imports & exports sorting
    - [?] Demo's missing floating promises rule https://github.com/denoland/deno_lint/issues/303
  - [x] Type check with `deno check`
  - [x] Tests with `deno test`
    - [?] BDD, but when using it the VSCode testing integration stops working
    - [?] Snapshot tests little awkward, and they miss inline snapshots
    - [ ] Code coverage
  - [ ] Local dependencies (maybe committed to the repo?)
  - [ ] Jupyter notebooks
    - [?] Brew installed Deno <> Jupyter incorrect path https://github.com/denoland/deno/issues/25306
    - [?] Most chart libraries depend on browser globals, which makes it little tricky to plug in
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
