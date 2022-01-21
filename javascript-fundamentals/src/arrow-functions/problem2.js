// Convert all the arrow functions to normal anonymous functions
// There should be no arrows by the end

let x = (x) => x + 1;
let y = (x, y) => x + y;
let z = (x) => {
  let y = (x * 7) % 2;
  return y * 2;
};

module.exports = { x, y, z };
