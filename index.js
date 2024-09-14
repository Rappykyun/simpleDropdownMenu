const dropdownButton = document.getElementById("dropdown-button");

dropdownButton.addEventListener("click", () => {
  const dropdownMenu = document.getElementById("dropdown-menu");
  dropdownMenu.classList.toggle("hidden");
});

window.addEventListener("click", (event) => {
  const dropdownMenu = document.getElementById("dropdown-menu");
  if (event.target !== dropdownButton && !dropdownMenu.contains(event.target)) {
    dropdownMenu.classList.add("hidden");
  }
});
