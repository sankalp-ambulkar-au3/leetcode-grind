/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let dictionary={}
    for(let i=0;i<s.length;i++)
    {
        if(dictionary[s[i]])
        {
            dictionary[s[i]]++
        }
        else
        {
            dictionary[s[i]]=1;
        }
    }
    for(let i=0;i<s.length;i++)
    {
        if(dictionary[s[i]]===1)
        return i
    }
    return -1
};