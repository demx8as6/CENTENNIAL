/*
 * Copyright (c) 2016 highstreet technologies GmbH and others. All rights reserved.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v1.0 which accompanies this distribution,
 * and is available at http://www.eclipse.org/legal/epl-v10.html
 */

define(['angularAMD', 'app/routingConfig', 'app/core/core.services', 'common/config/env.module'], function(ng) {
  var wtnCompareApp = angular.module('app.wtnCompare', ['app.core', 'ui.router.state','config']);

  wtnCompareApp.config(function($stateProvider, $compileProvider, $controllerProvider, $provide, NavHelperProvider, $translateProvider) {
    wtnCompareApp.register = {
      controller : $controllerProvider.register,
      directive : $compileProvider.directive,
      factory : $provide.factory,
      service : $provide.service

    };


    NavHelperProvider.addControllerUrl('app/wtnCompare/wtnCompare.controller');
    NavHelperProvider.addToMenu('wtnCompare', {
     "link" : "#/wtnCompare",
     "active" : "main.wtnCompare",
     "title" : "wtnCompare",
     "icon" : "",  // Add navigation icon css class here
     "page" : {
        "title" : "wtnCompare",
        "description" : "wtnCompare"
     }
    });

    var access = routingConfig.accessLevels;

    $stateProvider.state('main.wtnCompare', {
        url: 'wtnCompare',
        access: access.admin,
        views : {
            'content' : {
                templateUrl: 'src/app/wtnCompare/wtnCompare.tpl.html',
                controller: 'wtnCompareCtrl'
            }
        }
    });

  });

  return wtnCompareApp;
});
