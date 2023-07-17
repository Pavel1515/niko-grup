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
  outNum(15, "experience", 1, 1000);
  outNum(1600, "completed", 50, 1000);
}, 3000);

window.onscroll = function showHeaders() {
  const header = document.querySelector(".header");
  if (window.scrollY > 40) {
    header.classList.add("showHeader");
  } else {
    header.classList.remove("showHeader");
  }
};

const swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 5000,
  },
  loop:true,
  speed:1000,
});
