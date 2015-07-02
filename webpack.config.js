var HtmlWebpackPlugin = require('html-webpack-plugin');

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
            { test: /\.js$/,
              loader: 'babel-loader',
              exclude: /node_modules|bower_components/
            },
            {
              test: /\.html$/,
              loader: 'raw-loader'
            },
            {
              test: /\.scss$/,
              loader: 'style-loader!css-loader!sass-loader?sourceMap'
            },
            {
              test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
              loader: 'file-loader'
            }
        ]
    }
};
