/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  function checkTree(node, minimum, maximum) {
    if (node == null) return true;
    if (node.val >= maximum || node.val <=minimum)
      return false 
        
    return checkTree(node.left, minimum, node.val) && checkTree(node.right, node.val, maximum)
      
  }
  return checkTree(root, -Infinity, Infinity);
};