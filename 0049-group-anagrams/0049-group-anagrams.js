/**
 * @param {string[]} strs
 * @return {string[][]}
 */
//Loop through the list of strings
// sort the i'th string and check if the sorted key is present in hash
// if present then push that i'th unsorted string in that particular hash key value
// if not then create a key for that sorted ith string and push the unsorted ith string in that key's value

var groupAnagrams = function (strs) {
  let anagroups = new Map();
  for (let i = 0; i < strs.length; i++) {
    const curr = strs[i];
    const sortedCurr = curr.split("").sort().join("");
    if (!anagroups.has(sortedCurr)) anagroups.set(sortedCurr, []);
    anagroups.get(sortedCurr).push(curr);
  }
  return Array.from(anagroups.values());
};