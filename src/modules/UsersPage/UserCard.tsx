import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { User, Users } from '../../common/trpc-api-boilerplate';
import { trpc } from '../../common/trpc-api-boilerplate';

export type UserCardProps = {
  user: User;
};

export const UserCard = ({ user }: UserCardProps) => {
  const queryClient = useQueryClient();

  const handleUserDeleteSuccess = async (users: Users) => {
    console.info('Deleted user: ', users);
    await queryClient.invalidateQueries({ queryKey: trpc.user.list.queryOptions().queryKey });
  };

  const { mutate: mutateDeleteUser, isPending: isDeletingUser } = useMutation(
    trpc.user.destroy.mutationOptions({ onSuccess: handleUserDeleteSuccess }),
  );

  const handleUserDelete = () => {
    mutateDeleteUser({ id: user.id });
  };

  return (
    <div className="bg-blue-sky-50/5 shadow-blue-sky-500/60 mr-4 mb-4 flex w-72 justify-between rounded-md p-3 shadow-sm">
      <div>
        <div>{user.name}</div>
        <div className="text-gray-400 italic">{user.username}</div>
        <div className="capitalize">{user.role}</div>
        <button
          className="bg-blue-sky-400 hover:bg-blue-sky-500 active:bg-blue-sky-600 rounded-sm p-0.5 px-2 text-xs text-white"
          disabled={isDeletingUser}
          onClick={handleUserDelete}
        >
          {isDeletingUser ? <span className="animate-pulse">Deleting...</span> : 'Delete'}
        </button>
      </div>
      <img alt={user.username} className="ml-4 h-24 rounded-sm" src={user.imageUrl ?? 'no-user.jpg'} />
    </div>
  );
};
