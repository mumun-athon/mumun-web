export class AuthorizationService {
  constructor(data, session) {
    'ngInject';

    this.data = data;
    this.session = session;
    this.authStatuses = {
      loginSuccess: 'auth-login-success',
      loginFailed: 'auth-login-failed',
      logoutSuccess: 'auth-logout-success',
      sessionTimeout: 'auth-session-timeout',
      notAuthenticated: 'auth-not-authenticated',
      notAuthorized: 'auth-not-authorized',
    };
    this.selectedAuthStatus = this.authStatuses.notAuthenticated;
    this._authenticated;
  }

  login(cred) {
    return this.data.request({
      method: 'POST',
      url: '/login',
      data: cred,
    });
  }

  get isAuthenticated() {
    this._authenticated = !!this.session.user;
    return this._authenticated;
  }
}
