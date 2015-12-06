export class MainController {
  constructor(toastr, authorization, $state, ssSideNav) {
    'ngInject';

    this.classAnimation = '';
    this.creationDate = 1449019394801;
    this.appUrl = 'http://localhost:3000';
    this.appName = 'Cegatin';
    this.toastr = toastr;
    this.ssSideNav = ssSideNav;
    this.authorization = authorization;
    this._authenticated;

    this.activate($state);
  }

  activate($state) {
    if (this.authorization.isAuthenticated) {
      $state.go('home.dashboard');
    }
  }

  get authenticated() {
    this._authenticated = this.authorization.isAuthenticated;
    return this._authenticated;
  }

  logout() {
    this.authorization.logout();
  }
}
