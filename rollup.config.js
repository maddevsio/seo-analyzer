import { rollup } from 'rollup';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

const name = 'seo-analyzer';
const input = 'src/index.js';

export default [
  {
    input,
    output: { file: pkg.module, format: 'es' },
    plugins: [terser()]
  },
  {
    input,
    output: { file: pkg.main, format: 'umd', name, sourcemap: true },
    plugins: [terser()]
  },
  {
    input,
    output: { file: pkg.browser, format: 'umd', name, sourcemap: true },
    plugins: [terser()]
  }
];
