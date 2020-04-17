/*
1. If we have a left subtree but not a right subtree, then the current node is the largest overall (the "rightmost") node. The second largest element must be the largest element in the left subtree. We use our findLargest() function above to find the largest in that left subtree!
2. If we have a right child, but that right child node doesn't have any children, then the right child must be the largest element and our current node must be the second largest element!
3. Else, we have a right subtree with more than one element, so the largest and second largest are somewhere in that subtree. So we step right.
*/

function findLargest(rootNode) {
  let current = rootNode;
  while (current) {
    if (!current.right) return current.value;
    current = current.right;
  }
}

function findSecondLargest(rootNode) {
  if (!rootNode || (!rootNode.left && !rootNode.right)) {
    throw new Error("Tree must have at least 2 nodes");
  }
  let current = rootNode;
  while (current) {
    // Case: current is largest and has a left subtree
    // 2nd largest is the largest in that subtree
    if (current.left && !current.right) {
      return findLargest(current.left);
    }
    // Case: current is parent of largest, and largest has no children,
    // so current is 2nd largest
    if (current.right && !current.right.left && !current.right.right) {
      return current.value;
    }
    current = current.right;
  }
}
