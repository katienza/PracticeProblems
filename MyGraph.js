/* DIFFERENCES IN BIG O
* |V| - number of vertices
* |E| - number of edges
*
*   Operation     | Adjacency List | Adjacency Matrix
*   Add Vertex    | O(1)           | O(|V^2|)
*   Add Edge      | O(1)           | O(1)
*   Remove Vertex | O(|V| + |E|)   | O(|V^2|)
*   Remove Edge   | O(|E|)         | O(1)
*   Query         | O(|V| + |E|)   | O(1)
*   Storage       | O(|V| + |E|)   | O(|V^2|)
*/

/* Adjacency List                             vs          Adjacency Matrix
*
*  Can take up less space (in sparse graphs)   |  Takes up more space (in sparse graphs)
*  Faster to iterate over all edges            |  Slower to iterate over all edges
*  Can be slower to lookup specific edges      |  Faster to look up specific edge
*/

/* UNIDIRECTED GRAPH */
class Graph {
  constructor() {
    this.adjacencyList = {}
  }
/* Adding a vertex
*   Write a method called addVertex, which accepts a name of a vertex
*   It should add a key to the adjacency list with the name of the vertex
*   and set its value to be an empty array
*/
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
  }
/* Adding an edge
*   This function should accept two vertices, call them vertex1 and vertex 2
*   The function should find in the adjacency list the key of vertex1
*   and push vertex2 to the array
*   The function should find in the adjacency list the key of vertex2
*   and push vertex1 to the array
*/
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2)
    this.adjacencyList[vertex2].push(vertex1)
  }
/* Removing an edge
*   This function should accept two vertices, call them vertex1 and vertex2
*   The function should reassign the key of vertex1 
*   to be an array that does not contain vertex2
*   The function should reassign the key of vetex2
*   to be an array that does not contain vertex1
*/

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(vertex => vertex !== vertex2)
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(vertex => vertex !== vertex1)
  }
/* Removing a vertex
*   The function should accept a vertex to remove
*   The function should loop as long as there are any other vertices in the adjacency list for that vertex
*   Inside of loop, call removeEdge function with the vertex we are removing
*   and any values in the adjacency list for that vertex
*   Delete key in adjacency list for that vertex
*/
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop()
      this.removeEdge(vertex, adjacentVertex)
    }

    delete this.adjacencyList[vertex]
  }
/* Depth first search recursive
*   DFS(vertex):
*       If vertex is empty
*             return (base case)
*       Add vertex to results list
*       Mark vertex as visited
*       For each neighbor in vertex's neighbors:
*             if neighbor is not visited:
*                     recursively call DFS on neighbors
*/
  depthFirstRecursive(vertex) {
    const result = []
    const visited = {}

    function dfs(vertex) {
      if (!vertex) return null
      visited[vertex] = true
      result.push(vertex)

      this.adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) return dfs(neighbor)
      })
    }

    dfs(vertex)

    return result
  }
/* Depth first search iterative
*   DFS-iterative(start):
*       let S be a stack
*       S.push(start)
*       While S is not empty
*             vertex = S.pop()
*             if vertex is not labeled as visited:
*                 visit vertex (and add to result list)
*                 label vertex as visited
*                 for each of vertex's neighbors, N do
*                       S.push(N)
*/
  depthFirstIterative(start) {
    const stack = [start]
    const result = []
    const visited = {}

    visited[start] = true

    while (stack.length) {
      let currentVertex = stack.pop()

      result.push(currentVertex)

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true

          stack.push(neighbor)
        }
      })
    }

    return result
  }
/* Breadth first search - prioritizes visiting neighbors at a given depth before moving to next depth
*   bfs(vertex):
*       Create a queue [start]
*       Create visited array
*       Create visited object
*       Mark starting vertex as visited
*       While there is anything in queue
*             Remove first vertex from queue and push it into visited array
*       Loop over each vertex in adjacency list for vertex you are visiting
*             If it is not inside the visited object
*                 Mark it as visited and enqueue that vertex
*       Return visited array nodes
*/
  breadthFirstSearch(start) {
    const queue = [start]
    const result = []
    const visited = {}

    visited[start] = true
    
    while (queue.length) {
      let currentVertex = queue.shift()

      result.push(currentVertex)

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true
          queue.push(neighbor)
        }
      })
    }

    return result
  }
}

/* Graph traversal uses
* Peer to peer networking
* Web crawlers
* Finding 'closest' matches/recommendations
* Shortest path problems
*     GPS navigation
*     Solving mazes
*     AI (shortest path to win the game)
*/