function reverseString(str) {
  const arr = str.split('');
  arr.reverse();
  const newStr = arr.join('');
  
  return newStr;
}

reverseString("Hello");