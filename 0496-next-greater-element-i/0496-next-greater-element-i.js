/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  let map = new Map();
  let stack = [];
  for (let num of nums2) {
    while (stack.length && num > stack[stack.length - 1]) {
      let smaller = stack.pop();
      map.set(smaller, num);
    }
    stack.push(num);
  }
  return nums1.map((num1) => map.get(num1) ?? -1);
};