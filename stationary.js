const tapeDetailPanel = document.getElementById("tape-detail-panel");
const detailCloseBtn = document.getElementById("detailCloseBtn");
const detailImg = document.getElementById("detail-img");
const detailText = document.getElementById("detail-text");

const tapeDescriptions = {
  "tape1.jpg": "A soft pink tape, perfect for decorating journal pages.",
  "tape2.jpg": "A warm decorative tape for adding a cozy scrapbook feeling.",
  "tape3.jpg": "A playful tape that adds color and texture.",
  "tape4.jpg": "A simple tape design for clean page layouts.",
  "tape5.jpg": "A cute tape for travel notes and memories.",
  "tape6.jpg": "A decorative tape that feels handmade and personal."
};

document.querySelectorAll(".tape").forEach((tape) => {
  tape.addEventListener("click", () => {
    detailImg.src = tape.src;
    detailImg.alt = tape.alt;

    const filename = tape.src.split("/").pop();
    detailText.textContent = tapeDescriptions[filename] || "A decorative tape from my stationery collection.";

    tapeDetailPanel.classList.add("open");
  });
});

detailCloseBtn.addEventListener("click", () => {
  tapeDetailPanel.classList.remove("open");
});