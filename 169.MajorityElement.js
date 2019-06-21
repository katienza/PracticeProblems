const majorityElement = function(nums) {
  let count = {}
  
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if (count[num] === undefined) {
      count[num] = 1
    } else {
      count[num]++
    }
    
    if (count[num] > nums.length / 2) return num
  }
};