/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let dictionary = new Map();
  let n = nums.length;
  let res = [];

  for (let i = 0; i < nums.length; i++) {
    dictionary.set(nums[i], 1);
  }
  for (let i = 1; i <= n; i++) {
    if (!dictionary.has(i)) res.push(i);
  }
  return res;
};