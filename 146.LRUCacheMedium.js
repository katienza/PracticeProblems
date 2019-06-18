class LRUCache {
  constructor(capacity) {
    this.capacity = capacity
    this.map = new Map()
  }

  get(key) {
    let value = this.map.get(key)

    if (typeof value === 'undefined') return -1

    this.map.delete(key)
    this.map.set(key, value)

    return value
  }

  put(key, value) {
    if (this.map.has(key)) this.map.delete(key)

    this.map.set(key, value)

    let keys = this.map.keys()

    while (this.map.size > this.capacity) {
      this.map.delete(keys.next().value)
    }
  }
}