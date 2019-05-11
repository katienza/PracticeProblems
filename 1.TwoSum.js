// time complexity: O(n), space complexity: O(n)
const twoSum = (nums, target) => {
  let map = {};

  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]

    if(map[num] != undefined){
      return [map[num], i]
    } else {
      map[target - num] = i
    }
  }

  return []
}

// time complexity: O(n^2), space complexity: O(n)
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i,j]
      }
    }
  }
};