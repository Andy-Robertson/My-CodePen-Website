// Small function that toggles between a hamberger and top bar menu depending on screen size.
// To accomplish this two lines of html were required as well as several lines of CSS.

const hamburger = document.getElementById("nav-hamburger");
const fullSizeBar = document.getElementById("nav-fullSizeBar");

hamburger.addEventListener("click", () => {
    fullSizeBar.classList.toggle("show");
});