const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");


module.exports = ({ development }) => {
  const config = require('./webpack.common').createConfig({
    target: 'client', development
  });

  return {
    ...config,

    module: {
      ...config.module,

      rules: [
        ...config.module.rules,

        {
          test: /\.(css|scss)$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
          use: ["file-loader"],
        },
      ],
    },

    plugins: [
      ...config.plugins,

      new MiniCssExtractPlugin({
        filename: 'main.css',
        // filename: '[hash:16].css',
      }),
    ],
    optimization: {
      minimizer: [
        new CssMinimizerPlugin(),
      ],
    },
  };
}
