import tailwindcss from '@tailwindcss/vite';
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// eslint-disable-next-line import-x/no-default-export
export default defineConfig({
  plugins: [
    tsconfigPaths(),
    // Please make sure that '@tanstack/router-plugin' is passed before '@vitejs/plugin-react'.
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    react(),
    tailwindcss(),
  ],
  // GitHub pages path prefix.
  base: '/trpc-fe-boilerplate-vite',
});
