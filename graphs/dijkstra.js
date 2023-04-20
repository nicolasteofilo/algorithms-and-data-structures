const { WeigthGraph } = require('./weighted-graph');

class DijkstraAlgorithm extends WeigthGraph {
  constructor(isDirected = false) {
    super(isDirected);
    this.p = {};
    this.d = {};
  }
}

const dj = new DijkstraAlgorithm(true);
dj.addVertex("0");
dj.addVertex("1");
dj.addVertex("2");
dj.addVertex("3");
dj.addVertex("4");
dj.addVertex("4");
dj.addEdge("0", "1", 10);
dj.addEdge("0", "2", 5);
dj.addEdge("2", "3", 8);
dj.addEdge("2", "1", 3);
dj.addEdge("1", "3", 1);
dj.addEdge("2", "4", 2);
dj.addEdge("3", "4", 4);
dj.addEdge("4", "5", 6);
dj.addEdge("3", "5", 4);

module.exports = { DijkstraAlgorithm };
