"use strict";

// dom variables
const menuToggle = document.querySelector("#menu-toggle");
const menuOpen = document.querySelector("#menu-open");
const menuClose = document.querySelector("#menu-close");
const menuContainer = document.querySelector("#menu-container");

// todo disable scroll when menu is open

// menu toggle
menuToggle.addEventListener("click", () => {
  const currentToggle = () => {
    return menuToggle.getAttribute("data-toggle") === "true" ? false : true;
  };
  menuToggle.setAttribute("data-toggle", currentToggle());

  if (currentToggle()) {
    menuClose.classList.add("d-none");
    menuOpen.classList.remove("d-none");
    menuContainer.classList.add("d-none");
  }
  if (!currentToggle()) {
    menuOpen.classList.add("d-none");
    menuClose.classList.remove("d-none");
    menuContainer.classList.remove("d-none");
  }
});
