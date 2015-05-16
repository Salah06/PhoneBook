'use strict';

/**
 * @ngdoc function
 * @name pooIhmExemplesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pooIhmExemplesApp
 */
angular.module('showcaseApp')
  .service('Users', ['$http', function Users($http) {

    var baseaddr = 'http://poo-ihm-2015-rest.herokuapp.com/api/';
    this.getUsers = function (successCB) {
      $http.get(baseaddr + 'Users')
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          }
        });
    }

    this.getUser = function (userId, successCB) {
      $http.get(baseaddr + 'Users/' + userId)
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          }
        });
    }

    this.getProjects = function (userId, successCB) {
      $http.get(baseaddr + 'Users/' + userId + '/Projects')
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          }
        });
    }

    this.getRoles = function (userId, successCB) {
      $http.get(baseaddr + 'Users/' + userId + '/Roles')
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          }
        });
    }

    this.addUser = function (user, successCB) {
      $http.post(baseaddr + 'Users/', user)
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          }
        });
    }

    this.deletUser = function (userId, successCB) {
      $http.delete(baseaddr + 'Users/' + userId)
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          }
        });
    }

    this.updateUser = function (user, successCB) {
      $http.put(baseaddr + 'Users/' + user.id, user)
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          }
        });
    }
  }])

  .service('Projects', ['$http', function Projects($http) {

    var baseaddr = 'http://poo-ihm-2015-rest.herokuapp.com/api/';
    this.getProjects = function (successCB) {
      $http.get(baseaddr + 'Projects')
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          }
        });
    }

    this.getProject = function (projectId, successCB) {
      $http.get(baseaddr + 'Projects/' + projectId)
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          }
        });
    }

    this.getUsers = function (projectId, successCB) {
      $http.get(baseaddr + 'Projects/' + projectId + '/Users')
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          }
        });
    }

    this.getRoles = function (projectId, successCB) {
      $http.get(baseaddr + 'Projects/' + projectId + '/Roles')
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          }
        });
    }

    this.addProject = function (project, successCB) {

      $http.post(baseaddr + 'Projects/', project)
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          }
        });
    }

    this.deletProject = function (projectId, successCB) {
      $http.delete(baseaddr + 'Projects/' + projectId)
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          }
        });
    }

    this.updateProject = function (project, successCB) {
      $http.put(baseaddr + 'Projects/' + project.id, project)
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          }
        });
    }
  }])

  .service('Roles', ['$http', function Roles($http) {

    var baseaddr = 'http://poo-ihm-2015-rest.herokuapp.com/api/';
    this.getRoles = function (successCB) {
      $http.get(baseaddr + 'Roles')
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          }
        });
    }

    this.getRole = function (RoleId, successCB) {
      $http.get(baseaddr + 'Roles/' + RoleId)
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          }
        });
    }

    this.addRole = function (role, successCB) {
      $http.post(baseaddr + 'Roles/', role)
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          }
        });
    }

    this.deletRole = function (roleId, successCB) {
      $http.delete(baseaddr + 'Roles/' + roleId)
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          }
        });
    }

    this.updateRole = function (role, successCB) {
      console.log("je suis ProjectId" + role.ProjectId);
      console.log("je suis UserId" + role.UserId);
      console.log("je suis id" + role.id);
      $http.put(baseaddr + 'Roles/' + role.id, role)
        .success(function (data) {
          if (data.status === 'success') {
            console.log("je suis id" + data);
            successCB(data.data);
          }
        });
    }
  }])

