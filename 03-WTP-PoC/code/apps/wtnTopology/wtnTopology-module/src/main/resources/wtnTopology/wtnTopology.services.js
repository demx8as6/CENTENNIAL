/*
 * Copyright (c) 2015 Cisco Systems, Inc. and others.  All rights reserved.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v1.0 which accompanies this distribution,
 * and is available at http://www.eclipse.org/legal/epl-v10.html
 */

define(['app/wtnTopology/wtnTopology.module'],function(wtnTopologyApp) {


  wtnTopologyApp.register.factory('wtnTopologySvc', function($http, ENV) {
    var svc = {
      base: ENV.getBaseURL("MD_SAL") + "/restconf/"
    };

    /*
     * You can define all of your REST API interactions here.
     */

    return svc;
  });

});