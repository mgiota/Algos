class Graph {
  constructor(n) {
    this.n = n;
    this.adjList = Array.from(Array(n), () => []); // [ [], [], [], []] -> n = 4
    // this.adj = Array(n);
    // for (let i = 0; i < n; i++) {
    //   this.adj[i] = [];
    // }
  }

  addEdge(v, w) {
    this.adjList[v].push(w);
    this.adjList[w].push(v);
  }

  adj(v) {
      return this.adj[v];
  }

  size() {
    return this.n;
  }

  degree(v) {
    return this.adjList[v].length;
  }

  maxDegree() {
    let max = 0;
    for (let i = 0; i < this.adjList.length; i++) {
      if (this.degree(i) > max) {
        max = this.degree(i);
      }
    }
    return max;
  }
}

export default Graph;
