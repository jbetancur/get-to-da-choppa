var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  entry: {
    app: ['webpack/hot/dev-server', './src/bootstrap.js']
  },
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Choppa App',
      template: './src/index.html'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'src'),
        exclude: /node_modules|bower_components/
      },
      {
        test: /\.html$/,
        include: path.join(__dirname, 'src'),
        loader: 'raw-loader'
      },
      {
        test: /\.scss$/,
        include: path.join(__dirname, 'src'),
        loader: 'style-loader!css-loader!sass-loader?sourceMap'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        loader: 'file-loader'
      }
    ]
  }
};
