
var MedianFinder = function() {
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
    this._bubbleUp(this.heap.length - 1); // restore heap property upward
  }

  pop() {
    if (this.size() === 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop(); // move last to root
    this._bubbleDown(0);            // restore heap property downward
    return min;
  }

  // Bubble newly inserted element up until heap property is restored
  _bubbleUp(i) {
    while (i > 0 && this.heap[i] < this.heap[this.parent(i)]) {
      [this.heap[i], this.heap[this.parent(i)]] = [
        this.heap[this.parent(i)],
        this.heap[i],
      ];
      i = this.parent(i);
    }
  }

  // Bubble root element down until heap property is restored
  _bubbleDown(i) {
    let smallest = i;
    const l = this.left(i),
      r = this.right(i);
    if (l < this.size() && this.heap[l] < this.heap[smallest]) smallest = l;
    if (r < this.size() && this.heap[r] < this.heap[smallest]) smallest = r;
    if (smallest !== i) {
      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
      this._bubbleDown(smallest); // recurse until settled
    }
  }
}
  this.right = new MinHeap();
  this.left = new MinHeap();
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  if (this.right.size() === 0 || num <= -this.right.peek())
    this.right.push(-num);
  else this.left.push(num);

  if (this.right.size() > this.left.size() + 1)
    this.left.push(-this.right.pop());
  if (this.left.size() > this.right.size() + 1)
    this.right.push(-this.left.pop());
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  if (this.left.size() === this.right.size())
    return (this.left.peek() + -this.right.peek()) / 2;
  else if (this.left.size() > this.right.size()) return this.left.peek();
  else return -this.right.peek();
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */