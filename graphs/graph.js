const Colors = {
  WHITE: 0,
  GREY: 1,
  BLACK: 2,
};

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

  getVertices() {
    return this.vertices;
  }

  getAdjList() {
    return this.adjacencyList;
  }

  toString() {
    let s = "";
    for (let i = 0; i < this.vertices.length; i++) {
      s += `${this.vertices[i]} ->  `;
      const neighbors = this.adjacencyList[this.vertices[i]];
      for (let j = 0; j < neighbors.length; j++) {
        s += `${neighbors[j]} `;
      }
      s += "\n";
    }
    return s;
  }

  initializeColor() {
    const color = {};
    this.vertices.forEach((vertice) => (color[vertice] = Colors.WHITE));
    return color;
  }
}

module.exports = { Graph };
