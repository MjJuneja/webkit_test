'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the publicApp
 */
angular.module('publicApp')
.controller('ProfileCtrl', function ($scope,common,$http,$window,$cookieStore) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    // $http.get("/session").then(function(data){
    //   console.log(data);
    //     if(data.data=="invalid user"){
    //       $window.location.href = "#login";
    //     }
    //     else{
    //       // console.log(data);
    //       $scope.data = data.data;
    //     }
    // },function(err){
    //   console.log("error");
    // });
     $scope.$watch(function(){return common.logged}, function (newValue, oldValue) {
           
           if(common.logged===false){
              $window.location.href = "#login";
             
           }
           else if(common.logged===true){
              $scope.data = common.userData;
              // console.log(common.userData[0]);
           }
        }, true);
  });

 
