const webpack = require('webpack');
const TerserPlugin = require("terser-webpack-plugin");

const config = {
  mode: process.argv.includes('--production') ? 'production' : 'development',
  entry: {
    index: './src/assets/scripts/index-app.js',
    home: './src/assets/scripts/gulp-modules/home.js',
    contacts: './src/assets/scripts/gulp-modules/contacts.js'
  },
  output: {
    filename: '[name].bundle.js',
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
      {
        test: /\.(glsl|mjs)$/i,
        use: [
          'raw-loader',
          'glslify-loader'
        ]
      }
    ],
  },
};

module.exports = config;
