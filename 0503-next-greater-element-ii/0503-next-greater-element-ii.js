/**
 * @param {number[]} nums
 * @return {number[]}
 */
//Since this is a circular array the core concept is to loop it through the array twice check the greater conditions as is and discard pushing when if the index is more than n.
var nextGreaterElements = function (nums) {
  let stack = [];
  let res = Array(nums.length).fill(-1);
  let arrayLength = nums.length;
  for (let i = 0; i < 2 * arrayLength; i++) {
    const idx = i % arrayLength;
    while (stack.length > 0 && nums[idx] > nums[stack[stack.length - 1]]) {
      const elem = stack.pop();
      res[elem] = nums[idx];
    }
    if (i < arrayLength) stack.push(idx);
  }
  return res;
};