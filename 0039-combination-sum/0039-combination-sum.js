/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
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
      path.push(candidates[i])
      backtrack(i,path,remainder-candidates[i])
      path.pop()
    }
  }
  backtrack(0,[],target)
  return res
};