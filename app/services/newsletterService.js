'use strict';

angular.module('myApp.newsletter', [])
.service('newsletterService', function() {

    this.register = function(name, email) {
      //TODO implenentar chamada na api
      return { code : 200, message : "registrado com sucesso [MOCK]"}
    }
});
