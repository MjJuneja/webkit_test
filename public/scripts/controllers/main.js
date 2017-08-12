'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the publicApp
 */
angular.module('publicApp')
  .controller('MainCtrl', function ($scope,common,$http,$window) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

 $scope.main = {
      logoutHide:true,
      profileHide:true,
      msg:"hey"
    };

    //  $http.get("/session").then(function(data){
     
    //     if(data.data=="invalid user"){
          
    //     }
    //     else{
    //      $scope.main.logoutHide=false;
    //       $scope.main.profileHide =false;
    //     }
    // },function(err){
    //   console.log("error");
    // });
    $scope.$watch(function(){return common.logged}, function (newValue, oldValue) {
           
          if(common.logged===true){
              $scope.main.logoutHide=false;
          $scope.main.profileHide =false;
           }
        }, true);
  });
