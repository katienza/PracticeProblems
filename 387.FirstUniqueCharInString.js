const firstUniqChar = s => {
  const map = {}

  for (let i = 0; i < s.length; i++) {
    let char = s[i]
    if (map[char] === undefined) {
      map[char] = 1
    } else {
      map[char]++
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] === 1) return i
  }

  return -1
}