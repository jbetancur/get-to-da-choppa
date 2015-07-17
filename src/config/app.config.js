export default function appConfig($urlRouterProvider, $locationProvider, $compileProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
  $urlRouterProvider.otherwise('/');
  $compileProvider.debugInfoEnabled(false);
}

appConfig.$inject = ['$urlRouterProvider', '$locationProvider', '$compileProvider'];
