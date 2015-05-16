'use strict';

/**
 * Created by user on 14/05/15.
 */
angular.module('showcaseApp')
  .controller('UserAddCtrl', ['$scope', '$http', '$routeParams', '$location', 'Users', function ($scope, $http, $routeParams, $location, Users) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.userAdd = function () {
      if ($scope.user.name != null && $scope.user.surname != null) {
        Users.addUser($scope.user, function (data) {
          $location.path('/UserView');
        }, function (data) {

        });
      }
    }

  }])
