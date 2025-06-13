import { createFileRoute } from '@tanstack/react-router';

import { UsersPage } from 'modules';

export const Route = createFileRoute('/users')({
  component: UsersPage,
});
