/**
 * 
 * @author vivekp123
 * @Description : Notification module configures ui-notification and pubsub modules
 * 
 */

var notification = angular.module('notificationModule', [ 'PubSub', 'ui-notification' ]);

notification.config(function(NotificationProvider) {
  NotificationProvider.setOptions({
    positionX : 'center',
    replaceMessage : true
  });
})

notification.run(function(PubSub, Notification) {
  
  PubSub.subscribe('successMessage', successHandler);
  PubSub.subscribe('errorMessage', errorHandler);

  function successHandler(data, topic) {
    Notification.success({
      message : data.message
    })
  }

  function errorHandler(data, topic) {
    Notification.error({
      message : data.message
    });
  }
});