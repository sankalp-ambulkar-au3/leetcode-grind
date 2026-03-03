/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */


var leastInterval = function (tasks, n) {
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
    while (i > 0 && this.heap[i] < this.heap[this.parent(i)]) {
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
    if (l < this.size() && this.heap[l] < this.heap[smallest]) smallest = l;
    if (r < this.size() && this.heap[r] < this.heap[smallest]) smallest = r;
    if (smallest !== i) {
      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
      this._bubbleDown(smallest);
    }
  }
}
  let frequency = new Map();
  for (const task of tasks) {
    frequency.set(task, (frequency.get(task) || 0) + 1);
  }
  let heap = new MinHeap();
  for (let count of frequency.values()) {
    heap.push(-count);
  }
  let time=0
  while(heap.size()>0)
  {
    let round =[]
    for(let i=0;i<n+1;i++)
    {   if(heap.size()>0)
        round.push(heap.pop())
    }
    for(const count of round)
    {
        if(-count-1>0)
        heap.push(count+1)
    }
    time+=heap.size()>0?n+1:round.length
  }
  return time
};