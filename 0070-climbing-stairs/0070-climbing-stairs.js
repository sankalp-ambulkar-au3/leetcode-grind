/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
      let memo = {};
  function dfs(steps) {
    if (steps <= 1) return 1;
    if (memo[steps] !== undefined) return memo[steps];
    memo[steps] = dfs(steps - 1) + dfs(steps - 2);
    return memo[steps];
  }
  return dfs(n);
};