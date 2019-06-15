const findDuplicate = function(nums) {
  let uniqueNums = new Set()

  for (let i = 0; i < nums.length; i++) {
    if (uniqueNums.has(nums[i])) {
      return nums[i]
    } else {
      uniqueNums.add(nums[i])
    }
  }
}