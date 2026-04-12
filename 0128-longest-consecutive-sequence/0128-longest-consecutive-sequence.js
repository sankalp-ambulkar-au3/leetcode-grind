/**
 * @param {number[]} nums
 * @return {number}
 */
// var longestConsecutive = function(nums) {
//     if(nums.length==0)
//     return 0
//   let dictionary = new Set();
//   let maxSofar = 1;
//   for (let num of nums) {
//     if (dictionary.has(num)) continue;
//     dictionary.add(num, num);
//   }
//   for (let num of dictionary.keys()) {
//     let count = 1;

//     if (dictionary.has(num - 1)) continue;
//     let x = num;
//     while (dictionary.has(x + 1)) {
//       count++;
//       x++;
//     }
//     maxSofar = Math.max(maxSofar, count);
//   }

//   return maxSofar;
// };
var longestConsecutive = function(nums) {
    if(nums.length==0)
    return 0
  nums.sort((a, b) => a - b);
  let lastSmallest = Infinity;
  let maxSoFar = 1;
  let count = 0;
  for (let num of nums) {
    if (num - 1 == lastSmallest) {
      count++;
      lastSmallest = num;
    } else if (num !== lastSmallest) {
      count = 1;
      lastSmallest = num;
    }
    maxSoFar = Math.max(count, maxSoFar);
  }
  return maxSoFar
}