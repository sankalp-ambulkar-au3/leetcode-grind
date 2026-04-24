/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  let graph = {};
  let indegrees = new Array(numCourses).fill(0);
  for (let [course, prereq] of prerequisites) {
    if (!graph[prereq]) graph[prereq] = [];
    graph[prereq].push(course);
    indegrees[course]++;
  }
  let queue = [];
  let processed = 0;
  for (let i = 0; i < numCourses; i++) {
    if (indegrees[i] === 0) queue.push(i);
  }
  while (queue.length) {
    let course = queue.shift();
    processed++;
    for (let neigh of graph[course] || []) {
      indegrees[neigh]--;

      if (indegrees[neigh] === 0) queue.push(neigh);
    }
  }
  return processed === numCourses;
};