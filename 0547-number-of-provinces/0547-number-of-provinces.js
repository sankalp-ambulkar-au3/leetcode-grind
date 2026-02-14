/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  let n = isConnected.length;
  let visited = new Array(n).fill(false);
  let provinces = 0;
  function dfs(city) {
    for (let neigh = 0; neigh < n; neigh++) {
      if (isConnected[city][neigh] === 1 && !visited[neigh]) {
        visited[neigh] = true;
        dfs(neigh);
      }
    }
  }
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      provinces++;
      visited[i] = true;
      dfs(i);
    }
  }
  return provinces;
};
