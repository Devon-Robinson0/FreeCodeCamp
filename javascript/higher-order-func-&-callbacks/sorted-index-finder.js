function getIndexToIns(array, number) {
  array.sort((a, b) => a - b);
  console.log(array);
  const index = array.findIndex(num => number <= num);

  return index === -1 ? array.length : index;
}
console.log(getIndexToIns([3, 10, 5], 11));