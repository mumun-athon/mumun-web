export class SessionService {
  constructor() {
    this.user = null;
  }

  create(user) {
    this.user = user;
  }

  destroy() {
    this.user = null;
  }
}
