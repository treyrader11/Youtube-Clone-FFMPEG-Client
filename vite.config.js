import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    open: 'http://localhost:3000/'
  },
  plugins: [react()],
});
