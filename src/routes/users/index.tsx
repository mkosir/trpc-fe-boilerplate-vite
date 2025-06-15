import { useQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';

import { Loader } from '../../common/components';
import { trpc } from '../../common/trpc-api-boilerplate';

import { UserCard } from './components/UserCard';

export const Route = createFileRoute('/users/')({
  component: UsersComponent,
});

function UsersComponent() {
  const { data: users } = useQuery(trpc.user.list.queryOptions());

  return (
    <div>
      <h3>👤 Users</h3>
      <div className="mt-4 flex flex-wrap">
        {!users ? <Loader /> : users.map((user) => <UserCard key={user.id} user={user} />)}
      </div>
    </div>
  );
}
