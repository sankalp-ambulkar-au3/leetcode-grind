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
 * @return {number[]}
 */
var findMode = function(root) {
    let frequency = new Map()
    let maxSoFar=0
    let result =[]
    function dfs(root)
    {
        if(!root)
        return 
        const count = frequency.get(root.val) || 0;
        frequency.set(root.val,count+1)
        maxSoFar=Math.max(maxSoFar,frequency.get(root.val))
        dfs(root.left)
        dfs(root.right)
    }
    dfs(root)
    for(let [val,count] of frequency)
    {
        if(count==maxSoFar)
        result.push(val)
    }
    return result
};