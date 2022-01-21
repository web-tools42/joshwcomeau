let equal = require('deep-equal');
// The verifyEquals function checks that two values contain equivalent data. Whereas === only works for primitives, verifyEquals also works for objects (including arrays).
let verifyEquals = (a, b) => {
  if (!equal(a, b)) {
    console.error('⛔️ Expected:', a, 'Actual:', b);
    throw new Error('Equality test failed');
  } else {
    console.log('✅ Test succeeded');
  }
};
module.exports = verifyEquals;
