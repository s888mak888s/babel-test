var webpack = require("webpack");
module.exports = {
  context: __dirname + '/src',
  // ビルドの基点となるファイル
  entry: {
    javascript: './js/entry.js'
  },
  // ビルド後のファイル
  output: {
    path: __dirname + '/src/dist',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: 'src',
    port: 3000,
    inline: true,
    hot: true
  },
  devtool: '#source-map',
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ],
  // 拡張子が.jsのファイルはbabel-loaderを通してビルド(node_modulesは除外)
  module: {
    loaders: [
      {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }
  ]
  }
};
