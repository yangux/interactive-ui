// Initial Setup
let canvas = document.querySelector("#canvas");
let context = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;
canvas.style.background = "#aa010a";

// Variables
let particlesLength = 3;

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2,
};

let words = [];
addEventListener("keydown", (e) => {
  if (e.key.length === 1) {
    words.push(e.key);
  } else if (e.key === "Backspace") {
    words.pop();
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillText(
      words.join(""),
      canvas.width / 2,
      canvas.height / 2,
      canvas.width
    );
  }
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.font = "30px Arial";
  context.clearRect(0, 0, canvas.width, canvas.height);
  // context.fillText(text, x, y, maxWidth)
  context.fillText(
    words.join(""),
    canvas.width / 2,
    canvas.height / 2,
    canvas.width
  );
});
