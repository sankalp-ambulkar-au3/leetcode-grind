/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function(nums, threshold) {

    let left=1
    let right=Math.max(...nums)
    
    function checkForDivisorThreshold(divisor)
    {
        let sum =0
        for(let num of nums)
        {
            sum+=Math.ceil(num/divisor)
        }
        return sum<=threshold
    }

    while(left<right)
    {
        let mid =Math.floor((left+right)/2)
        if(checkForDivisorThreshold(mid))
        {
            right=mid
        }
        else
        left=mid+1
    }
    return left
};