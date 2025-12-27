/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let used=Array(nums.lenght).fill(false)
    let res=[]
    function backtrack(path)
    {
        if(path.length===nums.length)
        {
            res.push([...path])
            return
        }
        for(let i=0;i<nums.length;i++)
        {
            if(used[i])
            continue

            used[i]=true

            path.push(nums[i])
            backtrack(path)

            path.pop()
            used[i]=false
        }
    }
    backtrack([])
    return res
};