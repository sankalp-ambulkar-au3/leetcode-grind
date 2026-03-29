/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  if (t.length > s.length) return "";
  let left = 0;
  let right = 0;
  let window = new Map();
  let need = new Map();
  let found = 0;
  let startIndex = 0;
  let minimumWindow = Infinity;
  for (let i = 0; i < t.length; i++) {
    need.set(t[i], (need.get(t[i]) || 0) + 1);
  }
  while (right < s.length) {
    let d = s[right];
    window.set(d, (window.get(d) || 0) + 1);
    if (need.get(d)) {
      if (need.get(d) === window.get(d)) found++;
    }
    while (need.size == found) {
      if (right - left + 1 < minimumWindow) {
        minimumWindow = right - left + 1;
        startIndex = left;
      }
      let c = s[left];
      left++;
      if (need.get(c)) {
        if (window.get(c) === need.get(c)) found--;
        window.set(c, window.get(c) - 1);
      }
    }
    right++;
  }
  return minimumWindow === Infinity
    ? ""
    : s.substring(startIndex, startIndex + minimumWindow);
};