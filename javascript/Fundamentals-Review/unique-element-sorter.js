function uniteUnique(...arrays) {
  if (arrays.length < 2) { console.log('Needs at least 2 arrays') };

const storedValues = [];

  for (let array of arrays) {
    for (let value of array) {
      if (!storedValues.includes(value)) {
        storedValues.push(value);
      }
    }
  }
  return storedValues;
}

console.log(uniteUnique([1, 2, 4], [2, 3, 5]));