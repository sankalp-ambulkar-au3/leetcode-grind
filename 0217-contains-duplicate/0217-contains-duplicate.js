/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let frequency =new Map()
    for(let i=0;i<nums.length;i++)
    {
        if(frequency.has(nums[i]))
        return true
        else
        frequency.set(nums[i],1)
    }
    return false
};