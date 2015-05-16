'use strict';

/**
 * @ngdoc function
 * @name pooIhmExemplesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pooIhmExemplesApp
 */
angular.module('showcaseApp')
  .controller('RoleViewCtrl', ['$scope', '$http', '$routeParams', '$location', 'Users', 'Projects', 'Roles', function ($scope, $http, $routeParams, $location, Users, Projects, Roles ) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.getRoles = function () {
      Roles.getRoles(function (data) {
        $scope.roles = data;
      }, function (data) {
        //erreur dans le chargement
      });
    }

    $scope.deleteRole = function (roleId) {
      Roles.deletRole(roleId, function (data) {

        $scope.getRoles();
      }, function (data) {
        $scope.error = "Role delete error";
      });
    }


    $scope.getRoles();
  }]);
