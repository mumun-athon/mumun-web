export class AuthorizationService {
  constructor(data) {
    'ngInject';

    this.data = data;
  }

  login(cred) {
    return this.data.request({
      method: 'POST',
      url: '/login',
      data: cred,
    });
  }
}
