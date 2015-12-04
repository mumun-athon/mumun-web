export function LoginFormDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/login/login-form.html',
    scope: {
      // toastr: '=',
      // appUrl: '=',
      // appName: '=',
    },
    replace: true,
    controller: LoginFormController,
    controllerAs: 'vm',
    bindToController: true,
  };

  return directive;
}

class LoginFormController {
  constructor(authorization, session, $log, toastr, $mdDialog) {
    'ngInject';

    // "this.creation" is available by directive option "bindToController: true"
    this.authorization = authorization;
    this.session = session;
    this.$log = $log;
    this.$mdDialog = $mdDialog;
    this.toastr = toastr;
  }

  login(creds) {
    this.authorization.login(creds)
      .then(
      response => {
        let user = response.data;
        this.session.create(user);
        this.$log.log('login succeed', user);
        this.toastr.success('You are logged in!\nWelcome ' + (user.name || 'Mister') + '!');
      },

      response => {
        this.$log.log('login failed', response);
        this.toastr.error('Whoops! Something somewhere errored &@(&^!)$@\n' + (response.data.message || 'Unknown reason') + '!');
      });
  }
}
