let canvas = document.querySelector("#canvas");

// 초기 설정
let context = canvas.getContext("2d");

// canvas 사이즈 설정
let window_height = window.innerHeight;
let window_width = window.innerWidth;
canvas.width = window_width;
canvas.height = window_height;

canvas.style.background = "#ff8";

// 사각형 그리기: fillRect(x, y, w, h)
context.fillRect(0, 0, 100, 100);

// style을 먼저 지정해준 뒤에 도형을 그려야 적용됨
context.fillStyle = "red";
context.fillRect(100, 100, 100, 200);

// path 시작 설정: 새로운 선을 그린다. (선언하지 않으면 이전에 그린 선과 이어짐)
context.beginPath();
// 곡선 그리기: context.arc(x, y, radius(반지름), startAngle(시작 각도), endAngle(마지막 각도), counterclockwise? boolean)
// 원형 그리기: context.arc(x, y, radius, 0, Math.PI *2, false)
// 2PI = 360deg
context.arc(500, 500, 50, 0, 2 * Math.PI, false);
// 선으로 그리기
context.strokeStyle = "blue";
context.lineWidth = 20;
context.stroke();
context.fill();
context.closePath();
