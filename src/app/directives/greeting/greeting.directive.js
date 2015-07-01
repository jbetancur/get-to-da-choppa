import angular from 'angular';
import './greeting.scss';
import template from './greeting.html';

function greeting() {
  return {
    restrict: 'E',
    scope: {
      greeting: '='
    },
    template: template
  };
}

export default angular.module('directives.greeting', [])
  .directive('greeting', greeting)
  .name;
