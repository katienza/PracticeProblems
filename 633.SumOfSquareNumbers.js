const judgeSquareSum = function(c) {
  if (c === 0) return true
  
  let i = 0
  
  while(i*i <= c) {
    if (Math.sqrt(c - i * i) % 1 === 0) {
      return true
    }
    
    i++
  }
  
  return false
}