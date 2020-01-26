/* 
* PROJECT EULER PROBLEM 4
* Largest palindrome product
* A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
* Find the largest palindrome made from the product of two n-digit numbers.
*/

function checkPalindrome(x) {
  // There a faster way to do this with Number theory (considering base 10), but I will submit this way for now.
  return x == parseInt(x.toString().split('').reverse().join('')); 
}

function largestPalindromeProduct(n) {
  let init = 0; 
  let k;
  
  /* Determine the largest Palindrome product quickly by starting loops from the largest number
  * Now a nested loop will take us through the two numbers
  * Number theory dictates that a palindrome product is divisible by 11, so start inner loop with largest multiple of 11 < maxNum
  */

  let maxNum = Math.pow(10,n) - 1
  let minNum = Math.pow(10,n-1) - 1
  let maxMult = Math.floor( maxNum / 11 ,0) *11

  for (var i = maxMult; i > minNum; i -= 11 ) {
    for (var j = maxNum; j > minNum; j-- ) {
        k = i * j;
        if ( k > init && checkPalindrome(k) ) {
          init = k; 
          break;
        }
    }
  }
  return init;
}

largestPalindromeProduct(3);
