import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { transform as esbuildTransform } from 'esbuild';

// React Native projects use JSX in .js files. Vite's default import-analysis
// plugin can't parse JSX in .js, so we pre-transform those files to valid JS
// before any other plugin sees them.
const jsJsxPlugin = {
  name: 'js-as-jsx',
  enforce: 'pre',
  async transform(code, id) {
    if (id.endsWith('.js') && !id.includes('node_modules') && !id.includes('?')) {
      const result = await esbuildTransform(code, { loader: 'jsx', target: 'esnext' });
      return { code: result.code, map: result.map };
    }
  },
};

export default defineConfig({
  plugins: [react({ include: /\.(js|jsx)$/ }), jsJsxPlugin],
  resolve: {
    alias: {
      'react-native': 'react-native-web',
    },
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: true,
  },
});
