import './greeting.directive.scss';

import template from './greeting.directive.html';

function greeting() {
  return {
    restrict: 'E',
    scope: {
      greeting: '='
    },
    template: template
  };
}

export default greeting;
greeting.$inject = [];
