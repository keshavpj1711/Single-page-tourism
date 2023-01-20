const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-list2");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
