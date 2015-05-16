'use strict';

/**
 * Created by user on 14/05/15.
 */
angular.module('showcaseApp')
  .controller('RoleAddCtrl', ['$scope', '$http', '$routeParams', '$location', 'Roles', 'Projects', 'Users', function ($scope, $http, $routeParams, $location, Roles, Projects, Users) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.getUsers = function () {
      Users.getUsers(function (data) {
        $scope.users = data;
      }, function (data) {
        //erreur dans le chargement
      });
    }

    $scope.getProjects = function () {
      Projects.getProjects(function (data) {
        $scope.projects = data;
      }, function (data) {
        //erreur dans le chargement
      });
    }

    $scope.getUsers();
    $scope.getProjects();

    $scope.roleAdd = function () {
      if ($scope.role.name != null) {
        $scope.role.UserId = $scope.userSelect.id;
        $scope.role.ProjectId = $scope.projectSelect.id;
        Roles.addRole($scope.role, function (data) {
          $location.path('/RoleView');
        }, function (data) {

        });
      }
    }

  }])
