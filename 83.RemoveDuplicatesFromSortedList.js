class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}
const deleteDuplicates = head => {
  let current = head

  while (current && current.next) {
    if (current.value === current.next.value) {
      current.next = current.next.next
    } else {
      current = current.next
    }
  }

  return head
}