var lengthOfLastWord = function(s) {
  let words = s.split(' ')

  if (s.length === 0 || s === ' ') return 0

  for (let i = words.length - 1; i >= 0; i--) {
      if (words[i] === '') continue
      
      return words[i].length;
  }
  
  return 0
};