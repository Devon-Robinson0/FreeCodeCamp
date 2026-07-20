const textInput = document.getElementById("text-input");
const charCount = document.getElementById("char-count");
updateCharCount(textInput.value);

textInput.addEventListener('input', (input) => {
  updateCharCount(input.target.value);
})

function updateCharCount(value) {
  let count = value.length;
  if (count >= 50) {
    charCount.classList.add("max");
    textInput.value = value.slice(0, 50);
    count = 50;
  } else if (count < 50) {
    charCount.classList.remove("max");
  }
  charCount.textContent = `Character Count: ${count}/50`;
}