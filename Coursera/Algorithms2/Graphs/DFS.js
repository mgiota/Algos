import Graph from './Graph';

// Recursion
class DFSPaths {
    constructor(graph, s) {
      this.visited = [];
      this.edgeTo = [];
      this.s = s;
      this._dfs(graph, s);
    }

    _dfs(graph, s) {
      this.visited.push(s);
      graph.adj(s)
        .filter(w => this.visited.indexOf(w) < 0)
        .forEach(w => {
          this._dfs(graph, w);
          this.edgeTo[w] = s;
        });
    }

    pathTo(v) {
      let path = v;
      //console.log(this.edgeTo)
      while (this.edgeTo[v] != null) {
        path = this.edgeTo[v] + ' ' + path;
        v = this.edgeTo[v];
      }
      return path !== v ? path : null;
    }

    connectedVertices() {
      return this.visited.filter(v => v !== this.s);
    }

    hasPathTo(v) {
      return this.visited.indexOf(v) > -1 && (v !== this.s);
    }
}

export default DFSPaths;
