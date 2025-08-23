/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxWater=0;
    let left =0;
    let right =height.length-1
    while(left<right)
    {
        let localWater=Math.min(height[left],height[right])* (right-left)
        maxWater=Math.max(maxWater,localWater);
        if(height[left]<height[right])
        left++
        else
        right--
    }
    return maxWater;
};