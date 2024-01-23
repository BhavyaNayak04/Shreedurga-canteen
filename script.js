const menuIcon = document.querySelector(".menu-icon");
const dropdownContent = document.querySelector(".dropdown-content");

menuIcon.addEventListener("click", () => {
  if (window.location.pathname === "/index.html" || window.location.pathname === "/") {
    window.location.href = "menu.html";
  } else {
    dropdownContent.classList.toggle("show-dropdown");
  }
});

document.addEventListener("click", (event) => {
  const isClickInside = dropdownContent.contains(event.target) || menuIcon.contains(event.target);

  if (!isClickInside) {
    dropdownContent.classList.remove("show-dropdown");
  }
});
