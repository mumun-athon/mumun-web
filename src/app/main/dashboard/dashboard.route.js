export function dashboardRouterConfig($stateProvider) {
  'ngInject';
  $stateProvider
    .state('home.dashboard', {
      url: '/dashboard',
      templateUrl: 'app/main/dashboard/dashboard.html',
      controller: 'DashboardController',
      controllerAs: 'dc',
    });
}
