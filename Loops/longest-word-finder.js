function findLongestWordLength(sentence) {

  const words = sentence.split(" ");
  let longestWord = words[0];

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  return longestWord.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");