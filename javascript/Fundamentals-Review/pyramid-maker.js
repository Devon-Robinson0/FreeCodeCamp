function pyramid(char, num, bool) {
  let pyramidString = '\n';
  const space = ' ';
  const split = '\n';

  
let totalChar = 1;

  for (let i = 0; i < num; i++) {
    let numOfSpaces = 0;
    if (bool === true) {
      numOfSpaces = 0 + i;
      totalChar = (2 * num) - 1 - (2*i);
    } else {
      numOfSpaces = (num - 1) - i;
    }
    
    const layer = space.repeat(numOfSpaces) + char.repeat(totalChar) + split;  
    pyramidString += layer;

    if (bool == true) {
      totalChar -= 2;
    } else {
      totalChar += 2;
    }
  }

  return pyramidString;
}
console.log(pyramid('o', 4, true))