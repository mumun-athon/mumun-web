/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { GithubContributorService } from '../app/components/githubContributor/githubContributor.service';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';

import { panelWidgetDirective } from '../app/components/panel-widget/panel-widget.directive';

import { DataService } from '../app/components/data/data.service';
import { SessionService } from '../app/components/session/session.service';
import { AuthorizationService } from '../app/components/authorization/authorization.service';
import { LoginButtonDirective, LoginFormController } from '../app/components/login/login-button.directive';

import { FrontpageController } from './main/frontpage/frontpage.controller';

import { dashboardRouterConfig } from './main/dashboard/dashboard.route';
import { DashboardController } from './main/dashboard/dashboard.controller';
import { dashboardRunBlock } from './main/dashboard/dashboard.run';

import { RaidController } from './main/raid/raid.controller';
import { ReportController } from './main/report/report.controller';
import { SettingsController } from './main/settings/settings.controller';

angular.module('mumunWeb', [
    'ngAnimate',
    'ngCookies',
    'ngTouch',
    'ngSanitize',
    'ngMessages',
    'ngAria',
    'ngResource',
    'ui.router',
    'ngMaterial',
    'toastr',
    'sasrio.angular-material-sidenav',
    'leaflet-directive',
  ])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .run(dashboardRunBlock)
  .service('githubContributor', GithubContributorService)
  .service('webDevTec', WebDevTecService)
  .controller('MainController', MainController)
  .directive('acmeNavbar', NavbarDirective)
  .directive('acmeMalarkey', MalarkeyDirective)

	// mine
	.service('data', DataService)
	.service('session', SessionService)
	.service('authorization', AuthorizationService)
  .directive('loginButton', LoginButtonDirective)
  .directive('panelWidget', panelWidgetDirective)

  .config(dashboardRouterConfig)
  .controller('LoginFormController', LoginFormController)
  .controller('DashboardController', DashboardController)
  .controller('FrontpageController', FrontpageController)
  .controller('RaidController', RaidController)
  .controller('ReportController', ReportController)
  .controller('SettingsController', SettingsController)
	;
