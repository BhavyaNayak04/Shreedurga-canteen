const menuIcon = document.querySelector(".menu-icon");

menuIcon.addEventListener("click", () => {
  dropdownContent.classList.toggle("show-dropdown");
  if (window.location.pathname === "/index.html" || window.location.pathname === "/") {
    window.location.href = "menu.html";
  }
});
document.addEventListener("click", (event) => {
  const isClickInside = dropdownContent.contains(event.target) || menuIcon.contains(event.target);
  if (!isClickInside) {
    dropdownContent.classList.remove("show-dropdown");
  }
});
