/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let slow =head
    let fast =head
    while(fast && fast.next)
    {
        slow=slow.next
        fast=fast.next.next
    }
    const secondHalf=slow.next
    slow.next=null
    let prev=null
    let curr=secondHalf
    while(curr)
    {
        const next=curr.next
        curr.next=prev
        prev=curr
        curr=next
    }
    let first =head
    let second =prev
    while(second)
    {
        let next1=first.next
        let next2=second.next
        first.next=second
        second.next=next1
        first=next1
        second=next2
    }
};