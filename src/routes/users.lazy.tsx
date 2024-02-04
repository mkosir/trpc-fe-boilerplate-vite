import { UsersPage } from 'modules';

import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/users')({
  component: UsersPage,
});
