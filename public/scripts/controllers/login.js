'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the publicApp
 */
angular.module('publicApp')
  .controller('LoginCtrl', function ($scope,login,$http,$window) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
     
 $http.get("/session").then(function(data){
      console.log(data);
        // if(data.status=="invalid user"){
        //   $window.location.href = "#about";
        // }
        // else{
          // $scope.data = data;
        // }
    },function(err){
      console.log("error");
    });

     $scope.submit=function(isValid){
				if(isValid){
                $http.post('/log',$scope.login).then(function(data){
                  console.log(data);
                  $window.location.href = "#profile";
                },function(err){
                  console.log(err);
                });
				}
				else{
					alert("wrong details");
				}
            };
  });
