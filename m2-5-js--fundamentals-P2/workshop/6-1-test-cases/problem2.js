// Problem 2
// ---------

// Step 1
// Write a function that returns the LAST character of the string that is
// passed to it.
// - If it's an empty string, return `undefined`
// - If it's a number, return `undefined`

function lastCharacter(str) {
  /* Your code here */
}

// Step 2
// You're given 1 test case. Add 4 more, making sure to cover all of the
// conditions specified above (don't forget empty string and number!!)

expect(lastCharacter('max'), 'x');

// Add 4 more test cases here!
// π  NOTE π 
// Be creative with your tests!
// There's an old joke about QA (Quality Assurance) testers:
//
//   βA QA tester walks into a bar. He orders a beer, and then 1000 beers,
//    and then -1 beers, and then "malaise" beers, and then -Infinity beersβ¦β
//
// π

/**
 * -------------------------------------------------------------------
 * β οΈ No changes necessary below. β οΈ
 * -------------------------------------------------------------------
 */
function expect(result, value) {
  if (result === value) {
    console.log('β Test succeeded');
  } else {
    console.log(`βοΈ Expected β${result}β to equal β${value}β`);
  }
}
