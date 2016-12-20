"use strict";
document.addEventListener("DOMContentLoaded", function(event) {

  //#Menu

  let hamburgerBtn = document.querySelector(".hamburger-btn");
  let menu = document.querySelector(".menu-items");
  let menuLink = document.querySelectorAll(".menu-link");

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
    for (let i = 0; i < menuLink.length; i++) {
      menuLink[i].classList.add("menu-link-open");
    }
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      hamburgerBtn.classList.remove("hamburger-btn-cross");
      menu.classList.remove("menu-items-open");
      popup.classList.remove("popup-open");
      for (let i = 0; i < menuLink.length; i++) {
        menuLink[i].classList.remove("menu-link-open");
      }
    };
  });

  //#Pinterest

  let pinterestBtn = document.querySelectorAll(".share-btn");
  let pics = document.querySelectorAll(".popular-content-image");
  let popContent = document.querySelector(".popular-content-wrapper");

  function showPin(arg) {
    pics[arg].addEventListener("mouseenter", function() {
      if (!pinterestBtn[arg].classList.contains("share-btn-hover")) {
        pinterestBtn[arg].classList.add("share-btn-hover");
      };
    });
  }

  function hidePin(arg) {
    pics[arg].addEventListener("mouseleave", function() {
      if (pinterestBtn[arg].classList.contains("share-btn-hover")) {
        pinterestBtn[arg].classList.remove("share-btn-hover");
      };
    });
  }

  function lockPin(arg) {
    pinterestBtn[arg].addEventListener("mouseenter", function() {
      if (!pinterestBtn[arg].classList.contains("share-btn-hover")) {
        pinterestBtn[arg].classList.add("share-btn-hover");
      };
    });
  }

  function releasePin(arg) {
    pinterestBtn[arg].addEventListener("mouseleave", function() {
      if (pinterestBtn[arg].classList.contains("share-btn-hover")) {
        pinterestBtn[arg].classList.remove("share-btn-hover");
      };
    });
  }

  for (let i = 0; i < pics.length; i++) {
    showPin(i);
    hidePin(i);
    lockPin(i);
    releasePin(i);
  };

  //#Search

  let popup = document.querySelector(".popup");
  let searchBtn = document.querySelector(".menu-search-btn");
  let searchLink = document.querySelector(".main-message-link");

  function openSearch() {
    event.preventDefault();
    if (!popup.classList.contains("popup-open")) {
      popup.classList.add("popup-open");
    }
  }

  searchBtn.addEventListener("click", function(event) {
    openSearch(event);
  });

  searchLink.addEventListener("click", function(event) {
    openSearch(event);
  });

  popup.addEventListener("click", function(event) {
    event.preventDefault();
    if (event.target.classList.contains("popup-open")) {
      popup.classList.remove("popup-open");
    }
  });
});
