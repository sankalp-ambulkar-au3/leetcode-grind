/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
     const graph = Array.from({ length: numCourses }, () => []);
  const indegrees = new Array(numCourses).fill(0);
  let queue = [];
  let result = [];
  for (let [u, v] of prerequisites) {
    graph[v].push(u);
    indegrees[u]++;
  }
  for (let i = 0; i < indegrees.length; i++) {
    if (indegrees[i] === 0) queue.push(i);
  }
  console.log(graph, indegrees);
  while (queue.length) {
    let node = queue.shift();
    result.push(node);
    for (let neigh of graph[node]) {
      indegrees[neigh]--;
      if (indegrees[neigh] === 0) queue.push(neigh);
    }
  }
  return result.length === numCourses ? result : []; 
};