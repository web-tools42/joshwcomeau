// Problem 3
// ---------
// Step 1
// This function expects an array of 2 numbers as input (e.g. [1,2])
// Make this function return the sum of the two numbers that are passed to it.
// If anything other than an array with 2 numbers is passed, return undefined.
// You can use the typeof function to check the type of each element (e.g. typeof 3 returns 'number')

function f(input) {
  if (
    input.length !== 2 ||
    typeof input[0] !== 'number' ||
    typeof input[1] !== 'number'
  ) {
    return undefined;
  }
  return input[0] + input[1];
}

// Generic solution (array of any length)
// We haven't seen the .reduce() method yet...
function g(input) {
  if (input.length < 2 || input.some((elm) => typeof elm !== 'number')) {
    return undefined;
  }
  return input.reduce((acc, curr) => acc + curr, 0);
}
