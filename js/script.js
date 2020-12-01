var projectsSwiper = new Swiper(".projects-container", {
  speed: 400,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    660: {
      spaceBetween: 38,
      slidesPerView: "auto",
    },
    100: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  },
});

const projectsPrev = document
  .querySelector(".projects-container")
  .querySelector("#projectsPrev");
const projectsNext = document
  .querySelector(".projects-container")
  .querySelector("#projectsNext");

projectsPrev.addEventListener("click", function () {
  projectsSwiper.slidePrev();
});
projectsNext.addEventListener("click", function () {
  projectsSwiper.slideNext();
});
