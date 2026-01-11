/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
  let graph = {};
  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }
  for (let [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }
  let queue = [source];
  const visited = new Set([source]);
  while (queue.length) {
    let node = queue.shift();
    if (node === destination) return true;
    for (let neigh of graph[node]) {
      if (!visited.has(neigh)) {
        visited.add(neigh);
        queue.push(neigh);
      }
    }
  }
  return false;
};