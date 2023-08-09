let canvas = document.querySelector("#canvas");
let context = canvas.getContext("2d");

// canvas 사이즈 설정
let window_height = window.innerHeight;
let window_width = window.innerWidth;
canvas.width = window_width;
canvas.height = window_height;

canvas.style.background = "azure";

// animation variables
let imgSize = 100;
let minY = 0;
let maxY = window_height - imgSize;
let y = minY; // current X-coord
let speedY = 3;
let direction = 1; // 1: rightward, -1: leftward
let x = 0; // Y-coord

// image
let i = new Image();
i.onload = start;
i.src = "./img/jordan.png";
function start() {
  requestAnimationFrame(animate);
}

function animate() {
  // clear canvas
  context.clearRect(0, 0, window_width, window_height);
  // draw
  context.drawImage(i, x, y, 100, 100);
  // update
  y += speedY * direction;
  //  canvas 안에서 움직이기
  if (y < minY) {
    y = minY;
    direction *= -1;
  }
  // if (y > maxY) {
  //   y = maxY;
  //   direction *= -1;
  // }
  if (y >= maxY) {
    y = maxY;
  }

  requestAnimationFrame(animate);
}
