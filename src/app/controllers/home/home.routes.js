routes.$inject = ['$stateProvider'];
import home from './home.html';

export default function routes($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      template: home,
      controller: 'HomeCtrl',
      controllerAs: 'home'
    });
}
