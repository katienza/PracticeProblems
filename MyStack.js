/* class myStack {
  constructor() {
    this.items = []
  }

  add(value) {
    this.items.push(value)
  }

  remove() {
    this.items.pop()
  }

  peek() {
    return this.items[this.items.length - 1]
  }

  isEmpty() {
    return this.items.length === 0
  }

  size() {
    return this.items.length
  }
}

let stack = new myStack() */

// const myStack = function () {
//   this.items = []
// }

// myStack.prototype.add = function(value) {
//   this.items.push(value)
// }

// myStack.prototype.remove = function() {
//   this.items.pop()
// }

// myStack.prototype.peek = function() {
//   return this.items[this.items.length - 1]
// }

// myStack.prototype.isEmpty = function() {
//   return this.items.length === 0
// }

// myStack.prototype.size = function() {
//   return this.items.length
// }

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class MyStack {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  push(value) {
    let node = new Node(value)

    if (!this.first) {
      this.first = node
      this.last = node
    } else {
      let temp = this.first
      this.first = node
      this.first.next = temp
    }

    this.size = this.size + 1
    return this.size
  }

  pop() {
    if (!this.first) { 
      return null 
    }

    let temp = this.first

    if (this.first === this.last) { 
      this.last = null 
    }

    this.first = this.first.next
    this.size = this.size - 1

    return temp.value
  }

  peek() {
    if (!this.first) {
      return null
    } else {
      return this.first
    }
  }

  size() {
    return this.size
  }

  isEmpty() {
    return this.size === 0
  }
}

let stack = new MyStack()