let canvas = document.querySelector("#canvas");

// 초기 설정
let context = canvas.getContext("2d");

// canvas 사이즈 설정
let window_height = window.innerHeight;
let window_width = window.innerWidth;
canvas.width = window_width;
canvas.height = window_height;

canvas.style.background = "#111";

// animation variables
let imgSize = 70;
let minY = imgSize;
let maxY = window_height - imgSize;
let y = minY; // current X-coord
let speedY = 3;
let direction = 1; // 1: rightward, -1: leftward
let x = imgSize; // Y-coord

// circle
class Circle {
  constructor(xpos, ypos, radius, color, speed) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.radius = radius;
    this.color = color;
    this.speed = speed;

    this.dy = 1 * this.speed;
  }

  draw(context) {
    context.beginPath();
    context.arc(this.xpos, this.ypos, this.radius, 0, 2 * Math.PI);
    context.fillStyle = this.color;
    context.fill();
    context.strokeStyle = "black";
    context.lineWidth = 3;
    context.stroke();
    context.closePath();
  }

  update() {
    context.clearRect(0, 0, window_width, window_height);
    circle.draw(context);

    if (this.ypos + this.radius >= window_height) {
      this.dy = window_height - this.radius;
    } else {
      this.ypos += this.dy;
    }
  }
}
let circle = new Circle(x, y, imgSize, "white", 3);
circle.draw(context);

// image
let i = new Image();
i.onload = start;
i.src = "./img/jordan.png";
function start() {
  requestAnimationFrame(animate);
}

function animate() {
  requestAnimationFrame(animate);
  // clear canvas
  context.clearRect(0, 0, window_width, window_height);
  // draw
  circle.update();
  context.drawImage(i, x - imgSize / 2, y - imgSize / 2, imgSize, imgSize);
  // // update
  y += speedY * direction;
  //  canvas 안에서 움직이기
  if (y < minY) {
    y = minY;
    direction *= -1;
  }
  if (y >= maxY) {
    y = maxY;
  }
}
animate();
