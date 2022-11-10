const menuButton = document.querySelector(".menu_toggle");
const menu = document.querySelector(".menu_dropdown");
let menuDisplay = getComputedStyle(menu).display;
let menuStyle = menu.style.display;

const toggleMenu = function () {
  if (menu.style.transform === "" || menu.style.transform === "scaleY(0)") {
    menu.style.transform = "scaleY(1)";
  } else if (menu.style.transform === "scaleY(1)") {
    menu.style.transform = "scaleY(0%)";
  }
};

menuButton.addEventListener("click", toggleMenu);
