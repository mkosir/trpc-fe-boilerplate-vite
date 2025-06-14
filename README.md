# tRPC Frontend Boilerplate ![Heisenberg](/misc/heisenberg_75.png)

[![CI][ci-badge]][ci-url]

Minimal [tRPC](https://trpc.io/) frontend Vite boilerplate for projects with separate backend and frontend repositories. Easily consume fully typesafe APIs.

Monorepos are great, but sometimes the architecture requires separating the backend and frontend into distinct repositories.

### Why use this?

This boilerplate is ideal when you want to separate:

- **Domain/business logic** – expose only what needs to be exposed through the API.
- **Developer responsibilities** – for larger teams/companies.
- **CI/CD pipelines** – manage PRs, issues, and deployments independently.

## Running

_Easily set up a local development environment_

- Clone the repo
- Run `npm install`
- Run `npm run dev`
- Use the [tRPC API package](https://www.npmjs.com/package/trpc-api-boilerplate) in your app 🚀

## Import tRPC API

There are two ways to import tRPC API types from the backend repo:

1. Install the npm package:  
   `npm install trpc-api-boilerplate`  
   _(currently [set](https://github.com/mkosir/trpc-fe-boilerplate-vite/blob/main/src/common/trpc-api-boilerplate/client/index.ts#L4) as the default option)_

2. Run the script:  
   `npm run trpc-api-import`  
   _(uncomment [this line](https://github.com/mkosir/trpc-fe-boilerplate-vite/blob/main/src/common/trpc-api-boilerplate/client/index.ts#L8))_

## Example Backend Repo

- [tRPC API Boilerplate](https://github.com/mkosir/trpc-api-boilerplate)

<!-- Badges -->

[ci-badge]: https://github.com/mkosir/trpc-fe-boilerplate-vite/actions/workflows/main.yml/badge.svg
[ci-url]: https://github.com/mkosir/trpc-fe-boilerplate-vite/actions/workflows/main.yml
