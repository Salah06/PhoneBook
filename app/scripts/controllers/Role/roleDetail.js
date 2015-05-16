'use strict';

/**
 * Created by user on 14/05/15.
 */
angular.module('showcaseApp')
  .controller('RoleDetailCtrl', ['$scope', '$http', '$routeParams', '$location', 'Roles', function ($scope, $http, $routeParams, $location, Roles) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    if ($routeParams.roleId) {
      Roles.getRole($routeParams.roleId,
        function (data) {
          $scope.role = data;

        })
    };

    $scope.deleteRole = function (roleId) {
      Roles.deletRole(roleId, function (data) {
        $location.path('/RoleView');
      }, function (data) {
        $scope.error = "Role delete error";
      });
    }

  }])

