let verifyEquals = require('./verify-equals.js');

// Problem 11
// ----------
// Make this function return the sum of all the numbers in the input array.
// If any element in the array is not a number, skip it. If the array is empty, return zero.

function f(input) {
  if (input.length === 0) return 0;
  return input.reduce(
    (acc, curr) => (typeof curr === 'number' ? acc + curr : acc),
    0
  );
}
