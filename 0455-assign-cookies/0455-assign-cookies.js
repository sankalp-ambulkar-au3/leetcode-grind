/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a,b)=>a-b)
    s.sort((a,b)=>a-b)
    let left=0
    let right=0
    let satisfiedKids=0
    while(right<s.length)
    {
        if(s[right]>=g[left])
        {
            satisfiedKids++
            left++
            right++
        }
        else
            right++
        
    }
    return satisfiedKids
};