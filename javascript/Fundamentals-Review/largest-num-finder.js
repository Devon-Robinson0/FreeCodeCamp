function largestOfAll(rootArr) {
  if (rootArr.length <= 0) 
  { return "root array is empty"}

  const newArray = [];

  for (let arr of rootArr) {
    let highestNum = arr[0];
    for (let num of arr) {
      if (typeof num === "number") {
        if (num > highestNum) {
          highestNum = num;
        }
      } else {
        return `found value that is NaN in array ${rootArr.indexOf(arr) + 1}`;
      }
    }
    newArray.push(highestNum);
  }
  return newArray;
}

console.log(largestOfAll([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));