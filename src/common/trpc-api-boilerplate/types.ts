import type { inferRouterOutputs } from '@trpc/server';
import type { AppRouter } from 'trpc-api-boilerplate';

// Not using tRPC API as npm package - https://github.com/mkosir/trpc-api-boilerplate#avoid-publishing-package
// import type { AppRouter } from './api-types';

type RouterOutput = inferRouterOutputs<AppRouter>;

export type User = RouterOutput['user']['create'];
export type Users = RouterOutput['user']['list'];
