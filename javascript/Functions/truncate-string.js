function truncateString(string, maxLength) {
  if (string.length > maxLength) {
    const slicedString = string.slice(0, maxLength);
    return slicedString + "...";
  } else {
    return string;
  }
}

console.log(truncateString("Hello my name is Devon", 8));