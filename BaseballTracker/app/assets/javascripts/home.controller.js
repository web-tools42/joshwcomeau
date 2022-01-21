function HomeController($scope, $attrs, Baseball) {
  var home = this;

  home.date = {
    year:  $attrs.year  || '2014', 
    month: $attrs.month || '03', 
    day:   $attrs.day   || '06'
  };

  home.baseball = Baseball;

  this.fetch_new_results = function() {
    Baseball.get(home.date).$promise.then(function(results) {
      // process the data

      // We need to distinguish results with just 1 game.
      if ( Object.prototype.toString.call( results.data.games.game ) === '[object Object]' ) {
        results.data.games.game = [results.data.games.game];
      }

      // We need to make sure any Toronto Blue Jays game shows up first
      results.data.games.game = _.sortBy(results.data.games.game, function(game) {
        return !(game.home_team_name === 'Blue Jays' || game.away_team_name === 'Blue Jays')
      });

      // Figure out if there are any games
      results.has_games = results.data.games.game.length > 0;
      
      home.results = results;
      
    });

  };

  this.next_day = function(increment) {
    var date_string = home.date.year + home.date.month + home.date.day;
    var tomorrow    = moment(date_string, "YYYYMMDD").add(increment, 'days').calendar().split("/");

    home.date = {
      month: tomorrow[0],
      day:   tomorrow[1],
      year:  tomorrow[2]
    }

    home.fetch_new_results();
  }


  // Build our initial results
  home.fetch_new_results();
}


HomeController.$inject = ['$scope', '$attrs', 'Baseball'];
angular.module('myApp').controller('HomeController', ['$scope', '$attrs', 'Baseball', HomeController]);