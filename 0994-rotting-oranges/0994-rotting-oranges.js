/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  let rows = grid.length;
  let cols = grid[0].length;
  let fresh = 0;
  let rotten = [];
  let minutes = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) fresh++;
      if (grid[i][j] === 2) rotten.push([i,j]);
    }
  }
  if (fresh === 0) return 0;
  const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  while (rotten.length && fresh > 0) {
    let size = rotten.length;
    for (let i = 0; i < size; i++) {
      let [r, c] = rotten.shift();
      for (let [dr, dc] of directions) {
        let nr = dr + r;
        let nc = dc + c;
        if (
          nr >= 0 &&
          nc >= 0 &&
          nr < rows &&
          nc < cols &&
          grid[nr][nc] === 1
        ) {
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