(() => {
  "use strict";

  function initializeSlider() {
    const slider = document.querySelector("[data-slider]");

    if (!slider) {
      return;
    }
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
