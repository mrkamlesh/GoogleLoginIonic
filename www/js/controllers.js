angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
	$scope.login = function() {
		console.log("Hello");
		 window.plugins.googleplus.login(
		  {},
		  function (user_data) {
			// For the purpose of this example I will store user data on local storage
			console.log(user_data);
		  },
		  function (msg) {
			console.log(msg);
		  }
		);
	};
	
	$scope.logout = function() {
		window.plugins.googleplus.logout(
			function (msg) {
			  console.log(msg); // do something useful instead of alerting
			}
		);
	};
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
