function pairElement(string) {
  const pairs = [['A', 'T'], ['C', 'G']];

  const newArray = [];
  for (let char of string) {
    for (let pair of pairs) {
      if (pair.includes(char)) {
        const index = pair.indexOf(char);
        const pairIndex = (1 - index);

        newArray.push([char, pair[pairIndex]]);
      }
    }
  }
  return newArray;
}

console.log(pairElement('ATCG'));