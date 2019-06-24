const reverseWords = function(s) {
  return s.split(' ').reverse().filter(Boolean).join(' ')
}