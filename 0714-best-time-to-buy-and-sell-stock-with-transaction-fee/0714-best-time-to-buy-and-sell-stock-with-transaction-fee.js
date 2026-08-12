/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  let len = prices.length;
  // Memoization table: memo[day][holdingStock]
  // memo[i][0] = max profit at day i without holding stock
  // memo[i][1] = max profit at day i while holding stock
  const memo = Array.from({ length: len }, () => [-1, -1]);
  function dfs(i, j) {
    if (i >= len) return 0;
    if (memo[i][j] !== -1) return memo[i][j];
    //do nothing
    let currentProfit = dfs(i + 1, j);
    // we have two states either we are holding a stock or we are not holding a stock
    if (j) {
      //selling the stock today and pay fees
      let profitAfterSelling = prices[i] + dfs(i + 1, 0) - fee;
      currentProfit = Math.max(currentProfit, profitAfterSelling);
    } else {
      //buy the stock today
      let profitAfterBuying = -prices[i] + dfs(i + 1, 1);
      currentProfit = Math.max(currentProfit, profitAfterBuying);
    }
    memo[i][j] = currentProfit;
    return memo[i][j];
  }
  return dfs(0, 0);
};