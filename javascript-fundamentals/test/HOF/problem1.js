let expect = require('chai').expect;

let funcs = require('../../src/HOF/problem1.js');
let map = funcs.map;
let filter = funcs.filter;
let every = funcs.every;

describe('map', function() {
  it('maps', function() {
    expect(map(['a', 'b'], (x) => x.toUpperCase())).to.eql(['A', 'B']);
  });
});

describe('filter', function() {
  it('removes even numbers', function() {
    expect(filter([1, 2, 3, 4], (x) => x % 2 === 1)).to.eql([1, 3]);
  });
});

describe('every', function() {
  it('correctly returns true if every element satisfies the predicate', function() {
    expect(every([2, 4], (x) => x % 2 === 0)).to.eql(true);
  });
  it('correctly returns false if one element does not satisfy the predicate', function() {
    expect(every([2, 3, 4], (x) => x % 2 === 0)).to.eql(false);
  });
});
