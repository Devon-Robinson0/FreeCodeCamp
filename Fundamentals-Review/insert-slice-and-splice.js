function frankenSplice(arr1, arr2, index) {
  let arrStart = arr2.slice(0, index);
  let arrEnd = arr2.slice(index);
  let newArr = [];
  newArr.push(...arrStart);
  newArr.push(...arr1);
  newArr.push(...arrEnd);
  return newArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1));