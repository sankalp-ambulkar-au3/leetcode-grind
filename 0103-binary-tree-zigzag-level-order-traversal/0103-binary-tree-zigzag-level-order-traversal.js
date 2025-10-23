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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (!root) return [];
    let res =[]
    function bfs(root,leftToRight)
    {
        let queue = [root]
        while(queue.length>0)
        {
            let len =queue.length
            let level =[]
            for(let i=0;i<len;i++)
            {
                const node = queue.shift()
                if(leftToRight)
                level.push(node.val)
                else
                level.unshift(node.val)

                if(node.left)
                queue.push(node.left)
                if(node.right)
                queue.push(node.right)
            }
            res.push(level)
            leftToRight=!leftToRight
        }
    }
        bfs(root,true)
        return res
};