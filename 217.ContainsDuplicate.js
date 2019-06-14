const containsDuplicate = function(nums) {
  let map = {}

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] === undefined) {
      map[nums[i]] = 1
    } else {
      map[nums[i]]++
    }
  }

  for (let key in map) {
    if (map[key] >= 2) return true
  }

  return false
}