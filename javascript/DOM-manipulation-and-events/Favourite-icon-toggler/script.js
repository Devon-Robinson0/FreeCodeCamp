const itemList = document.querySelector(".item-list");
const btns = itemList.querySelectorAll(".favorite-icon");

btns.forEach(b => b.addEventListener("click", () => {
  b.classList.toggle("filled");
  b.innerHTML = b.classList.contains("filled") ? '&#10084;' : '&#9825;'
  console.log(b.outerHTML);
}));