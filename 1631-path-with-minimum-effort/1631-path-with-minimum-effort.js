/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function(heights) {
  const rows = heights.length;
  const cols = heights[0].length;
  const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];

  const heap = [[0, 0, 0]];
  const cmp = (a, b) => a[0] < b[0];

  const push = (val) => {
    heap.push(val);
    let i = heap.length - 1;
    while (i > 0) {
      const p = Math.floor((i - 1) / 2);
      if (!cmp(heap[i], heap[p])) break;
      [heap[i], heap[p]] = [heap[p], heap[i]];
      i = p;
    }
  };

  const pop = () => {
    const top = heap[0];
    const last = heap.pop();
    if (heap.length > 0) {
      heap[0] = last;
      let i = 0;
      while (true) {
        let smallest = i;
        const l = 2 * i + 1, r = 2 * i + 2;
        if (l < heap.length && cmp(heap[l], heap[smallest])) smallest = l;
        if (r < heap.length && cmp(heap[r], heap[smallest])) smallest = r;
        if (smallest === i) break;
        [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
        i = smallest;
      }
    }
    return top;
  };

  const visited = new Set();
  while (heap.length) {
    const [effort, row, col] = pop();
    if (visited.has(`${row},${col}`)) continue;
    visited.add(`${row},${col}`);

    if (row === rows - 1 && col === cols - 1) return effort;

    for (const [dr, dc] of directions) {
      const nr = row + dr, nc = col + dc;
      if (nr < 0 || nr >= rows || nc < 0 || nc >= cols || visited.has(`${nr},${nc}`)) continue;
      push([Math.max(effort, Math.abs(heights[row][col] - heights[nr][nc])), nr, nc]);
    }
  }
};