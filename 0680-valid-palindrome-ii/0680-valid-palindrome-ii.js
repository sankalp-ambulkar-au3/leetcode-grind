/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let left=0
    let right=s.length-1

    while(left<right)
    {
       if(s[left]===s[right])
       {
        left++
        right--
       }
       else
       return isPalindrome(left+1,right) || isPalindrome(left,right-1)
    }
    return true

function isPalindrome(left,right)
{
    while(left<right)
    {
        if(s[left]!==s[right])
        return false
        left++
        right--
    }
    return true
}
};