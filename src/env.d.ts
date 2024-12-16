/* eslint-disable @typescript-eslint/consistent-type-definitions */
// eslint-disable-next-line spaced-comment
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PUBLIC_TRPC_API: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
