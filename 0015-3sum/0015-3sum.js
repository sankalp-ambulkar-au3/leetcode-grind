/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//Sort the array first.
//Iterate with each element till array.length-2(need atleast 3 elements)
//Skip checking elements if its first element and if the element is > 0.
// find the other two elements which equals to the negative of that element.
//Push these three elements in results array
//Remove duplicates by moving pointers till you have same left and right
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    if (nums[i]>0) break;
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let sum = nums[i] + nums[right] + nums[left];
      if (sum === 0) {
        res.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;
        while (left < right && nums[left] === nums[left - 1]) left++;
        while (left < right && nums[right] === nums[right + 1]) right--;
      } else if (sum < 0) left++;
      else right--;
    }
  }
  return res;
};
