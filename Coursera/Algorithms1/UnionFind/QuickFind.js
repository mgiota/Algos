/* Quick Find */
// Data structure
// Integer array id[] of size N
// Find: p and q are connected if they have the same id
// Connect: change the 1st one to the value of 2nd one
class QuickFind {
  constructor(n) {
    //this.ids = [...Array(n).keys()];
    // this.ids = Array.from(Array(n).keys());
    this.ids = new Array(n);
    for (let i = 0; i < n; i++) {
      this.ids[i] = i;
    }
    // console.log(this.ids)
  }

  areConnected(index1, index2) {
    return this.ids[index1] === this.ids[index2];
  }

  union(p, q) {
    const pid = this.ids[p];
    const qid = this.ids[q];
    console.log(pid, '!!pid');
    console.log(qid, '!!qid')
    for (let i = 0; i < this.ids.length; i++) {
      if (this.ids[i] === pid) {
        this.ids[i] = qid;
      }
    }
  }
}

export default QuickFind;
