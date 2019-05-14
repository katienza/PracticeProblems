class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

const invertTree = root => {
  if (root) {
    let temp = root.left
    root.left = invertTree(root.right)
    root.right = invertTree(temp)
  }

  return root
}

invertTree([4,2,7,1,3,6,9])