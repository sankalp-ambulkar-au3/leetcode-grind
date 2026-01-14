/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    // let mem={}
    // function dfs(i,rem)
    // {
    //     if(rem===0)
    //     return 1
    //     if(rem<0 || i===coins.length)
    //     return 0
    //     let key=`${i}-${rem}`
    //     if(mem[key]!==undefined)
    //     return mem[key]
    //     let take=dfs(i,rem-coins[i])
    //     let skip=dfs(i+1,rem)
    //     mem[key]=take+skip
    //     return mem[key]
    // }
    // return dfs(0,amount)
    const dp =Array(amount+1).fill(0)
    dp[0]=1
    for(let coin of coins)
    {
        for(let s=coin;s<=amount;s++)
        {
            dp[s]+=dp[s-coin]
        }
    }
    return dp[amount]
};