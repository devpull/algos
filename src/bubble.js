// buble sort
const { swap } = require('./helpers.js');

function bubbleSort(data) {
  let swapped = false;

  do {
    swapped = false;
    for (let i = data.length - 1; i >= 0; i--) {
      let right = data[i];
      let left = data[i - 1];

      if (left === undefined) {
        break;
      }

      if (left > right) {
        swap(data, i - 1, i);
        swapped = true;
      }
    }
  } while (swapped);
  return data;
}

function cleanBubbleSort(data) {
  let swapped;

  do {
    swapped = false;
    data.forEach((item, index) => {
      if (item > data[index + 1]) {
        swap(data, index, index + 1);
        swapped = true;
      }
    });
  } while (swapped);
  return data;
}

module.exports = {
  bubbleSort,
  cleanBubbleSort,
};
