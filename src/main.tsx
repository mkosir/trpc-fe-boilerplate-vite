import { QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createHashHistory, createRouter } from '@tanstack/react-router';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { reactQueryClient } from './common/reactQueryClient';
import { trpc } from './common/trpc-api-boilerplate/client';
import { routeTree } from './routeTree.gen';

import './common/styles/global.css';

// GitHub pages - use hash routing since server doesn't support rewrites to index.html for HTTP requests.
const hashHistory = createHashHistory();

const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  context: {
    trpc,
    reactQueryClient,
  },
  history: hashHistory,
});

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Register {
    router: typeof router;
  }
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <QueryClientProvider client={reactQueryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </StrictMode>,
  );
}
