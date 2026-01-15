/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
      if (s2.length < s1.length) return false;
  let need = new Map();
  let window = new Map();
  for (let elem of s1) {
    need.set(elem, (need.get(elem) || 0) + 1);
  }
  let left = 0;
  let valid = 0;
  for (let right = 0; right < s2.length; right++) {
    let c = s2[right];
    if (need.get(c)) {
      window.set(c, (window.get(c) || 0) + 1);
      if (window.get(c) === need.get(c)) valid++;
    }
    while (right - left + 1 > s1.length) {
      let d = s2[left];
      left++;
      if (need.has(d)) {
        if (window.get(d) === need.get(d)) valid--;
        window.set(d, window.get(d) - 1);
      }
    }
    if (valid === need.size) return true;
  }
  return false;
};