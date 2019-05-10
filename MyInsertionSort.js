/* PSEUDOCODE
*		Pick the second element in array
*		Compare second element with prior element and swap if needed
*		Continue to next element
*		If next element is out of order, iterate through already sorted items
*		Place the element in the correct place of already sorted items
*		Repeat until array is sorted
*/

const myInsertionSort = arr => {
	for (let i = 0; i < arr.length; i++) {
		let valueToBeInserted = arr[i]
		let j = i - 1

		while (j >= 0 && arr[j] > valueToBeInserted) {
			arr[j + 1] = arr[j]
			j--
		}

		arr[j + 1] = valueToBeInserted
	}

	return arr
}