const vowels = /([aeiou]+)/i;
const consonants = /([b-df-hj-np-tv-z]+)/i
console.log("eaallo".match(vowels));

const translatePigLatin = (str) => {
  let pigLatin = str.trim();

  if (pigLatin[0].match(vowels)) {
    pigLatin += "way";
  } else {
    const match = pigLatin.match(consonants);

    pigLatin = pigLatin.slice(match[0].length) + match[0] + "ay";
  }

  return pigLatin;
}

console.log(translatePigLatin("rhythm"));