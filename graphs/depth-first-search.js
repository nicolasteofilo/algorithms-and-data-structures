const { Graph, Colors } = require('./graph')

const depthFirstSearch = (graph, callback) => {
  const vertices = graph.getVertices()
  const adjList = graph.getAdjList()
  const color = graph.initializeColor()

  for (let i = 0; i < vertices.length; i++) {
    if (color[vertices[i]] === Colors.WHITE) {
      depthFirstSearchVisit(vertices[i], color, adjList, callback)
    }
  }
}

const depthFirstSearchVisit = (vertex, color, adjList, callback) => {
  color[vertex] = Colors.GREY
  if (callback) {
    callback(vertex)
  }
  const neighbors = adjList[vertex]
  for (let i = 0; i < neighbors.length; i++) {
    const w = neighbors[i]

    if (color[w] === Colors.WHITE) {
      depthFirstSearchVisit(w, color, adjList, callback)
    }
  }

  color[vertex] = Colors.BLACK
}

const graph = new Graph()

const arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']

arr.forEach((el) => graph.addVertex(el))
graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('C', 'D')
graph.addEdge('C', 'G')
graph.addEdge('D', 'G')
graph.addEdge('D', 'H')
graph.addEdge('B', 'E')
graph.addEdge('B', 'F')
graph.addEdge('E', 'I')
depthFirstSearch(graph, (vertex) => console.log('Visited: ', vertex))