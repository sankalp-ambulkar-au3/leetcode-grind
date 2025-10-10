/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const res =[];

    function backTrack(index,subset)
    {
        if(index===nums.length)
        {
            res.push([...subset])
            return
        }
        subset.push(nums[index])
        backTrack(index+1,subset)

        subset.pop()
        backTrack(index+1,subset)
    }
    backTrack(0,[])
    return res
};