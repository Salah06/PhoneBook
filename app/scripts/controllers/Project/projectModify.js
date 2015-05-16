'use strict';

/**
 * Created by user on 14/05/15.
 */
angular.module('showcaseApp')
  .controller('ProjectModifyCtrl', ['$scope', '$http', '$routeParams', '$location', 'Projects', function ($scope, $http, $routeParams, $location, Projects) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    if ($routeParams.projectId) {
      Projects.getProject($routeParams.projectId,
        function (data) {
          $scope.project = data;

        })
    };

    $scope.modify = function (project) {
      Projects.updateProject($scope.project, function (data) {
        $location.path('/ProjectView');
      }, function (data) {
        $scope.error = "Modification error";
      });
    }
  }])

