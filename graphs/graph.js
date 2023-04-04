class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertexName) {
    if (!this.adjacencyList[vertexName]) this.adjacencyList[vertexName] = [];
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    }
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((vertex) => vertex !== vertex2);
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((vertex) => vertex !== vertex1);
    }
  }
}

const g = new Graph();
g.addVertex("Harry");
g.addVertex("Hermione");
g.addVertex("Rony");
g.addEdge("Harry", "Rony");
g.addEdge("Harry", "Hermione");
console.log(g.adjacencyList);
console.log('-------');
g.removeEdge("Harry", "Rony");
console.log(g.adjacencyList);
