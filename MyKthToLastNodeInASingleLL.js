/*
Write a function kthToLastNode() that takes an integer k and the headNode of a singly- linked list, and returns the kth to last node in the list.
 For example:
   class LinkedListNode {
     constructor(value) {
       this.value = value;
       this.next = null;
     }
}
   const a = new LinkedListNode('Angel Food');
   const b = new LinkedListNode('Bundt');
   const c = new LinkedListNode('Cheese');
   const d = new LinkedListNode("Devil's Food");
   const e = new LinkedListNode('Eccles');
   a.next = b;
   b.next = c;
   c.next = d;
   d.next = e;
   kthToLastNode(2, a);
   // Returns the node with value "Devil's Food" (the 2nd to last node)
*/

// First approach: use the length of the list.
// 1. walk down the whole list, counting nodes, to get the total listLength.
// 2. subtract k from the listLength to get the distance from the head node to the target node
// (the kth to last node).
// 3. walk that distance from the head to arrive at the target node.
function kthToLastNode(k, head) {
  if (k < 1) {
    throw new Error(`Impossible to find less than first to last node: ${k}`);
  }
  // STEP 1: get the length of the list
  // Start at 1, not 0
  // else we'd fail to count the head node!
  let listLength = 1;
  let currentNode = head;
  // Traverse the whole list,
  // counting all the nodes
  while (currentNode.next) {
    currentNode = currentNode.next;
    listLength += 1;
  }
  // If k is greater than the length of the list, there can't
  // be a kth-to-last node, so we'll return an error!
  if (k > listLength) {
    throw new Error(`k is larger than the length of the linked list: ${k}`);
  }
  // STEP 2: walk to the target node
  // Calculate how far to go, from the head,
  // to get to the kth to last node
  const howFarToGo = listLength - k;
  currentNode = head;
  for (let i = 0; i < howFarToGo; i++) {
    currentNode = currentNode.next;
  }
  return currentNode;
}
