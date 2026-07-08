const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");

const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");

testButton.addEventListener("click", () => {
  const regex = new RegExp(regexPattern.value, getFlags());
  
  let matches = [];

  if (getFlags().includes("g")) {
    matches = [...stringToTest.textContent.matchAll(regex)];
  } else {
    matches = [(stringToTest.textContent.match(regex))];

    if (matches[0] === null) {
      matches = [];
    }
  }
  highlightMatches(matches);
  console.log("matches: " + matches.length);
  displayResult(matches);
});

const displayResult = (matches) => {
  if (matches.length === 0) {
    testResult.textContent = "no match";
    return;
  }

  const matchesArr = [];
  for (const match of matches) {
    matchesArr.push(match[0]);
  }

  testResult.textContent = matchesArr.join(', ');
}

const highlightMatches = (matches) => {
  if (stringToTest.textContent === "" || matches.length === 0) return;

  const original = stringToTest.textContent;

  const arr = [];
  arr.push(original.slice(0, matches[0].index));

  for (let i = 0; i < matches.length - 1; i++) {
    arr.push(original.slice(matches[i].index, matches[i + 1].index));
  }

  arr.push(original.slice(matches[matches.length - 1].index));

  for (let i = 1; i <= matches.length; i++) {

    const textToHighlight = arr[i].slice(0, matches[i - 1][0].length);
    const highlightedText = `<span class="highlight">${textToHighlight}</span>`;
    const rest = arr[i].slice(matches[i - 1][0].length);

    arr[i] = highlightedText + rest;
  }
  stringToTest.innerHTML = arr.join('');
}

const getFlags = () => {
  const iValue = caseInsensitiveFlag.checked ? "i" : "";
  const gValue = globalFlag.checked ? "g" : "";

  return iValue + gValue;
};
