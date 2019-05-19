// Returns the digit in num at the given place value
const getDigit = (num, idx) => { 
  return Math.floor(Math.abs(num) / Math.pow(10, idx)) % 10
}

// Find how many times you have to sort into buckets
// Returns the number of digits in num
const digitCount = num => { 
  if (num === 0) return 1
  return Math.floor(Math.log10(Math.abs(num))) + 1
}

// Given an array of numbers, returns the number of digits in the largest numbers in the list
const mostDigits = nums => {
  let maxDigits = 0
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]))
  }
  return maxDigits
}

/* PSEUDOCODE
*   Define a function that accepts a list of numbers
*   Figure out how many digits largest number has
*   Loop from i = 0 up to largest number of digits
*   For each iteration of loop:
*       Create buckets for each digit (0 to 9)
*       Place each number in corresponding bucket based on its ith digit
*   Replace our existing array with values in our buckets starting with 0 and going up to 9
*   Return list at the end
*/
const myRadixSort = nums => {
  let maxDigitCount = mostDigits(nums)

  for (let i = 0; i < maxDigitCount; i++) {
    let digitBuckets = Array.from({length: 10}, () => [])

    for (let j = 0; j < nums.length; j++) {
      let num = nums[j]
      let digit = getDigit(num, i)
      
      digitBuckets[digit].push(num)
    }

    nums = [].concat(...digitBuckets)
  }

  return nums
}

// myRadixSort([23, 345, 5467, 12, 2345, 9852])
