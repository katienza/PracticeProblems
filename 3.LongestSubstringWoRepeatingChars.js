const lengthOfLongestSubstring = function(s) {
  if (s.length <= 1) return s.length
  
  let map = new Map()
  let max = 0
  let current = 0
  
  for (let i = 0; i < s.length; i++) {
    let char = s[i]
    
    if (map.has(char) && map.get(char) >= current) {
      current = map.get(char) + 1
    }
    
    map.set(char, i)
    
    max = Math.max(max, i - current + 1)
  }
  
  return max
}