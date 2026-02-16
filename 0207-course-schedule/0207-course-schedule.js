/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
       let graph= Array.from({length:numCourses},()=>[])
   let indegree=Array(numCourses).fill(0)

   for(let [course,prerequisite] of prerequisites)
   {
    graph[prerequisite].push(course)
    indegree[course]++
   }
   let queue=[]
   for(let i=0;i<numCourses;i++)
   {
    if(indegree[i]===0)
    queue.push(i)
   }
   let processed=0 
   while(queue.length)
   {
    let node =queue.shift()
    processed++
    for(let neigh of graph[node])
    {
        indegree[neigh]--
        if(indegree[neigh]===0)
            queue.push(neigh)
    }
   }
   return processed===numCourses
};