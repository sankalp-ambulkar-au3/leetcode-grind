/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    if(cost.length==1)
    return cost[0]
    let n=cost.length
    const dp=Array(n+2).fill(0)
    dp[n]=0
    for(let i=n-1;i>=0;i--)
    {
        dp[i]=cost[i] +Math.min(dp[i+1],dp[i+2])
    }
    return Math.min(dp[0],dp[1])
};