/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    // let left =0;

    // for(let right=1;right<nums.length;right++)
    // {
    //     if(nums[left]!==nums[right])
    //     {
    //         ++left
    //         nums[left]=nums[right]
    //     }
    // }
    // return left+1

    let left = 0;
    let right = 1;
    while (right < nums.length) {
        if (nums[left] !== nums[right]) {
            left++;
            nums[left] = nums[right];
        }
        right++;
    }
    return left + 1;
};