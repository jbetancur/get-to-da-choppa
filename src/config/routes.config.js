import home from '../controllers/home/home.controller.html';

export default function routeConfig($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      template: home,
      controller: 'HomeCtrl',
      controllerAs: 'home'
    });
}

routeConfig.$inject = ['$stateProvider'];
