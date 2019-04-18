Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?


var reverseList = function(head) {
  let node = head, previous, temp
  
  while (node) {
    // save next before overwriting node.next
    temp = node.next
    // reverse the pointer here
    node.next = previous
    // step forward in the list
    previous = node
    node = temp
  }

  return previous
};
  
var reverseList = function(head) {
  if (!head || !head.next) {
    return head
  }
  let temp = reverseList(head.next)
  head.next.next = head
  head.next = undefined
  return temp
};