/* 
* PROJECT EULER PROBLEM 6
* Sum square difference
* The sum of the squares of the first ten natural numbers is 1^2 + 2^2 + ... + 10^2 = 385
* The square of the sum of the first ten natural numbers is (1 + 2 + ... + 10)^2 = 55^2 = 3025
* 
* Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
*
* Find the difference between the sum of the squares of the first n natural numbers and the square of the sum.
*/

// Re-use summation function from Euler001
function summation(x) {
  return (x+1)*(x/2)
}

function squareSum(x) {
  return Math.pow(summation(x),2)
}

// Proved by induction; remembered this formula from my MathCounts days!
function sumSquare(x) {
  return x * ( x + 1 ) * ( 2*x + 1 ) / 6
}

function sumSquareDifference(n) {
  return squareSum(n) - sumSquare(n)
}

sumSquareDifference(10);
