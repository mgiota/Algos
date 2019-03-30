import Graph from './Graph';

describe('#Graph', () => {
  test('Graph API', () => {
    let graph = new Graph();
    expect(graph.ids.length).toEqual(5);
  });
});
