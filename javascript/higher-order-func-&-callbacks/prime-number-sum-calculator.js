function sumPrimes(num) {
  if (num < 2) { return 0 }
  let sum = 0;

  outer:
  for (let i = 2; i <= num; i++) {
    for (let k = 1; k < i; k++) {
      if (k !== 1) {
        if (i % k === 0 ) {
          continue outer;
        }
      }
    }
    sum += i;
  }
  return sum;
}

console.log(sumPrimes(5));