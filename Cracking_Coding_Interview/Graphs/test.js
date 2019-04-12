import Graph from '../../Data_structures/Graphs/index';
import existsPath from './existsPath';

describe.only('existsPath', () => {
  it('should find a path', () => {
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

    expect(existsPath(graph, "A", "B")).toEqual(true);
  });
});
