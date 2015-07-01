import './styles/app.scss';

import routing from './app.config';
import angular from 'angular';
import uirouter from 'angular-ui-router';

//Add new controllers here
import home from './controllers/home';

export default angular.module('choppaApp', [uirouter, home])
  .config(routing);
