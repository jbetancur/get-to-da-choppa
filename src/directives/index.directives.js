import angular from 'angular';
import greetingDirective from './greeting/greeting.directive';

const moduleName = 'choppaApp.directives';

angular.module(moduleName, [])
  .directive('greeting', greetingDirective);

export default moduleName;
