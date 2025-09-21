(function ($) {
  "use strict";

  //Header Search
  if ($(".search-box-outer").length) {
    $(".search-box-outer").on("click", function () {
      $("body").addClass("search-active");
    });
    $(".close-search").on("click", function () {
      $("body").removeClass("search-active");
    });
  }

  // Mobile Menu
  $(".mobile-menu nav").meanmenu({
    meanScreenWidth: "991",
    meanMenuContainer: ".mobile-menu",
    meanMenuOpen: "<span></span> <span></span> <span></span>",
    onePage: false,
  });

  // sticky
  var wind = $(window);
  var sticky = $("#sticky-header");
  wind.on("scroll", function () {
    var scroll = wind.scrollTop();
    if (scroll < 100) {
      sticky.removeClass("sticky");
    } else {
      sticky.addClass("sticky");
    }
  });

  // Loder  //
  $(function () {
    $("body").addClass("loaded");
  });

  // Sidebar

  ("use strict");
  jQuery(document).ready(function (o) {
    0 < o(".offset-side-bar").length &&
      o(".offset-side-bar").on("click", function (e) {
        e.preventDefault(),
          e.stopPropagation(),
          o(".cart-group").addClass("isActive");
      }),
      0 < o(".close-side-widget").length &&
        o(".close-side-widget").on("click", function (e) {
          e.preventDefault(), o(".cart-group").removeClass("isActive");
        }),
      0 < o(".navSidebar-button").length &&
        o(".navSidebar-button").on("click", function (e) {
          e.preventDefault(),
            e.stopPropagation(),
            o(".info-group").addClass("isActive");
        }),
      0 < o(".close-side-widget").length &&
        o(".close-side-widget").on("click", function (e) {
          e.preventDefault(), o(".info-group").removeClass("isActive");
        }),
      o("body").on("click", function (e) {
        o(".info-group").removeClass("isActive"),
          o(".cart-group").removeClass("isActive");
      }),
      o(".xs-sidebar-widget").on("click", function (e) {
        e.stopPropagation();
      }),
      0 < o(".xs-modal-popup").length &&
        o(".xs-modal-popup").magnificPopup({
          type: "inline",
          fixedContentPos: !2,
          fixedBgPos: !0,
          overflowY: "auto",
          closeBtnInside: !2,
          callbacks: {
            beforeOpen: function () {
              this.st.mainClass = "my-mfp-slide-bottom xs-promo-popup";
            },
          },
        });
  });

  ///////////////////////////////
  // Odometer functionality removed

  // //Curser Pointer

  // var curser = document.querySelector(".curser");
  // var curser2 = document.querySelector(".curser2");

  // document.addEventListener("mousemove", function (e) {
  //   curser.style.cssText = curser2.style.cssText =
  //     "left: " + e.clientX + "px; top: " + e.clientY + "px;";
  // });

  // Swiper Active
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    centeredSlides: false,
    slidesPerGroupSkip: 5,
    grabCursor: true,
    spaceBetween: 30,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      600: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 4,
      },

      1920: {
        slidesPerView: 4,
      },
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Team

  var swiper = new Swiper(".team", {
    effect: "coverflow",
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      speed: 1500,
      delay: 2000,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 1,
      },
      600: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
      },

      1920: {
        slidesPerView: 3,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiper = new Swiper(".testimonial", {
    spaceBetween: 30,
    centeredSlides: false,
    autoplay: {
      speed: 2500,
      delay: 3000,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 4,
      },

      1920: {
        slidesPerView: 4,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // Testimonial

  var swiper = new Swiper(".mySwiper6", {
    // effect: "cards",
    grabCursor: true,
    autoplay: {
      speed: 1500,
      delay: 2000,
      pauseOnMouseEnter: true,
    },
  });
  var swiper = new Swiper(".testi", {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: [0, 0, -400],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
  });

  // Brand Slide

  var swiper = new Swiper(".brand", {
    spaceBetween: 30,
    freeMode: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 2,
      },
      600: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
      1400: {
        slidesPerView: 6,
      },
      1920: {
        slidesPerView: 6,
      },
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  $(".venobox").venobox({
    numeratio: true,

    infinigall: true,
  });

  jQuery(document).ready(function ($) {
    "use strict";

    // service Active
    $(".case_list").owlCarousel({
      loop: true,
      autoplay: false,
      autoplayTimeout: 3500,
      smartSpeed: 2000,
      margin: 30,
      dots: false,
      center: false,
      nav: true,
      navText: [
        "<i class='flaticon flaticon-right-arrow''></i>",
        "<i class='flaticon flaticon-right-arrow''></i>",
      ],
      responsive: {
        0: {
          items: 1,
        },

        768: {
          items: 2,
        },
        992: {
          items: 1,
        },
        1200: {
          items: 2,
        },
        1500: {
          items: 2,
        },
        1920: {
          items: 2,
        },
      },
    });

    // service Active
    $(".service-list").owlCarousel({
      loop: true,
      autoplay: false,
      autoplayTimeout: 3500,
      smartSpeed: 2000,
      margin: 30,
      dots: false,
      center: false,
      nav: true,
      navText: [
        "<i class='fa-solid fa-chevron-left''></i>",
        "<i class='fa-solid fa-chevron-right''></i>",
      ],
      responsive: {
        0: {
          items: 1,
        },

        768: {
          items: 2,
        },
        992: {
          items: 2,
        },
        1200: {
          items: 3,
        },
        1500: {
          items: 4,
        },
        1920: {
          items: 4,
        },
      },
    });

    // Testimonial List

    $(".testi-list").owlCarousel({
      loop: true,
      items: 1,
      margin: 30,
      smartSpeed: 450,
      dots: true,
    });

    // service Active
    $(".testi-list2").owlCarousel({
      loop: true,
      autoplay: false,
      autoplayTimeout: 3500,
      smartSpeed: 2000,
      margin: 30,
      dots: false,
      center: false,
      nav: true,
      navText: [
        "<i class='fa-solid fa-chevron-left''></i>",
        "<i class='fa-solid fa-chevron-right''></i>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        992: {
          items: 2,
        },
        1270: {
          items: 2,
        },
        1920: {
          items: 2,
        },
      },
    });

    // service Active
    $(".project-list").owlCarousel({
      loop: true,
      autoplay: false,
      autoplayTimeout: 3500,
      smartSpeed: 2000,
      margin: 30,
      dots: true,
      center: true,
      nav: true,
      navText: [
        "<i class='fa-solid fa-chevron-left''></i>",
        "<i class='fa-solid fa-chevron-right''></i>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        992: {
          items: 3,
        },
        1270: {
          items: 3,
        },
        1920: {
          items: 3,
        },
      },
    });

    // =======< accordion js >========
    // =======< accordion js >========
    jQuery(document).ready(function ($) {
      "use strict";

      $(".accordion > li:eq(0) a").addClass("active").next().slideDown();
      $(".accordion a").on("click", function (j) {
        let dropDown = $(this).closest("li").find("p");

        $(this).closest(".accordion").find("p").not(dropDown).slideUp();

        if ($(this).hasClass("active")) {
          $(this).removeClass("active");
        } else {
          $(this).closest(".accordion").find("a.active").removeClass("active");
          $(this).addClass("active");
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
      });
    });

    jQuery(document).ready(function ($) {
      "use strict";

      $(".accordion2 > li:eq(0) a").addClass("active").next().slideDown();
      $(".accordion2 a").on("click", function (j) {
        let dropDown = $(this).closest("li").find("p");

        $(this).closest(".accordion2").find("p").not(dropDown).slideUp();

        if ($(this).hasClass("active")) {
          $(this).removeClass("active");
        } else {
          $(this).closest(".accordion2").find("a.active").removeClass("active");
          $(this).addClass("active");
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
      });
    });

    //=====< barfiller script >====
    $("#bar1").barfiller({
      duration: 7000,
    });
    $("#bar2").barfiller({
      duration: 7000,
    });
    $("#bar3").barfiller({
      duration: 7000,
    });
    $("#bar4").barfiller({
      duration: 7000,
    });
    $("#bar5").barfiller({
      duration: 7000,
    });

    //======< Custom Tab >======
    $(".tab ul.tabs").addClass("active").find("> li:eq(0)").addClass("current");

    $(".tab ul.tabs li a").on("click", function (g) {
      var tab = $(this).closest(".tab"),
        index = $(this).closest("li").index();

      tab.find("ul.tabs > li").removeClass("current");
      $(this).closest("li").addClass("current");

      tab
        .find(".tab_content")
        .find("div.tabs_item")
        .not("div.tabs_item:eq(" + index + ")")
        .slideUp();
      tab
        .find(".tab_content")
        .find("div.tabs_item:eq(" + index + ")")
        .slideDown();

      g.preventDefault();
    });
  });
})(jQuery);
