import { HomePage } from 'modules';
import React from 'react';

import { reactQueryClient } from './common/reactQueryClient';
import './common/styles/global.css';
import { trpcApiBoilerplateClient, trpcApiBoilerplateClientProvider } from './common/trpc-api-boilerplate';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ReactDOM from 'react-dom/client';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <trpcApiBoilerplateClient.Provider client={trpcApiBoilerplateClientProvider} queryClient={reactQueryClient}>
      <QueryClientProvider client={reactQueryClient}>
        <HomePage />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </trpcApiBoilerplateClient.Provider>
  </React.StrictMode>,
);
