//https://repl.it/@PanagiotaMitsop/Social-network-connectivity
//https://github.com/eschwabe/interview-practice/blob/master/coursera/algorithms-part1/union-find/SocialNetworkConnectivity.java
import QU from './WeightQUPathCompression';

class Connection {
  constructor(member1, member2, dateTime) {
    this.member1 = member1;
    this.member2 = member2;
    this.dateTime = dateTime;
  }
}

class SocialNetwork {
  constructor(n) {
    this.uf = new QU(n);
    this.numComponents = n;
    this.connections = [];
  }

  addFriendShip(m1, m2, dateTime) {
    let connection = new Connection(m1, m2, dateTime);
    this.connections.push(connection);
  }

  fullyConnected() {
    return this.numComponents === 1;
  }

  findEarliestDate() {
    let result = -1;
    this.connections.forEach(connection => {
      if (!this.uf.areConnected(connection.member1, connection.member2)) {
        this.uf.union(connection.member1, connection.member2);
        this.numComponents = this.numComponents - 1;
        if (this.fullyConnected()) {
          result = connection.dateTime.toISOString().substring(0, 10);
        }
      }
    });

    return result;
  }
}

export default SocialNetwork;
