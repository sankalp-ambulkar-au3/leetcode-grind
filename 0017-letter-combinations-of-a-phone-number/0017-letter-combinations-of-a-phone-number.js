/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const phone = {
  '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',
  '6': 'mno', '7': 'pqrs','8': 'tuv', '9': 'wxyz'
};
  if (!digits || digits.length === 0) return [];

const res =[]
    function backtrack(index,subset)
    {
        if(index===digits.length)
        {
            res.push(subset)
            return
        }

        const letters = phone[digits[index]]
        for(let ch of letters)
        {
            backtrack(index+1,subset+ch)   
        }
    }
    backtrack(0,'')
    return res
};