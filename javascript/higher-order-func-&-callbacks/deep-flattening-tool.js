function steamrollArray(array) {
  const newArray = [];

  for (let value of array) {
    if (Array.isArray(value)) {
      const arr = steamrollArray(value);
      newArray.push(...arr);
    } else {
      newArray.push(value);
    }
  }
  return newArray;
}

console.log(steamrollArray([1, {"foo": "bar"}, [2]]));