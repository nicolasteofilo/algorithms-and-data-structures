const { Graph, Colors } = require("./graph");
const { Queue } = require("../data-structures/queues");

const BFS = (graph, startVertex, callback) => {
  if (!startVertex) startVertex = this.vertices[0];

  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const color = graph.initializeColor();
  const queue = new Queue();
  const distances = {};
  const predecessors = {};

  queue.enqueue(startVertex);
  vertices.forEach((vertice) => {
    distances[vertice] = 0;
    predecessors[vertice] = null;
  });

  while (queue.size) {
    const u = queue.dequeue();
    const neighbors = adjList[u];
    color[u] = Colors.GREY;
    neighbors.forEach((neighbor) => {
      if (color[neighbor] === Colors.WHITE) {
        color[neighbor] = Colors.GREY;
        distances[neighbor] = distances[u] + 1;
        predecessors[neighbor] = u;
        queue.enqueue(neighbor);
      }
    });

    color[u] = Colors.BLACK;
    if (callback) {
      callback(u);
    }
  }

  return {
    distances,
    predecessors,
  };
};

const findPathBFS = (graph, startVertex, endVertex) => {
  const { predecessors } = BFS(graph, startVertex);
  console.log({ predecessors });
  const path = [];
  let u = endVertex;

  if (predecessors[u] === null) { // if endVertex is not ancestor of startVertex
    return undefined;
  }

  while (u) {
    console.log(u)
    path.unshift(u);
    u = predecessors[u];
  }

  return path;
};

const graph = new Graph();

["A", "B", "C", "D", "E", "F"].forEach((el) => graph.addVertex(el));
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');

findPathBFS(graph, 'A', 'E'); // ['A', 'C', 'E']
