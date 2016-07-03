/*
 * Copyright (c) 2015 Cisco Systems, Inc. and others.  All rights reserved.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v1.0 which accompanies this distribution,
 * and is available at http://www.eclipse.org/legal/epl-v10.html
 */

define(['angularAMD', 'app/routingConfig', 'app/core/core.services', 'common/config/env.module'], function(ng) {
  var wtnConfigApp = angular.module('app.wtnConfig', ['app.core', 'ui.router.state','config']);

  wtnConfigApp.config(function($stateProvider, $compileProvider, $controllerProvider, $provide, NavHelperProvider, $translateProvider) {
    wtnConfigApp.register = {
      controller : $controllerProvider.register,
      directive : $compileProvider.directive,
      factory : $provide.factory,
      service : $provide.service

    };


    NavHelperProvider.addControllerUrl('app/wtnConfig/wtnConfig.controller');
    NavHelperProvider.addToMenu('wtnConfig', {
     "link" : "#/wtnConfig",
     "active" : "main.wtnConfig",
     "title" : "wtnConfig",
     "icon" : "",  // Add navigation icon css class here
     "page" : {
        "title" : "wtnConfig",
        "description" : "wtnConfig"
     }
    });

    var access = routingConfig.accessLevels;

    $stateProvider.state('main.wtnConfig', {
        url: 'wtnConfig',
        access: access.admin,
        views : {
            'content' : {
                templateUrl: 'src/app/wtnConfig/wtnConfig.tpl.html',
                controller: 'wtnConfigCtrl'
            }
        }
    });

  });

  return wtnConfigApp;
});
