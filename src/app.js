import './app.scss';
import angular from 'angular';
import appConfig from './config/app.config';
import uirouter from 'angular-ui-router';
// import uirouter from 'angular-route';

import routeConfig from './config/routes.config';

import controllers from './controllers/index.controllers';
import directives from './directives/index.directives';
import services from './services/index.services';

export const name = 'choppaApp';

export default angular.module(name, [uirouter, controllers, directives, services])
  .config(routeConfig)
  .config(appConfig);
