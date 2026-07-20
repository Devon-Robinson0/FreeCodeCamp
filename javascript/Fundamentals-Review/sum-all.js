function sumAll(array) {
  if (array.length !== 2) { console.log('Array must have only 2 numbers')};
  for (let value of array) {
    if (typeof value !== 'number') { console.log('Array must have 2 NUMBERS')};
  }
  if (array[0] > array[1]) {
    const num = array.pop();
    array.unshift(num);
  }
  let sum = 0;
  for (let i = array[0]; i <= array[1]; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumAll([1, 2]));