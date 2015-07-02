import angular from 'angular';
import HomeCtrl from './home/home.controller';

const moduleName = 'choppaApp.controllers';

angular.module(moduleName, [])
  .controller('HomeCtrl', HomeCtrl);

export default moduleName;
