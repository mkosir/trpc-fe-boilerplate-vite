import { createLazyFileRoute } from '@tanstack/react-router';

import { UsersPage } from 'modules';

export const Route = createLazyFileRoute('/users')({
  component: UsersPage,
});
