import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  server: {
    https: false, // Make sure this is not forcing HTTPS unless you intend to
    port: 5173,
  },
  plugins: [react()],
});
