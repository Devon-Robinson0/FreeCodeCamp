function dropElements(arr, func) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      newArray = arr.slice(i);
      break;
    }
  }
  return newArray;
}

console.log(dropElements([1,1,1,2,1,1,1], x => x === 2));