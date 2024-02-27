import terser from '@rollup/plugin-terser';
import pkg from './package.json' assert { type: "json" };
import { dts } from "rollup-plugin-dts";

const name = 'seo-analyzer';
const input = 'src/index.js';
const external = [
  'fs',
  'path',
  'jsdom'
];
const globals = {
  fs: 'fs',
  path: 'path',
  jsdom: 'jsdom'
};

export default [
  {
    external,
    input,
    output: { file: pkg.module, format: 'es', globals, inlineDynamicImports: true },
    plugins: [terser()]
  },
  {
    external,
    input,
    output: { file: pkg.main, format: 'umd', name, sourcemap: true, globals, inlineDynamicImports: true },
    plugins: [terser()]
  },
  {
    external,
    input,
    output: { file: pkg.browser, format: 'umd', name, sourcemap: true, globals, inlineDynamicImports: true },
    plugins: [terser()]
  },
  {
    input: "./src/index.d.ts",
    output: [{ file: "dist/seo-analyzer.d.ts", format: "es" }],
    plugins: [dts()],
  },
];
