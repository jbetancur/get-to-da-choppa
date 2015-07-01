import '../../styles/home.scss';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './home.routes';
import HomeCtrl from './home.controller';
import randomGreetings from '../../services/randomGreetings/randomGreetings.service';
import greeting from '../../directives/greeting/greeting.directive';

export default angular.module('app.home', [uirouter, randomGreetings, greeting])
  .config(routing)
  .controller('HomeCtrl', HomeCtrl)
  .name;
