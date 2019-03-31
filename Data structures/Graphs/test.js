import Graph from './index';
import DFS from './DFS';

describe('Graph', () => {
  it("prints graph", () => {
    let graph = new Graph(5);
    const vertices = ["A", "B", "C", "D", "E", "F"];
    vertices.forEach(v => graph.addVertex(v));
    graph.addEdge("B", "A");
    graph.addEdge("B", "C");
    graph.addEdge("A", "D");
    graph.addEdge("A", "E");
    graph.addEdge("C", "E");
    graph.addEdge("C", "F");
    graph.addEdge("D", "E");
    graph.addEdge("E", "F");
    graph.printGraph();
  });

  it.only("prints all vertices connected to s", () => {
    let graph = new Graph(6);
    const vertices = [0, 1, 2, 3, 4, 5];
    vertices.forEach(v => graph.addVertex(v));

    graph.addEdge(0, 2);
    graph.addEdge(0, 1);
    graph.addEdge(2, 5);
    graph.addEdge(3, 4);

    DFS(graph, 0);

  });
})
