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

const consultationBtn = document.querySelector(".service__entry-btn");
const contactPopup = document.querySelector("#contact-popup");
const contactCloseBtn = document.querySelector(".contact__popup-close");

if (consultationBtn && contactPopup && contactCloseBtn) {
  consultationBtn.addEventListener("click", () => {
    contactPopup.showModal();
  });

  contactCloseBtn.addEventListener("click", () => {
    contactPopup.close();
  });
}
