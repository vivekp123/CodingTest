/**
 * 
 * @author vivekp123
 * @Description : Main server controller handling the button click
 * 
 */

main.controller('ServerController', function($scope, $http) {

  $scope.getServerSuccess = function() {
    $http.get('/server-success');
  };

  $scope.getServerInternalError = function() {
    $http.get('/servers-internal-error');
  };

  $scope.getServerNotFoundError = function() {
    $http.get('/server-not-found');
  };

  $scope.getServerNoAccessError = function() {
    $http.get('/server-no-access');
  };
});
