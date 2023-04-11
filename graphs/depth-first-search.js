const { Graph, Colors } = require('./graph')

const depthFirstSearch = (graph, callback) => {
  const vertices = graph.getVertices()
  const adjList = graph.getAdjList()
  const color = graph.initializeColor()

  const initialDiscoveryTime = {}
  const fineshedDiscoveryTime = {}
  const predecessors = {}
  const time = { count: 0 }

  vertices.forEach((vertex) => {
    initialDiscoveryTime[vertex] = 0
    fineshedDiscoveryTime[vertex] = 0
    predecessors[vertex] = null
  })

  for (let i = 0; i < vertices.length; i++) {
    if (color[vertices[i]] === Colors.WHITE) {
      depthFirstSearchVisit(
        vertices[i],
        color,
        initialDiscoveryTime,
        fineshedDiscoveryTime,
        predecessors,
        time,
        adjList,
        callback
      )
    }
  }

  return {
    initialDiscoveryTime,
    fineshedDiscoveryTime,
    predecessors,
  }
}

const depthFirstSearchVisit = (
  vertex,
  color,
  initialDiscoveryTime,
  fineshedDiscoveryTime,
  predecessors,
  time,
  adjList,
  callback
) => {
  color[vertex] = Colors.GREY
  initialDiscoveryTime[vertex] = ++time.count

  if (callback) {
    callback(vertex)
  }

  const neighbors = adjList[vertex]
  for (let i = 0; i < neighbors.length; i++) {
    const w = neighbors[i]

    if (color[w] === Colors.WHITE) {
      predecessors[w] = vertex
      depthFirstSearchVisit(
        w,
        color,
        initialDiscoveryTime,
        fineshedDiscoveryTime,
        predecessors,
        time,
        adjList,
        callback
      )
    }
  }

  color[vertex] = Colors.BLACK
  fineshedDiscoveryTime[vertex] = ++time.count
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

console.log(
  depthFirstSearch(graph, (vertex) => console.log('Visited: ', vertex))
)