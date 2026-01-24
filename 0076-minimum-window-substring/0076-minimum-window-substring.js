/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  if (t.length > s.length) return '';
  let need = new Map();
  for (let elem of t) {
    need.set(elem, (need.get(elem) || 0) + 1);
  }
  let left = 0;
  let window = new Map();
  let found = 0;
  let minLen = Infinity;
  let startIndex=0
  for (let right = 0; right < s.length; right++) {
    c = s[right];
    window.set(c, (window.get(c) || 0) + 1);
    if (need.get(c)) {
      if (window.get(c) === need.get(c)) found++;
    }
    while (found === need.size) {
      if(right-left+1 <minLen)
      {
        minLen=right-left+1
        startIndex=left
      }
      d = s[left];
      left++;
      if (need.get(d)) {
        if (window.get(d) === need.get(d)) found--;
        window.set(d, window.get(d) - 1);
      }
    }
  }
   return minLen === Infinity ? "" : s.substring(startIndex, startIndex + minLen);
};