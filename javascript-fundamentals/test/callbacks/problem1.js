let expect = require('chai').expect;

let farg;
let targ;
let carg;

print = function(str) {
  carg = str;
  console.log(str);
};

setTimeout = function(f, t) {
  farg = f;
  if (typeof f === 'function') f();
  targ = t;
};

require('../../src/callbacks/problem1.js');

describe('callbacks', function() {
  it('it should shout after 2 seconds ', function() {
    expect(targ).to.eql(2000);
  });
  it('the first argument must be a function', function() {
    expect(typeof farg).to.eq('function');
  });
  it('must print "HELLO"', function() {
    expect(carg).to.eq('HELLO');
  });
});
