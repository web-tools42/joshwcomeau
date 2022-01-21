import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';

export default {
  entry: 'src/index.js',
  format: 'iife',
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    commonjs(),
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],
  dest: 'lib/index.js',
}
