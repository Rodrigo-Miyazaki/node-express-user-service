// Karma configuration
// Generated on Sun May 31 2020 16:30:17 GMT-0300 (GMT-03:00)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine','browserify'],


    // list of files / patterns to load in the browser
    files: [
      'test/**/*.spec.js'
    ],

    exclude: [
    ],

    preprocessors: {
      'src/**/*.js': ['browserify'],
      'test/**/*.js': ['browserify']
    },
    browserify: {
      debug: true,
      transform: [ 'brfs' ],
      configure: function(bundle) {
        bundle.on('prebundle', function() {
          bundle.external('foobar');
        });
      }
    },
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    // Combine multiple reporters
   plugins: [
        require ('karma-browserify'),
        require('karma-jasmine'),
        require('karma-chrome-launcher'),
        require('karma-spec-reporter'),
        require('karma-jasmine-html-reporter')
    ],
    
    reporters: ['spec','kjhtml'],
    port: 9876,
    colors: true,
    
    logLevel: config.LOG_DISABLE,
    autoWatch: true,
    browsers: ['Chrome'],
    client: {
       clearContext: false
    },
    
    singleRun: false,
    concurrency: Infinity,

  })
}
