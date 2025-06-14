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
- Use tRPC API [package](https://www.npmjs.com/package/trpc-api-boilerplate) in your app 🚀

## Import tRPC API

There are 2 ways to import tRPC API types from backend repo:

1. Install npm package `npm i trpc-api-boilerplate` (currently [set](https://github.com/mkosir/trpc-fe-boilerplate-vite/blob/main/src/common/trpc-api-boilerplate/client/index.ts#L4) as a default option)
2. Run npm script `npm run trpc-api-import` ([uncomment line](https://github.com/mkosir/trpc-fe-boilerplate-vite/blob/main/src/common/trpc-api-boilerplate/client/index.ts#L8))

## Example Repo

Example backend API repository - [tRPC API Boilerplate](https://github.com/mkosir/trpc-api-boilerplate)

<!-- Badges -->

[ci-badge]: https://github.com/mkosir/trpc-fe-boilerplate-vite/actions/workflows/main.yml/badge.svg
[ci-url]: https://github.com/mkosir/trpc-fe-boilerplate-vite/actions/workflows/main.yml
