export class MainController {
  constructor(toastr, authorization, $state) {
    'ngInject';

    this.classAnimation = '';
    this.creationDate = 1449019394801;
    this.appUrl = 'http://localhost:3000';
    this.appName = 'Cegatan Santai';
    this.toastr = toastr;
    this.authorization = authorization;
    this._authenticated;

    this.activate($state);
  }

  activate($state) {
    console.log('this.authorization.isAuthenticated', this.authorization.isAuthenticated);
    if (this.authorization.isAuthenticated) {
      $state.go('home.dashboard');
    }
  }

  get authenticated() {
    this._authenticated = this.authorization.isAuthenticated;
    return this._authenticated;
  }
}
