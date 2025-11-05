/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let frequency = new Map()
    for(let i =0;i<nums.length;i++)
    {
        if(frequency.has(nums[i]))
        frequency.set(nums[i],frequency.get(nums[i])+1)
        else
        frequency.set(nums[i],1)
    }
    let count =0
    let res=[]
    let sortedFrequency= [...frequency.entries()].sort((a, b) => b[1] - a[1]);
    for(let i=0;i<=k-1;i++)
    {
        res.push(sortedFrequency[i][0])
    }
    return res
};