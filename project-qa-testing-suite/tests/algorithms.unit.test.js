function binarySearch(values, target) {
  let low = 0;
  let high = values.length - 1;
  while (low <= high) {
    const middle = Math.floor((low + high) / 2);
    if (values[middle] === target) return middle;
    if (values[middle] < target) low = middle + 1;
    else high = middle - 1;
  }
  return -1;
}

describe('binarySearch', () => {
  it.each([[[], 4], [[1, 3, 5], 2], [[1, 3, 5], 5]])('finds target %p', (values, target) => {
    expect(binarySearch(values, target)).toBe(values.indexOf(target));
  });
});
