import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/batches')({
  component: BatchesComponent,
  loader: ({ context: { trpc, reactQueryClient } }) => reactQueryClient.ensureQueryData(trpc.batch.list.queryOptions()),
});

function BatchesComponent() {
  const batches = Route.useLoaderData();

  return (
    <div>
      <h3>💊 Batches</h3>
      <div className="my-2 italic">Total No. of batches: {batches.length}</div>
      <ul className="list-inside list-disc">
        {batches.map((batch) => (
          <li key={batch.id}>
            {batch.title} - {batch.weight}kg - {batch.purity}%
          </li>
        ))}
      </ul>
    </div>
  );
}
