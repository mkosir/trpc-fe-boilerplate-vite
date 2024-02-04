import { StrictMode } from 'react';

import { reactQueryClient } from './common/reactQueryClient';
import './common/styles/global.css';
import { trpcApiBoilerplateClient, trpcApiBoilerplateClientProvider } from './common/trpc-api-boilerplate';
import { routeTree } from './routeTree.gen';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider, createHashHistory, createRouter } from '@tanstack/react-router';
import ReactDOM from 'react-dom/client';

// GitHub pages - use hash routing since server doesn't support rewrites to index.html for HTTP requests.
const hashHistory = createHashHistory();

const router = createRouter({ routeTree, history: hashHistory });

declare module '@tanstack/react-router' {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Register {
    router: typeof router;
  }
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <trpcApiBoilerplateClient.Provider client={trpcApiBoilerplateClientProvider} queryClient={reactQueryClient}>
        <QueryClientProvider client={reactQueryClient}>
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </trpcApiBoilerplateClient.Provider>
    </StrictMode>,
  );
}
