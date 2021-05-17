// Small function that toggles between a hamberger and large device menu depending on screen size.
// To accomplish this two lines of html were required as well as several lines of CSS.

const hamburger = document.getElementById("nav-hamburger");
const largeDevice = document.getElementById("nav-largeDevice");

hamburger.addEventListener("click", () => {
    largeDevice.classList.toggle("show");
});