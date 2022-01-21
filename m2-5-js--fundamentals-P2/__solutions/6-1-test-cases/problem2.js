// Problem 2
// ---------
// Step 1
// Write a function that returns the last character of the string that is passed to it.
// If the string does not have a first character, return undefined.

function f(str) {
  if (str.charAt(str.length - 1) === '') return undefined;
  return str.charAt(str.length - 1);
}

// Other solution
function g(str) {
  if (str.slice(-1) === '') return undefined;
  return str.slice(-1);
}
