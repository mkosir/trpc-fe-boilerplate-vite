import { Link, Outlet, createRootRoute } from '@tanstack/react-router';
import { Suspense, lazy } from 'react';

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="flex gap-4 bg-blueSky-100/40 p-3 text-blueSky-700">
        <Link className="hover:text-blueSky-800 [&.active]:font-bold" to="/">
          Home
        </Link>
        <Link className="hover:text-blueSky-800 [&.active]:font-bold" to="/users">
          Users
        </Link>
        <Link className="hover:text-blueSky-800 [&.active]:font-bold" to="/batches">
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
