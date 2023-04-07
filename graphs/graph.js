class Graph {
  constructor(isDirected = false) {
    this.isDirected = isDirected;
    this.vertices = [];
    this.adjacencyList = {};
  }

  addVertex(vertexName) {
    if (!this.vertices.includes(vertexName)) {
      this.vertices.push(vertexName);
      this.adjacencyList[vertexName] = [];
    }
  }

  removeVertex(vertexName) {
    for (const vertex in this.adjacencyList) {
      this.removeEdge(vertexName, vertex);
    }
    delete this.adjacencyList[vertexName];
  }

  addEdge(v, w) {
    if (!this.vertices.includes(v)) {
      this.addVertex(v);
    }
    if (!this.vertices.includes(w)) {
      this.vertices.push(w);
    }
    this.adjacencyList[v].push(w);
    if (!this.isDirected) {
      // if this graph is bidirectional
      this.adjacencyList[w].push(v);
    }
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (vertex) => vertex !== vertex2
      );
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (vertex) => vertex !== vertex1
      );
    }
  }

  dfsRecursive(startVertex) {
    const result = [];
    const viseted = {};

    const helper = (vertex) => {
      if (!vertex) return null;
      viseted[vertex] = true;
      result.push(vertex);
      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!viseted[neighbor]) {
          return helper(neighbor);
        }
      });
    };
    helper(startVertex);

    return result;
  }

  dfsIterative(startVertex) {
    let s = [];
    const result = [];
    const viseted = {};
    let currentVertex;

    s.push(startVertex);
    viseted[startVertex] = true;

    while (s.length) {
      currentVertex = s.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!viseted[neighbor]) {
          viseted[neighbor] = true;
          s.push(neighbor);
        }
      });
    }

    return result;
  }

  getVertices() {
    return this.vertices;
  }

  getAdjList() {
    return this.adjacencyList;
  }
}

const g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log(g.getAdjList());
