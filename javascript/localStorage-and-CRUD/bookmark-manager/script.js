const mainSection = document.getElementById("main-section");
const formSection = document.getElementById("form-section");
const addBookmarkBtn = document.getElementById("add-bookmark-button");
const categoryName = document.querySelector(".category-name");
const categoryDropdown = document.getElementById("category-dropdown");
const closeFormBtn = document.getElementById("close-form-button");
const nameInput = document.getElementById("name");
const urlInput = document.getElementById("url");
const bookmarkListSection = document.getElementById("bookmark-list-section");
const viewCategoryBtn = document.getElementById("view-category-button");
const categoryList = document.getElementById("category-list");
const closeListBtn = document.getElementById("close-list-button");
const deleteBookmarkBtn = document.getElementById("delete-bookmark-button");
const addBookmarkBtnForm = document.getElementById("add-bookmark-button-form");

const getBookmarks = () => {
  let bookmarks = [];

  try {
    bookmarks = JSON.parse(localStorage.getItem("bookmarks"));

    if (!Array.isArray(bookmarks) 
      || !bookmarks.every(b => 
        b !== null 
        && typeof b === "object"
        && b.name
        && b.category
        && b.url
      )) {
        return [];
      }
  } catch {
    return [];
  }
  
  return bookmarks;
}

const displayOrCloseForm = () => {
  mainSection.classList.toggle('hidden');
  formSection.classList.toggle('hidden');
}

addBookmarkBtn.addEventListener("click", () => {
  categoryName.innerText = categoryDropdown.value;
  displayOrCloseForm(); 
});

addBookmarkBtnForm.addEventListener('click', () => {
  const bookmarks = getBookmarks();
  localStorage.setItem("bookmarks", 
    JSON.stringify([...bookmarks,
      { 
        name: nameInput.value,  
        category: categoryDropdown.value,
        url: urlInput.value
      }
      ]));

    nameInput.value = "";
    urlInput.value = "";
    showMainSection();
})

const displayOrHideCategory = () => {
  mainSection.classList.toggle("hidden");
  bookmarkListSection.classList.toggle("hidden");
}

viewCategoryBtn.addEventListener("click", () => {
  categoryName.innerText = categoryDropdown.value;
  const bookmarks = getBookmarks();
  const filtered = bookmarks.filter(b => b.category === categoryDropdown.value);

  categoryList.innerHTML = "";

  if (!filtered.length) {
    categoryList.innerHTML = "<p>No Bookmarks Found</p>"
  } else {
    filtered.forEach(b => categoryList.innerHTML += `
      <label for="${b.name}"><a href="${b.url}">${b.name}</a></label>
      <input type="radio" id="${b.name}" value="${b.name}" name="bookmark" />
    `);
  }
  
  displayOrHideCategory();
});

closeFormBtn.addEventListener("click", () => {
  displayOrCloseForm();
  });

closeListBtn.addEventListener('click', () => {
  bookmarkListSection.classList.add("hidden");
  mainSection.classList.remove("hidden");
});

deleteBookmarkBtn.addEventListener('click', () => {
  const selected = document.querySelector('input[type="radio"]:checked');

  const bookmarks = getBookmarks().filter(b => !(b.name === selected.value && b.category === categoryDropdown.value));

  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

  selected.previousElementSibling.remove();
  selected.remove();

  if (bookmarks.filter(b => b.category === categoryDropdown.value).length === 0) {
    categoryList.innerHTML = '<p>No Bookmarks Found</p>';
  }
});

const showMainSection = () => {
  formSection.classList.add("hidden");
  mainSection.classList.remove("hidden");
}