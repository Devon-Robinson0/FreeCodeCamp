function confirmEnding(string, targetString) {
  const sliced = string.slice(-targetString.length);

  if (sliced === targetString) {
    return true;
  } else {
    return false;
  }
}

console.log(confirmEnding("Congratulation", "on"));