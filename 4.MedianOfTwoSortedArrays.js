const findMedianSortedArrays = function(nums1, nums2) {
  const mergedArrays = mergeSortedArrays(nums1, nums2)
  const mid = Math.floor((mergedArrays.length - 1) / 2)
  
  if (mergedArrays.length === 1) return mergedArrays[0]
  
  if (mergedArrays.length % 2 === 0) {
    return ((mergedArrays[mid] + mergedArrays[mid + 1]) / 2)
  }
  
  return mergedArrays[mid]
};

const mergeSortedArrays = function(nums1, nums2) {
  let index = nums1.length + nums2.length - 1
  let i = nums1.length - 1
  let j = nums2.length - 1
  
  while (i >= 0 && j >= 0) {
    if (nums1[i] >= nums2[j]) {
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

  return nums1
}