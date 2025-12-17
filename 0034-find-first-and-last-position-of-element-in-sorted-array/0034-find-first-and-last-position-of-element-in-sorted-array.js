/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {

    function binarySearch(isLeftBias) {
        let left = 0
        let right = nums.length-1
        let idx = -1
        while (left <= right) {
            let mid = Math.floor((left + right) / 2)
            if (nums[mid] < target)
                left = mid + 1
            else if (nums[mid] > target)
                right = mid - 1
            else {
                idx = mid
                if (isLeftBias)
                    right = mid - 1
                else
                    left = mid + 1
            }

        }
        return idx
    }
    let left = binarySearch(true)
    let right = binarySearch(false)
    return [left, right]
};