import { BatchesPage } from 'modules';

import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/batches')({
  component: BatchesPage,
});
