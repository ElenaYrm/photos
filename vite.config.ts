import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/test-photos/',
  plugins: [
    react(),
    checker({
      typescript: true,
    }),
  ],
});