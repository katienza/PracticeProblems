Given two arrays, write a function to compute their intersection.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Note:

Each element in the result must be unique.
The result can be in any order.

var intersection = function(nums1, nums2) {
  let removedDupes1 = new Set()
  let removedDupes2 = new Set()
  let result = []
  
  for (let i = 0; i < nums1.length; i++) {
      if (removedDupes1[nums1[i]] === undefined) {
          removedDupes1.add(nums1[i])
      }
  }
  
  for (let i = 0; i < nums2.length; i++) {
      if (removedDupes2[nums2[i]] === undefined) {
          removedDupes2.add(nums2[i])
      }
  }
  
  removedDupes1.forEach(value1 => {
      removedDupes2.forEach(value2 => {
          if (value1 === value2) result.push(value1)
      })
  })
  
  return result
};