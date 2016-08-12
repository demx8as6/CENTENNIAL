/*
 * Copyright (c) 2016 highstreet technologies GmbH and others.  All rights reserved.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v1.0 which accompanies this distribution,
 * and is available at http://www.eclipse.org/legal/epl-v10.html
 */

define(['angularAMD', 'app/routingConfig', 'app/core/core.services', 'common/config/env.module', 'app/mwtnCommons/bower_components/angular-ui-grid/ui-grid.min'], function(ng) {
  var mwtnLogApp = angular.module('app.mwtnLog', [ 'app.core',
      'ui.router.state', 'config', 'ui.grid', 'ui.grid.exporter',
      'ui.grid.moveColumns', 'ui.grid.pinning', 'ui.grid.selection',
      'ui.grid.resizeColumns' ]);

  mwtnLogApp.config(function($stateProvider, $compileProvider, $controllerProvider, $provide, NavHelperProvider, $translateProvider) {
    mwtnLogApp.register = {
      controller : $controllerProvider.register,
      directive : $compileProvider.directive,
      factory : $provide.factory,
      service : $provide.service

    };


    NavHelperProvider.addControllerUrl('app/mwtnLog/mwtnLog.controller');
    NavHelperProvider.addToMenu('mwtnLog', {
     "link" : "#/mwtnLog",
     "active" : "main.mwtnLog",
     "title" : "MWTN Log",
     "icon" : "fa fa-list",  // Add navigation icon css class here
     "page" : {
        "title" : "MWTN Log",
        "description" : "mwtnLog"
     }
    });

    var access = routingConfig.accessLevels;

    $stateProvider.state('main.mwtnLog', {
        url: 'mwtnLog',
        access: access.admin,
        views : {
            'content' : {
                templateUrl: 'src/app/mwtnLog/mwtnLog.tpl.html',
                controller: 'mwtnLogCtrl'
            }
        }
    });

  });

  return mwtnLogApp;
});
