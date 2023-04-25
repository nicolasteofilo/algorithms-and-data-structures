const { PriorityQueue } = require("../heaps/priority-queue");

class WeightedGraph {
  constructor(isDirected = false) {
    this.adjList = {};
    this.isDirected = isDirected;
    this.vertices = [];
  }

  addVertex(vertex) {
    if (!this.adjList[vertex]) {
      this.vertices.push(vertex);
      this.adjList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2, weigth) {
    this.adjList[vertex1].push({ node: vertex2, weigth });
    if (this.isDirected === false) {
      this.adjList[vertex2].push({ node: vertex1, weigth });
    }
  }

  dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    const path = [];
    let smallest;

    for (const vertex in this.adjList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    while (!nodes.isEmpty()) {
      // find the node with the smallest distance
      smallest = nodes.dequeue().val;

      if (smallest === finish) {
        let current = finish;
        while (current) {
          path.unshift(current);
          current = previous[current];
        }
        break;
      }

      if (smallest) {
        for (let index in this.adjList[smallest]) {
          const neighbor = this.adjList[smallest][index];
          const node = neighbor.node;
          const weigth = neighbor.weigth;

          // calculate new distance to the neighbor node
          const candidate = distances[smallest] + weigth;
          if (candidate < distances[node]) {
            // update new smallest distance to neighbor and update previous
            distances[node] = candidate;
            previous[node] = smallest;

            nodes.enqueue(node, candidate);
          }
        }
      }
    }

    return { path: path, distance: distances[finish] };
  }
}

//EXAMPLES=====================================================================
var graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

console.log(graph.dijkstra("A", "E"));
module.exports = { WeightedGraph };
