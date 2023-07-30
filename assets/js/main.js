function outNum(num, elem, step, time) {
  let documentElement = document.querySelector("#" + elem);
  let n = 0;
  let t = Math.round(time / (num / step));
  let interval = setInterval(() => {
    n = n + step;
    if (n == num) {
      clearInterval(interval);
    }
    documentElement.innerHTML = n;
  }, t);
}

setTimeout(() => {
  outNum(3700, "registration", 50, 1000);
}, 3000);
setTimeout(() => {
  outNum(15, "experience", 1, 1000);
}, 1000);
setTimeout(() => {
  outNum(1600, "completed", 50, 1000);
}, 2000);

window.onscroll = function showHeaders() {
  const header = document.querySelector(".header");
  if (window.scrollY > 40) {
    header.classList.add("showHeader");
  } else {
    header.classList.remove("showHeader");
  }
};
const menu = document.querySelector(".menu-icons");
menu.addEventListener("click", () => {
  const nav = document.querySelector("nav");
  nav.classList.add("open");
  document.querySelector("body").classList.add("overflov");
});
const close = document.querySelector(".close");
close.addEventListener("click", () => {
  const nav = document.querySelector("nav");
  nav.classList.remove("open");
  document.querySelector("body").classList.remove("overflov");
});

const swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 5000,
  },
  loop: true,
  speed: 1000,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const sliderKlients = new Swiper(".slider-klients", {
  autoplay: {
    delay: 2000,
  },
  loop: true,
  speed: 1000,
  slidesPerView: 2,
});
