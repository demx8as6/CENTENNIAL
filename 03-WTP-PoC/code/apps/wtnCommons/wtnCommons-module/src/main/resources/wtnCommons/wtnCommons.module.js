/*
 * Copyright (c) 2016 highstreet technologies GmbH and others. All rights reserved.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v1.0 which accompanies this distribution,
 * and is available at http://www.eclipse.org/legal/epl-v10.html
 */

define(['angularAMD', 'app/routingConfig', 'app/core/core.services', 'common/config/env.module'], function(ng) {
  var wtnCommonsApp = angular.module('app.wtnCommons', ['app.core', 'ui.router.state','config']);

  wtnCommonsApp.config(function($stateProvider, $compileProvider, $controllerProvider, $provide, NavHelperProvider, $translateProvider) {
    wtnCommonsApp.register = {
      controller : $controllerProvider.register,
      directive : $compileProvider.directive,
      factory : $provide.factory,
      service : $provide.service
    };


//    NavHelperProvider.addControllerUrl('app/wtnCommons/wtnCommons.controller');
//    NavHelperProvider.addToMenu('wtnCommons', {
//     "link" : "#/wtnCommons",
//     "active" : "main.wtnCommons",
//     "title" : "wtnCommons",
//     "icon" : "",  // Add navigation icon css class here
//     "page" : {
//        "title" : "wtnCommons",
//        "description" : "wtnCommons"
//     }
//    });

    var access = routingConfig.accessLevels;

//    $stateProvider.state('main.wtnCommons', {
//        url: 'wtnCommons',
//        access: access.admin,
//        views : {
//            'content' : {
//                templateUrl: 'src/app/wtnCommons/wtnCommons.tpl.html',
//                controller: 'wtnCommonsCtrl'
//            }
//        }
//    });

  });

  return wtnCommonsApp;
});
