class Node {
  constructor(value) {
    this.value = value
    this.right = null
    this.left = null
  }
}

class MyBinarySearchTree {
  constructor() {
    this.root = null
  }
/*  INSERT PSEUDOCODE 
*     Create a new method called insert which accepts value as argument
*     Declare and initialize new Node with value
*     If root is empty, set root property to new node and return
*     Declare variable current, initialize with root property
*     While current is true
*         If value passed is equal to current.value then return undefined
*         If value < current.value
*             If current.left is null, set current.left to new node and break while loop
*             If current.left exists, update current with current.left
*         If value > current.value
*             If current.right is null, set current.right to new node and break while loop
*             If current.right exists, update current with current.right
*/
  insert(value) {
    let node = new Node(value)

    if (this.root === null) {
      this.root = node
      return this
    }

    let current = this.root // update current as we traverse

    while (current) {
      if (value === current.value) return undefined

      if (value < current.value) { // left node insertion
        if (current.left === null) {
          current.left = node
          return this
        } else {
          current = current.left
        }
      } 
      
      if (value > current.value) { // right node insertion
        if (current.right === null) {
          current.right = node
          return this
        } else {
          current = current.right
        }
      }
    }
  }
/*  FIND PSEUDOCODE
*   Create a new method called find which accepts value as argument
*   If root is empty, return false
*   Declare variable current, and initialize with this.root
*   While current is true
*       If value === current.value, return value
*       If current.right exists and value > current.value
*           Update current with current.right
*       If current.left exists and value < current.value
*           Update current with current.left
*   Return false (not found)
*/
  find(value) {
    if (this.root === null) return false
    let current = this.root

    while (current) {
      if (value < current.value) {
        current = current.left
      } else if (value > current.value) {
        current = current.right
      } else {
        return current
      }
    }
    return false
  }

  contains(value) {
    let found = this.find(value)

    if (found) return true

    return false
  }
/* breadthFirstSearch PSEUDOCODE
*    Create a queue (an array) and a variable to store values of nodes visited
*    Place root node in queue
*    While queue exists
*       Dequeue a node from queue
*       Push value of node into variable that stores nodes
*       If left property on node dequeued
*           Add left property to queue
*       If right property on node dequeued
*           Add right property to queue
*    Return variable that stores values
*/
  breadthFirstSearch() {
    let values = []
    let queue = []
    let node = this.root

    queue.push(node)

    while (queue.length) {
      node = queue.shift()
      values.push(node.value)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }

    return values
  }

  BFSTraverse() { // iterative approach
    let queue = []
    let results = []
    let node = this.root

    queue.push(node)

    while (queue.length) {
      node = queue.shift()
      results.push(node.value)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }

    return results
  }
/* DepthFirstSearch PSEUDOCODE PreOrder recursively
*    Create a new method called DFSPreOrder
*    Create variable results to store values of nodes visited and initialize with empty array
*    Write a helper function traverse which takes a node as argument
*       Push value of node to results array
*       If node has a left property, invoke traverse function with node.left
*       If node has a right property, invoke traverse function with node.right
*    Invoke traverse function with root node
*    return array of visited values
*/
  DFSPreOrder() {
    let results = []

    const traverse = node => {
      results.push(node.value)
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }

    traverse(this.root)
    return results
  }
/* DepthFirstSearch PSEUDOCODE DFSPostOrder recursively
*    Create a new method called DFSPostOrder
*    Create variable results to store values of nodes visited and initialize with empty array
*    Write a helper function traverse which takes a node as argument   
*       If node has a left property, invoke traverse function with node.left
*       If node has a right property, invoke traverse function with node.right
*       Push value of node to results array
*    Invoke traverse function with root node
*    return array of visited values
*/
  DFSPostOrder() {
    let results = []
    const traverse = node => {
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      results.push(node.value)
    }
    traverse(this.root)
    return results
  }
/* DepthFirstSearch PSEUDOCODE DFSPostOrder recursively
*    Create a new method called DFSPostOrder
*    Create variable results to store values of nodes visited and initialize with empty array
*    Write a helper function traverse which takes a node as argument   
*       If node has a left property, invoke traverse function with node.left
*       Push value of node to results array
*       If node has a right property, invoke traverse function with node.right
*    Invoke traverse function with root node
*    return array of visited values
*/
  DFSInOrder() {
    let results = []

    const traverse = node => {
      if (node.left) traverse(node.left)
      results.push(node.value)
      if (node.right) traverse(node.right)
    }

    traverse(this.root)
    return results
  }

  DFSTraversePreOrder() { // iterative approach
    let stack = []
    let results = []
    let node = this.root

    stack.push(node)

    while (stack.length) {
      node = stack.pop()
      results.push(node.value)
      if (node.right) stack.push(node.right)
      if (node.left) stack.push(node.left)
    }

    return results
  }

  DFSTraversePostOrder() { // iterative approach
    let stack = []
    let results = []
    let node = this.root

    stack.push(node)

    while (stack.length) {
      node = stack.pop()
      results.unshift(node.value)
      if (node.left) stack.push(node.left)
      if (node.right) stack.push(node.right)
    }

    return results
  }

  DFSTraverseInOrder() { // iterative approach
    let results = []
    let stack = []
    let node = this.root

    while (stack.length !== 0 || node !== null) {
      if (node) {
        stack.push(node)
        node = node.left
      } else {
        node = stack.pop()
        results.push(node.value)
        node = node.right
      }
    }
    return results
  }
}

let tree = new MyBinarySearchTree()

/*
        10
    5       13
  2   7   11  16
*/

