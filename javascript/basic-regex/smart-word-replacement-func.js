const cased = /[A-Z]/

const myReplace = (str, wordToReplace, newWord) => {
  const words = str.split(' ');
  console.log(words);

  const newWords = words.map(w => {
    if (w.toLowerCase() === wordToReplace.toLowerCase()) {
      let replacingWord = newWord.toLowerCase();
      if (w[0].match(cased)) {
        replacingWord = newWord[0].toUpperCase() + newWord.slice(1);
      }
      return replacingWord;
    } else return w;
  });
  console.log(newWords);

  return newWords.join(' ');
}

console.log(myReplace("Hello My Name Is Devon", "name", "age"));