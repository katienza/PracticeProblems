// Alternative
const myQuickSort = nums => {
  if (nums.length < 2) return nums

  let pivotIndex = nums[0]
  let lesser = []
  let greater = []

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < pivotIndex) {
      lesser.push(nums[i])
    } else {
      greater.push(nums[i])
    }
  }

  return myQuickSort(lesser).concat(pivotIndex, myQuickSort(greater))
}

/* PSEUDOCODE
*   Implement a function for arranging elements in an array on each side of pivot point
*   Given an array, helper function chooses an element as pivot point
*   Rearrange elements in array so 
*       all values LESS than pviot move to left of pivot point
*       all values GREATER than pivot moved to right of pivot point
*   Helper function rearranges in place and does not create a new array
*   Helper returns the index of the pivot point
*
*
*   PIVOT PSEUDOCODE
*       Pivot helper function accepts 3 arguments: array, start index (0), end index (array.length - 1)
*       Grab pivot from middle of array
*       Store current pivot index in a variable (keeps track of where pivot should end up
*       Loop through array from start until end
*           If pivot is greater than current element
*                increment pivot index variable
*                swap the current element with element at pivot index
*       Swap starting element (ie, the pivot) with pivot index
*       Return  pivot index
*/

const swap = (arr, left, right) => {
  arr[left] = arr[left] ^ arr[right]
  arr[right] = arr[left] ^ arr[right]
  arr[left] = arr[left] ^ arr[right]
}

const pivot = (arr, left, right) => {
  let partition = Math.floor((left + right) / 2)
  let i = left
  let j = right

  while (i <= j) {
    while (arr[i] < partition) i++
    while (arr[j] > partition) j--

    if (i <= j) {
      swap(arr, i, j)
      i++
      j--
    }
  }

  return i
}

const myQuickSort = (arr, left = 0, right = arr.length - 1) => {
  if (arr.length === 0) return arr

  let pivotIndex = pivot(arr, left, right)
  myQuickSort(arr, left, pivotIndex - 1)
  myQuickSort(arr, pivotIndex, right)

  return arr
}

