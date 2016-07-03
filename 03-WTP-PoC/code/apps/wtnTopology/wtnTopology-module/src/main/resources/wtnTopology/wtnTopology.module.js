/*
 * Copyright (c) 2016 highstreet technologies GmbH and others. All rights reserved.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v1.0 which accompanies this distribution,
 * and is available at http://www.eclipse.org/legal/epl-v10.html
 */

define(['angularAMD', 'app/routingConfig', 'app/core/core.services', 'common/config/env.module'], function(ng) {
  var wtnTopologyApp = angular.module('app.wtnTopology', ['app.core', 'ui.router.state','config']);

  wtnTopologyApp.config(function($stateProvider, $compileProvider, $controllerProvider, $provide, NavHelperProvider, $translateProvider) {
    wtnTopologyApp.register = {
      controller : $controllerProvider.register,
      directive : $compileProvider.directive,
      factory : $provide.factory,
      service : $provide.service

    };


    NavHelperProvider.addControllerUrl('app/wtnTopology/wtnTopology.controller');
    NavHelperProvider.addToMenu('wtnTopology', {
     "link" : "#/wtnTopology",
     "active" : "main.wtnTopology",
     "title" : "wtnTopology",
     "icon" : "",  // Add navigation icon css class here
     "page" : {
        "title" : "wtnTopology",
        "description" : "wtnTopology"
     }
    });

    var access = routingConfig.accessLevels;

    $stateProvider.state('main.wtnTopology', {
        url: 'wtnTopology',
        access: access.admin,
        views : {
            'content' : {
                templateUrl: 'src/app/wtnTopology/wtnTopology.tpl.html',
                controller: 'wtnTopologyCtrl'
            }
        }
    });

  });

  return wtnTopologyApp;
});
