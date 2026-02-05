/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
      if (!intervals || intervals.length === 0) return [];
  let count=0
  intervals.sort((a, b) => a[1] - b[1]);
  let currentEnd =intervals[0][1]
  for(let i=1;i<intervals.length;i++)
  {
    if(intervals[i][0]<currentEnd)
    {
        count++
    }
    else{
        currentEnd=intervals[i][1]
    }
  }
  return count
};