/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
  if (!intervals || !intervals.length) return [];
  let count = 0;
  intervals.sort((a, b) => a[1] - b[1]);
  let lastEndTime = intervals[0][1];
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < lastEndTime) count++;
    else lastEndTime = intervals[i][1];
  }
  return count;
};