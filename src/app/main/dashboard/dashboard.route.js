export function dashboardRouterConfig($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home.dashboard', {
      url: '/dashboard',
      templateUrl: 'app/main/dashboard/dashboard.html',
      controller: 'DashboardController',
      controllerAs: 'dc',
    });
}
