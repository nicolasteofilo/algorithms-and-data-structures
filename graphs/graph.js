class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertexName) {
    if (!this.adjacencyList[vertexName]) this.adjacencyList[vertexName] = [];
  }
}

const g = new Graph();
g.addVertex("Harry");
g.addVertex("Hermione");
g.addVertex("Rony");
g.addEdge("Harry", "Rony");
console.log(g.adjacencyList);
