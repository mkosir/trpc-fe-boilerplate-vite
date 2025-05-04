import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { SharedSquareObject, USER_ROLES } from 'trpc-api-boilerplate';

import { trpc } from '../../common/trpc-api-boilerplate';

export const HomePage = () => {
  const [dbSeedMessage, setDbSeedMessage] = useState<null | string>(null);

  const { mutate: mutateSeedDb } = useMutation(trpc.util.seedDb.mutationOptions({ onSuccess: setDbSeedMessage }));

  console.info('Exported from tRPC backend repo - SharedSquareObject: ', SharedSquareObject);
  console.info('Exported from tRPC backend repo - USER_ROLES: ', USER_ROLES);
  console.info('https://github.com/mkosir/trpc-api-boilerplate/blob/main/trpc-api-export/builder/index.ts');

  return (
    <div className="mt-10 flex justify-center text-center">
      <div>
        <img
          alt="heisenberg"
          className="mx-auto mb-1 w-[110px]"
          src="https://raw.githubusercontent.com/mkosir/trpc-fe-boilerplate-vite/main/misc/heisenberg.png"
        />
        <div className="mb-1 text-lg font-medium">tRPC Frontend Boilerplate</div>
        <button
          className="bg-blue-sky-400 hover:bg-blue-sky-500 active:bg-blue-sky-600 mb-5 rounded-sm p-1 px-3 text-sm text-white"
          onClick={() => mutateSeedDb()}
        >
          Seed DB
        </button>
        {dbSeedMessage && (
          <div
            className="animate-text-appear text-blue-sky-300 text-sm opacity-0"
            onAnimationEnd={() => setDbSeedMessage(null)}
          >
            {dbSeedMessage}
          </div>
        )}
      </div>
    </div>
  );
};
