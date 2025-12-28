/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let memo={}
    function dfs(house)
    {
        if(house>=nums.length)
        return 0
        if(memo[house]!==undefined)
        return memo[house]
        memo[house]=Math.max(nums[house]+dfs(house+2), dfs(house+1))
        return memo[house]
    }
    return dfs(0)
};