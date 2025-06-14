import { useQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';

import { Loader } from '../common/components';
import { trpc } from '../common/trpc-api-boilerplate';

export const Route = createFileRoute('/batches')({
  component: BatchesComponent,
});

function BatchesComponent() {
  const { data: batches } = useQuery(trpc.batch.list.queryOptions());

  return (
    <div>
      <h3>💊 Batches</h3>
      <div className="my-2 italic">Total No. of batches: {batches?.length}</div>
      {!batches ? (
        <Loader />
      ) : (
        <ul className="list-inside list-disc">
          {batches.map((batch) => (
            <li key={batch.id}>
              {batch.title} - {batch.weight}kg - {batch.purity}%
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
