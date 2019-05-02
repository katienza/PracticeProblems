// Kadane's algorithm

var maxSubArray = function(nums) {
    let arr1 = 0
    let arr2 = nums[0]
    
    nums.forEach((idx) => {
        arr1 = Math.max(idx, arr1 + idx)
        arr2 = Math.max(arr2, arr1)
    })
      
      return arr2
  };