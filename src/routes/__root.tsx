import { Suspense, lazy } from 'react';

import { Link, Outlet, createRootRoute } from '@tanstack/react-router';

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="flex gap-4 bg-blueSky-100/40 p-3 text-blueSky-700">
        <Link to="/" className="hover:text-blueSky-800 [&.active]:font-bold">
          Home
        </Link>
        <Link to="/users" className="hover:text-blueSky-800 [&.active]:font-bold">
          Users
        </Link>
        <Link to="/batches" className=" hover:text-blueSky-800 [&.active]:font-bold">
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
