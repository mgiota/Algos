class UF {
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
        console.log(i, '!!!i')
        this.ids[i] = qid;
      }
    }
  }
}

export default UF;
