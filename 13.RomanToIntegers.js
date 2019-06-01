let map = {
  'M': 1000,
  'D': 500,
  'C': 100,
  'L': 50,
  'X': 10,
  'V': 5,
  'I': 1
}

const romanToInt = function(s) {
  let result = 0

  for (let i = 0; i < s.length - 1; i++) {
    if (map[s[i]] < map[s[i + 1]]) {
      result -= map[s[i]]
    } else {
      result += map[s[i]]
    }
  }

  result += map[s[s.length - 1]]

  return result
}