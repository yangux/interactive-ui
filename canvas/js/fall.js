let canvas = document.querySelector("#canvas");

// 초기 설정
let context = canvas.getContext("2d");

// canvas 사이즈 설정
let window_height = window.innerHeight;
let window_width = window.innerWidth;
canvas.width = window_width;
canvas.height = window_height;

canvas.style.background = "#222";

// animation variables
let imgSize = 70;
let radius = imgSize;
let x = imgSize;
let minY = imgSize;
let maxY = window_height - radius;
let y = minY;
let speed = 3;
let direction = 1; // 1: rightward, -1: leftward

let all_circles = [];

class Circle {
  constructor(xpos, ypos, speed, radius, color) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.radius = radius;
    this.color = color;
    this.speed = speed;
    this.velocity = {
      x: Math.random() - 0.5,
      y: Math.random() - 0.5,
    };

    this.dy = 1 * this.speed;
  }
  draw(context) {
    context.beginPath();
    context.arc(this.xpos, this.ypos, this.radius, 0, 2 * Math.PI);
    context.fillStyle = this.color;
    context.fill();
    context.closePath();
  }

  update() {
    if (this.ypos + this.radius >= window_height) {
      this.dy = window_height - this.radius;
    } else {
      this.ypos += this.dy;
    }

    if (this.ypos >= maxY) {
      this.ypos = maxY;
    }
    if (
      this.xpos - this.radius <= 0 ||
      this.xpos + this.radius >= window_width
    ) {
      this.velocity.x = -this.velocity.x;
    }

    this.xpos += this.velocity.x;
    this.ypos += this.velocity.y;
    this.draw(context);
  }
}

for (let i = 0; i < 5; i++) {
  let x = Math.random() * (window_width - radius * 2) + radius;
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  if (i !== 0) {
    for (let j = 0; i < all_circles.length; j++) {
      if (getDistance(x, y, all_circles[j].xpos, y) - radius * 2 < 0) {
        x = Math.random() * (window_width - radius * 2) + radius;
        j = -1;
      }
    }
  }
  let circle = new Circle(x, y, speed, radius, `rgb(${r},${g},${b})`);
  all_circles.push(circle);
}
all_circles.forEach((e) => {
  e.draw(context);
});
console.log(all_circles);

function animate() {
  requestAnimationFrame(animate);
  // clear canvas
  context.clearRect(0, 0, window_width, window_height);
  // draw
  all_circles.forEach((e) => e.update());
}
animate();
