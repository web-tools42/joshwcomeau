function MixesController($scope, $routeParams, $location, MixFactory) {
  this.search = function(keywords) {
    $location.path("/").search('keywords', this.keywords);
  }
  console.log(MixFactory);
  this.selectedMixes = MixFactory.query();

  // if ( $routeParams.keywords ) {
  //   Mix.query({
  //     keywords: $routeParams.keywords
  //   }, function(results) {
  //     this.mixes = results
  //   });
  // } else {
  //   this.selectedMixes = mixlist;
  // }
}

MixesController.$inject = ['$scope', '$routeParams', '$location', 'MixFactory'];


controllers = angular.module('controllers');
controllers.controller("MixesController", ['$scope', '$routeParams', '$location', 'MixFactory', MixesController])
