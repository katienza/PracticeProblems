class myStack {
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

let stack = new myStack()