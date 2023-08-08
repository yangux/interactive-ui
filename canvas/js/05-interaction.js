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
    context.fillText(this.text, this.xpos, this.ypos);
    context.lineWidth = 5;
    context.arc(this.xpos, this.ypos, this.radius, 0, 2 * Math.PI);
    context.stroke();
    context.closePath();
  }

  // 움직임 주기 - 한 장씩 위치 바꿔가며 그리기
  update() {
    // 원 그리기
    this.draw(context);

    // 화면 가장자리에 닿으면 방향 바꾸기
    if (this.xpos + this.radius > window_width) {
      this.dx = -this.dx;
    }
    if (this.xpos - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.ypos + this.radius > window_height) {
      this.dy = -this.dy;
    }
    if (this.ypos - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.xpos += this.dx;
    this.ypos += this.dy;
  }
}

// collision detection
// 첫번째 object의 위치: xpos1, ypos1
// 두번째 object의 위치: xpos2, ypos2
let getDistance = function (xpos1, ypos1, xpos2, ypos2) {
  let result = Math.sqrt(
    Math.pow(xpos2 - xpos1, 2) + Math.pow(ypos2 - ypos1, 2)
  );
  return result;
};

let my_circle1 = new Circle(500, 500, 50, "black", "A", 2);
let my_circle2 = new Circle(300, 300, 200, "black", "B", 0);

my_circle1.draw(context);
my_circle2.draw(context);

let updateCircle = function () {
  requestAnimationFrame(updateCircle);

  // 화면 지우기
  context.clearRect(0, 0, window_width, window_height);

  my_circle1.update();
  my_circle2.update();

  // 충돌시 색상 바꾸기
  if (
    getDistance(
      my_circle1.xpos,
      my_circle1.ypos,
      my_circle2.xpos,
      my_circle2.ypos
    ) <
    my_circle1.radius + my_circle2.radius
  ) {
    my_circle2.color = "red";
  }

  // 충돌에서 벗어나면 원래 색상으로 돌아오기
  if (
    getDistance(
      my_circle1.xpos,
      my_circle1.ypos,
      my_circle2.xpos,
      my_circle2.ypos
    ) >=
    my_circle1.radius + my_circle2.radius
  ) {
    my_circle2.color = "black";
  }
};
updateCircle();
