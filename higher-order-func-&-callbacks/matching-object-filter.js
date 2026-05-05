function whatIsInAName(collection, source) {
  const pairMatches = [];
  outer:
  for (let obj of collection) {
    for (let prop in source) {
      if (!obj.hasOwnProperty(prop) || obj[prop] !== source[prop]) {
        continue outer;
      }
    }
    pairMatches.push(obj);
  }
  return pairMatches;
}
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }));