/**
 * 
 * @author vivekp123
 * @Description : HTTP interceptor factory intercepting response and response error and publish the data
 * 
 */

notification.factory('responseInterceptor', [ '$q', 'PubSub', function($q, PubSub) {
  var myInterceptor = {
    'response' : function(response) {
      PubSub.publish('successMessage', response.data);
      return response;
    },
    'responseError' : function(rejection) {
      PubSub.publish('errorMessage', rejection.data);
      return $q.reject(rejection);
    }
  };
  return myInterceptor;
} ]);