const input = document.getElementById("text-input");
const btn = document.getElementById("check-btn");
const result = document.getElementById("result");

const regex = /[^a-z0-9]/gi;

btn.addEventListener("click", () => {
  if (input.value === "") {
    alert("Please input a value");
    return;
  }

  const filtered = filterInput(input.value);
  const reversed = reverse(filtered);

  result.textContent = isPalindrome(filtered, reversed) ? `${input.value} is a palindrome` : `${input.value} is not a palindrome`;
});

const filterInput = (input) => input.replace(regex, "");

const reverse = (input) => {
  const arr = input.split('');
  arr.reverse();
  return arr.join('');
}

const isPalindrome = (original, reversed) => original.toLowerCase() === reversed.toLowerCase(); 

