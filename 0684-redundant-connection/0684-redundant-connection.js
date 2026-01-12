/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
  let graph = {};
  for (let [u, v] of edges) {
    if (!graph[u]) graph[u] = [];
    if (!graph[v]) graph[v] = [];
    if (hasPath(graph, u, v)) return [u, v];
    graph[u].push(v);
    graph[v].push(u);
  }

  function hasPath(graph, source, destination) {
    let queue = [source];
    let visited = new Set([source]);
    while (queue.length) {
      let node = queue.shift();
      if (node === destination) return true;
      for (let neigh of graph[node]) {
        if (!visited.has(neigh)) {
          queue.push(neigh);
          visited.add(neigh);
        }
      }
    }
    return false;
  }
};