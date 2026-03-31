/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  function binarySearch(isLeftBiased) {
    let left = 0;
    let right = nums.length - 1;
    let res = -1;
    while (left <= right) {
      let mid = Math.floor(left + (right - left) / 2);
      if (target > nums[mid]) left = mid + 1;
      else if (target < nums[mid]) right = mid - 1;
      else {
        res = mid;
        if (isLeftBiased) right = mid - 1;
        else left = mid + 1;
      }
    }
    return res;
  }
  let leftPosition = binarySearch(true);
  let rightPosition = binarySearch(false);
  return [leftPosition, rightPosition];
};