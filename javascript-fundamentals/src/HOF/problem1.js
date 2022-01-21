// The purpose of this exercise is to re-implement standard array methods
// Do not use the array methods .map, .filter and .every
// You can use for loops to implement your logic

function map(lst, f) {
  // lst is an array and f is a function
  // map returns an array with the same number of elements as lst
  // if lst = [a1, a2, a3, a4, a5] then map(lst, f) returns [f(a1), f(a2), f(a3), f(a4), f(a5)]
  // map returns a new array created by applying f
  //   to the elements of the original array
  //
  // Example
  //
  // function toUpperCase(str) { return str.toUpperCase(); }
  // map(["bob", "susie"], toUpperCase) returns ["BOB", "SUSIE"]
}

function filter(lst, f) {
  // lst is an array and f is a function
  // f takes one argument and returns a boolean (true or false)
  // filter(lst, f) returns a list with all the elements of lst that does not satisfy f removed
  // filter(lst, f) has fewer elements than lst
  // if lst_ = filter(lst, f) and x is an element of lst_ it means that:
  //     x is an element of lst
  //     f(x) is true
  //
  // Example:
  // function isEven(x) {return x % 2 === 0;}
  // filter([1, 2, 3, 4, 5], isEven) returns [2,4];
}

function every(lst, f) {
  // lst is an array and f is a function
  // f takes 1 arguments and returns a boolean
  // filter(lst, f) returns a true if f returns true for every element of lst
  // Example
  // every([2,4,12], x => x % 2 === 0) returns true
  // every([2,3,12], x => x % 2 === 0) returns false
}

module.exports = {
  map,
  filter,
  every,
};
