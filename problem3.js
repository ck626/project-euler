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
var n = 600851475143;
var divisor = 2;

/*********************************************************************
 * Explanation of below:
 * 
 * Using a while loop where "input is greater than 2," keep 
 * dividing the input by divisor (initialized to 2). 
 * 
 * If the input is divisible by divisor, push divisor to the 
 * results array, and divide the input by the divisor. 
 * Repeat while loop using the new input. 
 * 
 * If the input is NOT divisible by current divisor, increment 
 * divisor and repeat while loop using current input and new divisor.
 * 
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