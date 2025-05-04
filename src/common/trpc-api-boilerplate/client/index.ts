import { createTRPCClient, httpBatchLink } from '@trpc/client';
import { createTRPCOptionsProxy } from '@trpc/tanstack-react-query';
import superjson from 'superjson';
import type { AppRouter } from 'trpc-api-boilerplate';

import { reactQueryClient } from '../../reactQueryClient';
// Uncomment bellow line if not importing tRPC API from npm package - https://github.com/mkosir/trpc-api-boilerplate#avoid-publishing-package
// import type { AppRouter } from '../api-types';

const trpcClient = createTRPCClient<AppRouter>({
  links: [httpBatchLink({ url: import.meta.env.VITE_PUBLIC_TRPC_API, transformer: superjson })],
});

export const trpc = createTRPCOptionsProxy<AppRouter>({
  client: trpcClient,
  queryClient: reactQueryClient,
});
