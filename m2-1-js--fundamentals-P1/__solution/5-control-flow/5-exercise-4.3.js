// -------------------------------------------------------------
// Control Flow Exercises
// ----------
// note: need to have covered control flow for these exercises
// -------------------------------------------------------------

// Q4.3
// Write a loop that will print to the console all of the EVEN integers from 1 to 100.

for (let x = 0; x <101; x++) {

    if (x !==0) {
        if (x % 2 === 0) {
            console.log(x);
        }
    }
}