/*** Merging two sorted arrays for mergeSort ***/
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

/*** LeetCode problem set  ***/
const merge = function(nums1, m, nums2, n) {
  let index = m + n - 1
  let i = m - 1
  let j = n - 1

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[index] = nums1[i]
      index--
      i--
    } else {
      nums1[index] = nums2[j]
      index--
      j--
    }
  }
  
  while (j >= 0) {
    nums1[index] = nums2[j]
    index--
    j--
  }
}