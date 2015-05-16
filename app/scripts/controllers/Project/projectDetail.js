'use strict';

/**
 * Created by user on 14/05/15.
 */
angular.module('showcaseApp')
  .controller('ProjectDetailCtrl', ['$scope', '$http', '$routeParams', '$location', 'Projects', function ($scope, $http, $routeParams, $location, Projects) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    if ($routeParams.projectId) {
      Projects.getProject($routeParams.projectId,
        function (data) {
          $scope.project = data;
          var projectUsers = new Array();
          Projects.getUsers($routeParams.projectId, function (data) {
              projectUsers = data;
              var projectRoles = new Array();
              Projects.getRoles($routeParams.projectId, function (data) {
                projectRoles = data;
                for (var i = 0; i < projectUsers.length; ++i) {
                  for (var j = 0; j < projectRoles.length; ++j) {
                    if (projectUsers[i].id === projectRoles[j].UserId) {
                      projectUsers[i].roleName = projectRoles[j].name;
                      projectUsers[i].roleId = projectRoles[j].id;
                      break;
                    }
                  }
                }
                $scope.users = projectUsers;
              }, function (data) {
              });
            },
            function (data) {
            });

        },
        function (data) {
        });
    }

    $scope.delete = function (projectId) {
      Projects.deletProject(projectId, function (data) {
        $location.path('/ProjectView');
      }, function (data) {
        $scope.error = "Delete Error";
      });
    }
  }
  ])

