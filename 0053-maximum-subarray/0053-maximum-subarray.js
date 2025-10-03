/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
//initializing it with the first element to handle single length array condition
  let currentSum = nums[0];
  let maxSum = nums[0];
// we have to add it to the current sum if that addition of element makes the current sum remain positive else start with new window.
  for (let i=1; i<nums.length;i++) {
    const currentNum=nums[i]
    currentSum=Math.max(currentNum,currentSum+currentNum)
    maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum;
};