/* 
* PROJECT EULER PROBLEM 3
* Largest prime factor
* The prime factors of 13195 are 5, 7, 13 and 29.
* What is the largest prime factor of the given number?
*/

function checkPrime(p) {
  /* "all primes greater than 6 are of the form 6k ± 1" {Wikipedia: Primaliy test}
  * We use i and (i + 2) becaues refence is shifted from 6 to 5
  * Example: If reference stayed at 6, we would test for ± 1 or [5,7];
  * Since reference is at 5, to test for [5,7], we need i or ( i + 2 )
  */

  /* To speed up algorithm, we want to immediately throw out anything divisible by 2 or 3 */
  if ( p % 2 === 0 || p % 3 === 0) {
    return false;
  }
  
  /* Then check remaining cases based on example above */
  for (var i = 5; i < Math.sqrt(p); i += 6 ) {
    if ( p % i === 0 || p % (i + 2) === 0 ) {
      return false;
    }
  }
    return true; 
}

function largestPrimeFactor(number) {
  // manually check first 4 primes, so we're left with O(sqrt(number))
  if (number == 2 || number == 3 || number == 5 || number == 7) {
    return number;
  } 

  // only have to check factors up to sqrt(number) since everything > sqrt(number) would be paired with a factor in this subset
  for (var i = Math.floor(Math.sqrt(number)); i > 7; i--) {
    // check if i is a factor of number
    if (number % i == 0) {
      // if factor, then check if prime
      if ( checkPrime(i) ) {
        return i
      }
    }
  }
}

largestPrimeFactor(600851475143);
