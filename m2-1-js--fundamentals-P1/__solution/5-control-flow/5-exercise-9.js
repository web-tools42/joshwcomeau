// -------------------------------------------------------------
// Control Flow Exercises
// ----------
// note: need to have covered control flow for these exercises
// -------------------------------------------------------------

// Q9
// Write a program that creates a string that represents an 8×8 grid,
// using newline characters to separate lines. At each position of the grid
// there is either an "_" or a "#" character. The characters should form a chessboard.
//
// #_#_#_#_
// _#_#_#_#
// #_#_#_#_
// _#_#_#_#
// #_#_#_#_
// _#_#_#_#
// #_#_#_#_
// _#_#_#_#

for (let i = 0; i < 8; i++) {
    let line = '';
    
    if (i % 2 === 0) {
        line += '_';

        for (let x = 0; x < 7; x++) {
            if (x % 2 === 0) {
                line += '#'
            } else {
                line += '_';
            }
        }
    } else {
        line += '#';

        for (let x = 0; x < 7; x++) {
            if (x % 2 === 0) {
                line += '_'
            } else {
                line += '#';
            }
        }
    }
    console.log(line);
}