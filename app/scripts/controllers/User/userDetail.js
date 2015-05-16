'use strict';

/**
 * Created by user on 14/05/15.
 */
angular.module('showcaseApp')
  .controller('UserDetailCtrl', ['$scope', '$http', '$routeParams', '$location', 'Users', function ($scope, $http, $routeParams, $location, Users) {
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

    if ($routeParams.userId) {
      Users.getUser($routeParams.userId,
        function (data) {
          $scope.user = data;
          var userProjects = new Array();
          Users.getProjects($routeParams.userId, function (data) {
              userProjects = data;
              var userRoles = new Array();
              Users.getRoles($routeParams.userId, function (data) {
                userRoles = data;
                for (var i = 0; i < userProjects.length; ++i) {
                  for (var j = 0; j < userRoles.length; ++j) {
                    if (userProjects[i].id === userRoles[j].ProjectId) {
                      userProjects[i].roleName = userRoles[j].name;
                      userProjects[i].roleId = userRoles[j].id;
                      break;
                    }
                  }
                }
                $scope.projects = userProjects;
              }, function (data) {
              });
            },
            function (data) {
            });

        },
        function (data) {
        });
    }

    $scope.delete = function (userId) {
      Users.deletUser(userId, function (data) {
        $location.path('/UserView');
      }, function (data) {
        $scope.error = "Delete Error";
      });
    }
  }])

