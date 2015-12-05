export function config($logProvider, toastrConfig, ssSideNavSectionsProvider, $mdThemingProvider) {
  'ngInject';

  // Enable log
  $logProvider.debugEnabled(true);

  // Set options third-party lib
  toastrConfig.allowHtml = true;
  toastrConfig.timeOut = 3000;
  toastrConfig.positionClass = 'toast-top-right';
  toastrConfig.preventDuplicates = true;
  toastrConfig.progressBar = true;
  ssSideNavSectionsProvider.initWithTheme($mdThemingProvider);
  ssSideNavSectionsProvider.initWithSections([
    {
      name: 'Dashboard',
      state: 'main.dashboard',
      type: 'link',
    },
    {
      name: 'Cegatan',
      state: 'main.cegatan',
      type: 'link',
    },
    {
      name: 'Laporan',
      type: 'link',
      state: 'main.report',
    },
    {
      name: 'Settings',
      state: 'main.settings',
      type: 'link',
    },
  ]);
}
