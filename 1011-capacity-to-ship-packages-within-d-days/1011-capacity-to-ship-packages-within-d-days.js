/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
     let left = Math.max(...weights);
  let right = weights.reduce((acc, curr) => acc + curr);
  function capacityCheck(k) {
    let daysNeeded = 1;
    let currentLoad = 0;
    for (let weight of weights) {
      if (currentLoad + weight <= k) {
        currentLoad += weight;
      } else {
        daysNeeded++;
        currentLoad = weight;
      }
    }
    return daysNeeded <= days;
  }
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (capacityCheck(mid)) {
      right = mid;
    } else left = mid + 1;
  }
  return left; 
};