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