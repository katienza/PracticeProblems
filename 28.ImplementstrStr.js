const strStr = function (haystack, needle) {
  if (haystack.length === 0 && needle.length === 0) return 0
  if (haystack.length === 1 && needle.length === 0) return 0
  if (haystack.length === 0 && needle.length === 1) return -1

  for (let i = 0; i < haystack.length; i++) {
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) break
      if (j === needle.length - 1) return i
    }
  }

  return -1
}