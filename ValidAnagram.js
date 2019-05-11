/* PSEUDOCODE
*   Check if str1 length equals str2 length, else return false
*   Store lowercase str1 in newStr1
*   Store lowercase str2 in newStr2
*   Create map
*   Loop over newStr1
*       Check if map contains key
*           If not, set map[key] to 1
*           If yes, add 1 to map[key]
*   Loop over newStr2
*       Check if value set to map[key] exists or value is zero
*           If yes, subtract 1 to map[key]
*           If not, return false because it is not an anagram
*
*    return true
*/

const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false
  let newStr1 = str1.toLowerCase()
  let newStr2 = str2.toLowerCase()
  let map = {}

  for (let i = 0; i < newStr1.length; i++) {
    let key = newStr1[i]
    if (map[key] === undefined) {
      map[key] = 1
    } else {
      map[key]++
    }
  }

  for (let i = 0; i < newStr2.length; i++) {
    let prop = newStr2[i]
    if (map[prop]) {
      map[prop]--
    } else {
      return false
    }
  }

  return true
}