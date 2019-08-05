const commonChars = function(A) {
  if (A.length <= 1) return []
    
  let result = findCommonChar(A[0], A[1])

  for (let i = 2; i < A.length; i++) {
    result = findCommonChar(result, A[i])
  }
    
  return result.split('')
};

const findCommonChar = (str1, str2) => {
  let result = ''
  let map = {}
  
  for (let i = 0; i < str1.length; i++) {
    const char = str1[i]
    
    if (!map[char]) {
      map[char] = 1
    } else {
      map[char]++
    }
  }
  
  for (let i = 0; i < str2.length; i++) {
    const char = str2[i]
    
    if (map[char]) {
      result += char
      map[char]--
    }
  }

  return result
}