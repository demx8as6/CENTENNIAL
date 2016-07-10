/*
 * Copyright (c) 2016 highstreet technologies GmbH and others. All rights reserved.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v1.0 which accompanies this distribution,
 * and is available at http://www.eclipse.org/legal/epl-v10.html
 */

define(['app/wtnConfig/wtnConfig.module','app/wtnConfig/wtnConfig.services', 'app/wtnCommons/wtnCommons.services'], function(wtnConfigApp) {

  wtnConfigApp.register.controller('wtnConfigCtrl', ['$scope', '$rootScope', 'wtnConfigSvc', '$wtnCommons', function($scope, $rootScope, wtnConfigSvc, $wtnCommons) {

    $rootScope['section_logo'] = ''; // Add your topbar logo location here such as 'assets/images/logo_topology.gif'

    $scope.wtnConfigInfo = {};

    $wtnCommons.getData(function(data){
      $scope.data = data;      
    });

  }]);


});
