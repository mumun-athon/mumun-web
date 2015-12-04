export class MainController {
  constructor(toastr, authorization) {
    'ngInject';

    this.classAnimation = '';
    this.creationDate = 1449019394801;
    this.appUrl = 'http://localhost:3000';
    this.appName = 'Cegatan Santai';
    this.toastr = toastr;
    this.authorization = authorization;
    this._authenticated;

    this.activate();
  }

  activate() {
  }

  get authenticated() {
    this._authenticated = this.authorization.isAuthenticated;
    return this._authenticated;
  }
}
