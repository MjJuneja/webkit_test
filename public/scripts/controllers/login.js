'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the publicApp
 */
angular.module('publicApp')
  .controller('LoginCtrl', function ($scope,login,common,$http,$window,$cookieStore) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

   
    
//  $http.get("/session").then(function(data){
//       console.log(data);
//         if(data.data=="welcome"){
//           $window.location.href = "#profile";
          
//         }
//         // else{
//         //   $scope.data = data;
//         // }
//     },function(err){
//       console.log("error");
//     });

 $scope.$watch(function(){return common.logged}, function (newValue, oldValue) {
           if(!angular.equals(newValue,oldValue)){
            if(common.logged===true){
              $window.location.href = "#profile";
           }}
        }, true);

        $scope.$on('redirect',function(){
          $window.location.href = "#profile";
        })
  
     $scope.submit=function(isValid){
				if(isValid){
         var promise =  login.doLogin($scope.login);
         promise.then(function(data){
           if(data.data="found"){
                  common.logged = true;
                  $window.location.reload();
                  $window.location.href = "#profile";
           }
           else{
             $window.location.href = "#login";
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
