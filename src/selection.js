const { swap, findMinFromPos } = require('./helpers.js');

const someData = [10, 7, 9, 3, 2, 3];

function selectionSort(data) {
  let swapped;
  let minItemIndex = findMinFromPos(data);
  let lastInsertIndex;

  console.log(data);

  if (minItemIndex > 0) {
    swap(data, minItemIndex, 0);
    lastInsertIndex = 1;
    console.log(minItemIndex);
    console.log(data);
  } else {
    lastInsertIndex = 0;
  }

  do {
    swapped = false;
    for (let i = lastInsertIndex; i < data.length; i++) {
      if (minItemIndex != lastInsertIndex) {
        minItemIndex = findMinFromPos(data, i);
        swap(data, minItemIndex, i);
        swapped = true;
      }

      console.log(minItemIndex);
      console.log(data);
      // if min is first item, exiting
      // and returning sorted data
      if (minItemIndex == 1) {
        return data;
      }

    }
  } while (swapped);
}

module.exports = {
  selectionSort
}
