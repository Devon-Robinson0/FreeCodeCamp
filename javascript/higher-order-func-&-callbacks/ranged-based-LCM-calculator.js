function smallestCommons(arr) {
  let [min, max] = arr.sort((a, b) => a - b);

  let result = min;

  for (let i = min + 1; i <= max; i++) {
    let a = result;
    let b = i;

    // inline GCD (Euclidean algorithm)
    while (b !== 0) {
      [a, b] = [b, a % b];
    }

    // update result using LCM formula
    result = (result * i) / a;
  }

  return result;
}

console.log(smallestCommons([1, 5]));   // 60
console.log(smallestCommons([5, 20]));  // 232792560