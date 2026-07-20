function chunkArrayInGroups(arr, num) {
  const twoDArray = [];
  for (let i = 0; i < arr.length; i += num) {
    const newArr = arr.slice(i, i + num);
    twoDArray.push(newArr);
  }

  return twoDArray;
}

const tempArr = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(chunkArrayInGroups(tempArr, 2));