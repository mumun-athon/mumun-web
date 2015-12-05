export function NavbarDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/navbar/navbar.html',
    scope: {
      creationDate: '=',
      appUrl: '=',
      appName: '=',
      authenticated: '=',
    },
    controller: NavbarController,
    controllerAs: 'vm',
    bindToController: true,
  };

  return directive;
}

class NavbarController {
  constructor(moment, authorization) {
    'ngInject';

    // "this.creation" is available by directive option "bindToController: true"
    this.relativeDate = moment(this.creationDate).fromNow();
    this.authorization = authorization;
  }

  logout() {
    this.authorization.logout();
  }
}
