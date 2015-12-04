export function routerConfig($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main',
    })
    .state('home.frontpage', {
      url: '/',
      templateUrl: 'app/main/frontpage/frontpage.html',
      controller: 'FrontpageController',
      controllerAs: 'fc',
    });

  $urlRouterProvider.otherwise('/');
}
