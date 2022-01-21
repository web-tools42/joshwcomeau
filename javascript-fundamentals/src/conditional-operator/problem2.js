// Remove the conditional operator from these functions
// USE IF STATEMENTS

function iLike(x) {
  return x === 'chinese food' ? true : false;
}

function iLikeLessPicky(x) {
  return x === 'chinese food' ? true : x === 'french food' ? true : false;
}

module.exports = { iLike, iLikeLessPicky };
