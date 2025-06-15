// This script is used to import the tRPC API types directly from the GitHub repository,
// instead of consuming the tRPC API as an npm package.
// See: https://github.com/mkosir/trpc-api-boilerplate?tab=readme-ov-file#avoid-publishing-the-package
//
// Only use this script if you're not publishing the tRPC API to npm.
// It fetches the built API files from the repo and writes them into your local project.
import fs from 'fs';
import path from 'path';

import { Octokit } from 'octokit';

type TrpcApiDist = {
  owner: string;
  repository: string;
  filePaths: ReadonlyArray<{
    sourcePath: string;
    targetPath: string;
  }>;
};

const TRPC_API_DIST = {
  owner: 'mkosir',
  repository: 'trpc-api-boilerplate',
  filePaths: [
    {
      sourcePath: 'trpc-api-export/dist/index.d.ts',
      targetPath: 'src/common/trpc-api-boilerplate/api-types/index.d.ts',
    },
    {
      sourcePath: 'trpc-api-export/dist/index.js',
      targetPath: 'src/common/trpc-api-boilerplate/api-types/index.js',
    },
  ],
} as const satisfies TrpcApiDist;

const trpcApiImport = async () => {
  const octokit = new Octokit({
    // Provide token if using private GitHub repository
    // auth: <GITHUB_TOKEN>,
  });

  await Promise.all(
    TRPC_API_DIST.filePaths.map(async (trpcApiFilePath) => {
      const octokitResponse = await octokit.rest.repos.getContent({
        owner: TRPC_API_DIST.owner,
        repo: TRPC_API_DIST.repository,
        path: trpcApiFilePath.sourcePath,
      });

      if (!('content' in octokitResponse.data)) {
        throw new Error(`Error: No content available to download - File ${trpcApiFilePath.sourcePath}.`);
      }

      const decodedFileContent = Buffer.from(octokitResponse.data.content, 'base64');

      const targetDir = path.dirname(trpcApiFilePath.targetPath);
      fs.mkdirSync(targetDir, { recursive: true });

      fs.writeFileSync(trpcApiFilePath.targetPath, decodedFileContent);
    }),
  );

  console.log('\x1b[32m✅ tRPC API successfully imported.\x1b[0m');
};

trpcApiImport().catch((error: unknown) => {
  console.error('\x1b[31m❌ Failed to import tRPC API:\x1b[0m', error);

  process.exit(1);
});
