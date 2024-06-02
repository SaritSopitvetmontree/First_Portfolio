import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/First_Portfolio/', 
  build: {
    outDir: 'build',
  },
});