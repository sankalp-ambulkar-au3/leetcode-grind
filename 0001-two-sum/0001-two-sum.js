/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map()
    for(let i=0;i<nums.length;i++)
    {
        let complimentNumber = target-nums[i]
        if(map.has(complimentNumber))
        return [i,map.get(complimentNumber)]
        else
        map.set(nums[i],i)
    }
  }
  