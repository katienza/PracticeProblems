const isPerfectSquare = num => {
  if (num < 1) return false
  
  if (num === 1) return true
  
  for (let i = 0; i * i <= num; i++) {
      if (i * i === num) return true
  }
  
  return false
};