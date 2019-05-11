const removeElements = function(head, val) {
  if (head === null) return null
  
  let prev = head
  let current = head.next

  while (current) {
    if (current.val === val) {
      current = current.next
      prev.next = current
    } else {
      prev = current
      current = current.next
    }
  }
  
  if (head.val === val) return head.next
  
  return head
};