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
var swapPairs = function(head) {
  if (!head || !head.next) return head;
  const thirdNode = head.next.next;
  const secondNode = head.next;
  secondNode.next = head;
  head.next = swapPairs(thirdNode);

  return secondNode;
};