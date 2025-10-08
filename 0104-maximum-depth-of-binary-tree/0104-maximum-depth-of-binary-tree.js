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
 * @return {number}
 */
var maxDepth = function(root) {
    return root==null?0:dfs(root)

};
const dfs=(root)=>
{
    if(root===null)
    return 0
    return 1 + Math.max(dfs(root.left),dfs(root.right)) 
}