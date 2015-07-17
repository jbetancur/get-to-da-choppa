// Karma configuration
var path = require('path');

module.exports = function (config) {
  config.set({
    // ... normal karma configuration
    files: [
      'node_modules/phantomjs-polyfill/bind-polyfill.js',
      'node_modules/babel-core/browser-polyfill.min.js',
      'node_modules/sinon/pkg/sinon.js',
      'node_modules/jasmine-sinon/lib/jasmine-sinon.js',
      './tests/index.tests.js'
    ],
    reporters: ['progress', 'coverage'],
    browsers: ['PhantomJS'], //run in Chrome, PhantomJS
    singleRun: true, //just run once by default
    frameworks: ['jasmine'], //use the jasmime test framework
    preprocessors: {
      // add webpack first as preprocessor
      './tests/index.tests.js': ['webpack', 'sourcemap']
    },
    webpack: {
      // karma watches the test entry points
      // webpack watches dependencies
      // webpack configuration
      devtool: 'inline-source-map', //just do inline source maps instead of the default
      module: {
        loaders: [
          {
            test: [path.join(__dirname, 'src'), path.join(__dirname, 'tests')],
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
        ],
        preLoaders: [{
          test: /\.js$/,
          include: [path.resolve(__dirname, 'src')],
          loader: 'isparta-loader'
        }]
      }
    },
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    watch: true,
    webpackMiddleware: {
      // webpack-dev-middleware configuration
      noInfo: true
    },
    coverageReporter: {
      type: 'html',
      dir: 'coverage/',
      instrumenters: {
        isparta: require('isparta')
      },
      instrumenter: {
        'src/**/*.js': 'isparta'
      }
    },
    plugins: [
      require('karma-coverage'),
      require('karma-webpack'),
      require('karma-jasmine'),
      require('karma-phantomjs-launcher'),
      require('karma-babel-preprocessor'),
      require('babel-loader'),
      require('karma-sourcemap-loader'),
      require('isparta-loader')
    ]
  });
};
