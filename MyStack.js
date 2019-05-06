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

const myStack = function () {
  this.items = []
}

myStack.prototype.add = function(value) {
  this.items.push(value)
}

myStack.prototype.remove = function() {
  this.items.pop()
}

myStack.prototype.peek = function() {
  return this.items[this.items.length - 1]
}

myStack.prototype.isEmpty = function() {
  return this.items.length === 0
}

myStack.prototype.size = function() {
  return this.items.length
}

let stack = new myStack()