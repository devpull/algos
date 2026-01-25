const { sortByInsert } = require("../src/insertions.js");

const someData = [10, 7, 9, 3, 2];

test('sort by insertions return ordered list', () => {
  expect(sortByInsert(someData)).toEqual([2, 3, 7, 9, 10]);
});


