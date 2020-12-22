var projectsSwiper = new Swiper(".projects-container", {
  speed: 300,
  // centeredSlides: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 2,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    900: {
      loopedSlides: 2,
      slidesPerView: 2,
    },
    100: {
      loopedSlides: 1,
      slidesPerView: 1,
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
