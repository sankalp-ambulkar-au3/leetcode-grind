/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    total =nums.reduce((a,b)=>a+b,0)
    if(total%2!==0)
    return false
    target =total/2
    const dp=Array(target+1).fill(false)
    dp[0]=true
    for(let num of nums)
    {
        for(let s=target;s>=num;s--)
        {
            dp[s]=dp[s] || dp[s-num]
        }
    }
    return dp[target]
};