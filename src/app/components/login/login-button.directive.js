export function LoginButtonDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/login/login-button.html',
    scope: {
      // toastr: '=',
      // appUrl: '=',
      // appName: '=',
    },
    controller: LoginButtonController,
    controllerAs: 'vm',
    bindToController: true,
  };

  return directive;
}

class LoginButtonController {
  constructor($mdDialog, $scope, authorization) {
    'ngInject';

    this.$mdDialog = $mdDialog;
    this.$scope = $scope;
    this.authorization = authorization;
    this.activate();
    this.watcher;
  }

  activate() {
    this.watcher = this.$scope.$on(this.authorization.authStatuses.notAuthenticated, () => {
      this.showLoginForm();
    });
  }

  showLoginForm() {
    this.$mdDialog.show({
      clickOutsideToClose: true,
      templateUrl: 'app/components/login/login-form.html',
      controller: LoginFormController,
      controllerAs: 'vm',
    });
  }
}

export class LoginFormController {
  constructor(authorization, session, $log, toastr, $mdDialog, $scope, $state) {
    'ngInject';

    this.authorization = authorization;
    this.session = session;
    this.$log = $log;
    this.$scope = $scope;
    this.$state = $state;
    this.$mdDialog = $mdDialog;
    this.toastr = toastr;
    this._selectedAuthStatus;
    this.activate();
  }

  get selectedAuthStatus() {
    this._selectedAuthStatus = this.authorization.selectedAuthStatus;
    if (this._selectedAuthStatus === 'auth-not-authenticated') {
      alert('show dialog');
    }

    return this._selectedAuthStatus;
  }

  set selectedAuthStatus(status) {
    this._selectedAuthStatus = this.authorization.selectedAuthStatus = this.authorization.authStatuses[status];
  }

  activate() {

  }

  login(creds) {
    this.authorization.login(creds)
      .then(
      response => {
        let user = response && response.data || {};
        this.$log.log('login succeed', user);
        this.toastr.success('You are logged in!\nWelcome ' + (user.name || 'Mister') + '!');
        this.$mdDialog.hide();
        this.selectedAuthStatus = 'loginSuccess';
        this.$state.go(this.authorization.lastDestination || 'home.dashboard');
      },

      response => {
        this.$log.log('login failed', response);
        this.toastr.error('Whoops! Something somewhere errored &@(&^!)$@\n' + (response.data.message || 'Unknown reason') + '!');
      });
  }

  cancel() {
    this.$mdDialog.cancel();
  }
}
