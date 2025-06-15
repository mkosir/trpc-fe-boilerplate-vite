import { createRootRouteWithContext, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

import type { reactQueryClient } from '@/common/reactQueryClient';
import type { trpc } from '@/common/trpc-api-boilerplate';

export type RouterAppContext = {
  trpc: typeof trpc;
  reactQueryClient: typeof reactQueryClient;
};

export const Route = createRootRouteWithContext<RouterAppContext>()({
  component: () => (
    <>
      <div className="bg-blue-sky-100/40 text-blue-sky-700 flex gap-4 p-3">
        <Link className="hover:text-blue-sky-800 [&.active]:font-bold" to="/">
          Home
        </Link>
        <Link className="hover:text-blue-sky-800 [&.active]:font-bold" to="/users">
          Users
        </Link>
        <Link className="hover:text-blue-sky-800 [&.active]:font-bold" to="/batches">
          Batches
        </Link>
      </div>
      <div className="p-3">
        <Outlet />
      </div>
      <TanStackRouterDevtools initialIsOpen={false} />
    </>
  ),
});
