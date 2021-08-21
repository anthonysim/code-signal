function removeKFromList(head, k) {
  while (head !== null && head.value === k) {
    head = head.next;
  }
  let current = head;

  while (current && current.next) {
    if (current.next.value === k) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
}