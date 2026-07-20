function fearNotLetter(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const startIndex = alphabet.indexOf(str[0]);
  const endIndex = alphabet.indexOf(str[str.length - 1]);
  const alphabetSliced = alphabet.slice(startIndex, endIndex + 1);

  console.log(alphabetSliced);
  for (const letter in alphabetSliced) {
    console.log(letter)
    if (!str.toLowerCase().includes(alphabetSliced[letter])) {
      return alphabetSliced[letter];
    }
  }
}

const alphabet = "abcdefghijklmnopqrstuvwxyz";
console.log(fearNotLetter("stvwx"));