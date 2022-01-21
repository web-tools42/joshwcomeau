// -------------------------------------------------------------
// Control Flow Exercises
// ----------
// note: need to have covered control flow for these exercises
// -------------------------------------------------------------

// Q4.5
// Write a loop that will iterate from 0 to 15.
// For each iteration, it should check whether a number is even or odd
// and display that state along with the number.
// e.g.
// 0 is even
// 1 is odd
// 2 is even
// ...

for (let x = 0; x <16; x++) {
    let type = 'odd';

    if (x % 2 === 0) {
        type = 'even';
    }

    console.log(`${x} is ${type}`);
}


// many other possibilities here.