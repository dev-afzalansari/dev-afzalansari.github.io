import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  root: './src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: './src/index.html',
        simpleJournalPP: './src/projects/simple-journal/privacy-policy.html',
        basketRushPP: './src/projects/basket-rush/privacy-policy.html',
      }
    }
  }
});
