import Graph from './index';
import DFS from './DFS';
import LCA from './LCA';
import DFSRecursive from './DFSRecursive';

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// describe('Graph', () => {
//   it("prints graph", () => {
//     let graph = new Graph(5);
//     const vertices = ["A", "B", "C", "D", "E", "F"];
//     vertices.forEach(v => graph.addVertex(v));
//     graph.addEdge("B", "A");
//     graph.addEdge("B", "C");
//     graph.addEdge("A", "D");
//     graph.addEdge("A", "E");
//     graph.addEdge("C", "E");
//     graph.addEdge("C", "F");
//     graph.addEdge("D", "E");
//     graph.addEdge("E", "F");
//     graph.printGraph();
//   });
//
//   it.only("prints all vertices connected to s", () => {
//     let graph = new Graph(6);
//     const vertices = [0, 1, 2, 3, 4, 5];
//     vertices.forEach(v => graph.addVertex(v));
//
//     graph.addEdge(0, 2);
//     graph.addEdge(0, 1);
//     graph.addEdge(2, 5);
//     graph.addEdge(3, 4);
//
//     DFS(graph, 0);
//
//   });
// });

// describe.only('find LCA', () => {
//   it("it should find LCA", () => {
//     const lca = new LCA();
//     lca.root = new Node(1);
//     lca.root.left = new Node(2);
//     lca.root.right = new Node(3);
//     lca.root.left.left = new Node(4);
//     lca.root.left.right = new Node(5);
//     lca.root.right.left = new Node(6);
//     lca.root.right.right = new Node(7);
//
//     console.log(lca.findLCA(4, 5));
//     // console.log(lca.findLCA(4, 6));
//     // console.log(lca.findLCA(2, 4));
//   });
// });

describe('DFSRecursive', () => {
  it('should do DFS recursively', () => {
    const graph = new Graph();
    const vertices = ["A", "B", "C", "D", "E"];
    vertices.forEach(v => graph.addVertex(v));
    graph.addEdge("A", "B");
    graph.addEdge("B", "C");
    graph.addEdge("C", "D");
    graph.addEdge("D", "E");
    DFSRecursive(graph, "A");
  });
});
