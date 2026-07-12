/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
  const dp = {};
  function solve(l, r) {
    if (l === r) return 1;
    if (l > r) return 0;
    const key = `${l}-${r}`;
    if (key in dp) return dp[key];
    if (s[l] === s[r]) {
      dp[key] = 2 + solve(l + 1, r - 1);
    } else {
      dp[key] = Math.max(solve(l + 1, r), solve(l, r - 1));
    }
    return dp[key];
  }
  return solve(0, s.length - 1);
};