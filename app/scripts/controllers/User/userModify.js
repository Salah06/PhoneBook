'use strict';

/**
 * Created by user on 14/05/15.
 */
angular.module('showcaseApp')
  .controller('UserModifyCtrl', ['$scope', '$http', '$routeParams', '$location', 'Users', function ($scope, $http, $routeParams, $location, Users) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    if ($routeParams.userId) {
      Users.getUser($routeParams.userId,
        function (data) {
          $scope.user = data;

        })
    };

    $scope.modify = function (user) {
      Users.updateUser($scope.user, function (data) {
        $location.path('/UserView');
      }, function (data) {
        $scope.error = "Modification error";
      });
    }
  }])

