class Graph {
  constructor(numOfVertices) {
    this.numOfVertices = numOfVertices;
    this.adjList = new Map();
  }

  addVertex(v){
    this.adjList.set(v, []);
  }

  addEdge(v, w) {
    this.adjList.get(v).push(w);
    this.adjList.get(w).push(v);
  }

  adj(v) {
    return this.adjList.get(v);
  }

  printGraph() {
    for (let v of this.adjList.keys()) {
      let edges = "";
      for (let e of this.adjList.get(v)) {
        edges += e + " ";
      }
      console.log(`${v} -> ${edges}`)
    }
  }
}

export default Graph;
