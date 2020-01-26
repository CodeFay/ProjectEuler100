/* 
* PROJECT EULER PROBLEM 5
* Smallest multiple
* 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
* What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?
*/

// Apply the Euclidean algorithm to find the Greatest Common Denominator
function gcd(a, b) {
  if ( a % b !== 0) {
    return gcd(b, a % b)
  } else {
    return b
  }
}

// Least Common Multiple formulas is LCM(a,b) = ab/GCD(a,b)
function lcm(a,b) {
  return (a * b / gcd(a,b) )
}

function smallestMult(n) {
  let val = 2;
  for (var i = n; i > 2; i--) {
    val = lcm(val, i)
  }
  return val
}

smallestMult(5);

