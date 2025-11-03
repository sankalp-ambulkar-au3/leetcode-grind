/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function (firstList, secondList) {
  if (!firstList.length || !secondList.length) return []
  let left = 0;
  let right = 0;
  let intersection = [];
  while (left < firstList.length && right < secondList.length) {
    const [aStart, aEnd] = firstList[left];
    const [bStart, bEnd] = secondList[right];

    const start = Math.max(aStart, bStart);
    const end = Math.min(aEnd, bEnd);
    if (start <= end) intersection.push([start, end]);
    if (aEnd < bEnd) left++;
    else right++;
  }
  return intersection;
};