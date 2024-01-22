const menuIcon = document.getElementById("menuIcon");
const dropdownContent = document.getElementById("dropdownContent");

menuIcon.addEventListener("mouseenter", () => {
  dropdownContent.classList.add("show-dropdown");
});

menuIcon.addEventListener("mouseleave", () => {
  dropdownContent.classList.remove("show-dropdown");
});

dropdownContent.addEventListener("mouseenter", () => {
  dropdownContent.classList.add("show-dropdown");
});

dropdownContent.addEventListener("mouseleave", () => {
  dropdownContent.classList.remove("show-dropdown");
});
