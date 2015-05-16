'use strict';

/**
 * @ngdoc function
 * @name pooIhmExemplesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pooIhmExemplesApp
 */
angular.module('showcaseApp')
  .controller('ProjectViewCtrl', ['$scope', '$http', '$routeParams', '$location', 'Users', 'Projects', function ($scope, $http, $routeParams, $location, Users, Projects) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.getProjects = function () {
      Projects.getProjects(function (data) {
        $scope.projects = data;
      }, function (data) {
        //erreur dans le chargement
      });
    }

    $scope.deleteProj = function (projectId) {
      Projects.deletProject(projectId, function (data) {

        $scope.getProjects();
      }, function (data) {
        $scope.error = "Project delete error";
      });
    }
    $scope.getProjects();
  }]);
