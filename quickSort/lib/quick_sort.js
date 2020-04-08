function quickSort(array) {
  if (array.length <= 1) return array;

  let pivot = array.shift();

  const leftArr = [];
  const rightArr = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivot) {
      leftArr.push(array[i]);
    } else {
      rightArr.push(array[i]);
    }
  }

  const leftSorted = quickSort(leftArr);
  const rightSorted = quickSort(rightArr);

  return [...leftSorted, pivot, ...rightSorted];
}
// if the length of the array is 0 or 1, return the array
// set the pivot to the first element of the array
// remove the first element of the array
// put all values less than the pivot value into an array called left
// put all values greater than the pivot value into an array called right
// call quick sort on left and assign the return value to leftSorted
// call quick sort on right and assign the return value to rightSorted
// return the concatenation of leftSorted, the pivot value, and rightSorted

module.exports = {
  quickSort,
};
