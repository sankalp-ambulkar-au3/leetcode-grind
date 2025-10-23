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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
       if(!root)
        return new TreeNode(val,null,null)
    function dfs(root)
    {
 
        if(val>root.val)
        {
            if(root.right)
            return dfs(root.right)
            else
            root.right = new TreeNode(val,null,null)
        }
        else
        {
            if(root.left)
            return dfs(root.left)
            else
            root.left=new TreeNode(val,null,null)
        }
    }
    dfs(root)
    return root
};