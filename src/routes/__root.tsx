import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { Suspense, lazy } from 'react';

export const Route = createRootRoute({
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
      <TanStackRouterDevtools />
    </>
  ),
});

const TanStackRouterDevtoolsLazy = import.meta.env.PROD
  ? () => null
  : lazy(() =>
      import('@tanstack/router-devtools').then((res) => ({
        default: res.TanStackRouterDevtools,
      })),
    );

const TanStackRouterDevtools = () => (
  <Suspense>
    <TanStackRouterDevtoolsLazy />
  </Suspense>
);
