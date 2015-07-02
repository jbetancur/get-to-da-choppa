import angular from 'angular';

import RandomGreetings from './randomGreetings/randomGreetings.service';

const moduleName = 'choppaApp.services';

angular.module(moduleName, [])
  .service('$randomGreetings', RandomGreetings);

export default moduleName;
