function changeBg() {
  var navbar = document.getElementById("nav-menu");
  var scrollValue = window.scrollY;
  if (scrollValue < 50) {
    navbar.classList.remove("scrolled");
  } else {
    navbar.classList.add("scrolled");
  }
  var btn = document.getElementById("button");
  if (scrollValue < 50) {
    btn.classList.remove("btnclr");
  } else {
    btn.classList.add("btnclr");
  }
  var sign = document.getElementById("signin");
  if (scrollValue < 50) {
    sign.classList.remove("signclr");
  } else {
    sign.classList.add("signclr");
  }
}
window.addEventListener("scroll", changeBg);


const toggle = document.getElementById("toggle");
const navbar = document.getElementById("mob-nav");
const header = document.getElementById("header");

document.onclick = function (e) {
  if (
    e.target.id !== "header" &&
    e.target.id !== "toggle" &&
    e.target.id !== "navbar"
  ) {
    toggle.classList.remove("active");
    navbar.classList.remove("active");
  }
};
toggle.onclick = function () {
  toggle.classList.toggle("active");
  navbar.classList.toggle("active");
};
