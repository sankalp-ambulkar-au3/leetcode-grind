/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  const n = s.length;
   const dp = Array(n + 1).fill(0);
  dp[n] = 1;
  for (let i = n - 1; i >= 0; i--) {
    if (s[i] === "0") {
      dp[i] = 0;
      continue;
    }
    //Take one digit
    dp[i] = dp[i + 1];

    //Take two digits if num formed by it is >10 and < than 26
    if (i + 1 < n) {
      const num = parseInt(s.substring(i, i + 2));
      if (num >=10 && num<=26) dp[i] += dp[i + 2];
    }
  }
  return dp[0]; 
};