/**
 * @param {number[]} stones
 * @return {number}
 */
var stoneGameVII = function(stones) {
   let length = stones.length;
  let prefixSum = Array(length+1).fill(0);
  let dp = Array.from({ length: length }, () => Array(length).fill(0));
  for (let i = 0; i < stones.length; i++) {
    prefixSum[i + 1] = prefixSum[i] + stones[i];
  }
  function calculateSum(left, right) {
    if (left > right) return 0;
    if (dp[left][right] !== 0) return dp[left][right];
    const removeLeft =
      prefixSum[right+1] - prefixSum[left + 1] - calculateSum(left + 1, right);
    const removeRight =
      prefixSum[right] - prefixSum[left] - calculateSum(left, right - 1);
    dp[left][right] = Math.max(removeLeft, removeRight);
    return dp[left][right];
  }
 return calculateSum(0, length - 1);   
};