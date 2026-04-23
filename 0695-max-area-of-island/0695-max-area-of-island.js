/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
      let rows = grid.length;
  let cols = grid[0].length;
  let maxTillNow = 0;
  let visited = new Set();
  function bfs(row, col) {
    if (
      row < 0 ||
      col < 0 ||
      row >= rows ||
      col >= cols ||
      grid[row][col] === 0
    )
      return 0;
    if (visited.has(`${row}-${col}`)) return 0;
    visited.add(`${row}-${col}`);
    return (
      1 +
      bfs(row + 1, col) +
      bfs(row, col + 1) +
      bfs(row - 1, col) +
      bfs(row, col - 1)
    );
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (!visited.has(`${i}-${j}`)) {
        if (grid[i][j] === 1) {
          let temp = bfs(i, j);
          console.log(temp);
          maxTillNow = Math.max(maxTillNow, temp);
        }
      }
    }
  }
  return maxTillNow;
};