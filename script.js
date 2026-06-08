function moveRandomEl(elm) {
  elm.style.position = "fixed";

  const maxX = window.innerWidth - elm.offsetWidth - 20;
  const maxY = window.innerHeight - elm.offsetHeight - 20;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  elm.style.left = x + "px";
  elm.style.top = y + "px";
}

const moveRandom = document.querySelector("#move-random");

// Desktop
moveRandom.addEventListener("mouseenter", (e) => {
  moveRandomEl(e.target);
});

// Mobile
moveRandom.addEventListener(
  "touchstart",
  (e) => {
    e.preventDefault(); // link click hone se rokega
    moveRandomEl(e.target);
  },
  { passive: false }
);