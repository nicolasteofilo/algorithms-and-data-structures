const Colors = {
  WHITE: 0,
  GREY: 1,
  BLACK: 2,
};

class Graph {
  constructor(isDirected = false) {
    this.isDirected = isDirected;
    this.vertices = [];
    this.adjList = {};
  }

  addVertex(v) {
    if (!this.vertices.includes(v)) {
      this.vertices.push(v);
      this.adjList[v] = []; // initialize adjacency list with array as well;
    }
  }

  addEdge(a, b) {
    if (!this.adjList[a]) {
      this.addVertex(a);
    }
    if (!this.adjList[b]) {
      this.addVertex(b);
    }
    this.adjList[a].push(b);
    if (this.isDirected !== true) {
      this.adjList[b].push(a);
    }
  }

  getVertices() {
    return this.vertices;
  }

  getAdjList() {
    return this.adjList;
  }

  toString() {
    let s = "";
    for (let i = 0; i < this.vertices.length; i++) {
      s += `${this.vertices[i]} -> `;
      const neighbors = this.adjList[this.vertices[i]];
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

module.exports = { Graph, Colors };
