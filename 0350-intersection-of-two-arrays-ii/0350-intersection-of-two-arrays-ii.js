/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
        let frequency = {}
        let result =[]
        if(nums1.length>nums2.length)
        {
            [nums1,nums2] = [nums2,nums1]
        }
        nums1.forEach((elem)=>{
            if(frequency[elem])
            frequency[elem]++
            else
            frequency[elem]=1
        })
        nums2.forEach((elem)=>{
            if(frequency[elem])
            {
                result.push(elem)
                frequency[elem]--
            }
        })
        return result
};