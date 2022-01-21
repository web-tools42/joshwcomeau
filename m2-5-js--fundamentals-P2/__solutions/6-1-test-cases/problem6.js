// Problem 6
// ---------
// Step 1
// Write a function that
// - accepts an array.
// - The array has 3 elements.
// - The first element of the array is a string that represents an operation.
// - If the operation is
//      - "add", return the sum of the two other elements of the array.
//      - "sub" return their difference.
//      - "mult" return their product.
//  - Anything else return undefined.

// For example:
// f(["add", 10, 20]); // 30
// f(["mult", 2, 3]); // 6
// f(["spoof", 10, 10]); // undefined

function f(arr) {
  const operation = arr[0];
  switch (operation) {
    case 'add':
      return arr.slice(1).reduce((prev, next) => prev + next);
    case 'sub':
      return arr.slice(1).reduce((prev, next) => prev - next);
    case 'mult':
      return arr.slice(1).reduce((prev, next) => prev * next);
    default:
      return undefined;
  }
}
