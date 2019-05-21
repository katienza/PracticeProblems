const isPalindrome = function(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/gi,'')
  const reverseStr = s.split('').reverse().join('')
  return s === reverseStr
}