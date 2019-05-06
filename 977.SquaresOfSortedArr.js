var sortedSquares = function(A) {
  let result = []
  
  for (let i = 0; i < A.length; i++) {
      let num = A[i]
      result.push(num * num)
  }
  
  result.sort((num1, num2) => {
      return num1 - num2
  })
  
  return result
};