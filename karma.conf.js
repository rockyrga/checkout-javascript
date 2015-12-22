'use strict';


function listFiles() {
  return [
    'bower_components/jquery/dist/jquery.js',
    'bower_components/angular/angular.js',
    'bower_components/angular-mocks/angular-mocks.js',
    'app/app.js',
    'app/services/checkoutService.js',
    'spec/**/*.js',
  ];
}

module.exports = function (config) {

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: listFiles(),

    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 9000,

    // Start these browsers, currently available:
    browsers: [
      'PhantomJS'
      //'Firefox'
      //'Chrome'
    ],

    // Which plugins to enable
    plugins: [
      'karma-phantomjs-launcher',
      //'karma-chrome-launcher',
      //'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter'
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: true,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_DEBUG,

    reporters: ['progress', 'junit'],

    junitReporter: {
      outputDir: '',
      outputFile: 'test-results.xml',
      suite: 'unit'
    }
  });
};
