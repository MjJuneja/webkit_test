'use strict';

/**
 * @ngdoc service
 * @name publicApp.coomon
 * @description
 * # common
 * Service in the publicApp.
 */
angular.module('publicApp')
  .factory('common', function ($http,$q) {
    return {
        
        logged:false,
        userData:[],
        showData:()=>{
            var defer = $q.defer();
            $http.get("/session").then(function(data){
                defer.resolve(data.data);
            },function(err){
                defer.reject(err);
            });
       return defer.promise;
    }
   
    }
 });
