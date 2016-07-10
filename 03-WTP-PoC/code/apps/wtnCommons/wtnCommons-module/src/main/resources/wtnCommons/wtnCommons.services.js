/*
 * Copyright (c) 2016 highstreet technologies GmbH and others. All rights reserved.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v1.0 which accompanies this distribution,
 * and is available at http://www.eclipse.org/legal/epl-v10.html
 */

define(['app/wtnCommons/wtnCommons.module'],function(wtnCommonsApp) {


  wtnCommonsApp.register.factory('$wtnCommons', function($http, ENV) {
    var service = {
      base: ENV.getBaseURL("MD_SAL") + "/restconf/"
    };
    
    service.getData = function(callback) {
      return callback('Hallo World! I\'m here');
    }

    return service;
  });

});
