Count the number of prime numbers less than a non-negative number, n.

Example:

Input: 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.


function isPrime(n) {
  if (n <= 1) return false
  
  for (let idx = 2; idx * idx <= n; idx++) {
    if (n % idx === 0) return false
  }
  
  return true
}

var countPrimes = function(n) {
  let count = 0
  
  for (let idx = 1; idx < n; idx++) {
    if (isPrime(idx)) count++
  }
  
  return count
};