// Karma configuration

module.exports = function(config) {
    config.set({
        // ... normal karma configuration
        files: [
            './node_modules/phantomjs-polyfill/bind-polyfill.js',
            'tests/index.tests.js'
        ],
        reporters: ['spec'],
        browsers: [ 'PhantomJS' ], //run in Chrome, PhantomJS
        singleRun: true, //just run once by default
        frameworks: [ 'jasmine' ], //use the jasmime test framework
        preprocessors: {
            // add webpack as preprocessor
            'tests/index.tests.js': ['webpack', 'sourcemap']
        },
        webpack: {
            // karma watches the test entry points
            // (you don't need to specify the entry option)
            // webpack watches dependencies

            // webpack configuration
            devtool: 'inline-source-map', //just do inline source maps instead of the default
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
        },
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        watch: true,
        webpackMiddleware: {
            // webpack-dev-middleware configuration
            // i. e.
            noInfo: true
        }
    });
};
