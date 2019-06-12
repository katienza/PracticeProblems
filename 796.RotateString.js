const rotateString = function(A, B) {
  if (A.length !== B.length) return false

  let newStr = A + A

  if (newStr.includes(B)) {
    return true
  }

  return false
}