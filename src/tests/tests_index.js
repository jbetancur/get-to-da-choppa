import 'angular';
import 'angular-mocks/angular-mocks';
import 'phantomjs-polyfill';

var context = require.context('../app', true, /test\.js$/);
context.keys().forEach(context);
