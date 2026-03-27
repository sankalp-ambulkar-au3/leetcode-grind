/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left=0;
    let right=0;
    let maxSoFar=0
    let count =new Map()
    while(right<s.length)
    {
        if(count.has(s[right]))
        {
            while(count.has(s[right]))
            {
                count.delete(s[left])
                left++
            }
        }
        count.set(s[right],1)
        maxSoFar=Math.max(count.size,maxSoFar)
        right++
    }
    return maxSoFar
};