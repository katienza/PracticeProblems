// Time complexity: O(log n) 
// Auxiliary space complexity: O(log n)
const myPow = function(x, n) {
  if (n === 0) return 1
  if (n === 1) return x;
  if (n === -1) return 1 / x;
  
  // recursive case for even exponents
  if (n % 2 === 0) {
      const m = myPow(x, n/2);
      return m * m
  }

  // recursive case for odd exponents
  return x * myPow(x, n - 1);
};