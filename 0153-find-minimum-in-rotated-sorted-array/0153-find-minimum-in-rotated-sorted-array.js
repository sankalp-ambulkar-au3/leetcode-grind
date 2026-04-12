/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
      let minimum = Infinity;
  function binarySearch(left, right) {
    if (left > right) return minimum;
    let mid = left + Math.floor((right-left) / 2);
    if (nums[left] <= nums[mid]) {
      minimum = Math.min(minimum, nums[left]);
     return binarySearch(mid + 1, right);
    } else {
      minimum = Math.min(nums[mid], minimum);
     return binarySearch(left, mid - 1);
    }
  }
  return binarySearch(0, nums.length - 1);
};