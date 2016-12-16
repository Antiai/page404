"use strict";
document.addEventListener("DOMContentLoaded", ev => {

  //#Menu

  let hamburgerBtn = document.querySelector(".hamburger-btn");
  let menu = document.querySelector(".menu-items");

  if (!menu.classList.contains("menu-items-js")) {
    menu.classList.add("menu-items-js");
  }

  if (menu.classList.contains("menu-items-open")) {
    menu.classList.remove("menu-items-open");
  }

  if (hamburgerBtn.classList.contains("hamburger-btn-cross")) {
    hamburgerBtn.classList.remove("hamburger-btn-cross");
  }

  hamburgerBtn.addEventListener("click", function(event) {
    event.preventDefault();
    hamburgerBtn.classList.toggle("hamburger-btn-cross");
    menu.classList.toggle("menu-items-open");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      hamburgerBtn.classList.remove("hamburger-btn-cross");
      menu.classList.remove("menu-items-open");
    };
  });

  //#Pinterest

  let pinterestBtn = document.querySelectorAll(".share-btn");
  let images = document.querySelectorAll(".popular-content-image");

  for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("mouseenter", function(event) {
      event.preventDefault();
      if (!pinterestBtn[i].classList.contains("share-btn-hover")) {
        pinterestBtn[i].classList.add("share-btn-hover");
      };
    });
    images[i].addEventListener("mouseleave", function(event) {
      event.preventDefault();
      if (pinterestBtn[i].classList.contains("share-btn-hover")) {
        pinterestBtn[i].classList.remove("share-btn-hover");
      };
    });
    pinterestBtn[i].addEventListener("mouseenter", function() {
      if (!pinterestBtn[i].classList.contains("share-btn-hover")) {
        pinterestBtn[i].classList.add("share-btn-hover");
      };
    });
    pinterestBtn[i].addEventListener("mouseleave", function() {
      if (pinterestBtn[i].classList.contains("share-btn-hover")) {
        pinterestBtn[i].classList.remove("share-btn-hover");
      };
    });
  };
});
