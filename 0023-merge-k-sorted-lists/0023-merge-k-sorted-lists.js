/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {class MinHeap {
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
    while (i > 0 && this.heap[i][0] < this.heap[this.parent(i)][0]) {
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

  let minHeap = new MinHeap()
  let res = new ListNode();
  let head = res;
  for (let list of lists) {
    if (list) minHeap.push([list.val, list]);
  }

  while (minHeap.size() > 0) {
    let [val, node] = minHeap.pop();
    res.next = node;
    res = res.next;
    if (node.next) minHeap.push([node.next.val, node.next]);
  }
  return head.next;
};