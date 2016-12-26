"use strict";

document.addEventListener("DOMContentLoaded", function (event) {
  //#Menu

  var hamburgerBtn = document.querySelector(".hamburger-btn");
  var menu = document.querySelector(".menu-items");
  var menuLink = document.querySelectorAll(".menu-link");

  if (!menu.classList.contains("menu-items-js")) {
    menu.classList.add("menu-items-js");
  }

  if (menu.classList.contains("menu-items-open")) {
    menu.classList.remove("menu-items-open");
  }

  if (hamburgerBtn.classList.contains("hamburger-btn-cross")) {
    hamburgerBtn.classList.remove("hamburger-btn-cross");
  }

  hamburgerBtn.addEventListener("click", function (event) {
    event.preventDefault();
    hamburgerBtn.classList.toggle("hamburger-btn-cross");
    menu.classList.toggle("menu-items-open");
    for (var i = 0; i < menuLink.length; i++) {
      menuLink[i].classList.add("menu-link-open");
    }
  });

  window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
      hamburgerBtn.classList.remove("hamburger-btn-cross");
      menu.classList.remove("menu-items-open");
      popup.classList.remove("popup-open");
      for (var i = 0; i < menuLink.length; i++) {
        menuLink[i].classList.remove("menu-link-open");
      }
    };
  });

  //#Pinterest

  var pinterestBtn = document.querySelectorAll(".share-btn");
  var pics = document.querySelectorAll(".popular-content-image");
  var popContent = document.querySelector(".popular-content-wrapper");
  var popLink = document.querySelectorAll(".popular-content-link");
  var popText = document.querySelectorAll(".popular-content-link-arrow");

  function showPin(arg) {
    pics[arg].addEventListener("mouseenter", function () {
      if (!pinterestBtn[arg].classList.contains("share-btn-hover")) {
        pinterestBtn[arg].classList.add("share-btn-hover");
      };
    });
  }

  function hidePin(arg) {
    pics[arg].addEventListener("mouseleave", function () {
      if (pinterestBtn[arg].classList.contains("share-btn-hover")) {
        pinterestBtn[arg].classList.remove("share-btn-hover");
      };
    });
  }

  function lockPin(arg) {
    pinterestBtn[arg].addEventListener("mouseenter", function () {
      if (!pinterestBtn[arg].classList.contains("share-btn-hover")) {
        pinterestBtn[arg].classList.add("share-btn-hover");
      };
    });
  }

  function releasePin(arg) {
    pinterestBtn[arg].addEventListener("mouseleave", function () {
      if (pinterestBtn[arg].classList.contains("share-btn-hover")) {
        pinterestBtn[arg].classList.remove("share-btn-hover");
      };
    });
  }

  //##Change attributes for Buttons

  function setLinkAttr(arg) {
    var title = popLink[arg].innerHTML;
    var text = popText[arg].innerHTML;
    var desc = title + "\r\n" + text;
    var mediaLink = document.location.href + "/" + pics[arg].getAttribute("src");
    var url = popLink[arg].getAttribute("href");

    function setProp(attr, value) {
      if (!pinterestBtn[arg].hasAttribute(attr)) {
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

  for (var i = 0; i < pics.length; i++) {
    showPin(i);
    hidePin(i);
    lockPin(i);
    releasePin(i);
    setLinkAttr(i);
  };

  //#Search

  var popup = document.querySelector(".popup");
  var searchBtn = document.querySelector(".menu-search-btn");
  var searchLink = document.querySelector(".main-message-link");

  function openSearch() {
    event.preventDefault();
    if (!popup.classList.contains("popup-open")) {
      popup.classList.add("popup-open");
    }
  }

  searchBtn.addEventListener("click", function (event) {
    openSearch(event);
  });

  searchLink.addEventListener("click", function (event) {
    openSearch(event);
  });

  popup.addEventListener("click", function (event) {
    event.preventDefault();
    if (event.target.classList.contains("popup-open")) {
      popup.classList.remove("popup-open");
    }
  });

  //#Swiper init

  var mySwiper = new Swiper(".swiper-container", {
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 17,
    centeredSlides: true,
    autoplay: 2500,
    autoplayDisableOnInteraction: true,
    loop: true
  });

  //##Mediaqueries for swiper

  if (matchMedia) {
    var mq = window.matchMedia("(min-width: 768px)");
    mq.addListener(WidthChange);
    WidthChange(mq);
  }

  function WidthChange(mq) {
    if (mq.matches) {
      mySwiper.destroy(true, true);
    }
  }

  if (matchMedia) {
    var mqmax = window.matchMedia("(max-width: 767px)");
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
        loop: true
      });
    }
  }
});
//# sourceMappingURL=app.js.map
