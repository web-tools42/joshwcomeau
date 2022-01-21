// A set of base functions that the algorithms make use of

// Adding a method to Array to allow for easy 2-value swapping
Array.prototype.swap = function (x,y) {
  var temp_holder = this[x];
  this[x] = this[y];
  this[y] = temp_holder;
  return this;
}

// Turns "13, 5, 2, 7" into ["13","5","2","7"]
String.prototype.split_string = function() {
  return this.replace(/ /g, '').split(",");
}

// Check if n is a valid number
function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}