export class DataService {
  constructor($log, $http, toastr) {
    'ngInject';

    this.$http = $http;
    this.toastr = toastr;
    this.apiUrl = 'http://localhost3000/';
  }

  init(opts) {
    opts = opts || {};
    this.apiUrl = (opts.apiUrl || this.apiUrl).replace(/\/$/, '') + '/';
  }

  request(opts) {
    opts = opts || {};
    opts.url = this.apiUrl + opts.url.replace(/^\//, '');
    opts.headers = opts.headers || {};
    opts.headers['Content-Type'] = 'application/json; charset=utf-8';
    return this.$http(opts).then(response => {
      if (response.data.error) {
        let error = new Error(response.data.message || 'unknown reason');
        error.data = response.data || {};
        throw error;
      }

      return response;
    })
    .catch(response => {
      this.toastr.error('Whoops! Something somewhere errored &@(&^!)$@ \n' + (response.data && response.data.message || 'Unknown reason') + '!');
    });
  }
}
