'use strict';

/**
 * @ngdoc overview
 * @name showcaseApp
 * @description
 * # showcaseApp
 *
 * Main module of the application.
 */
angular
  .module('showcaseApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .controller("AppCtrl", function ($scope, $http) {
    $http.get('data/webInfo.json').
      success(function(data, status, headers, config) {
        $scope.posts = data;
      }).
      error(function(data, status, headers, config) {
        // log error
      });
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/education', {
        templateUrl: 'views/education.html',
        controller: 'EducationCtrl'
      })
      .when('/professional_experience', {
        templateUrl: 'views/profExperience.html',
        controller: 'ProfCtrl'
      })
      .when('/phoneBook', {
        templateUrl: '../views/phoneBook.html',
        controller: 'PhoneBookCtrl'
      })
      .when('/:userId/UserDetail',{
        templateUrl:'../views/User/UserDetail.html',
        controller:'UserDetailCtrl'
      })
      .when('/:userId/UserModify',{
        templateUrl:'../views/User/UserModify.html',
        controller:'UserModifyCtrl'
      })
      .when('/UserAdd',{
        templateUrl:'../views/User/UserAdd.html',
        controller:'UserAddCtrl'
      })
      .when('/:projectId/ProjectDetail',{
        templateUrl:'../views/Project/ProjectDetail.html',
        controller:'ProjectDetailCtrl'
      })
      .when('/:projectId/ProjectModify',{
        templateUrl:'../views/Project/ProjectModify.html',
        controller:'ProjectModifyCtrl'
      })
      .when('/ProjectAdd',{
        templateUrl:'../views/Project/ProjectAdd.html',
        controller:'ProjectAddCtrl'
      })
      .when('/RoleAdd',{
        templateUrl:'../views/Role/RoleAdd.html',
        controller:'RoleAddCtrl'
      })
      .when('/UserView',{
        templateUrl:'../views/User/UserView.html',
        controller:'UserViewCtrl'
      })
      .when('/ProjectView',{
        templateUrl:'../views/Project/ProjectView.html',
        controller:'ProjectViewCtrl'
      })
      .when('/RoleView',{
        templateUrl:'../views/Role/RoleView.html',
        controller:'RoleViewCtrl'
      })
      .when('/:roleId/RoleDetail',{
        templateUrl:'../views/Role/RoleDetail.html',
        controller:'RoleDetailCtrl'
      })
      .when('/:roleId/RoleModify',{
        templateUrl:'../views/Role/RoleModify.html',
        controller:'RoleModifyCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

