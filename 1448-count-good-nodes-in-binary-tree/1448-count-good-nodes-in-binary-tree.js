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
var goodNodes = function(root) {
        let res=[]    

    function dfs(node,maxSoFar)
    {
        if(!node)
        return 
        if(node.val>=maxSoFar)
        {
            res.push(node.val)
            maxSoFar=node.val
        }
         dfs(node.left,maxSoFar)
        dfs(node.right,maxSoFar)
    }
    dfs(root,root.val)
    return res.length
};