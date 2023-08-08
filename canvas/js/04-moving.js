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
  constructor(xpos, ypos, radius, color, text, speed) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.radius = radius;
    this.color = color;
    this.text = text;
    this.speed = speed;

    this.dx = 1 * this.speed;
    this.dy = 1 * this.speed;
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

  // 움직임 주기 - 한 장씩 위치 바꿔가며 그리기
  update() {
    // 화면 지우기
    context.clearRect(0, 0, window_width, window_height);

    // 원 그리기
    this.text = hit_counter;
    this.draw(context);

    // 화면 가장자리에 닿으면 방향 바꾸기
    if (this.xpos + this.radius > window_width) {
      this.dx = -this.dx;
      hit_counter++;
    }
    if (this.xpos - this.radius < 0) {
      this.dx = -this.dx;
      hit_counter++;
    }
    if (this.ypos + this.radius > window_height) {
      this.dy = -this.dy;
      hit_counter++;
    }
    if (this.ypos - this.radius < 0) {
      this.dy = -this.dy;
      hit_counter++;
    }

    this.xpos += this.dx;
    this.ypos += this.dy;
  }
}

let hit_counter = 0;
let random_x = Math.random() * window_width;
let random_y = Math.random() * window_height;

let my_circle = new Circle(random_x, random_y, 50, "black", hit_counter, 1);

my_circle.draw(context);

let updateCircle = function () {
  // requestAnimationFrame(callback): window 메서드, 애니메이션 리페인트(업데이트) 전에 이 메서드를 호출해야 함
  // https://developer.mozilla.org/ko/docs/Web/API/window/requestAnimationFrame
  requestAnimationFrame(updateCircle);
  my_circle.update();
};
updateCircle();
