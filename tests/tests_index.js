// import angular from 'angular';
// import '../src/app/app.js';
// import 'angular-mocks/angular-mocks';
import 'phantomjs-polyfill';

// window.mock = angular.mock;
//
// angular.module('choppaApp').requires.push('ngMock');

var context = require.context('../src', true, /test\.js$/);
context.keys().forEach(context);
