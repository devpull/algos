function swap(arr, index1, index2) {
  const tmp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = tmp;
  // return true;
}

function getLastItem(arr) {
  return arr[arr.length - 1];
}

function getFirstItem(arr) {
  return arr[0];
}

function findMinFromPos(data, posIndex = 0) {
  let minIndex = posIndex;

  for (let i = posIndex + 1; i < data.length; i++) {
    if (data[minIndex] > data[i]) {
      minIndex = i;
    }
  }

  return minIndex;
}

module.exports = {
  swap,
  findMinFromPos,
  getLastItem,
  getFirstItem,
};
