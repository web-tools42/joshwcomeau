function MixController($scope, $routeParams, MixFactory) {
  this.mixinfo = MixFactory.get({mixId: $routeParams.mixId}, function(mix) {
    // Do any view-related stuff here, like setting the background image or audio link.
  });
}
MixController.$inject = ['$scope', '$routeParams', 'MixFactory']


var controllers = angular.module('controllers');
controllers.controller("MixController", ['$scope', '$routeParams', 'MixFactory', MixController])
