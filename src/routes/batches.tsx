import { createLazyFileRoute } from '@tanstack/react-router';

import { BatchesPage } from 'modules';

export const Route = createLazyFileRoute('/batches')({
  component: BatchesPage,
});
