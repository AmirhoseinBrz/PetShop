//for comment slider in index.html
if (typeof Swiper !== "undefined") {
  var swiper = new Swiper(".mySwiperComment", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      360: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      1280: {
        slidesPerView: "auto",
        spaceBetween: 50,
      },
    },
    loop: true,
    centeredSlides: true,
    centeredSlidesBounds: true,
  });

  //for blog slider in index.html
  var swiper = new Swiper(".mySwiperBlog", {
    pagination: {
      el: ".swiper-pagination",
    },

    breakpoints: {
      // when window width is >= 320px
      360: {
        slidesPerView: 1,
        spaceBetween: 20,
      },

      1280: {
        slidesPerView: 3,
        spaceBetween: 40,
        slidesOffsetBefore: 20,
      },
    },
    loop: true,
  });
}

const sliding_menu_elem = document.getElementById("submenu-child");

sliding_menu_elem.addEventListener("click", () => {
  sliding_menu_elem.classList.toggle("active");
});

document.getElementById("menu-mobile-toggle").addEventListener("click", (e) => {
  document.querySelector(".mobile-sliding-menu").classList.toggle("active");
});

document
  .querySelector(".mobile-sliding-menu")
  .addEventListener("click", (e) => {
    const outsideClick = !document
      .querySelector(".mobile-sliding-menu-container")
      .contains(e.target);
    if (outsideClick) {
      document.querySelector(".mobile-sliding-menu").classList.toggle("active");
    }
  });
