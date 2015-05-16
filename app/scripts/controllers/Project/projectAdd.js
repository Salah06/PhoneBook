'use strict';

/**
 * Created by user on 14/05/15.
 */
angular.module('showcaseApp')
  .controller('ProjectAddCtrl', ['$scope', '$http', '$routeParams', '$location', 'Projects', function ($scope, $http, $routeParams, $location, Projects) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.projectAdd = function () {
      if ($scope.project.title != null) {
        Projects.addProject($scope.project, function (data) {
          $location.path('/ProjectView');
        }, function (data) {

        });
      }
    }

  }])
