/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
      let res = [];
  function backtrack(openingCount, closingCount, stack) {
    if ((openingCount === closingCount) && (openingCount === n)) {
      res.push(stack.join(""));
    }
    if (openingCount < n) {
      stack.push("(");
      backtrack(openingCount + 1, closingCount, stack);
      stack.pop();
    }
    if (closingCount < openingCount) {
      stack.push(")");
      backtrack(openingCount, closingCount + 1, stack);
      stack.pop();
    }
  }
  backtrack(0, 0, []);
  return res;
};