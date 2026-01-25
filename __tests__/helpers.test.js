const { swap, findMinFromPos } = require('../src/helpers.js');

const someData = [10, 7, 9, 3, 2];

test('return min index from array', () => {
  expect(findMinFromPos(someData)).toBe(4);
});

test('swap array items positons', () => {
  expect(swap(someData, 0, 1)).toEqual([7, 10, 9, 3, 2]);
});
