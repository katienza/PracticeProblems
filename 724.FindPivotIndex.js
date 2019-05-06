var pivotIndex = function(nums) {
  let left = 0
  let right = 0
        
  for (let i = 0; i < nums.length; i++) {
    right = right + nums[i]
  }
        
  for (let j = 0; j < nums.length; j++) {
    right = right - nums[j]
    if (left === right) return j
    left = left + nums[j]
  }
  
  return -1
};