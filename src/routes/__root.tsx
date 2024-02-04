import { Link, Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

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
