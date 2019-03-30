import Graph from './Graph';

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
