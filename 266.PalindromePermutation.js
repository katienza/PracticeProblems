const canPermutePalindrome = function(s) {
  let hash = {}
  let offset = 0
  
  for (let i = 0; i < s.length; i++) {
    let char = s[i]
    
    if (!hash[char]) {
      hash[char] = hash[char] || 1
      offset++
    } else {
      hash[char] -= 1
      offset--
    }
  }
  
  return offset <= 1
};