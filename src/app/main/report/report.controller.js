export class ReportController {
  constructor() {
    'ngInject';
    this.tableData = [
      {
        issue: 'Nested views',
        progress: 100,
        status: 'Done',
        class: 'md-accent',
      },
      {
        issue: 'Table component',
        progress: 40,
        status: 'Feedback',
        class: '',
      },
      {
        issue: 'Dashboard tiles',
        progress: 100,
        status: 'Done',
        class: 'md-accent',
      },
      {
        issue: 'Panel widget',
        progress: 84,
        status: 'In progress',
        class: 'orange',
      },
      {
        issue: 'Form',
        progress: 100,
        status: 'Done',
        class: 'md-accent',
      },
      {
        issue: 'Custom CSS',
        progress: 20,
        status: 'Feedback',
        class: '',
      },
      {
        issue: 'Add backend',
        progress: 1,
        status: 'To do',
        class: 'md-warn',
      },
      {
        issue: 'Layout with sidebar',
        progress: 100,
        status: 'Done',
        class: 'md-accent',
      },
    ];
  }

}
