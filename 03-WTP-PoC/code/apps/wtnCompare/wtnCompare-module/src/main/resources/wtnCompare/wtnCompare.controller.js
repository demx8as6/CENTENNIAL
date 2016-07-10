/*
 * Copyright (c) 2016 highstreet technologies GmbH and others. All rights reserved.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v1.0 which accompanies this distribution,
 * and is available at http://www.eclipse.org/legal/epl-v10.html
 */

define(['app/wtnCompare/wtnCompare.module','app/wtnCompare/wtnCompare.services','app/wtnCommons/wtnCommons.services'], function(wtnCompareApp) {

  wtnCompareApp.register.controller('wtnCompareCtrl', ['$scope', '$rootScope', 'wtnCompareSvc', '$wtnCommons', function($scope, $rootScope, wtnCompareSvc, $wtnCommons) {

    $rootScope['section_logo'] = ''; // Add your topbar logo location here such as 'assets/images/logo_topology.gif'

    $scope.wtnCompareInfo = {};

    $wtnCommons.getData(function(data){
      $scope.data = data;      
    });

  }]);


});
