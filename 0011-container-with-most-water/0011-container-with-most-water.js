var maxArea = function (height) {
  let maxWater = 0;
  let left = 0;
  let right = height.length - 1;
  let localWater = 0;
  while (left < right) {
    localWater = Math.min(height[left], height[right]) * (right - left);
    maxWater = Math.max(localWater, maxWater);
    if (height[left] < height[right]) left++;
    else right--;
  }
  return maxWater;
};