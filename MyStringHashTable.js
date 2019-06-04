/* Only hashes strings
* O(n) time, depends on size of data
* Not random enough
*/ 
const hash = (key, arrayLength) => {
  let total = 0

  for (let char of key) {
    let value = char.charCodeAt(0) - 96

    total = (total + value) % arrayLength
  }

  return total
}

/* Only hashes strings
* Adding randomness using prime numbers
* Produces less collisions
*/ 

const hash = (key, arrayLength) => {
  let total = 0
  let WEIRD_PRIME = 31

  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i]
    let value = char.charCodeAt(0) - 96

    total = (total * WEIRD_PRIME + value) % arrayLength
  }

  return total
}

/* SEPARATE CHAINING
*   At each index in our array we store values using a sophisticated data structure (e.g. array or linked list)
*   Allows us to store multiple key-value pairs at the same index
*/

/* LINEAR PROBING
*   When we find a collision, we search through the array to find the next empty slot
*   Unlike with separate chaining, this allows us to store a single key-value at each index
*/

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size)
  }

  hash(key) {
    let total = 0
    let WEIRD_PRIME = 31

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i]
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length
    }

    return total
  }

/* PSEUDOCODE
*   Create a method, set, that accepts a key and a value
*   Hashes the key and stores into index variable
*   Stores the key-value pair in the hash table array via separate chaining
*     If there is nothing at index of keyMap
*         set keyMap[index] to empty array
*     Else
*         push key-value pair array into keyMap
*/
  set(key, value) {
    let index = this.hash(key)
    if (!this.keyMap[index]) {
      this.keyMap[index] = []
    }
    this.keyMap[index].push([key, value])
  }

/* PSEUDOCODE
*   Create a method, get, that accepts a key
*   Hashes the key
*   Stores the key-value pair in the hash table
*   If key is not found, return undefined
*/

  get(key) {
    let index = this.hash(key)
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i]
        }
      }
    }
    return undefined
  }

  values() {
    let valuesArr = []

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1])
          }
        }
      }
    }

    return valuesArr
  }

  keys() {
    let keysArr = []

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0])
          }
        }
      }
    }

    return keysArr
  }
}


/* Big O of Hash Tables
*   Insert: O(1)
*   Deletion: O(1)
*   Access: O(1)
*/