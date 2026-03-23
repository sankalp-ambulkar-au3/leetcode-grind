/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
      let mem = {};

  function dfs(i, buying) {
    let res;
    if (i >= prices.length) return 0;
    if (mem[`${i}${buying}`]) return mem[`${i}${buying}`];
    let cooldown = dfs(i + 1, buying);

    if (buying) {
      let buy = dfs(i + 1, !buying) - prices[i];
      res = Math.max(buy, cooldown);
    } else {
      let sell = dfs(i + 2, !buying) + prices[i];
      res = Math.max(sell, cooldown);
    }
    mem[`${i}${buying}`] = res;
    return res;
  }
  return dfs(0, true);
};