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
  let popLink = document.querySelectorAll(".popular-content-link");
  let popText = document.querySelectorAll(".popular-content-link-arrow");

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

  //##Change attributes for Buttons

  function setLinkAttr(arg) {
    let title = popLink[arg].innerHTML;
    let text = popText[arg].innerHTML;
    let desc = title + "\r\n" + text;
    let mediaLink = window.location.origin + "/" + pics[arg].getAttribute("src");
    let url = popLink[arg].getAttribute("href");

    function setProp(attr, value) {
      if (!pinterestBtn[arg].hasAttribute(attr)){
        pinterestBtn[arg].setAttribute(attr, value);
      }
    }

    pinterestBtn[arg].setAttribute("href", "https://www.pinterest.com/pin/create/button/");

    setProp("data-pin-custom", "true");
    setProp("data-pin-do", "buttonPin");
    setProp("data-pin-description", desc);
    setProp("data-pin-media", mediaLink);
    setProp("data-pin-url", url);
  }

  //##Call pinterest functions

  for (let i = 0; i < pics.length; i++) {
    showPin(i);
    hidePin(i);
    lockPin(i);
    releasePin(i);
    setLinkAttr(i);
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

  //#Swiper init

  let mySwiper = new Swiper(".swiper-container", {
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 17,
    centeredSlides: true,
    autoplay: 2500,
    autoplayDisableOnInteraction: true,
    loop: true,
  });

  //##Mediaqueries for swiper

  if (matchMedia) {
    let mq = window.matchMedia( "(min-width: 768px)" );
    mq.addListener(WidthChange);
    WidthChange(mq);
  }

  function WidthChange(mq) {
    if (mq.matches) {
      mySwiper.destroy(true, true);
    }
  }

  if (matchMedia) {
    let mqmax = window.matchMedia( "(max-width: 767px)" );
    mqmax.addListener(WidthChanges);
    WidthChanges(mqmax);
  }

  function WidthChanges(mqmax) {
    if (mqmax.matches) {
      mySwiper = new Swiper(".swiper-container", {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 17,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: true,
        loop: true,
      });
    }
  }
});
