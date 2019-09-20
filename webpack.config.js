const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  mode: 'none',
  devtool: "source-map",
  entry: {
    main :'./src/web/scripts/main.ts',
    common: './src/web/scripts/common.ts'
  },
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: '[name].min.js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  node: {
    fs: 'empty'
  },
  plugins: [
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
    }),
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new CompressionPlugin({
      filename: ".gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 5240,
      minRatio: 0
    }),
  ]
};
