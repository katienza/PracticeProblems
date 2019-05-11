/* PSEUDOCODE
*   Create an empty array
*   Look at the smallest values in each input array
*   While there are still values that we have not looked at
*       If the value in first array is SMALLER than in second array
*           push value in first array to results and move onto next value in first array
*       If value in first array is LARGER than value in second array
*           push value in second array into results and move onto next value in second array
*       If there are no more values in first array
*           push all remaining values from second array
*/

const merge = (arr1, arr2) => {
  let results = []
  let i = 0
  let j = 0

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i])
      i++
    } else {
      results.push(arr2[j])
      j++
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i])
    i++
  }

  while (j < arr2.length) {
    results.push(arr2[j])
    j++
  }

  return results
}

/* PSEUDOCODE
*   Separate arrays into halves until each array is empty or has 1 element
*   When you have smaller sorted arrays
*       Merge each array until back to original length of array
*   When array is merged back together
*       Return the merged and sorted array
*/

const myMergeSort = arr => {
  if (arr.length <= 1) return arr
  
  let mid = Math.floor(arr.length / 2)
  let left = myMergeSort(arr.slice(0, mid))
  let right = myMergeSort(arr.slice(mid))

  return merge(left, right)
}

