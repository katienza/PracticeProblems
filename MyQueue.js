class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class MyQueue {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  enqueue(value) {
    let node = new Node(value)

    if (!this.head) {
      this.head = node
      this.tail = node
    } else {
      this.head.next = node
      this.head = node
    }
    return ++this.size
  }

  dequeue() {
    if (!this.head) return null

    let temp = this.head

    if (this.head === this.tail) {
      this.tail = null
    }

    this.head = this.head.next
    this.size--
    return temp.value
  }

  peek() {
    return this.head
  }

  isEmpty() {
    return this.size === 0
  }

  size() {
    return this.size
  }
  
  clear() {
    this.head = null
    this.tail = null
    this.size = 0
  }
}

let queue = new MyQueue()