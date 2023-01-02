var swiper1 = new Swiper(".mainbanner", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".pg1",
    clickable: true,
  },
  navigation: {
    nextEl: ".next1",
    prevEl: ".prev1",
  },
});

var swiper2 = new Swiper(".sec2swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  centeredSlides: true,
});

var swiper3 = new Swiper(".sec3swiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: ".next2",
    prevEl: ".prev2",
  },
  breakpoints: {
    400: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    700: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    900: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});

// const $gift = document.querySelectorAll(".gift"),
//   $giftcon = document.querySelectorAll(".gift_con"),
//   $giftimg = document.querySelectorAll(".giftimg");

// $giftimg.addEventListener("click", function () {
//   $giftcon.classList.toggle("on");
//   $giftimg.classList.toggle("on");
//   $gift.classList.toggle("on");
// });

// $giftcon.addEventListener("click", function () {
//   $giftcon.classList.remove("on");
//   $giftimg.classList.remove("on");
// });

// $gift.forEach(function (item, idx) {
//   item.addEventListener("click", function () {
//     $giftcon[idx].classList.toggle("on");

//     $gift.css("width", "100%");
//   });
// });

const $navBg = document.querySelector(".nav_bg"),
  $topList = document.querySelector(".top_list"),
  $nav = document.querySelector(".nav");

const $Ham = document.querySelector(".ham");
$Ham.addEventListener("click", function () {
  this.classList.toggle("on");
});

$Ham.addEventListener("click", function () {
  $navBg.classList.toggle("on");
  $topList.classList.toggle("on");
});

// 아코디언 ㅠ왜안돼`````````````````````````````````
const $item = document.querySelectorAll(".dec");
const $ft = document.querySelectorAll(".foot_title");

function toggleT() {
  const thisItem = this.parentNode;
  $item.forEach((item) => {
    if (thisItem == item) {
      thisItem.classList.toggle("on");
      return;
    }
    item.classList.remove("on");
  });
}
$ft.forEach(function (elem) {
  elem.addEventListener("click", toggleT);
});
