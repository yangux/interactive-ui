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
  constructor(xpos, ypos, radius, color, text) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.radius = radius;
    this.color = color;
    this.text = text;
  }

  draw(context) {
    context.beginPath();

    context.strokeStyle = this.color;
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.font = "20px Arial";
    // fillText(text, x, y)
    context.fillText(this.text, this.xpos, this.ypos);
    // strokeText(text, x, y) => lineWidth의 영향을 받음
    // context.strokeText(this.text, this.xpos, this.ypos);

    context.lineWidth = 5;
    context.arc(this.xpos, this.ypos, this.radius, 0, 2 * Math.PI);
    context.stroke();
    context.closePath();
  }
}

let circle_counter = 1;

let all_circles = [];

let createCircle = function (circle) {
  circle.draw(context);
};
for (let numbers = 0; numbers < 10; numbers++) {
  let random_x = Math.random() * window_width;
  let random_y = Math.random() * window_height;

  let my_circle = new Circle(random_x, random_y, 50, "black", circle_counter);
  all_circles.push(my_circle);
  createCircle(all_circles[numbers]);
  circle_counter++;
}
