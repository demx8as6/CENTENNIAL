/*
 * Copyright (c) 2015 Cisco Systems, Inc. and others.  All rights reserved.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v1.0 which accompanies this distribution,
 * and is available at http://www.eclipse.org/legal/epl-v10.html
 */

define(['app/wtnEvents/wtnEvents.module','app/wtnEvents/wtnEvents.services'], function(wtnEventsApp) {

  wtnEventsApp.register.controller('wtnEventsCtrl', ['$scope', '$rootScope', 'wtnEventsSvc', function($scope, $rootScope, wtnEventsSvc) {

    $rootScope['section_logo'] = ''; // Add your topbar logo location here such as 'assets/images/logo_topology.gif'

    $scope.wtnEventsInfo = {};

    $scope.data = "wtnEvents";

  }]);


});
