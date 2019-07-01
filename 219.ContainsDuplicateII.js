const containsNearbyDuplicate = (nums, k) => {
  const numbers = new Set()

  for (let i = 0; i < nums.length; i++) {
    if (numbers.has(nums[i])) return true

    numbers.add(nums[i])

    if (numbers.size > k) {
      numbers.delete(nums[i - k])
    }
  }

  return false
}