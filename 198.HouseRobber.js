const rob = nums => {
  let prevMax = 0
  let currentMax = 0

  for (let i = 0; i < nums.length; i++) {
    let temp = currentMax
    currentMax = Math.max(prevMax + nums[i], currentMax)
    prevMax = temp
  }

  return currentMax
}