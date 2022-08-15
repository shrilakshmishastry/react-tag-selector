import uglify from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';
import scss from 'rollup-plugin-scss';

export default {
  input: 'src/tagSelector/index.js',
  output: {
    file: 'dist/index.js',
    globals: [
      'react',
      'prop-types'
    ]
  },
  external: [
    'react',
    'prop-types'
  ],
  plugins: [
    scss({
      output: 'dist/style.css',
      failOnError: true,
      outputStyle: "compressed",
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    process.env.NODE_ENV === 'production' && uglify(),
  ]
}