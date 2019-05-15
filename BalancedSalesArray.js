/*
*   Given an array of sales numbers, what is the index
*   of the smallest index element for which the sums of
*   all elements to the left and to the right are equal.
*   The array may not be reordered.
*
*   For example, given the array sales=[1,2,3,4,6], we see that 1+2+3=6.
*   Using zero based indexing, sales[3]=4 is the value sought. The index is 3.
*
*   Function Description
*   Complete the function balancedSalesSum in the editor below. The function
*   must return the index of the smallest element for which the sum of elements
*   to its left and rights right are equal.
*
*   balancedSalesSum has the following paramter(s):
*     sales[sales[0],...sales[n-1]]: an array of integers
*
*   Constraints
*   3 <= n <= 10^5
*   1 <= sales[i] <= 2 x 10^4, where 0 <= i < n
*   It is guaranteed that a solution always exists.
*/

function balancedSalesSum(arr) {
  for (let i = 0; i < arr.length; i++) {
    let left = arr.slice(0, i).reduce((total, num) => total + num, 0)
    let right = arr.slice(i + 1).reduce((total, num) => total + num, 0)

    if (left === right) return i
  }
}