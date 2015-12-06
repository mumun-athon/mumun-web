export class AuthorizationService {
  constructor(data, session, localStorageService, $state) {
    'ngInject';

    this.data = data;
    this.session = session;
    this.localStorageService = localStorageService;
    this.$state = $state;
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
      url: '/auth/login',
      data: cred,
    })
    .then(response => {
      let user = response.data.user;
      this.session.create(user);
      this.localStorageService.set('user', user);
      this.localStorageService.set('token', user.x_auth_token);
      return response;
    });
  }

  logout() {
    return this.data.request({
      method: 'GET',
      url: '/auth/logout',
    })
    .then(() => {
      this.session.destroy();
      this.localStorageService.set('user', null);
      this.localStorageService.set('token', null);
      this.selectedAuthStatus = 'logoutSuccess';
      this.$state.go('home.frontpage');
    });
  }

  get isAuthenticated() {
    let user = this.localStorageService.get('user');
    if (user) {
      this.session.create(user);
    }

    this._authenticated = !!this.session.user;
    return this._authenticated;
  }
}
