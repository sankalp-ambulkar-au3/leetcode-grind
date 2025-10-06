/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
//First sort the intervals on the basis of start
//Save the first current and iterate through all the intervals
// Check if the start of the next interval > current' end
// if yes then no overlap push the current then set new current=next interval
// else it is overlap set current end to Maxof(current's end or next interval's end)
// Push the last current in the result

var merge = function (intervals) {
  if (!intervals || intervals.length === 0) return [];
  const res = [];
  intervals.sort((a, b) => a[0] - b[0]);
  let current = [...intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i];
    if (start > current[1]) {
      res.push(current);
      current = [start, end];
    } else current[1] = Math.max(current[1], end);
  }
  res.push(current);
  return res;
};
