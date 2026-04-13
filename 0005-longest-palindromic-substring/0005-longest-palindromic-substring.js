/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s.length === 1) return s;
  let maxStringSoFar = 0;
  let maxPalindrome = "";
  function expand(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > maxStringSoFar) {
        maxPalindrome = s.substring(left, right + 1);
        maxStringSoFar = right - left + 1;
      }
      left--;
      right++;
    }
  }
  for (let i = 0; i < s.length; i++) {
    //odd length
    expand(i,i);
    //even length
    expand(i, i + 1);
  }
  return maxPalindrome;
};