//https://www.tutorialspoint.com/Depth-first-search-traversal-in-Javascript

const DFS = (graph, s) => {
  let stack = [];
  let explored = new Set();
  stack.push(s);
  explored.add(s);

  while (stack.length !== 0) {
    let top = stack.pop();

    console.log(top);

    graph.adjList.get(top)
      .filter(n => !explored.has(n))
      .forEach(n => {
        explored.add(n);
        stack.push(n);
      });
  }
}

export default DFS;
