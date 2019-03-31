import Graph from './Graph';
import DFSPaths from './DFS';

describe('#Graph', () => {
  test('constructor length', () => {
    let graph = new Graph(5);
    expect(graph.size()).toEqual(5);
  });

  test('Graph maxDegree', () => {
    let graph = new Graph(3);
    graph.addEdge(0, 1);
    graph.addEdge(0, 2);

    expect(graph.maxDegree()).toEqual(2);
  });

  test('Graph degree', () => {
    let graph = new Graph(3);
    graph.addEdge(0, 1);
    graph.addEdge(0, 2);

    expect(graph.degree(2)).toEqual(1);
    expect(graph.degree(1)).toEqual(1);
    expect(graph.degree(0)).toEqual(2);
  });
});

describe.only('#DFSPaths', () => {
  it('returns all vertices connected to s', () => {
    let graph = new Graph(6);
    graph.addEdge(0, 1);
    graph.addEdge(0, 2);
    graph.addEdge(2, 5);
    graph.addEdge(3, 4);

    let paths = new DFSPaths(graph, 0);
    expect(paths.visited.length).toEqual(4)
  });

  it('checks if a vertice is connected to s', () => {
    let graph = new Graph(6);
    graph.addEdge(0, 1);
    graph.addEdge(0, 2);
    graph.addEdge(2, 5);
    graph.addEdge(3, 4);

    let paths = new DFSPaths(graph, 0);
    expect(paths.hasPathTo(1)).toEqual(true);
    expect(paths.hasPathTo(3)).toEqual(false);
    expect(paths.hasPathTo(4)).toEqual(false);
  });

  it('prints all vertices connected to s', () => {
    let graph = new Graph(6);
    graph.addEdge(0, 1);
    graph.addEdge(0, 2);
    graph.addEdge(2, 5);
    graph.addEdge(3, 4);

    let paths = new DFSPaths(graph, 0);
    expect(paths.connectedVertices()).toEqual([1, 2, 5]);
  });

  it('prints all vertices connected to s', () => {
    let graph = new Graph(6);
    graph.addEdge(0, 1);
    graph.addEdge(0, 2);
    graph.addEdge(2, 5);
    graph.addEdge(3, 4);

    let paths = new DFSPaths(graph, 2);
    expect(paths.connectedVertices()).toEqual([0, 1, 5]);
  });

  it.skip('prints all vertices connected to s', () => {
    let graph = new Graph(6);
    graph.addEdge(0, 1);
    graph.addEdge(0, 2);
    graph.addEdge(2, 5);
    graph.addEdge(3, 4);

    let paths = new DFSPaths(graph, 0);
    for (let v = 0; v < graph.size(); v++) {
      if (paths.hasPathTo(v)) {
        console.log(v);
      }
    }
  });

  it.skip('prints all vertices connected to s', () => {
    let graph = new Graph(6);
    graph.addEdge(0, 1);
    graph.addEdge(0, 2);
    graph.addEdge(2, 5);
    graph.addEdge(3, 4);

    let paths = new DFSPaths(graph, 3);
    for (let v = 0; v < graph.size(); v++) {
      if (paths.hasPathTo(v)) {
        console.log(v);
      }
    }
  });

  it('prints a path from s to v', () => {
    let graph = new Graph(6);
    graph.addEdge(0, 1);
    graph.addEdge(0, 2);
    graph.addEdge(2, 5);
    graph.addEdge(3, 4);

    let paths = new DFSPaths(graph, 0);
    const path = paths.pathTo(5);
    expect(path).toEqual("0 2 5");
  });

  it('prints a path from s to v', () => {
    let graph = new Graph(6);
    graph.addEdge(0, 1);
    graph.addEdge(0, 2);
    graph.addEdge(2, 5);
    graph.addEdge(3, 4);

    let paths = new DFSPaths(graph, 2);
    const path = paths.pathTo(1);
    expect(path).toEqual("2 1 0");
  });

  it('prints null if there is no path', () => {
    let graph = new Graph(6);
    graph.addEdge(0, 1);
    graph.addEdge(0, 2);
    graph.addEdge(2, 5);
    graph.addEdge(3, 4);

    let paths = new DFSPaths(graph, 4);
    const path = paths.pathTo(5);
    expect(path).toEqual(null);
  });
});
