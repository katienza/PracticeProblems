/* PSEUDOCODE
*   Store the first element as the smallest value
*   Compare smallest element to next element in array until you find a smaller item
*   If a smaller number is found, reassign smallest value to new minimum
*   Continue until the end of the array
*   If the minimum is not the value(index) you began with, swap two values
*   Repeat check with next element until array is sorted.
*/


const mySelectionSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    let min = i

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j
    }

    if (i !== min) [arr[i], arr[min]] = [arr[min], arr[i]]
  }

  return arr
}

const mySelectionSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    let min = i

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }

    if (i !== min) {
      let temp = arr[i]
      arr[i] = arr[min]
      arr[min] = temp
    }
  }

  return arr
}