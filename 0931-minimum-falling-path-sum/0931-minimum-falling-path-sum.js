/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const dp = Array.from({ length: m }, () => Array(n).fill(0));
  for (let i = 0; i < matrix[0].length; i++) dp[0][i] = matrix[0][i];
  console.log(dp);
  for (let i = 1; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (j === 0)
        dp[i][j] = matrix[i][j] + Math.min(dp[i - 1][j], dp[i - 1][j + 1]);
      else if (j === n - 1)
        dp[i][j] = matrix[i][j] + Math.min(dp[i - 1][j], dp[i - 1][j - 1]);
      else
        dp[i][j] =
          matrix[i][j] +
          Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i - 1][j + 1]);
    }
  }
  return Math.min(...dp[m - 1]);
}