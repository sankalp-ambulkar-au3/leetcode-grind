
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

this.left = new MinHeap();
this.right = new MinHeap();
};

MedianFinder.prototype.addNum = function(num) {
  if (this.left.size() === 0 || num <= -this.left.peek()) {
    this.left.push(-num);          
  } else {
    this.right.push(num);          
  }

  if (this.left.size() > this.right.size() + 1) {
    this.right.push(-this.left.pop());  
  }
  if (this.right.size() > this.left.size()) {
    this.left.push(-this.right.pop());   
  }
};

MedianFinder.prototype.findMedian = function() {
  if (this.left.size() === this.right.size()) {
    return (-this.left.peek() + this.right.peek()) / 2;  
  }
  return -this.left.peek();   
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */