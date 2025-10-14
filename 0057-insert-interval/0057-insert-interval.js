/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    intervals.push(newInterval)
    intervals.sort((a,b)=>a[0]-b[0]);
    const res=[]
    let current =[...intervals[0]]

    for(let i=1;i<intervals.length;i++)
    {
        const [start,end] = intervals[i]
        if(start > current[1])
        {
            res.push(current)
            current=[start,end]
        }
        else
        current[1]=Math.max(end,current[1])
    }
    res.push(current)
    return res
};