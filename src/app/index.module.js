/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { GithubContributorService } from '../app/components/githubContributor/githubContributor.service';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';

import { DataService } from '../app/components/data/data.service';
import { SessionService } from '../app/components/session/session.service';
import { AuthorizationService } from '../app/components/authorization/authorization.service';
import { LoginButtonDirective } from '../app/components/login/login-button.directive';

import { FrontpageController } from './main/frontpage/frontpage.controller';

import { dashboardRouterConfig } from './main/dashboard/dashboard.route';
import { DashboardController } from './main/dashboard/dashboard.controller';
import { dashboardRunBlock } from './main/dashboard/dashboard.run';

angular.module('mumunWeb', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'ngMaterial', 'toastr'])
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

  .config(dashboardRouterConfig)
  .controller('DashboardController', DashboardController)
  .controller('FrontpageController', FrontpageController)
	;
