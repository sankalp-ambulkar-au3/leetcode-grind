/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    function addNumbers(l1,l2,carry=0)
    {
        if(!l1 && !l2 && carry===0)
        return null
        let firstNumber = l1?l1.val:0
        let secondNumber = l2?l2.val:0
        let sum =firstNumber+secondNumber+carry
        let newNode=new ListNode(sum%10);
        newNode.next=addNumbers(l1?l1.next:null,l2?l2.next:null,Math.floor(sum/10))
        return newNode
    }
    return addNumbers(l1,l2)
};