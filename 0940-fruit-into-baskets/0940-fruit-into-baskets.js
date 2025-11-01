/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
      let l = 0, r = 0;
  let maxSoFar = 0;
  const count = new Map();

  while (r < fruits.length) {
    const f = fruits[r];
    count.set(f, (count.get(f) || 0) + 1);

    while (count.size > 2) {
      const left = fruits[l];
      const val = count.get(left) - 1;
      if (val === 0) count.delete(left);
      else count.set(left, val);
      l++;
    }

    maxSoFar = Math.max(maxSoFar, r - l + 1);
    r++;
  }

  return maxSoFar;
};