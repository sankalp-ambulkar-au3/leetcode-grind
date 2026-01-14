/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  let left = 0;
  let res = 0;
  let count = {};
  let maxFrequency = 0;

  for (let right = 0; right < s.length; right++) {
    count[s[right]] = (count[s[right]] || 0) + 1;
    maxFrequency = Math.max(maxFrequency, count[s[right]]);
    while (right - left + 1 - maxFrequency > k) {
      count[s[left]]--;
      left++;
    }

    res = Math.max(res, right - left + 1);
  }

  return res;
};