const year = 2024;

function isLeapYear(num) {
  if (num % 4 === 0) {
    if (num % 100 === 0) {
      if (num % 400 === 0) {
        return `${num} is a leap year.`;
      } else {
        return `${num} is not a leap year.`;
      }
    }
    return `${num} is a leap year.`;
  } else {
    return `${num} is not a leap year.`;
  }
}

const result = isLeapYear(year);
console.log(result);

