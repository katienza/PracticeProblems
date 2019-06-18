const middleNoe = function(head) {
  let fast = head
  let slow = head
  
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next
    slow = slow.next
  }

  return slow
}