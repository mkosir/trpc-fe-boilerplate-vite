import { createFileRoute } from '@tanstack/react-router';

import { HomePage } from 'modules';

export const Route = createFileRoute('/')({
  component: HomePage,
});
