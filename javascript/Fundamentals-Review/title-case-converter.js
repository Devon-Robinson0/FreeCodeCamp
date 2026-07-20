function titleCase(str) {
  const words = str.split(' ');
  const wordsCased = words.map(w => w[0].toUpperCase() + w.slice(1).toLowerCase());
  const wordsJoined = wordsCased.join(' ');

  return wordsJoined;
}
console.log(titleCase("Hello my name is devon"));