/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const UsersLazyImport = createFileRoute('/users')()
const BatchesLazyImport = createFileRoute('/batches')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const UsersLazyRoute = UsersLazyImport.update({
  id: '/users',
  path: '/users',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/users.lazy').then((d) => d.Route))

const BatchesLazyRoute = BatchesLazyImport.update({
  id: '/batches',
  path: '/batches',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/batches.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/batches': {
      id: '/batches'
      path: '/batches'
      fullPath: '/batches'
      preLoaderRoute: typeof BatchesLazyImport
      parentRoute: typeof rootRoute
    }
    '/users': {
      id: '/users'
      path: '/users'
      fullPath: '/users'
      preLoaderRoute: typeof UsersLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/batches': typeof BatchesLazyRoute
  '/users': typeof UsersLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/batches': typeof BatchesLazyRoute
  '/users': typeof UsersLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/batches': typeof BatchesLazyRoute
  '/users': typeof UsersLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/batches' | '/users'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/batches' | '/users'
  id: '__root__' | '/' | '/batches' | '/users'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  BatchesLazyRoute: typeof BatchesLazyRoute
  UsersLazyRoute: typeof UsersLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  BatchesLazyRoute: BatchesLazyRoute,
  UsersLazyRoute: UsersLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/batches",
        "/users"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/batches": {
      "filePath": "batches.lazy.tsx"
    },
    "/users": {
      "filePath": "users.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
