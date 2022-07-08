const burgerMenu = document.querySelector(".burger__menu");
const burgerImg = document.getElementById("burger__img");
const menu = document.querySelector(".menu");

const linkEl = document.querySelectorAll(".nav__link");
const featuresMenu = document.querySelector(".features__menu");
const companyMenu = document.querySelector(".company__menu");
const overlay = document.querySelector(".overlay");
const arrow1 = document.getElementById("arrow-1");
const arrow2 = document.getElementById("arrow-2");

// Burger Menu
burgerMenu.addEventListener("click", function () {
  if (!menu.className.includes("active")) {
    menu.classList.add("active");
    burgerImg.src = `images/icon-close-menu.svg`;
    overlay.classList.add("active");
  } else {
    burgerImg.src = `images/icon-menu.svg`;
    menu.classList.remove("active");
    overlay.classList.remove("active");
  }
});

linkEl.forEach((link, index) => {
  link.addEventListener("click", function (e) {
    const item = e.target;
    if (index == 0) {
      featuresMenu.classList.toggle("open");
      arrow1.classList.toggle("active");
    } else if (index == 1) {
      companyMenu.classList.toggle("open");
      arrow2.classList.toggle("active");
    }
  });
});
