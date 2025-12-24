/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a,b)=>a-b)
    let res=[]
    function backtrack(start,path,remainder)
    {
        if(remainder===0)
        {
            res.push([...path])
            return 
        }
        if(remainder<0)
        return 
        for(let i=start;i<candidates.length;i++)
        {
            if(i>start && candidates[i]===candidates[i-1])
            continue
            path.push(candidates[i])
            backtrack(i+1,path,remainder-candidates[i])
            path.pop()
        }
    }
    backtrack(0,[],target)
    return res
};