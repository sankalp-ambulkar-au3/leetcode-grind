/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
      const m = triangle.length
    const dp=Array.from({length:m},()=>Array(m).fill(0))
    dp[0][0]=triangle[0][0]
    for(let i=1;i<m;i++)
    {
        for(let j=0;j<=i;j++)
        {
            if(j===0)
            dp[i][j]=triangle[i][j] + dp[i-1][j]
            else if(i==j)
            dp[i][j]=triangle[i][j] + dp[i-1][j-1]
            else
            dp[i][j]=triangle[i][j] + Math.min(dp[i-1][j-1],dp[i-1][j])
        }
    }
    return Math.min(...dp[m-1])  
};