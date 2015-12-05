export class DataService {
  constructor($log, $http) {
    'ngInject';

    this.$http = $http;
    this.apiUrl = 'http://localhost3000/';
  }

  init(opts) {
    opts = opts || {};
    this.apiUrl = (opts.apiUrl || this.apiUrl).replace(/\/$/, '') + '/';
  }

  request(opts) {
    opts = opts || {};
    opts.url = this.apiUrl + opts.url.replace(/^\//, '');
    return this.$http(opts);
  }
}
