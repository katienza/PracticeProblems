const mergeTwoLists = function(l1, l2) {
  let newList = new ListNode()
  let prev = newList

  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      prev.next = new ListNode(l1.val)
      l1 = l1.next
      prev = prev.next
    } else {
      prev.next = new ListNode(l2.val)
      l2 = l2.next
      prev = prev.next
    }
  }

  prev.next = l1 || l2

  return newList.next
}