/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let maxSoFar=0;
    for(let i=0;i<nums.length;i++)
    {
        if(i>maxSoFar)
        return false
        maxSoFar=Math.max(maxSoFar,i+nums[i])
    }
    return true
};