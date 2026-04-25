const panel = document.getElementById("panel");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const tapeLayer = document.getElementById("tape-layer");

openBtn.addEventListener("click", () => {
  panel.classList.add("open");
  tapeLayer.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  panel.classList.remove("open");
  tapeLayer.classList.remove("active");
});


const tapes = document.querySelectorAll(".tape-p");
const page = document.getElementById("tape-layer");

let selectedSrc = null;

tapes.forEach(tape => {
  tape.addEventListener("click", () => {
    tapes.forEach(t => t.classList.remove("selected"));
    tape.classList.add("selected");
    selectedSrc = tape.src;
  });
});

page.addEventListener("click", (e) => {
  if (!selectedSrc) return;

  const x = e.clientX;
  const y = e.clientY;

  const newTape = document.createElement("img");
  newTape.src = selectedSrc;
  newTape.classList.add("placed-tape");

  const rotate = Math.random() * 20 - 10;
  newTape.style.left = `${x}px`;
  newTape.style.top = `${y}px`;
  newTape.style.transform = `translate(-50%, -50%) rotate(${rotate}deg)`;

  page.appendChild(newTape);
});