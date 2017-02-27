/**
 * 
 * @author vivekp123
 * @Description : Main application module which loads dependent modules. It configures $http interceptor and angular mocks
 * 
 */

var main = angular.module('app', [ 'notificationModule' ]);


main.config(['$httpProvider', '$provide', function($httpProvider, $provide) {
  $httpProvider.interceptors.push('responseInterceptor');
  $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);
}]);


main.run(function($httpBackend) {
  
  $httpBackend.whenRoute('GET', '/server-success').respond(function(method, url, data, headers, params) {
    return [200, {message:'Data saved successfully'}];
  });
  
  $httpBackend.whenRoute('GET', '/servers-internal-error').respond(function(method, url, data, headers){
    return [500, {message: 'Internal error'}];
  });

  $httpBackend.whenRoute('GET', '/server-not-found').respond(function(method, url, data, headers){
    return [404, {message: 'Resource not found'}];
  });
  
  $httpBackend.whenRoute('GET', '/server-no-access').respond(function(method, url, data, headers){
    return [403, {message: 'Access denied!!'}];
  });
});
