/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let lowestSoFar=Infinity
    let maxProfitSoFar=0
    for(let i=0;i<prices.length;i++)
    {
        if(prices[i]<lowestSoFar)
        lowestSoFar=prices[i]
        else
        maxProfitSoFar=Math.max(prices[i]-lowestSoFar,maxProfitSoFar)
    }
    return maxProfitSoFar
};