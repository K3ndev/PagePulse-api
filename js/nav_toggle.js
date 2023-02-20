"use strict";

// dom variables
const menuToggle = document.querySelector("#menu-toggle");
const menuOpen = document.querySelector("#menu-open");
const menuClose = document.querySelector("#menu-close");
const menuContainer = document.querySelector("#menu-container");

// todo disable scroll when menu is open

// menu toggle
const currentToggle = () => {
  return menuToggle.getAttribute("data-toggle") === "true" ? false : true;
};
menuToggle.addEventListener("click", () => {
  menuToggle.setAttribute("data-toggle", currentToggle());

  if (currentToggle()) {
    menuClose.classList.add("d-none");
    menuOpen.classList.remove("d-none");
    menuContainer.classList.add("d-none");
    document.body.classList.remove("overflow-hidden");
  }
  if (!currentToggle()) {
    menuOpen.classList.add("d-none");
    menuClose.classList.remove("d-none");
    menuContainer.classList.remove("d-none");
    document.body.classList.add("overflow-hidden");
  }
});

// auto remove the menuContainer
function handleResize() {
  if (window.matchMedia("(min-width: 768px)").matches) {
    menuContainer.classList.add("d-none");
    menuToggle.setAttribute("data-toggle", false);
    menuClose.classList.add("d-none");
    menuOpen.classList.remove("d-none");
    document.body.classList.remove("overflow-hidden");
  }
}

// add event listener for window resize
window.addEventListener("resize", handleResize);
