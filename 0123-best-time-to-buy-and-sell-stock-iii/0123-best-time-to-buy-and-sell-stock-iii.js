/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let firstBuy = -prices[0]
    let firstSell=0
    let secondBuy=-prices[0]
    let secondSell=0

    for(let i =1;i<prices.length;i++)
    {
        firstBuy=Math.max(firstBuy,-prices[i])
        firstSell=Math.max(firstSell,prices[i]+firstBuy)

        secondBuy=Math.max(secondBuy,firstSell-prices[i])
        secondSell=Math.max(secondSell,secondBuy+prices[i])
    }
    return secondSell;
};