/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = [];
  let validPairs = new Set(["()", "{}", "[]"]);
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    } else {
      const currentPair = `${stack.pop()}${s[i]}`;
      console.log(currentPair);
      if (!validPairs.has(currentPair)) {
        return false;
      }
    }
  }
  return stack.length === 0;
};