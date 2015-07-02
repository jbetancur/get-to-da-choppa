import angular from 'angular';
import { name } from './app';

angular.element(document).ready(function () {
  angular.bootstrap(document, [name], {
    //strictDi: true
  });
});
