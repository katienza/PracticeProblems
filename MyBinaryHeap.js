/* Max Binary Heap Rules
*   Parent nodes are always larger than child nodes
*   Each parent has at most two child nodes
*   The parent is greater than the children, but there are no guarantees between sibling nodes
*   Compact as possible. All children of each node are as full as they can be and left children are filled first
*/

/* Min Binary Heap Rules
*   Parent nodes are always smaller than child nodes
*/

/* For any index of an array n
*  The left child is stored at 2n + 1
*  The right child is stored at 2n + 2
*/

class MaxBinaryHeap {
  constructor() {
    this.values = []
  }
/* INSERT
*   Push the value into values array on heap
*   Bubble the value up to correct spot
*/
  insert(element) {
    this.values.push(element)
    this.bubbleUp()
  }
/* BUBBLEUP
*   Create idx variable and set to length of values property - 1
*   Create element variable and set to values property at idx
*   Keep looping while idx is greater than 0
*       Create parentIdx variable and set to floor of (idx - 1) / 2
*       Create parent variable and set to values property at parentIdx
*       if element <= parent, break out of loop
*       Swap value of the values property at parentIdx with
*       the value of the element property at the child index
*       Set index to be parentIdx and start over
*/
  bubbleUp() {
    let idx = this.values.length - 1
    const element = this.values[idx]

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2)
      let parent = this.values[parentIdx]

      if (element <= parent) break

      this.values[parentIdx] = element
      this.values[idx] = parent
      idx = parentIdx
    }
  }
}
