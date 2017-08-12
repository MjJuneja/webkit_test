'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:LogoutCtrl
 * @description
 * # LogoutCtrl
 * Controller of the publicApp
 */
angular.module('publicApp')
.controller('LogoutCtrl', function ($scope,common,$http,$window) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $http.get("/logout").then(function(data){
      console.log(data);
        if(data.data=="invalid user"){
          common.logged = false;
          $window.location.href = "#login";
        }
        else if(data.data=="logged out"){
         
          $window.location.reload();
        }
    },function(err){
      console.log("error");
    });
  });

 
