// Автоматическое добавление класса "active" для текущей страницы
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("nav a");
  const currentURL = window.location.href;

  links.forEach((link) => {
    link.classList.remove("is-current");
    if (link.href === currentURL) {
      link.classList.add("is-current");
    }
  });
});

// Свайпер
let swiper = new Swiper(".mySwiper", {
  spaceBetween: 50,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  keyboard: true,
});

// Modal window

// const modalWindow = document.querySelector(".modal-window");
// const overlay = document.querySelector(".overlay");
// const btnsCloseModalWindow = document.querySelectorAll(".close-modal");
// const btnOpenModalWindow = document.querySelector(".btn--show-modal-window");

// const openModalWindow = function (e) {
//   e.preventDefault();
//   modalWindow.classList.remove("hidden");
//   overlay.classList.remove("hidden");
// };

// const closeModalWindow = function () {
//   modalWindow.classList.add("hidden");
//   overlay.classList.add("hidden");
// };

// btnsCloseModalWindow.forEach((button) => {
//   button.addEventListener("click", closeModalWindow);
// });

// btnOpenModalWindow.addEventListener("click", openModalWindow);

// overlay.addEventListener("click", closeModalWindow);

// document.addEventListener("keydown", function (e) {
//   if (e.key === "Escape" && !modalWindow.classList.contains("hidden")) {
//     closeModalWindow();
//   }
// });

const modalWindow = document.querySelector(".modal-window");
const overlay = document.querySelector(".overlay");
const btnsCloseModalWindow = document.querySelectorAll(".close-modal");
const btnsOpenModalWindow = document.querySelectorAll(
  ".btn--show-modal-window"
);

console.log(btnsCloseModalWindow);

const openModalWindow = function (e) {
  e.preventDefault();
  modalWindow.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModalWindow = function () {
  modalWindow.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModalWindow.forEach((button) => {
  button.addEventListener("click", openModalWindow);
});

// for (let i = 0; i < btnsOpenModalWindow.length; i++)
//   btnsOpenModalWindow[i].addEventListener('click', openModalWindow);

btnsCloseModalWindow.forEach((button) => {
  button.addEventListener("click", closeModalWindow);
});

overlay.addEventListener("click", closeModalWindow);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modalWindow.classList.contains("hidden")) {
    closeModalWindow();
  }
});

// Появление секции сайта

const allSections = document.querySelectorAll(".section");

if (allSections) {
  const appearanceSection = function (entries, observer) {
    const entry = entries[0];
    if (!entry.isIntersecting) return;
    entry.target.classList.remove("section--hidden");
    observer.unobserve(entry.target);
  };

  const sectionObserver = new IntersectionObserver(appearanceSection, {
    root: null,
    threshold: 0.1,
  });

  allSections.forEach(function (section) {
    sectionObserver.observe(section);
    section.classList.add("section--hidden");
  });
}
// Вкладки
const tabs = document.querySelectorAll(".operations__tab");
const tabContainer = document.querySelector(".operations__tab-container");
const tabContents = document.querySelectorAll(".operations__content");

if (tabs && tabContainer && tabContents) {
  tabContainer.addEventListener("click", function (e) {
    const clickedButton = e.target.closest(".operations__tab");
    // Guard clause
    if (!clickedButton) return;

    // Активная вкладка
    tabs.forEach((tab) => tab.classList.remove("operations__tab--active"));
    clickedButton.classList.add("operations__tab--active");

    // Активный контент
    tabContents.forEach((content) =>
      content.classList.remove("operations__content--active")
    );
    document
      .querySelector(`.operations__content--${clickedButton.dataset.tab}`)
      .classList.add("operations__content--active");
  });
}

// Появление меню в секции about

const sectionAbout = document.querySelector(".about");

if (sectionAbout) {
  const header = document.querySelector("#header");
  const firstItem = document.querySelector("#home");
  const lastItem = document.querySelector("#about");

  const getAboutNav = function (entries) {
    const entry = entries[0];
    if (!entry.isIntersecting) {
      header.classList.add("hidden");
    } else {
      header.classList.remove("hidden");
      firstItem.classList.remove("is-current");
    }
  };

  const observer = new IntersectionObserver(getAboutNav, {
    root: null,
    threshold: 0.1,
  });
  observer.observe(sectionAbout);
}
