/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !==t.length)
    return false
    let frequency = new Map()
    for(let char of s)
    {

        frequency.set(char, (frequency.get(char) || 0) + 1)
    }
    for(let char of t)
    {
        if(!frequency.has(char)||frequency.get(char)===0)
        return false
        frequency.set(char,frequency.get(char)-1)

    }
    return true
};