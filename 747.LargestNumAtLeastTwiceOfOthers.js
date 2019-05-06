const dominantIndex = function(nums) {
  let idx = -1
  let largestEle = -1
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= (largestEle * 2)) {
      idx = i
      largestEle = nums[i]
    } else if (largestEle < (nums[i] * 2)){
      idx = -1
    }
  }
  
  return idx
};