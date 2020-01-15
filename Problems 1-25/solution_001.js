/* 
* PROJECT EULER PROBLEM 1
* Multiples of 3 and 5
* If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
*
* Find the sum of all the multiples of 3 or 5 below the provided parameter value number.
*/

function summation(x) {
  return (x+1)*(x/2)
}


function multiplesOf3and5(number) {
  let y = number - 1
  return summation(Math.floor(y/3))*3
   + summation(Math.floor(y/5))*5 - summation(Math.floor(y/15))*15
}

multiplesOf3and5(1000);

