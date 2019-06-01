class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class MySinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

/* PSEUDOCODE
*   Create push method that accepts a value
*   Create a new node and pass value in
*   Check if this.head is null
*       Set head to new node
*       Set tail to new node
*   Else
*       Set next property on tail to new node
*       Set tail property to new node
*   Increment length
*   Return singly linked list
*/
  push(value) {
    let node = new Node(value)

    if (!this.head) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      this.tail = node
    }
    
    this.length++
    return this
  }

/* PSEUDOCODE
*   Create a method, pop, that has no arguments
*   Check if no nodes in list
*       Return undefined
*   Set this.head to current
*   Set current to be newTail
*   Loop through list until tail
*       Set tail to be second to last node
*       Set next property of second to last node to null
*   Decrement length
*   If the length of list is 0
*       Set head and tail to null
*   Return value of current
*/
  pop() {
    if (!this.head) return undefined

    let current = this.head
    let newTail = current

    while (current.next) {
      newTail = current
      current = current.next
    }

    this.tail = newTail
    this.tail.next = null
    this.length--

    if (this.length === 0) {
      this.head = null
      this.tail = null
    }

    return current
  }
/* PSEUDOCODE
*   Create a method, shift, that accepts a value
*   Check if no nodes in list
*       Return undefined
*   Set this.head to current
*   Set this.head to current.next
*   Decrement length
*   If this.length is 0
*       Set this.tail to null
*   Return value of current
*/
  shift() { // Removing a new node from beginning of singly linked list
    if (!this.head) return undefined

    let current = this.head
    this.head = current.next

    this.length--

    if (this.length === 0) this.tail = null

    return current
  }
/* PSEUDOCODE
*   Create a method, unshift, that accepts a value
*   Create a new node and pass in value as a parameter
*   If there is no head in list
*       Set this.head and this.tail to new node
*   Else
*       Set node.next to this.head
*       Set this.head to node
*   Increment length
*   Return singly linked list
*/
  unshift(value) {  // Adding a new node to beginning of singly linked list
    let node = new Node(value)

    if (!this.head) {
      this.head = node
      this.tail = node
    } else {
      node.next = this.head
      this.head = node
    }

    this.length++
    return this
  }
/* PSEUDOCODE
*   Create a method, get, that accepts an index
*   If the index is less than 0 or greater than or equal to length of list
*       Return null
*   Initialize a counter
*   Set this.head to current
*   Loop through list until you reach the index
*   Return current
*/
  get(index) { // Retrieving a node by it's position in singly linked list
    if (index < 0 || index >= this.length) return null
    
    let counter = 0
    let current = this.head

    while (counter !== index) {
      current = current.next
      counter++
    }

    return current
  }

/* PSEUDOCODE
*   Create a method, set, that accepts an index and a value
*   Store result of the get method at the index passed to function to foundNode
*   If foundNode is a valid node
*       Set value of that node to be the parameter value
*       Return true
*   Else
*       Return false
*/
  set(index, value) { // Changing the value of a node based on it's position in singly linked list
    let foundNode = this.get(index)

    if (foundNode) {
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
*       Return this.unshift value
*    If index is the same as length
*       return this.push value
*    Store result from get method passing in index - 1 to prevNode
*    Store next property on prevNode to nextNode
*       Set next property on prevNode to new node
*       Set next property on new node to nextNode
*    Increment length
*    Return true
*/
  insert(index, value) {  // Adding a node to a specific location in singly linked list
    if (index < 0 || index > this.length) return false
    if (index === 0) return this.unshift(value)
    if (index === this.length) return this.push(value)
    
    let node = new Node(value)
    let prevNode = this.get(index - 1)
    let nextNode = prevNode.next

    prevNode.next = node
    node.next = nextNode

    this.length++
    return true
  }
/* PSEUDOCODE
*   Create a method called, remove, that takes an index
*   If index is less than 0 or greater than or equal to length
*       Return undefined
*   If index is 0
*       return this.shift
*   If index is the same as length -  1
*       return this.pop
*   Store node to be removed using this.get(index - 1) in previousNode
*   Store next property of previousNode to removedNode
*   Update next property of previousNode with next property of removedNode
*   Decrement length
*   Return removedNode
*/
  remove(index) {  // removing a node from a specific position in singly linked list
    if (index < 0 || index >= this.length) return undefined
    if (index === 0) return this.shift()
    if (index === this.length - 1) return this.pop()

    let previousNode = this.get(index - 1)
    let removedNode = previousNode.next

    previousNode.next = removedNode.next

    this.length--
    return removedNode
  }
}

/* Big O of Doubly Linked Lists
Insertion - O(1)
Removal - O(1) or O(n)
Searching - O(N)
Access - O(N)
*/

/* Advantages/Disadvantages of the Linked Lists
Singly linked lists are better alternative to arrays when insertion and deletion at beginning at frequent
Linked lists do not contain a built in index, whereas an array contains a built in index
Foundation for other data structures like Stacks and Queues
*/