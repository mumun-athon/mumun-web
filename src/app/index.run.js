export function runBlock($log, data, $rootScope, authorization, toastr, $state) {
  'ngInject';
  $log.debug('runBlock end');

  // data.init({ apiUrl: 'http://128.199.80.99/cegatanapi/public/'});

  data.init({ apiUrl: 'http://private-953ac-mumunserver.apiary-mock.com/'});

  $rootScope.$on('$stateChangeStart', function(event, next) {
    if (next.name !== 'home.frontpage' && !authorization.isAuthenticated) {
      event.preventDefault();
      authorization.lastDestination = next.name;
      $rootScope.$broadcast(authorization.authStatuses.notAuthenticated);
      toastr.error('Access denied. You are not logged in.');
      $state.go('home.frontpage');
    }
  });
}
