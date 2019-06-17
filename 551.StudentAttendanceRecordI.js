const checkRecord = function(s) {
  let count = 0

  for (let i = 0; i < s.length && count < 2; i++) {
    if (s.charAt(i) === 'A') count++
  }

  return count < 2 && s.indexOf('LLL') < 2
}
