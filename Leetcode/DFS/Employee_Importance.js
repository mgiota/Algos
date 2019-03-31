class Employee {
  constructor(id, importance, subordinates) {
    this.id = id;
    this.importance = importance;
    this.subordinates = subordinates;
  }
}

const getImportance = (employees, id) => {
  let stack = [];
  let explored = new Set();
  let totalImportance = 0;

  stack.push(id);
  explored.add(id);
  while(stack.length !== 0) {
    let top = stack.pop();
    console.log(top, '!!top')
    const emp = employees
      .find(employee => {
        return employee[0] === top
      })

      totalImportance += emp[1];

      emp[2]
        .filter(subordinate => !explored.has(subordinate))
        .forEach(subordinate => {
          stack.push(subordinate);
          explored.add(subordinate);
        })
  }

  return totalImportance;
}

export default getImportance;
