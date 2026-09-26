(() => {
  "use strict";

  function initializeSlider() {
    const slider = document.querySelector("[data-slider]");

    if (!slider) {
      return;
    }

    const slides = Array.from(slider.querySelectorAll("[data-slide]"));
    const previousButton = slider.querySelector("[data-slider-previous]");
    const nextButton = slider.querySelector("[data-slider-next]");
    const currentSlide = slider.querySelector("[data-current-slide]");

    if (
      slides.length === 0 ||
      !previousButton ||
      !nextButton ||
      !currentSlide
    ) {
      return;
    }

    let currentIndex = 0;

    function showSlide(index) {
      currentIndex = (index + slides.length) % slides.length;

      slides.forEach((slide, slideIndex) => {
        const isCurrent = slideIndex === currentIndex;

        slide.hidden = !isCurrent;
        slide.setAttribute("aria-hidden", String(!isCurrent));
      });

      currentSlide.textContent = String(currentIndex + 1);
    }

    previousButton.addEventListener("click", () => {
      showSlide(currentIndex - 1);
    });

    nextButton.addEventListener("click", () => {
      showSlide(currentIndex + 1);
    });

    slider.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showSlide(currentIndex - 1);
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        showSlide(currentIndex + 1);
      }
    });

    slider.classList.add("is-enhanced");
    showSlide(currentIndex);
  }

  function initializeCampusMap() {
    const map = document.querySelector("#campus-map");

    if (!map) {
      return;
    }
  }

  function initializePageTools() {
    initializeSlider();
    initializeCampusMap();
  }

  document.addEventListener("DOMContentLoaded", initializePageTools);
})();
