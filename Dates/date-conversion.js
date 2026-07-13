const currentDate = new Date();
const currentDateFormat = `Current Date and Time: ${currentDate}`;

console.log(currentDateFormat);
console.log(formatDateMMDDYYYY(currentDate))

function formatDateMMDDYYYY(date) {
  const options = {
    timeZone: "UTC",
    year: "numeric",
    month: "numeric",
    day: "numeric"
  }
  const formatted = date.toLocaleDateString("en-US", options);

  return `Formatted Date (MM/DD/YYYY): ${formatted}`;
}

function formatDateLong(date) {
  const options = {
    timeZone: "UTC",
    year: "numeric",
    month: "long",
    day: "numeric"
  }
  const formatted = date.toLocaleDateString("en-US", options);

  return `Formatted Date (Month Day, Year): ${formatted}`;
}