/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    class MinHeap {
  constructor() {
    this.heap = [];
  }

  // Helper: get parent/child indices
  parent(i) {
    return Math.floor((i - 1) / 2);
  }
  left(i) {
    return 2 * i + 1;
  }
  right(i) {
    return 2 * i + 2;
  }

  peek() {
    return this.heap[0];
  } // O(1)
  size() {
    return this.heap.length;
  }

  push(val) {
    this.heap.push(val);
    this._bubbleUp(this.heap.length - 1);
  }

  pop() {
    if (this.size() === 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop(); // move last to root
    this._bubbleDown(0);
    return min;
  }

  _bubbleUp(i) {
    while (
  i > 0 &&
  this.heap[i][0] < this.heap[this.parent(i)][0]
) {
      [this.heap[i], this.heap[this.parent(i)]] = [
        this.heap[this.parent(i)],
        this.heap[i],
      ];
      i = this.parent(i);
    }
  }

  _bubbleDown(i) {
    let smallest = i;
    const l = this.left(i),
      r = this.right(i);
if (
  l < this.size() &&
  this.heap[l][0] < this.heap[smallest][0]
)
  smallest = l;

if (
  r < this.size() &&
  this.heap[r][0] < this.heap[smallest][0]
)
  smallest = r;
    if (smallest !== i) {
      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
      this._bubbleDown(smallest);
    }
  }
}

    let edges={}
    for(let [u,v,w] of times)
    {
        if(!edges[u])
        edges[u]=[]

        edges[u].push([v,w])
    }
    let minHeap = new MinHeap()
    minHeap.push([0,k])
    let t=0
    let visited =new Set()
    while(minHeap.size())
    {
        const[cost,node]=minHeap.pop()
        if(visited.has(node))
            continue
        visited.add(node)
        t=Math.max(t,cost)

        if (!edges[node]) continue;

        for(let [neigh,weight] of edges[node])
        {
            if(!visited.has(neigh))
            {
                minHeap.push([weight+cost,neigh])
            }
        }
    }
    return visited.size==n?t:-1
};