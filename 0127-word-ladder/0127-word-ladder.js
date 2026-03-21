/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  let set = new Set(wordList);
  let queue = [[beginWord, 1]];

  while (queue.length) {
    let count = 0;
    const [currWord, cost] = queue.shift();
    if (currWord === endWord) return cost;
    for (let i = 0; i < currWord.length; i++) {
      for (let c = 97; c <= 122; c++) {
        // char codes for a-z
        const newWord =
          currWord.slice(0, i) + String.fromCharCode(c) + currWord.slice(i + 1);
        if (set.has(newWord)) {
          // newWord is a valid neighbor
          queue.push([newWord,cost+1])
          set.delete(newWord)
        }
      }
    }
  }
  return 0
};