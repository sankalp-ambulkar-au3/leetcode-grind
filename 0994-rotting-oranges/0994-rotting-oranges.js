/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
      let rotten = [];
  let fresh = 0;
  let rows = grid.length;
  let cols = grid[0].length;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 2) rotten.push([i, j]);
      if (grid[i][j] === 1) fresh++;
    }
  }
  if (fresh === 0) return 0;
  let minutes = 0;
  let directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  while (rotten.length && fresh > 0) {
    const size=rotten.length
    for (let i = 0; i < size; i++) {
      let [r, c] = rotten.shift();
      for (let [dr, dc] of directions) {
        const nr = r + dr;
        const nc = c + dc;
        if (nr >= 0 && nc >= 0 && nr < rows && nc < cols && grid[nr][nc] == 1) {
          grid[nr][nc] = 2;
          fresh--;
          rotten.push([nr, nc]);
        }
      }
    }
    minutes++;
  }
  return fresh === 0 ? minutes : -1;
};