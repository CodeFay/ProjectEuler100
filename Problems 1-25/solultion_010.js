/* 
* PROJECT EULER PROBLEM 10
* Summation of primes
* The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
* 
* Find the sum of all the primes below n.A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
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

function primeSummation(n) {
  var primesArray = [2,3];
  var i = 5;
  for (var i = 5; i < n; i+=2)
    if (checkPrime(i)) {
      primesArray.push(i)
    } 
  
  return primesArray.reduce((a,b) => a + b);
}

primeSummation(2000000);
