/*
 * Copyright (c) 2016 Tech Mahindra Ltd. and others. All rights reserved.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v1.0 which accompanies this distribution,
 * and is available at http://www.eclipse.org/legal/epl-v10.html
 */

define(
    [ 'app/wtnEvents/wtnEvents.module', 'app/wtnEvents/wtnEvents.services', 'app/wtnCommons/wtnCommons.services'],
    function(wtnEventsApp) {

      wtnEventsApp.register
          .controller(
              'wtnEventsCtrl',
              [
                  '$scope',
                  '$rootScope',
                  '$wtnEvents',
                  '$wtnCommons',
                  function($scope, $rootScope, $wtnEvents, $wtnCommons) {

                    $rootScope['section_logo'] = 'src/app/wtnEvents/wtnEvents.png';

                    $scope.collection = [];

                    var listenToNotifications = function(socketLocation) {
                      try {
                        var url = $wtnEvents.getMwtnWebSocketUrl();
                        var notificationSocket = new WebSocket(url);

                        notificationSocket.onmessage = function(event) {
                          // we process our received event here
                          if (typeof event.data === 'string') {
                            console.log("Client Received:\n" + event.data);
                            console.log("---------------------------");
                            $wtnEvents.getData(event, function(info, tweet) {
                              $scope.collection.push(tweet);
                              if ($scope.collection.length > 20) {
                                $scope.collection.shift();
                              }
                              ;
                            });
                          }
                        }

                        notificationSocket.onerror = function(error) {
                          console.log("Socket error: " + error);
                        }

                        notificationSocket.onopen = function(event) {
                          console.log("Socket connection opened.");
                          console.log("---------------------------");

                          function subscribe() {
                            if (notificationSocket.readyState === notificationSocket.OPEN) {
                              var data = {
                                'data' : 'scopes',
                                'scopes' : [ "ObjectCreationNotification",
                                    "ObjectDeletionNotification",
                                    "AttributeValueChangedNotification",
                                    "ProblemNotification" ]
                              };
                              notificationSocket.send(JSON.stringify(data));
                            }
                          }
                          subscribe();
                        }

                        notificationSocket.onclose = function(event) {
                          console.log("Socket connection closed.");
                        }
                      } catch (e) {
                        $scope.error("Error when creating WebSocket.\n" + e);
                      }
                    };

                    var path = "/opendaylight-inventory:nodes/opendaylight-inventory:node[opendaylight-inventory:id='wtnEvents']";
                    $wtnEvents.register(path, function(socketLocation) {
                      listenToNotifications(socketLocation);
                    });
                  } ]);

    });
