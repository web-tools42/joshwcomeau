angular
	.module("app.controllers", [])

	// Library Controller (Yoyo Index)
	.controller('libraryController', function($scope, $location, APIservice) {
		$scope.yoyoList = [];

		APIservice.getYoyos().success(function(response) {
			$scope.yoyoList = response;
		});

		// Click function to show details for a yoyo.
		$scope.loadDetails = function(idnum) {
			$location.path('/library/'+idnum);
		}

		// Click function to add a new yoyo to the library 
		// (I'll need to add auth to this at some point)
		$scope.newYoyo = function() {
			$location.path('/library/new');
		}
	})


	// Yoyo Controller (Yoyo Show)
	.controller('yoyoController', function($scope, $location, $routeParams, APIservice) {
		$scope.id = $routeParams.id;

		APIservice.getYoyoInfo($scope.id).success(function(response) {
			$scope.yoyo = response;
		});

		// Load the edit yoyo template
		$scope.editYoyo = function(idnum) {
			$location.path('/library/edit/'+idnum)
		}

		// AJAX request to edit yoyo
		$scope.updateYoyo = function(idnum) {
			APIservice.updateYoyo(idnum, $scope.yoyo)
			.success(function(response) {
				$scope.submitStatus = "Success! Yoyo has been edited.";
			}).error(function(response, status) {
				$scope.submitStatus = "Error: " + status;
			});		
		}
	})


	// NewYoyo Controller (Yoyo New/Create)
	.controller('newYoyoController', function($scope, APIservice) {
		// Load manufacturer list
		APIservice.getManufacturers().success(function(response) {
			$scope.manufacturers = response;
		});

		// Send AJAX post request to create yoyo
		$scope.submitYoyo = function() {
			APIservice.createYoyo($scope.yoyo)
			.success(function(response) {
				$scope.submitStatus = "Success! Yoyo has been added to DB.";
			}).error(function(response, status) {
				$scope.submitStatus = "Error: " + status;
			});
		}
	})


	.controller('userController', function($scope, APIservice, $window) {
		// Register new user
		$scope.submitRegistration = function() {
			APIservice.createUser($scope.user)
			.success(function(response) {
				$scope.submitStatus = "Success! You are now registered.";
			}).error(function(response, status) {
				$scope.submitStatus = "Error: " + status;
			});
		}

		// Log in!
		$scope.login = function() {
			APIservice.authenticate($scope.user)
			.success(function(response) {
				$scope.submitStatus = "Success! Logged in."
				$window.localStorage.token = response.token;
				$window.localStorage.email = response.email;
			}).error(function(response) {
				delete $window.localStorage.token
				delete $window.localStorage.email
				$scope.submitStatus = response.message
			});
		}
	});