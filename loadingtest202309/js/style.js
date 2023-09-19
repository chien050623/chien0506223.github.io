AOS.init({
  easing: "ease-out-back",
  duration: 800,
  once: true,
});

function startweb() {
  let swiper = new Swiper(".swiper-container", {
    // effect: 'fade',
    // fadeEffect: {
    //   crossFade: true,
    // },
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    navigation: {
      nextEl: ".swiper-button-next.next0",
      prevEl: ".swiper-button-prev.prev0",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  });

  let swiper1 = new Swiper(".swiper-container1", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },

    navigation: {
      nextEl: ".swiper-button-next.next1",
      prevEl: ".swiper-button-prev.prev1",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  });

  let swiper2 = new Swiper(".swiper-container2", {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next.next2",
      prevEl: ".swiper-button-prev.prev2",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 10,
      },
    },
  });

  let swiper3 = new Swiper(".swiper-container3", {
    slidesPerView: 2,
    slidesPerGroup: 2,
    // 輪播一組幾個↑
    spaceBetween: 2,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 2,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 2,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 5,
      },
    },
  });

  let swiper31 = new Swiper(".swiper-container31", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    // 輪播一組幾個↑
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next.next31",
      prevEl: ".swiper-button-prev.prev31",
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 10,
      },
    },
  });

  let swiper35 = new Swiper(".swiper-container35", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    // 輪播一組幾個↑
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 10,
      },
    },
  });

  let swiper4 = new Swiper(".swiper-container4", {
    slidesPerView: 2,
    slidesPerGroup: 2,
    // 輪播一組幾個↑
    spaceBetween: 10,
    // loop: false,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
  });

  let swiper41 = new Swiper(".swiper-container41", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    // 輪播一組幾個↑
    spaceBetween: 5,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 10,
      },
    },
  });

  let swiper42 = new Swiper(".swiper-container42", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    // 輪播一組幾個↑
    spaceBetween: 10,
    loop: false,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
  });

  let swiper43 = new Swiper(".swiper-container43", {
    slidesPerView: 2,
    slidesPerGroup: 2,
    // 輪播一組幾個↑
    spaceBetween: 2,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next.next43",
      prevEl: ".swiper-button-prev.prev43",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 2,
      },
      768: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 2,
      },
      1024: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 2,
      },
    },
  });

  let swiper48 = new Swiper(".swiper-container48", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    // 輪播一組幾個↑
    spaceBetween: 2,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next.next48",
      prevEl: ".swiper-button-prev.prev48",
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 2,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 2,
      },
      1024: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 2,
      },
    },
  });

  let swiper5 = new Swiper(".swiperflip", {
    effect: "flip",
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  let swiper6 = new Swiper(".swiperCover", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: 0,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

  let swiper62 = new Swiper(".swiperCover2", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    coverflowEffect: {
      rotate: 10,
      stretch: 0,
      depth: 100,
      modifier: 5,
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next.Cover2",
      prevEl: ".swiper-button-prev.Cover2",
    },
  });

  let swiper7 = new Swiper(".swiperCube", {
    effect: "cube",
    grabCursor: true,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper8 = new Swiper(".mySwiper-perview", {
    slidesPerView: "auto",
    spaceBetween: 5,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

startweb();

// 側邊導覽
function openNav() {
  document.getElementById("mySidepanel").style.width = "180px";
  document.getElementById("mySidepanel").style.right = "0px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "180px";
  document.getElementById("mySidepanel").style.right = "-180px";
}
//  側邊導覽 end

// 手機選單
/* When the user clicks on the button, 
  toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
// 手機選單end

// 指定畫面滑動 to top
$(".top").click(function () {
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    500
  );
  return false;
});


