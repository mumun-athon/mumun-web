export class ReportController {
  constructor(data) {
    'ngInject';

    this.data = data;

    this.reports = [];
    this.activate();
  }

  activate() {
    this.data.request({url: 'ilegal-reports'})
      .then(response => {
        this.reports = response.data.map(report => {
          report.status = 'md-warn';
          report.progress = Math.floor(10 * Math.random()) * 10;
          return report;
        });
      });
  }
}
