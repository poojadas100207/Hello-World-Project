function binarySearch(sortedValues, target) {
  let low = 0;
  let high = sortedValues.length - 1;

  while (low <= high) {
    const middle = Math.floor((low + high) / 2);
    const value = sortedValues[middle];

    if (value === target) return middle;
    if (value < target) low = middle + 1;
    else high = middle - 1;
  }

  return -1;
}

const scores = [12, 19, 24, 31, 45, 58];
console.log(binarySearch(scores, 31));
console.log(binarySearch(scores, 99));

module.exports = binarySearch;
