const removeDuplicates = function(s) {
  let stack = []

  for (let i = 0; i < s.length; i++) {
    let currentChar = s[i]
    let lastEle = stack[stack.length - 1]

    if (currentChar === lastEle) {
      stack.pop()
    } else {
      stack.push(currentChar)
    }
  }

  return stack.join('')
}