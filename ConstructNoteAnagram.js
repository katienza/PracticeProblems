/*
*   Given two strings return true if the second string can be turned into the first string
*
*   Rules: characters can be deleted, characters cannot be added, characters can be rearranged
*   Notes: The length of each input string will be greater than 0 and no more than 10,000
*   Notes: You can assume that all the characters are lowercase
*   
*   input: 'banana'
*   output: 'baannn'
*
*   input: 'pizza'
*   output: 'apeizz'
*/

function constructNote(str1, str2) {
  const chars = {}

  for (let i = 0; i < str2.length; i++) {
    chars[string2[i]] = (chars[string2[i]] || 0) + 1
  }

  for (let i = 0; i < str1.length; i++) {
    if (chars[string1[i]]) {
      chars[string1[i]]--
    } else {
      return false
    }
  }

  return true
}