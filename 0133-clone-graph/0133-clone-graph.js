/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    if(!node)
    return null
    let map =new Map()
    function clone(node)
    {
        if(map.has(node))
        return map.get(node)
        let newNode =new _Node(node.val)
        map.set(node,newNode)
        for(let neigh of node.neighbors)
        {
            newNode.neighbors.push(clone(neigh))
        }
        return newNode
    }
   return clone(node)
};