/*
 * Copyright (c) 2015 Cisco Systems, Inc. and others.  All rights reserved.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v1.0 which accompanies this distribution,
 * and is available at http://www.eclipse.org/legal/epl-v10.html
 */

define(['app/odlChat/odlChat.module','app/odlChat/odlChat.services'], function(odlChatApp) {

  odlChatApp.register.controller('odlChatCtrl', ['$scope', '$rootScope', 'odlChatSvc', function($scope, $rootScope, odlChatSvc) {

    $rootScope['section_logo'] = ''; // Add your topbar logo location here such as 'assets/images/logo_topology.gif'

    $scope.odlChatInfo = {};

    $scope.data = "odlChat";

  }]);


});
