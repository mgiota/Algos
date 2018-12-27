class UnorderedMaxPQ {
  constructor(capacity) {
    this.pq = new Array(capacity);
    this.N = 0;
  }

  isEmpty() {
    return this.N === 0;
  }

  insert(x) {
    this.pq[this.N] = x;
    this.N++;
  }

  delMax() {
    let max = 0;
    this.pq.forEach((item, i) => {
      if (item > max) {
        max = i;
      }
    });

    const temp = this.pq(max);
    this.pq[max] = this.pq[this.N - 1];
    this.pq[this.N - 1] = temp;

    this.N--;
    return this.pq[max];
  }
}

export default UnorderedMaxPQ;
