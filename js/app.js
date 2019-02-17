let hamburger = document.querySelector(".nav__ham");
let menu = document.querySelector(".nav__bar");

hamburger.addEventListener("click", function() {
  menu.classList.toggle("hidden");
});
