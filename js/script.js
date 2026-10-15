const headerBtn = document.querySelector(".header__menu-btn");
const menuWrapper = document.querySelector(".header__menu");
const closeBtn = document.querySelector(".header__menu-close");

const setMenu = (open) => {
  menuWrapper.classList.toggle("header__menu--open", open);
  headerBtn.setAttribute("aria-expanded", String(open));
};

headerBtn.addEventListener("click", () => {
  setMenu(!menuWrapper.classList.contains("header__menu--open"));
});

closeBtn.addEventListener("click", () => setMenu(false));

document.addEventListener("click", (event) => {
  if (!menuWrapper.contains(event.target)) {
    setMenu(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenu(false);
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

if (typeof window.intlTelInput === "function") {
  document
    .querySelectorAll('.contact__popup-input[type="tel"]')
    .forEach((input) => {
      const dialog = input.closest("dialog");

      const phone = window.intlTelInput(input, {
        countrySelectorMode: "DROPDOWN",
        countrySearch: true,
        separateDialCode: true,
        strictMode: true,
        allowedNumberTypes: ["MOBILE", "FIXED_LINE"],
        placeholderNumberPolicy: "AGGRESSIVE",
        dropdownParent: dialog || document.body,
        loadUtils: () =>
          import("https://cdn.jsdelivr.net/npm/intl-tel-input@29.5.0/dist/js/utils.js"),
      });

      phone.promise
        .then(() => {
          const validatePhone = () => {
            const invalid = input.value.trim() !== "" && !phone.isValidNumber();

            input.setCustomValidity(
              invalid ? "Please check the phone number and country code." : "",
            );
            input.setAttribute("aria-invalid", String(invalid));
          };

          input.addEventListener("validate", validatePhone);

          input.addEventListener("blur", validatePhone);
          input.addEventListener("countrychange", validatePhone);

          input.addEventListener("input", () => {
            input.setCustomValidity("");
            input.removeAttribute("aria-invalid");
          });
        })
        .catch((error) => {
          console.error("Phone validation could not load:", error);
        });
    });
}

document.querySelectorAll(".contact__popup-form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    form
      .querySelector('input[type="tel"]')
      ?.dispatchEvent(new Event("validate"));

    if (!form.reportValidity()) return;

    const button = form.querySelector(".contact__popup-submit");
    if (button.disabled) return;

    const originalText = button.textContent.trim();
    button.disabled = true;
    button.classList.add("is-loading");
    button.textContent = "Checking…";
    button.setAttribute("aria-busy", "true");
    button.setAttribute("aria-live", "polite");

    window.setTimeout(() => {
      form.reset();

      const phoneInput = form.querySelector('input[type="tel"]');

      if (phoneInput) {
        const phone = window.intlTelInput?.getInstance(phoneInput);
        phone?.setNumber("");
        phoneInput.setCustomValidity("");
        phoneInput.removeAttribute("aria-invalid");
      }
      button.classList.remove("is-loading");
      button.classList.add("is-sent");
      button.textContent = "Sent (demo)";
      button.setAttribute("aria-busy", "false");

      window.setTimeout(() => {
        button.classList.remove("is-sent");
        button.textContent = originalText;
        button.disabled = false;
      }, 3000);
    }, 1000);
  });
});

const achievementCards = document.querySelectorAll(".about__achievements-item");
const achievementDots = document.querySelectorAll(".about__achievements-dot");

achievementDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    achievementCards.forEach((card, cardIndex) => {
      card.hidden = cardIndex !== index;
    });

    achievementDots.forEach((button, buttonIndex) => {
      const isActive = buttonIndex === index;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  });
});
