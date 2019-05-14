const invertTree = root => {
  if (root) {
    let temp = root.left
    root.left = invertTree(root.right)
    root.right = invertTree(temp)
  }
  return root
}