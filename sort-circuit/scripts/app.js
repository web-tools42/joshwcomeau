var app = angular.module("sortCircuit", []);

app.controller('SelectionController', ['$scope', function($scope) {

  $scope.format_list = function(list) {

    if ( typeof list == "string" ) {
      list = list.split_string();
    }

    console.log(list);
    $scope.sorted_objects = [];
    _.each(list, function(element, index) {
      if ( isNumber(element) ) {
        $scope.sorted_objects.push({
          position: index,
          number: element
        });
      }
    });    
  }

  $scope.sort_list = function() {
    arr = $scope.list.split_string();
    arr = selection_sort(arr);
    console.log(arr);
    $scope.format_list(arr)
  };


}]);