class Node {
  constructor(val, children) {
    this.val = val
    this.children = children
  }
}

const maxDepth = root => {
  let depth = 0

  if (root === null) return 0

  for (let i = 0; i < root.children.length; i++) {
    depth = Math.max(maxDepth(root.children[i]), depth)
  }

  return depth + 1
}