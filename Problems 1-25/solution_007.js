/* 
* PROJECT EULER PROBLEM 7
* 10001st prime
* By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
*
* What is the nth prime number?
*/


function checkPrime(p) {
  if ( p % 2 === 0 || p % 3 === 0 ) {
    return false;
  }
  
  for (var i = 5; i <= Math.sqrt(p); i += 6 ) {
    if ( p % i === 0 || p % (i + 2) === 0 ) {
      return false;
    }
  }
    return true; 
}

// Lots of reading later, I've determined to try the brute force approach for now. 
function nthPrime(n) {
  var primesArray = [2,3];
  var i = 5;
  while ( primesArray.length < n) {
    if (checkPrime(i)) {
      primesArray.push(i)
      i += 2 // increment by 2 because evens are not prime by default
    } else {
      i += 2
    }
  }
  return primesArray[n-1];
}

nthPrime(10001);
