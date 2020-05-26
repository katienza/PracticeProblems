/*
We do a depth-first walk through the tree, testing each node for validity as we go. If a node appears in the left subtree of an ancestor, it must be less than that ancestor. If a node appears in the right subtree of an ancestor, it must be greater than that ancestor.

Instead of keeping track of every ancestor to check these inequalities, we just check the largest number it must be greater than (its lowerBound) and the smallest number it must be less than (its upperBound).

Complexity
O(n) time and O(n) space
*/

function isBinarySearchTree(treeRoot) {
  // Start at the root, with an arbitrarily low lower bound
  // and an arbitrarily high upper bound
  const nodeAndBoundsStack = [];
  nodeAndBoundsStack.push({
    node: treeRoot,
    lowerBound: Number.NEGATIVE_INFINITY,
    upperBound: Number.POSITIVE_INFINITY,
  });

  // Depth-first traversal
  while (nodeAndBoundsStack.length) {
    const { node, lowerBound, upperBound } = nodeAndBoundsStack.pop();

    // If this node is invalid, we return false right away
    if (node.value <= lowerBound || node.value >= upperBound) {
      return false;
    }

    if (node.left) {
      // This node must be less than the current node
      nodeAndBoundsStack.push({
        node: node.left,
        lowerBound,
        upperBound: node.value,
      });
    }

    if (node.right) {
      // This node must be greater than the current node
      nodeAndBoundsStack.push({
        node: node.right,
        lowerBound: node.value,
        upperBound,
      });
    }
  }

  // If none of the nodes were invalid, return true
  // (At this point we have checked all nodes)
  return true;
}
