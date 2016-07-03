/*
 * Copyright (c) 2015 Cisco Systems, Inc. and others.  All rights reserved.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v1.0 which accompanies this distribution,
 * and is available at http://www.eclipse.org/legal/epl-v10.html
 */

define(['angularAMD', 'app/routingConfig', 'app/core/core.services', 'common/config/env.module'], function(ng) {
  var wtnEventsApp = angular.module('app.wtnEvents', ['app.core', 'ui.router.state','config']);

  wtnEventsApp.config(function($stateProvider, $compileProvider, $controllerProvider, $provide, NavHelperProvider, $translateProvider) {
    wtnEventsApp.register = {
      controller : $controllerProvider.register,
      directive : $compileProvider.directive,
      factory : $provide.factory,
      service : $provide.service

    };


    NavHelperProvider.addControllerUrl('app/wtnEvents/wtnEvents.controller');
    NavHelperProvider.addToMenu('wtnEvents', {
     "link" : "#/wtnEvents",
     "active" : "main.wtnEvents",
     "title" : "wtnEvents",
     "icon" : "",  // Add navigation icon css class here
     "page" : {
        "title" : "wtnEvents",
        "description" : "wtnEvents"
     }
    });

    var access = routingConfig.accessLevels;

    $stateProvider.state('main.wtnEvents', {
        url: 'wtnEvents',
        access: access.admin,
        views : {
            'content' : {
                templateUrl: 'src/app/wtnEvents/wtnEvents.tpl.html',
                controller: 'wtnEventsCtrl'
            }
        }
    });

  });

  return wtnEventsApp;
});
