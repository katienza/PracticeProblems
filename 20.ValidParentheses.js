function isValidPair(a, b) {
  return (a === '[' && b === ']') ||
    (a === '(' && b === ')') ||
    (a === '{' && b === '}');
}

var isValid = function(s) {
  const stack = []
  
  for (let i = 0; i < s.length; i++) {
    let top = stack.pop()
    if (top === undefined) {
      stack.push(s[i]);
    } else if (isValidPair(top, s[i])) {
        
    } else {
      stack.push(top, s[i]); 
    }
  }
  
  return stack.length < 1
};