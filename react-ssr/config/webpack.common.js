const { join } = require('path');
const webpack = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');
require('dotenv').config();

const esLintPlugin = isDev =>
  isDev
    ? []
    : [
      new ESLintPlugin({
        extensions: ['js', 'jsx', 'ts', 'tsx'],
        failOnError: true,
      }),
    ];

function createConfig({ target, development }) {
  let root = join(__dirname, '../');
  let src = join(root, 'src');
  let name = '[name].js'
  let dist = join(root, 'dist', target);

  let IS_SERVER = target === 'server';
  let IS_CLIENT = target === 'client';

  return {
    mode: development ? 'development' : 'production',
    devtool: development ? 'inline-source-map' : 'source-map',
    name: target,
    entry: join(src, target),
    output: {
      path: dist,
      filename: name,
      chunkFilename: name,
      clean: true,
    },

    resolve: {
      modules: [
        'node_modules',
        'src'
      ],
      extensions: ['.tsx', '.ts', '.js'],
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: 'ts-loader',
        },
      ],
    },

    plugins: [
      ...esLintPlugin(development),
      new webpack.DefinePlugin({
        IS_CLIENT: JSON.stringify(IS_CLIENT),
        IS_SERVER: JSON.stringify(IS_SERVER),
        'typeof window': JSON.stringify(IS_CLIENT ? 'object' : 'undefined'),
        API_KEY: JSON.stringify(process.env.API_KEY),
      }),
    ]
  };
}

module.exports = {
  createConfig,
};