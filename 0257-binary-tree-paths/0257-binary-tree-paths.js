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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const res =[]
    const dfs=(node,path)=>{
        if(!node.left && !node.right)
        {
            res.push(path.join('->'))
            return
        }
        if(node.left)
        {
            path.push(node.left.val)
            dfs(node.left,path)
            path.pop()
        }
        if(node.right)
        {
            path.push(node.right.val)
            dfs(node.right,path)
            path.pop()
        }
    }
    dfs(root,[String(root.val)])
    return res
};

