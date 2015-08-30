/******************
 *
 * Project Euler
 *  Problem 1
 * 
 * for Odin Project
 * by Corey Kazaks
 * ****************/

// Declare global accumulator variable
var sum = 0;

// Iterate integers through 1000
for (var i = 0; i < 1000; i++) {
    // check if div by 3 or 5
    if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
    }
}

console.log(sum);