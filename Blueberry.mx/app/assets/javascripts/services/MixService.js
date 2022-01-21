function MixService($resource) {
  return $resource('/mixes/:mixId', {}, {
    query: { method: 'GET', params: {mixId: 'mixes'}, isArray: true }
  });
}
MixService.$inject = ['$resource']



var services = angular.module('services');
services.factory('MixFactory', ['$resource', MixService])