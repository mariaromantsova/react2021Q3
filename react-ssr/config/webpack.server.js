module.exports = ({ development }) => {
  const config = require('./webpack.common').createConfig({
    target: 'server', development
  });

  return {
    ...config,

    module: {
      ...config.module,

      rules: [
        ...config.module.rules,

        {
          test: /\.(css|scss)$/,
          use: 'null-loader'
        }
      ]
    },

    externals: {
      'express': 'commonjs express',
      'react': 'commonjs react',
      'react-dom/server': 'commonjs react-dom/server',
      'react-router': 'commonjs react-router',
      'react-router-dom': 'commonjs react-router-dom'
    },
  }
};