/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let memo={}
    function dfs(rem)
    {
        if(rem==0)
        return 0
        if(rem<0)
        return Infinity
        if(memo[rem]!==undefined)
        return memo[rem]
                let ans=Infinity

        for(let coin of coins)
        {
          ans=Math.min(ans,1+dfs(rem-coin))
        }
        memo[rem]=ans
        return ans
    }
   
    const result = dfs(amount);
    return result === Infinity ? -1 : result;
};