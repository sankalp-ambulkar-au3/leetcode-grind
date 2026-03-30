/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
function binarySearch(left,right)
{
    if(left>right)
        return -1
    let mid=Math.floor(left+(right-left)/2)
    if(nums[mid]===target)
        return mid
    if(nums[left]<=nums[mid])
    {
        if(target<nums[mid] && target>=nums[left])
         return binarySearch(left,mid-1)
        else
        return binarySearch(mid+1,right)
    }
    else
    {
            if(target>nums[mid] && target<=nums[right])
                return binarySearch(mid+1,right)
            else
                return binarySearch(left,mid-1)
        
    }
}
return binarySearch(0,nums.length-1)
};