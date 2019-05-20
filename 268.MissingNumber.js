const missingNumber = function(nums) {
  let sum = 0
  let total = nums.length * (nums.length + 1) / 2
  
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
  }
  
  return total - sum
}