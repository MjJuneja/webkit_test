'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:Index
 * @description
 * # Index
 * Controller of the publicApp
 */
angular.module('publicApp')
  .controller('indexCtrl', function ($scope,common,$http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

 $scope.main = {
      logoutHide:true,
      profileHide:true,
      logged:false,
      
    };
        // var promise = common.showData();
        // promise.then(function(data){
        //     if(data!="invalid user"){
        //         $scope.main.logoutHide = false;
        //     }
        // })
     
 
     $http.get("/session").then(function(data){
     
        if(data.data=="invalid user"){
          
        }
        else{
          $scope.main.logoutHide=false;
          $scope.main.profileHide =false;
          $scope.main.logged =true;
          common.logged=true;
          common.userData = data.userid;

        }
    },function(err){
      console.log("error");
    });
  });
