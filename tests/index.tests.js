// import angular from 'angular';
import 'phantomjs-polyfill';
import '../src/app.js';
import 'angular-mocks/angular-mocks';
import path from 'path';

let context = require.context('../tests', true, /test\.js$/);
context.keys().forEach(context);
