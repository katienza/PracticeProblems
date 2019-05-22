// Iterative
function factorial(num) {
  let sum = 1

  for (let i = num; i > 0; i--) {
    sum *= i
  }

  return sum
}

// Recursive
function factorial(num) {
  if (num === 1) return 1
  return num * factorial(num - 1)
}