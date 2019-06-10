class Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.prev = null
  }
}

class MyReverseDoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

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

  reverse() {
    let current = this.head
    let nextNode
    let prevNode

    while (current) {
      // store next node and prev node
      nextNode = current.next
      prevNode = current.prev
      
      // change next node of current node so it links to previous node
      current.next = prevNode
      current.prev = nextNode

      // move prevNode and currentNode one step forward
      prevNode = current
      current = nextNode
    }

    // reset head to prevNode
    // reset tail to head
    this.head = prevNode
    this.tail = this.head

    // return the doubly linked list
    return this
  }
}