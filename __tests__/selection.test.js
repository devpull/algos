const { selectionSort } = require('../src/selection.js');

const someData = [10, 7, 9, 3, 3, 2];

test('seletion sort', () => {
  expect(selectionSort(someData)).toEqual([2, 3, 3, 7, 9, 10]);
});
