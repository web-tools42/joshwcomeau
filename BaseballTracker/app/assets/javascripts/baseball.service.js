angular.module("myApp").factory("Baseball", ["$resource", function($resource, apiString) {
  return $resource("http://gd2.mlb.com/components/game/mlb/year_:year/month_:month/day_:day/master_scoreboard.json", {}, {});
}]);