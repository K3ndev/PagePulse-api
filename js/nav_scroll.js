"use strict";

// dom variables
const header = document.querySelector("#header");
// event listener for header el to blur
document.onscroll = function () {
  const currentScroll =
    window.pageYOffset || document.documentElement.scrollTop;
  let previousScroll = 0;

  if (currentScroll > previousScroll) {
    header.classList.remove("custom-header-none");
    header.classList.add("custom-header");
  } else {
    header.classList.add("custom-header-none");
    header.classList.remove("custom-header");
  }
  previousScroll = currentScroll;
};
