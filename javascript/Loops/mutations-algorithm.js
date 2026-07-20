function mutation(arr) {

  if (arr.length < 2 || arr.length > 2) {
    console.log("Invalid array length, must contain two strings");
    return;
  }

  const word2Split = arr[1].toLowerCase().split("");
  console.log(word2Split);
  for (const char of word2Split) {
    console.log(char);
    if (!arr[0].toLowerCase().includes(char)) {
      console.log(char);
      return false;
    }
  }
  return true;
}

const tempArr = ["Alien", "line"];
console.log(mutation(tempArr));