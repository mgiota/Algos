import getImportance from './Employee_Importance';

describe('#Employee Importance', () => {
  it('returns total importance', () => {
    let importance = getImportance([[1, 5, [2, 3]], [2, 3, []], [3, 3, []]], 1);
    console.log(importance);
  })
});
