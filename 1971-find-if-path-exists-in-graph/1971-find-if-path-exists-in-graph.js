/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
  let graph = {};
  let visited = {};
  for (let [u, v] of edges) {
    graph[u] = graph[u] || [];
    graph[v] = graph[v] || [];
    graph[u].push(v);
    graph[v].push(u);
  }
  function dfs(node) {
    if (node === destination) return true;
    visited[node] = true;
    for (let nei of graph[node]) {
      if (!visited[nei]) {
        if (dfs(nei))
        return true;
      }
    }
    return false;
  }
  return dfs(source);
};