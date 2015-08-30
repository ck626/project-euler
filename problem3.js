/*****************************************************************************
 *
 * Project Euler
 * Problem 3
 * 
 * Largest Prime Factor
 * 
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * 
 * What is the largest prime factor of the number 600851475143 ?
 * 
 * for The Odin Project
 * by Corey Kazaks
 * ***************************************************************************/

// Declare global prime storage array
var primeFactors = [];
// Declare the input you want prime factors of
var input = 600851475143;
// Declare the starting divisor
var divisor = 2;

/*********************************************************************
 * Explanation of algorithm:
 *  
 *  Divide the input by 2 and push divisor to results array if 
 *  divisibile. If NOT divisible, increase divisor and loop. 
 *  When input is being divided by it's own value, loop ends.
 * 
 * Pseudocode:
 * 
 * WHILE input is greater than 2:
 * 
 *  IF the input is divisible by current divisor: 
 *      -Push divisor to the results array 
 *      -Divide the input by the divisor 
 *      -Repeat the while loop using the new input. 
 * 
 *  IF the input is NOT divisible by current divisor: 
 *      -Increment divisor 
 *      -Repeat while loop using current input and new divisor.
 * 
 * PRINT the array to the console or a DOM Element.
 * 
 * *******************************************************************/

while (n > 2) {
    if (n % divisor === 0) {
        primeFactors.push(divisor);
        n /= divisor;
    } else {
        divisor++;
    }
}
console.log(primeFactors);

