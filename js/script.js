const headerBtn = document.querySelector(".header__menu-btn");
const menuWrapper = document.querySelector(".header__menu");
const closeBtn = document.querySelector(".header__menu-close");

headerBtn.addEventListener("click", () => {
  menuWrapper.classList.toggle("header__menu--open");
});

closeBtn.addEventListener("click", () => {
  menuWrapper.classList.remove("header__menu--open");
});

document.addEventListener("click", (e) => {
  if (!menuWrapper.contains(e.target) && !headerBtn.contains(e.target)) {
    menuWrapper.classList.remove("header__menu--open");
  }
});
