'use strict';

angular.module('myApp.newsletter', [])
.service('newsletterService',['$http', '$q', function($http, $q)  {
    var deffered = $q.defer();
    
  
    this.registerNewsletter = async function(name, email) {
      //TODO implenentar chamada na api
      
      // $http returns a promise, which has a then function, which also returns a promise
       $http.defaults.headers.common['Authorization'] = 'desafiobeetech';
      $http.post("http://demo3643409.mockable.io/newsletter")
      .then(function(response){
        
          //console.log(data);
        
          if(response.status != 200) {
            deffered.reject(response.data);
          }
          
          deffered.resolve(response.data);
      });
      return deffered.promise;
    }
  
   
}]);
