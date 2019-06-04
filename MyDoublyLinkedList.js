class Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.prev = null
  }
}

class MyDoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = null
  }

/* PSEUDOCODE
*   Create new node with value passed to function
*   If head property is null
*       Set head to newly created node
*       Set tail to newly created node
*   Else
*       Set the next property on the tail to newly created node
*       Set prev property on newly created node to this.tail
*       Set this.tail to be newly created node
*   Increment length
*   Return the doubly linked list
*/
  push(value) {
    let node = new Node(value)

    if (!this.head) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    }

    this.length++
    return this
  }

/* PSEUDOCODE
*   If there is no head, return undefined
*   Store current tail to variable called poppedNode
*   If length is 1
*       Set this.head to null
*       Set this.tail to null
*   Else
*       Update tail to be the previous node
*       Set next property of this.tail to null
*       Set prev property of poppedNode to null
*   Decrement length
*   return poppedNode
*/
  pop() {
    if (!this.head) return undefined

    let poppedNode = this.tail

    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail = poppedNode.prev
      this.tail.next = null
      poppedNode.prev = null
    }

    this.length--
    return poppedNode
  }

/* PSEUDOCODE
*   If length is 0 return undefined
*   Store current head property called prevHead
*   If length is 1
*       Set this.head to be null
*       Set this.tail to be null
*   Update this.head to be the next of prevHead
*   Set the head's prev property to null
*   Set the prev head's property to null
*   Decrement length
*   Return prevHead
*/
  shift() { // removing a node from beginning of Doubly Linked List
    if (this.length === 0) return undefined

    let prevHead = this.head

    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = prevHead.next
      this.head.prev = null
      prevHead.next = null
    }

    this.length--
    return prevHead
  }

/* PSEUDOCODE
*   Create a new node with value passed to function
*   If length is 0
*       Set head to be new node
*       Set tail to be new node
*   Else
*       Set prev property on head of list to be new node
*       Set next property on new node to be the head property
*       Update this.head to be new node
*   Increment length
*   Return list
*/
  unshift(value) { // inserts a node at beginning of Doubly Linked List
    let node = new Node(value)

    if (this.length === 0) {
      this.head = node
      this.tail = node
    } else {
      this.head.prev = node
      node.next = this.head
      this.head = node
    }

    this.length++
    return this
  }

/* PSEUDOCODE
*   if index is less than 0 or greater or equal to length, return null
*   if index is less than or equal to half the length of list
*       Loop through list starting from head towards middle
*       Return the node once found
*   If the index is greater than half the length of list
*       Loop through list starting from tail towards middle
*       Return the node once found
*/
  get(index) { // accessing a node by its position
    if (index < 0 || index >= this.length) return null

    let current
    let count

    if (index <= this.length / 2) {
      current = this.head
      count = 0

      while (count !== index) {
        current = current.next
        count++
      }
    } else {
      current = this.tail
      count = this.length - 1

      while (count !== index) {
        current = current.prev
        count--
      }
    }

    return current
  }

/* PSEUDOCODE
*   Store result of the get method at the index passed to function to foundNode
*   If foundNode is a valid node
*       Set value of that node to be the parameter value
*       Return true
*   Else
*       Return false
*/
  set(index, value) { // replacing the value of a node
    let foundNode = this.get(index)

    if (foundNode !== null) {
      foundNode.value = value
      return true
    }

    return false
  }

/* PSEUDOCODE
*    Create a method, insert, that takes an index and value
*    If the index is less than 0 or greater than or equal to length
*       Return false
*    If index is 0
*       Unshift value
*    If index is the same as length
*       Push value
*    Use get method to access index - 1
*       Set the next and prev properties on correct nodes to link altogether
*    Increment length
*    Return true
*/
  insert(index, value) { // adding a node by a certain position
    if (index < 0 || index > this.length) return false
    if (index === 0) this.unshift(value)
    if (index === this.length) this.push(value)

    let node = new Node(value)
    let prevNode = this.get(index - 1)
    let nextNode = prevNode.next

    prevNode.next = node
    node.prev = prevNode
    node.next = nextNode
    nextNode.prev = node

    this.length++
    return true
  }

/* PSEUDOCODE
*   Create a method called, remove, that takes an index
*   If index is less than 0 or greater than or equal to length
*       Return undefined
*   If index is 0
*       return this.unshift
*   If index is the same as length -  1
*       return this.pop
*   Store node to be removed using this.get(index) in removedNode
*   Update next and prev properties to remove the found node from list
*   Set next and prev to null on found node
*   Decrement length
*   Return removed node
*/
  remove(index) {
    if (index < 0 || index >= this.length) return undefined
    if (index === 0) return this.unshift()
    if (index === this.length - 1) return this.pop()

    let removedNode = this.get(index)
    let prevNode = removedNode.prev
    let nextNode = removedNode.next

    prevNode.next = nextNode
    nextNode.prev = prevNode

    removedNode.prev = null
    removedNode.next = null

    this.length--
    return removedNode
  }
}

/* Big O of Doubly Linked Lists
Insertion - O(1)
Removal - O(1)
Searching - O(N)
Access - O(N)
*/

/* Advantages/Disadvantages of the Linked Lists
Doubly Linked lists has an additional pointer to previous nodes
Finding nodes in Doubly Linked Lists takes half the time compared to Singly Linked Lists
Doubly Linked Lists take up more memory
*/