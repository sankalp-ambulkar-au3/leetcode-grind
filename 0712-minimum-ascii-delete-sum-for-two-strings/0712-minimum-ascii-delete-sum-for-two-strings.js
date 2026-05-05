/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function(s1, s2) {
    let m = s1.length;
  let n = s2.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  dp[0][0] = 0;
  for (let i = 1; i <= m; i++) {
    dp[i][0] = dp[i - 1][0] + s1[i - 1].charCodeAt(0);
  }
  for (let j = 1; j <= n; j++) {
    dp[0][j] = dp[0][j - 1] + s2[j - 1].charCodeAt(0);
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s1[i - 1] === s2[j - 1]) dp[i][j] = dp[i - 1][j - 1];
      else
        dp[i][j] = Math.min(
          s2[j - 1].charCodeAt(0) + dp[i][j - 1],
          s1[i - 1].charCodeAt(0) + dp[i - 1][j],
        );
    }
  }
  return dp[m][n];  
};