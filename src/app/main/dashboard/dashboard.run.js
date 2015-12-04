export function dashboardRunBlock($rootScope, authorization, toastr, $state) {
  'ngInject';
  $rootScope.$on('$stateChangeStart', function(event, next) {
    /* var authorizedRoles = next.data.authorizedRoles;
    if (!AuthService.isAuthorized(authorizedRoles)) {
      event.preventDefault();
      if (AuthService.isAuthenticated()) {
        user is not allowed
        $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
      } else {
        user is not logged in
        $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
      }
    } */
    if (next.name !== 'home' && !authorization.isAuthenticated) {
      event.preventDefault();
      authorization.lastDestination = next.name;
      $rootScope.$broadcast(authorization.authStatuses.notAuthenticated);
      toastr.error('Access denied. You are not logged in.');
      $state.go('home');
    }
  });
}
