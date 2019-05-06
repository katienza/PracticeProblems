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