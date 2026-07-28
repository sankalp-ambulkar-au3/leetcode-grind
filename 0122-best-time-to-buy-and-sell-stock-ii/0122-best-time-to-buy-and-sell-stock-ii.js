/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
     let totalProfit=0;
  for (let i = 1; i < prices.length; i++) {
    const profit = prices[i] - prices[i - 1];
    totalProfit += Math.max(0, profit);
  }
  return totalProfit; 
};