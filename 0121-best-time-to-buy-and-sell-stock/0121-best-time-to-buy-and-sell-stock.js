/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let maxProfitSoFar = 0;
    let minBuySoFar = Infinity;

    for (let currentPrice of prices) {
        minBuySoFar = Math.min(currentPrice, minBuySoFar);
        maxProfitSoFar = Math.max(maxProfitSoFar, currentPrice - minBuySoFar);
    }
    return maxProfitSoFar;
};