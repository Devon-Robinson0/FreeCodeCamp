function countdown(n) {
  let arr = [];
  if (n < 1) 
    return [];

  arr = countdown(n - 1);
  arr.unshift(n);
  return arr;
}

console.log(countdown(5));