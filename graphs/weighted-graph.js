class WeigthGraph {
  constructor(isDirected = false) {
    this.adjList = {}
    this.isDirected = isDirected
  }

  addVertex(vertex) {
    if (!this.adjList[vertex]) {
      this.adjList[vertex] = []
    }
  }

  addEdge(vertex1, vertex2, weigth) {
    this.adjList[vertex1].push({ vertex: vertex2, weigth })
    if (this.isDirected === false) {
      this.adjList[vertex2].push({ vertex: vertex1, weigth })
    }
  }
}

const graph = new WeigthGraph()
graph.addVertex('A')
graph.addVertex('B')
graph.addEdge('A', 'B', 120)