/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
     let rows = image.length;
  let cols = image[0].length;
  let matchingColor = image[sr][sc];
  if (matchingColor === color) return image;
  let queue = [[sr, sc]];
  let directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  while (queue.length) {
    let [r, c] = queue.shift();
    image[r][c] = color;
    for (let [dr, dc] of directions) {
      let nr = dr + r;
      let nc = dc + c;
      if (
        nr < 0 ||
        nr >= rows ||
        nc < 0 ||
        nc >= cols ||
        image[nr][nc] !== matchingColor
      )
        continue;
      queue.push([nr, nc]);
    }
  }
  return image; 
};