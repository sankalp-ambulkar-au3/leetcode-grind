/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start_node
 * @param {number} end_node
 * @return {number}
 */
var maxProbability = function(n, edges, succProb, start_node, end_node) {
     class MinHeap {
    constructor() {
      this.heap = [];
    }

    parent(i) { return Math.floor((i - 1) / 2); }
    left(i) { return 2 * i + 1; }
    right(i) { return 2 * i + 2; }

    size() { return this.heap.length; }

    push(val) {
      this.heap.push(val);
      this._bubbleUp(this.heap.length - 1);
    }

    pop() {
      if (this.size() === 1) return this.heap.pop();
      const min = this.heap[0];
      this.heap[0] = this.heap.pop();
      this._bubbleDown(0);
      return min;
    }

    _bubbleUp(i) {
      while (
        i > 0 &&
        this.heap[i][0] < this.heap[this.parent(i)][0] // ✅ fixed
      ) {
        [this.heap[i], this.heap[this.parent(i)]] =
          [this.heap[this.parent(i)], this.heap[i]];
        i = this.parent(i);
      }
    }

    _bubbleDown(i) {
      let smallest = i;
      const l = this.left(i), r = this.right(i);

      if (l < this.size() && this.heap[l][0] < this.heap[smallest][0])
        smallest = l;

      if (r < this.size() && this.heap[r][0] < this.heap[smallest][0])
        smallest = r;

      if (smallest !== i) {
        [this.heap[i], this.heap[smallest]] =
          [this.heap[smallest], this.heap[i]];
        this._bubbleDown(smallest);
      }
    }
  }

  let graph = {};
  for (let i = 0; i < edges.length; i++) {
    let [u, v] = edges[i];
    let w = succProb[i];
    if (!graph[u]) graph[u] = [];
    if (!graph[v]) graph[v] = [];
    graph[u].push([v, w]);
    graph[v].push([u, w]);
  }
  let minHeap = new MinHeap();
  let prob = new Array(n).fill(0);
  prob[start_node] = 1;
  minHeap.push([-1, start_node]);
  while (minHeap.size()) {
    let [negProb, node] = minHeap.pop();
    let currProb = -negProb;
    if (node === end_node) return currProb;
    for (let [neigh, cost] of (graph[node] || [])) {
      let newProb = cost * currProb;
      if (newProb > prob[neigh]) {
        prob[neigh] = newProb;
        minHeap.push([-newProb, neigh]);
      }
    }
  }
  return 0;
};