export default function appConfig($urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
  $urlRouterProvider.otherwise('/');
}

appConfig.$inject = ['$urlRouterProvider', '$locationProvider'];
