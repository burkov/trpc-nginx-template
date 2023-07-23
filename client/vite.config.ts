import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/trpc': 'http://localhost:2022',
    },
  },
  plugins: [react()],
});
