'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the publicApp
 */
angular.module('publicApp')
  .controller('SignupCtrl', function ($scope,login,$http,$window) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

   
    
 $http.get("/session").then(function(data){
      console.log(data);
        if(data.data=="welcome"){
          $window.location.href = "#profile";
        }
        // else{
        //   $scope.data = data;
        // }
    },function(err){
      console.log("error");
    });

     $scope.submit=function(isValid){
				if(isValid){
                $http.post('/signup',$scope.register).then(function(data){
                  console.log(data);
                 if(data.data="user added"){
                  $window.location.reload();
                  $window.location.href = "#login";
                 }
                 else{
                     $window.location.reload();
                 }
                },function(err){
                  console.log(err);
                });
				}
				else{
					alert("wrong details");
				}
            };
  });
