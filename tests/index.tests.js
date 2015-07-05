// import angular from 'angular';
import 'phantomjs-polyfill';
import '../src/app.js';
import 'angular-mocks/angular-mocks';

var context = require.context('../src', true, /test\.js$/);
context.keys().forEach(context);
