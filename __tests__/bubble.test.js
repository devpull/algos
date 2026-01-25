const { bubbleSort, cleanBubbleSort } = require("../src/bubble.js");

const someData = [10, 7, 9, 3, 2];

test('buble sort', () => {
  expect(bubbleSort(someData)).toEqual([2, 3, 7, 9, 10]);
});

test('buble sort but cleaner solution', () => {
  expect(cleanBubbleSort(someData)).toEqual([2, 3, 7, 9, 10]);
})
