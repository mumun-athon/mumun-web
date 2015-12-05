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
    })
    .state('home.raid', {
      url: '/raid',
      templateUrl: 'app/main/raid/raid.html',
      controller: 'RaidController',
      controllerAs: 'rac',
    })
    .state('home.report', {
      url: '/report',
      templateUrl: 'app/main/report/report.html',
      controller: 'ReportController',
      controllerAs: 'rec',
    })
    .state('home.settings', {
      url: '/settings',
      templateUrl: 'app/main/settings/settings.html',
      controller: 'SettingsController',
      controllerAs: 'sc',
    });

  $urlRouterProvider.otherwise('/');
}
