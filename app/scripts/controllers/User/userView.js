'use strict';

/**
 * @ngdoc function
 * @name pooIhmExemplesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pooIhmExemplesApp
 */
angular.module('showcaseApp')
  .controller('UserViewCtrl', ['$scope', '$http', '$routeParams', '$location', 'Users', 'Projects', function ($scope, $http, $routeParams, $location, Users, Projects ) {
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

    $scope.deleteUser = function (userId) {
      Users.deletUser(userId, function (data) {

        $scope.getUsers();
      }, function (data) {
        $scope.error = "User delete error";
      });
    }

    $scope.getUsers();
  }]);
