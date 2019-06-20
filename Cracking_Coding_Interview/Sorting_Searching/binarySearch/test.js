const index = require('./index.js');

describe('#binary Search iterative', () => {
    it('should find the element', () => {
        const arr = [1, 4, 7, 12, 23, 34, 45, 67, 77, 87];
        const position = index.doSearch(arr, 7);
        expect(position).toEqual(2);
    });
});

describe('#binary Search recursively', () => {
    it('should find the element', () => {
        const arr = [1, 4, 7, 12, 23, 34, 45, 67, 77, 87];
        const position = index.doSearchRecursive(arr, 7, 0, arr.length - 1);
        expect(position).toEqual(2);
    });
});