let expect = require('chai').expect;

let f = require('../../src/return/problem1.js');

let fs = require('fs');
let source = fs
  .readFileSync(__dirname + '/../../src/return/problem1.js')
  .toString();

// Don't count any comments
source = source.replace(/\/\/.*/g, '');

// Don't count whitespace
source = source.replace(/\s/g, '');

describe('Source', function() {
  it('is less than 85 characters', function() {
    expect(source.length).to.be.below(85);
  });
  it('returns correct value on 6', function() {
    expect(f(6)).to.be.eq('goodbye');
  });
  it('returns correct value on 11', function() {
    expect(f(11)).to.be.eq('hello');
  });
  it('returns correct value on 2', function() {
    expect(f(2)).to.be.eq(undefined);
  });
});
