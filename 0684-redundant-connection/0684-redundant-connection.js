/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
  let graph = {};
  for (let [u, v] of edges) {
    graph[u] = graph[u] || [];
    graph[v] = graph[v] || [];
    if (hasPath(u, v)) return [u, v];

    graph[u].push(v);
    graph[v].push(u);
  }
  function hasPath(source, destination) {
    let visited = {};

    function dfs(node) {
      if (node === destination) return true;
      visited[node] = true;
      for (let neigh of graph[node]) {
        if (!visited[neigh]) {
          if (dfs(neigh)) return true;
        }
      }
      return false;
    }
    return dfs(source);
  }
};