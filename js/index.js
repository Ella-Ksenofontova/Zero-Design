const menuButton = document.querySelector(".header__menu-button");
const mobileMenu = document.querySelector(".mobile-menu");

if (menuButton && mobileMenu) {
  menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("header__menu-button_open");
    mobileMenu.classList.toggle("mobile-menu_open");
    const menuButtonLabel = menuButton.firstElementChild;
    if (menuButtonLabel.textContent === "Open menu") {
      menuButtonLabel.textContent = "Close menu";
      mobileMenu.style.maxHeight = `${mobileMenu.scrollHeight + 15}px`;
    } else {
      menuButtonLabel.textContent = "Open menu";
      mobileMenu.style.maxHeight = "0";
    }
  });
}

window.addEventListener("resize", () => {
  if (innerWidth > 576) {
    mobileMenu.hidden = true;
  } else {
    mobileMenu.hidden = false;
  }
})

const subscribeForm = document.querySelector(".subscribe-form");

subscribeForm.addEventListener("submit", event => event.preventDefault())