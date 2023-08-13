let canvas = document.querySelector("#canvas");

// 초기 설정
let context = canvas.getContext("2d");

// canvas 사이즈 설정
let window_height = window.innerHeight;
let window_width = window.innerWidth;
canvas.width = window_width;
canvas.height = window_height;

canvas.style.background = "azure";

class Circle {
  constructor(xpos, ypos, radius) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.radius = radius;
  }

  draw(context) {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    context.beginPath();
    context.arc(this.xpos, this.ypos, this.radius, 0, 2 * Math.PI);
    context.strokeStyle = `rgb(${r},${g},${b})`;
    context.stroke();
    context.closePath();
  }
  changeColor() {
    this.draw(context);
  }

  clickCircle(xmouse, ymouse) {
    const distance = Math.sqrt(
      (xmouse - this.xpos) * (xmouse - this.xpos) +
        (ymouse - this.ypos) * (ymouse - this.ypos)
    );
    console.log(distance);
    if (distance < this.radius) {
      this.changeColor();
      return true;
    } else {
      return false;
    }
  }
}

let all_circles = [];

let createCircle = function (circle) {
  circle.draw(context);
};
for (let numbers = 0; numbers < 20; numbers++) {
  let random_x = Math.random() * window_width;
  let random_y = Math.random() * window_height;

  let my_circle = new Circle(random_x, random_y, 50);
  all_circles.push(my_circle);
  // createCircle(all_circles[numbers]);
  createCircle(all_circles[0]);
}

canvas.addEventListener("click", (e) => {
  // const rect = canvas.getBoundingClientRect();
  // const x = e.clientX - rect.left;
  // const y = e.clientY - rect.top;
  const x = e.clientX;
  const y = e.clientY;
  console.log(all_circles[0].clickCircle(x, y));
});
