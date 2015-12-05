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
      state: 'home.dashboard',
      type: 'link',
    },
    {
      name: 'Cegatan',
      state: 'home.raid',
      type: 'link',
    },
    {
      name: 'Laporan',
      type: 'link',
      state: 'home.report',
    },
    {
      name: 'Settings',
      state: 'home.settings',
      type: 'link',
    },
  ]);
}
