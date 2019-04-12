const DFSRecursive = (graph, v, visited = []) => {
  visited.push(v);
  graph.adj(v)
    .filter(w => visited.indexOf(w) < 0)
    .forEach(w => {
      console.log(w, '!!!w')
      DFSRecursive(graph, w, visited)
    });
}

export default DFSRecursive;
