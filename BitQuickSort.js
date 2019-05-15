/*
*   Given an array of bits (0s and 1s), return it in a sorted order. You cannot use any built-in sort methods such as .sort()
*   Notes: The length of the array will be no more than 10,000
*   Notes: You can assume that all of the elements of the input array will be 1s and 0s
*
*   input: [0, 1, 1, 0, 1, 0]
*   output: [0, 0, 0, 1, 1, 1]
*
*   input: [0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0]
*   output: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1]
*/

function bit_sort_array(arr) {
  if (arr.length <= 1) return arr

  let left = []
  let right = []
  let newArr = []
  let pivot = arr.pop()

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return newArr.concat(bit_sort_array(left), pivot, bit_sort_array(right))
}