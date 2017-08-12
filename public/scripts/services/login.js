'use strict';

/**
 * @ngdoc service
 * @name publicApp.login
 * @description
 * # login
 * Factory in the publicApp.
 */
angular.module('publicApp')
  .factory('login', function ($q,$http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return {
      doLogin:(obj)=>{
        var defer = $q.defer();
    $http.post('/log',obj).then(function(data){
                  defer.resolve(data);},function(err){
                    defer.reject(err);
                  });
            return defer.promise;
            

    }
  
  
  }
 });
