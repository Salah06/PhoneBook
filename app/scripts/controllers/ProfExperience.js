'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
  .controller('ProfCtrl', function ($scope, $http) {
    $http.get('data/webInfo.json').
      success(function(data, status, headers, config) {
        $scope.posts = data;
      }).
      error(function(data, status, headers, config) {
        // log error
      });
  });
