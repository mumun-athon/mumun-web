export class FrontpageController {
  constructor(authorization, $state) {
    'ngInject';

    this.authorization = authorization;
    this.$state = $state;

    this.activate();
  }

  activate() {
    if (this.authorization.isAuthenticated) {
      this.$state.go('home.dashboard');
    }
  }
}
