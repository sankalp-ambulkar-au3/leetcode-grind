/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let frequency = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (frequency.has(nums[i])) {
      if (Math.abs(i - frequency.get(nums[i])) <= k) return true;
    }
    frequency.set(nums[i], i);
  }
  return false;
};