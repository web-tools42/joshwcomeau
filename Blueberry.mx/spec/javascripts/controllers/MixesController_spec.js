describe("MixesController", function() {
  var ctrl, location, resource, routeParams, scope, setupController, httpBackend;

  setupController = function(keywords, results) {
    return inject(function($location, $routeParams, $rootScope, $resource, $httpBackend, $controller) {
      scope       = $rootScope.$new();
      location    = $location;
      resource    = $resource;
      routeParams = $routeParams;
      httpBackend = $httpBackend;

      routeParams.keywords = keywords;

      if (results) {
        request = new RegExp("\/mixList.*keywords=" + keywords);
        httpBackend.expectGET(request).respond(results)
      }

      return ctrl = $controller('MixesController', { 
        $scope: scope, 
        $location: location 
      });

    });
  };

  beforeEach(function() { 
    module("blueberry"); 
  });

  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  // Start the tests!

  describe('controller initialization', function() {
    describe('when no keywords are present', function() {
      beforeEach(setupController());  
      it('defaults to no recipes', function() {
        expect(ctrl.selectedMixes).toEqualData([]);
      });
    });

    describe('with keywords', function() {
      var keywords, mixList;

      keywords = 'foo';
      mixList  = [
        {
          id: 1,
          name: 'Supersonic Overdrive'
        },
        {
          id: 2,
          name: 'ChilZone'
        },
        {
          id: 3,
          name: 'Pot Pourri'
        }
      ];

      beforeEach(function() {
        setupController(keywords, mixList);
        return httpBackend.flush();
      })

      it('calls the back-end', function() {
        return expect(scope.mixList).toEqualData(mixList);
      });
    });

    describe('search()', function() {
      beforeEach(function() {
        setupController();
      });

      it('redirects to itself with a keyword param', function() {
        keywords = 'foo';
        scope.search(keywords);
        expect(location.path()).toBe('/');
        expect(location.search()).toEqualData({keywords: keywords});
      });
    });
  });
  

});