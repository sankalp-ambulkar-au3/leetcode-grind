/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
let left =0
let right =0;
let maxFrequency=0
let count ={}
let maxSoFar=0
while(right<s.length)
{
    count[s[right]]=(count[s[right]] || 0)+1
    maxFrequency=Math.max(maxFrequency,count[s[right]])
   
        while( right-left+1-maxFrequency>k)
        {
            count[s[left]]--
            left++
        }
    maxSoFar=Math.max(maxSoFar, right-left+1)
    right++
}
 return maxSoFar
};