/* BFS */
const existsPath = (graph, n1, n2) => {
  const queue = [];
  const visited = new Set();
  queue.push(n1);
  visited.add(n1);

  while (queue.length > 0) {
    const top = queue.shift();
    const neighbours = graph.adj(top);
    for (let i = 0; i < neighbours.length; i++) {
      if (!visited.has(neighbours[i])) {
        if (n2 === neighbours[i]) {
          return true;
        } else {
          queue.push(neighbours[i]);
          visited.add(neighbours[i]);
        }
      }
    }
  }

  return false;
}

export default existsPath;
