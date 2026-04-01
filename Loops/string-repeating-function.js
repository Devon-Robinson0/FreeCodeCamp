function repeatStringNumTimes(str, num) {
  if (num < 1) {
    return "";
  }
  let string = str;
  for (let i = 1; i < num; i++) {
    string = string + str;
  }

  return string;
}

console.log(repeatStringNumTimes("Hello", 4))