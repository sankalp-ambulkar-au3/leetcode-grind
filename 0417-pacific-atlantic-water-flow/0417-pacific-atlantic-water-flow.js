/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
  let rows = heights.length - 1;
  let cols = heights[0].length - 1;

  const pacific = new Set();
  const atlantic = new Set();
  let result = [];

  function dfs(r, c, visited, previousHeight) {
    if (r < 0 || c < 0 || c > cols || r > rows) return;
    if (visited.has(`${r},${c}`)) return;
    if (heights[r][c] < previousHeight) return;
    visited.add(`${r},${c}`);
    dfs(r + 1, c, visited, heights[r][c]);
    dfs(r - 1, c, visited, heights[r][c]);
    dfs(r, c + 1, visited, heights[r][c]);
    dfs(r, c - 1, visited, heights[r][c]);
  }
  for (let c = 0; c <= cols; c++) dfs(0, c, pacific, heights[0][c]);
  for (let r = 0; r <= rows; r++) dfs(r, 0, pacific, heights[r][0]);

  // Seed Atlantic — bottom row + right column
  for (let c = 0; c <= cols; c++) dfs(rows, c, atlantic, heights[rows][c]);
  for (let r = 0; r <= rows; r++) dfs(r, cols, atlantic, heights[r][cols]);

  for (let r = 0; r <= rows; r++) {
    for (let c = 0; c <=cols; c++) {
      if (pacific.has(`${r},${c}`) && atlantic.has(`${r},${c}`))
        result.push([r, c]);
    }
  }
  return result;

};