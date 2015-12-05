export function config($logProvider, toastrConfig, ssSideNavSectionsProvider) {
  'ngInject';

  // Enable log
  $logProvider.debugEnabled(true);

  // Set options third-party lib
  toastrConfig.allowHtml = true;
  toastrConfig.timeOut = 3000;
  toastrConfig.positionClass = 'toast-top-right';
  toastrConfig.preventDuplicates = true;
  toastrConfig.progressBar = true;
  ssSideNavSectionsProvider.initWithSections([
    {
      name: 'Dashboard',
      state: 'main.dashboard',
      type: 'link',
    },
    {
      name: 'Cegatan',
      type: 'toggle',
      pages: [
        {
          name: 'Buat baru',
          state: 'main.dashboard.item1',
        },
      ],
    },
    {
      name: 'Laporan',
      type: 'link',
      state: 'main.dashboard.report',
    },
    {
      name: 'Settings',
      state: 'main.dashboard.settings',
      type: 'link',
    },
  ]);
}
