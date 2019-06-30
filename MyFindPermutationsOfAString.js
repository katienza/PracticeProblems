const perm = str => {
  const results = []

  if (str.length === 1) return [str]

  for (let i = 0; i < str.length; i++) {
    const currentLetter = str[i]
    const remainingLetters = str.slice(0, i) + str.slice(i + 1)
    const remainingPermutations = perm(remainingLetters)
    
    for (let j = 0; j < remainingPermutations.length; j++) {
      result.push(currentLetter + remainingPermutations[j])
    }
  }

  return results
}