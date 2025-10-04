/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let left=0;
    let right =0;
    while(right<nums.length)
    {
        if(nums[right]!==0)
        {
            nums[left]=nums[right]
            left++
        }
        right++
    }
    while(left<nums.length)
    {
        nums[left]=0
        left++
    }
};