const html = document.querySelector("html");

function toggleDarkMode() {
  html.classList.toggle("dark-mode");
}

// add on changing checkbox
const checkbox = document.querySelector("input[type=checkbox]");
checkbox.addEventListener("change", toggleDarkMode);
