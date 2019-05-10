function mySubstringSearch(searchStr, pattern) {
  let count = 0

  for (let i = 0; i < searchStr.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      if (searchStr[i + j] !== pattern[j]) break
      if (j === pattern.length - 1) count++
    }
  }

  return count
}