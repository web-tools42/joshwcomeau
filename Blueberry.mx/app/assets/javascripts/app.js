blueberry = angular.module('blueberry', [
  'templates',
  'ngRoute',
  'ngResource',
  'controllers',
  'services'
]);

blueberry.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl:  'mixes/index.html',
    controller:   'MixesController',
    controllerAs: 'mixes'
  })
  .when('/mixes/:mixId', {
    templateUrl:  'mixes/show.html',
    controller:   'MixController',
    controllerAs: 'mix'
  })
  .otherwise({
    redirectTo: '/'
  });
}]);


var 
controllers = angular.module('controllers', []),
services    = angular.module('services', ['ngResource']);


// mixlist = [
//   {
//     id: 1,
//     name: 'Supersonic Overdrive',
//     description: 'An uplifting mix of hard trance, hard dance and hard drives.'
//   },
//   {
//     id: 2,
//     name: 'ChilZone',
//     description: 'A downtempo stroll through a dreamy park.'
//   },
//   {
//     id: 3,
//     name: 'Pot Pourri',
//     description: 'There\'s something for everyone in this wild, all-over-the-place mix.'
//   }
// ]