/**
 * @param {string} 
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left=0;
    let right=0;
    let max=0
    let counter =new Map()
    while(right<s.length)
    {
        if(counter.has(s[right]))
        {
            while(counter.has(s[right]))
            {
                counter.delete(s[left])
                left++
            }
        }
        counter.set(s[right],1)
        max=Math.max(max,right-left+1)
        right++
    }
    return max

};