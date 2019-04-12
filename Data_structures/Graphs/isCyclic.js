const isCyclicUntil = (graph, v, visited, parent) => {
  visited[v] = true;

  graph.adj(v).forEach(i => {
    if (visited[i] === false && isCyclicUntil(graph, i, visited, v)) {
      return true;
    } else if (parent !== i) {
      return true;
    }
  });

  return false;
}

const isCyclic = (graph) => {
  const visited = Array.from(Array(graph.numOfVertices), () => false);

  for (let v = 0; v < graph.numOfVertices; v++) {
    if (visited[v] === false) {
      if (isCyclicUntil(graph, v, visited, -1)) {
        return true;
      }
    }
  }

  return false;
}
