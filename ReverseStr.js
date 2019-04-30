var reverseString = function(s) {    
  function helper(start, end, sCopy) {
    if (start > end) return

    [sCopy[start], sCopy[end]] = [sCopy[end], sCopy[start]]
    
    return helper(start + 1, end - 1, sCopy)
  }
  
  helper(0, s.length - 1, s)
};