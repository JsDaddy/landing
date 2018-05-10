const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'none',
  devtool: "source-map",
  entry: {
    main :'./web/scripts/main.ts',
    slick: './web/scripts/slick.min.js',
    common: './web/scripts/common.js',
    'contacts-form': './web/scripts/contacts-form.js',
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
      $: "jquery",
      jQuery: "jquery"
    }),
    new UglifyJSPlugin({ sourceMap: true }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
  ]
};
