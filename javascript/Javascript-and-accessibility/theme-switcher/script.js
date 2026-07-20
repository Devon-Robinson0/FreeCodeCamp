const themes = [
  {
    name: "light",
    message: "theme is now in light mode"
  },
  {
    name: "dark",
    message: "theme is now in dark mode"
  }
];

const buttonEl = document.getElementById("theme-switcher-button");

const dropdownEl = document.getElementById("theme-dropdown");

const items = dropdownEl.querySelectorAll("li");

const statusEl = document.getElementById("status");

buttonEl.addEventListener("click", () => {
  dropdownEl.hidden = !dropdownEl.hidden;

  buttonEl.setAttribute("aria-expanded", !dropdownEl.hidden);

  console.log(dropdownEl.getAttribute("aria-expanded"));
});

items.forEach(item => {
  item.addEventListener("click", () => {
    document.body.className = "";

    const className = "theme-" + item.textContent;
    document.body.classList.add(className);

    statusEl.textContent = themes.find(theme => theme.name === item.textContent).message;
  });
});

