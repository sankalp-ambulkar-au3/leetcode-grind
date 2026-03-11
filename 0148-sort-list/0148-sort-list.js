/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  if (!head || !head.next) return head;
  {
    let mid = findMid(head);
    let second = mid.next;
    mid.next = null;
    let left = sortList(head);
    let right = sortList(second);
    return merge(left, right);
  }
  function findMid(head) {
    let slow = head;
    let fast = head;
    while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }
  function merge(first, second) {
    let head = new ListNode(0);
    let temp = head;
    while (first && second) {
      if (first.val < second.val) {
        head.next = first;
        first = first.next;
      } else {
        head.next = second;
        second = second.next;
      }
      head = head.next;
    }
    if (first) head.next = first;
    if (second) head.next = second;
    return temp.next;
  }
};