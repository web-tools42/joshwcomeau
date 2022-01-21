angular.module('myApp').filter('formatDate', function() {
  return function formatDate(date) {
    var date_str = date.year + date.month + date.day;
    return moment(date_str, "YYYYMMDD").format("MMMM Do YYYY");
  }
});