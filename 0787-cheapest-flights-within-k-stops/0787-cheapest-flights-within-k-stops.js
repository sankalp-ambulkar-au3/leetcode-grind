/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
      let graph = {};
  for (let [u, v, w] of flights) {
    if (!graph[u]) graph[u] = [];
    graph[u].push([v, w]);
  }
  let queue = [[src, 0]];
  let cost = new Array(n).fill(Infinity);
  cost[src] = 0;
  let stops = 0;
  while (queue.length && stops <= k) {
    let temp = [...cost];
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let [node, currCost] = queue.shift();
      for (let [neigh, weight] of graph[node] ||[]) {
        let newCost = weight + currCost;
        if (newCost < temp[neigh]) {
          temp[neigh] = newCost;
          queue.push([neigh, newCost]);
        }
      }
    }
    cost = temp;
    stops++;
  }
  return cost[dst] === Infinity ? -1 : cost[dst];
};