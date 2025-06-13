import { createFileRoute } from '@tanstack/react-router';

import { BatchesPage } from 'modules';

export const Route = createFileRoute('/batches')({
  component: BatchesPage,
});
