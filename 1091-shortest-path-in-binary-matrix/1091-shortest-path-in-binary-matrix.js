/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
  let r = grid.length;
  let c = grid[0].length;
  if (grid[0][0] === 1 || grid[r - 1][c - 1] === 1) return -1;
  if (r === 1) return 1;
  let queue = [[0, 0]];
  let path = 1;
  grid[0][0] = 1;
  let directions = [
    [1, 0],
    [-1, 0],
    [0, -1],
    [0, 1],
    [-1, 1],
    [1, 1],
    [1, -1],
    [-1, -1],
  ];
  while (queue.length) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let [qr, qc] = queue.shift();
      if (qr === r - 1 && qc === c - 1) return path;
      for (let [dr, dc] of directions) {
        let nr = qr + dr;
        let nc = qc + dc;
        if (nr >= 0 && nc >= 0 && nr < r && nc < c && grid[nr][nc] === 0) {
          grid[nr][nc] = 1;
          queue.push([nr, nc]);
        }
      }
    }
    path++;
  }
  return -1
};