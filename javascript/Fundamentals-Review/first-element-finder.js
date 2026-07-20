function findElement(arr, func) {
  for (let value of arr) {
    const bool = func(value);
    if (bool) {
      return value;
    }
  }
    return undefined;
}

console.log(findElement([1, 2, 3], num => num % 2 === 0));