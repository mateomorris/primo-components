import {svelte} from '@sveltejs/vite-plugin-svelte'
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [svelte()],
  build: {
    target: 'es2015',
    outDir: 'build',
    assetsDir: 'assets',
    cssCodeSplit: false,
    rollupOptions: {
      input: '/src/lib/index.js',  // JavaScript entry point of your library
    },
		lib: {
      entry: '/src/lib/index.js',  // point this to the entry point of your library
      name: 'MyLibrary',  // this will be the global variable name in non-module environments
    },
  },
});
