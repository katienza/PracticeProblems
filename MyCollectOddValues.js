// Collect all odd values in an array

// Helper Method
function collectOddValues(arr) {
  let result = []

  function helper(nums) {
    if (nums.length === 0) return

    if (nums[0] % 2 !== 0) {
      result.push(nums[0])
    }

    helper(nums.slice(1))
  }

  helper(arr)
  return result
}

// Pure function
function collectOddValuesRecursively(arr) {
  let newArr = []

  if (arr.length === 0) return newArr

  if (arr[0] % 2 === 0) {
    newArr.push(arr[0])
  }

  newArr = newArr.concat(collectOddValuesRecursively(arr.slice(1)))
  return newArr
}